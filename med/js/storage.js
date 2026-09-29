/**
 * Data Storage & Local Persistence Manager
 * Handles local modifications, custom cutoff entries, bookmarks (choice list),
 * and JSON/CSV import/export.
 */

const STORAGE_KEYS = {
  CUTOFFS: "neetpg_cutoffs_db_v1",
  WISHLIST: "neetpg_wishlist_choices_v1",
  THEME: "neetpg_theme_v1"
};

const StorageManager = {
  /**
   * Initialize cutoffs from localStorage or default data
   */
  getCutoffs() {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.CUTOFFS);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.warn("Error reading local storage cutoffs, using defaults", e);
    }
    // Fallback to default
    return window.HISTORICAL_CUTOFFS ? [...window.HISTORICAL_CUTOFFS] : [];
  },

  /**
   * Save array of cutoffs
   */
  saveCutoffs(cutoffs) {
    try {
      localStorage.setItem(STORAGE_KEYS.CUTOFFS, JSON.stringify(cutoffs));
      return true;
    } catch (e) {
      console.error("Failed to save cutoffs to localStorage", e);
      return false;
    }
  },

  /**
   * Add a single new cutoff record
   */
  addCutoff(record) {
    const cutoffs = this.getCutoffs();
    const newRecord = {
      id: record.id || `CUSTOM-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      branchCode: record.branchCode || "OTHER",
      branchName: record.branchName,
      branchType: record.branchType || "Clinical",
      college: record.college,
      state: record.state || "All India Quota",
      quota: record.quota || "50% All India Quota",
      year: parseInt(record.year, 10),
      round: record.round || "R1",
      category: record.category || "UR",
      openingRank: parseInt(record.openingRank, 10) || 1,
      closingRank: parseInt(record.closingRank, 10),
      stipend: record.stipend || "Varies",
      bond: record.bond || "Varies",
      isCustom: true,
      addedAt: new Date().toISOString()
    };

    cutoffs.unshift(newRecord);
    this.saveCutoffs(cutoffs);
    return newRecord;
  },

  /**
   * Batch append multiple cutoffs
   */
  batchAddCutoffs(records) {
    const cutoffs = this.getCutoffs();
    let addedCount = 0;

    records.forEach(rec => {
      if (rec.branchName && rec.closingRank && rec.year && rec.category) {
        cutoffs.unshift({
          id: rec.id || `CUSTOM-${Date.now()}-${Math.floor(Math.random() * 10000)}`,
          branchCode: rec.branchCode || "OTHER",
          branchName: rec.branchName,
          branchType: rec.branchType || (rec.branchName.toLowerCase().includes("radio") || rec.branchName.toLowerCase().includes("medicine") || rec.branchName.toLowerCase().includes("surgery") || rec.branchName.toLowerCase().includes("paed") || rec.branchName.toLowerCase().includes("ortho") || rec.branchName.toLowerCase().includes("obg") || rec.branchName.toLowerCase().includes("derma") || rec.branchName.toLowerCase().includes("ophthal") || rec.branchName.toLowerCase().includes("ent") || rec.branchName.toLowerCase().includes("anaesth") || rec.branchName.toLowerCase().includes("psych") || rec.branchName.toLowerCase().includes("emerg") ? "Clinical" : "Non-Clinical"),
          college: rec.college || "Govt Medical College",
          state: rec.state || "All India Quota",
          quota: rec.quota || "50% All India Quota",
          year: parseInt(rec.year, 10),
          round: rec.round || "R1",
          category: rec.category.toUpperCase().trim(),
          openingRank: parseInt(rec.openingRank, 10) || 1,
          closingRank: parseInt(rec.closingRank, 10),
          stipend: rec.stipend || "Varies",
          bond: rec.bond || "Varies",
          isCustom: true
        });
        addedCount++;
      }
    });

    this.saveCutoffs(cutoffs);
    return addedCount;
  },

  /**
   * Delete a cutoff by ID
   */
  deleteCutoff(id) {
    let cutoffs = this.getCutoffs();
    cutoffs = cutoffs.filter(c => c.id !== id);
    this.saveCutoffs(cutoffs);
    return cutoffs;
  },

  /**
   * Reset data to default initial dataset
   */
  resetToDefault() {
    if (window.HISTORICAL_CUTOFFS) {
      this.saveCutoffs([...window.HISTORICAL_CUTOFFS]);
      return [...window.HISTORICAL_CUTOFFS];
    }
    return [];
  },

  /**
   * Wishlist / Choice Preference List management
   */
  getWishlist() {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.WISHLIST);
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      return [];
    }
  },

  toggleWishlist(id) {
    const list = this.getWishlist();
    const index = list.indexOf(id);
    if (index > -1) {
      list.splice(index, 1);
    } else {
      list.push(id);
    }
    localStorage.setItem(STORAGE_KEYS.WISHLIST, JSON.stringify(list));
    return list;
  },

  isWishlisted(id) {
    return this.getWishlist().includes(id);
  },

  clearWishlist() {
    localStorage.removeItem(STORAGE_KEYS.WISHLIST);
  },

  /**
   * Theme management
   */
  getTheme() {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.THEME);
      return stored === 'dark' ? 'dark' : 'light';
    } catch (e) {
      return 'light';
    }
  },

  setTheme(theme) {
    const normalized = theme === 'dark' ? 'dark' : 'light';
    try {
      localStorage.setItem(STORAGE_KEYS.THEME, normalized);
    } catch (e) {
      console.warn('Could not save theme preference', e);
    }

    if (typeof document !== 'undefined' && document.body) {
      document.body.setAttribute('data-theme', normalized);
    }

    return normalized;
  },

  toggleTheme() {
    const nextTheme = this.getTheme() === 'dark' ? 'light' : 'dark';
    return this.setTheme(nextTheme);
  },

  /**
   * CSV Generation & Download
   */
  exportToCSV(records = null) {
    const dataToExport = records || this.getCutoffs();
    const headers = [
      "Branch Name",
      "Branch Type",
      "Institute/College",
      "State",
      "Quota",
      "Year",
      "Round",
      "Category",
      "Opening Rank",
      "Closing Rank",
      "Monthly Stipend",
      "Bond Details"
    ];

    const escapeCsv = (str) => {
      if (str === null || str === undefined) return '""';
      const clean = String(str).replace(/"/g, '""');
      return `"${clean}"`;
    };

    const rows = dataToExport.map(r => [
      escapeCsv(r.branchName),
      escapeCsv(r.branchType),
      escapeCsv(r.college),
      escapeCsv(r.state),
      escapeCsv(r.quota),
      r.year,
      escapeCsv(r.round),
      escapeCsv(r.category),
      r.openingRank,
      r.closingRank,
      escapeCsv(r.stipend),
      escapeCsv(r.bond)
    ]);

    const csvContent = [headers.join(","), ...rows.map(row => row.join(","))].join("\r\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `NEET_PG_Cutoffs_Export_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  },

  /**
   * JSON Export
   */
  exportToJSON() {
    const data = this.getCutoffs();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `NEET_PG_Cutoffs_Backup_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};

window.StorageManager = StorageManager;
