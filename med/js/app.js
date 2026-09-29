const SPECIALIZATION_CUTOFFS = [
  {
    specialization: 'MD Radio-Diagnosis',
    cutoffGroup: 'GM',
    cutoffs: { 2022: '1200 - 3200', 2023: '1100 - 3600', 2024: '1380 - 3850', 2025: '1450 - 4100' }
  },
  {
    specialization: 'MD General Medicine',
    cutoffGroup: 'GM',
    cutoffs: { 2022: '3500 - 6430', 2023: '380 - 4050', 2024: '2680 - 4200', 2025: '2800 - 4450' }
  },
  {
    specialization: 'MD Dermatology',
    cutoffGroup: 'GM',
    cutoffs: { 2022: '900 - 4100', 2023: '940 - 4600', 2024: '2100 - 4800', 2025: '2250 - 5100' }
  },
  {
    specialization: 'MD Paediatrics',
    cutoffGroup: 'GM',
    cutoffs: { 2022: '4200 - 9910', 2023: '1520 - 10800', 2024: '3100 - 11200', 2025: '3300 - 11800' }
  },
  {
    specialization: 'MS General Surgery',
    cutoffGroup: 'GM',
    cutoffs: { 2022: '6500 - 18200', 2023: '2500 - 19100', 2024: '4800 - 19800', 2025: '5100 - 20500' }
  },
  {
    specialization: 'MS OBGYN',
    cutoffGroup: 'GM',
    cutoffs: { 2022: '5800 - 12100', 2023: '3220 - 12600', 2024: '6200 - 13100', 2025: '6500 - 13800' }
  },
  {
    specialization: 'MD Anaesthesiology',
    cutoffGroup: 'GM',
    cutoffs: { 2022: '11500-30200', 2023: '3660 - 31600', 2024: '13500-33000', 2025: '14200-34500' }
  },
  {
    specialization: 'MD Pathology',
    cutoffGroup: 'GM',
    cutoffs: { 2022: '28000-34570', 2023: '24900-75900', 2024: '26000-81000', 2025: '27500-85000' }
  },
  {
    specialization: 'MD Radio-Diagnosis',
    cutoffGroup: '2A / 2AG / OBC',
    cutoffs: { 2022: '1800 - 4500', 2023: '450 - 5200', 2024: '1200 - 5400', 2025: '1300 - 5700' }
  },
  {
    specialization: 'MD General Medicine',
    cutoffGroup: '2A / 2AG / OBC',
    cutoffs: { 2022: '2800 - 7100', 2023: '1100 - 7930', 2024: '1940 - 8200', 2025: '2100 - 8600' }
  },
  {
    specialization: 'MD Dermatology',
    cutoffGroup: '2A / 2AG / OBC',
    cutoffs: { 2022: '2000 - 7800', 2023: '2100 - 8780', 2024: '2140 - 9100', 2025: '2300 - 9500' }
  },
  {
    specialization: 'MD Paediatrics',
    cutoffGroup: '2A / 2AG / OBC',
    cutoffs: { 2022: '5500 - 13800', 2023: '3200 - 14500', 2024: '8500 - 15100', 2025: '8900 - 15800' }
  },
  {
    specialization: 'MS OBGYN',
    cutoffGroup: '2A / 2AG / OBC',
    cutoffs: { 2022: '8100 - 15900', 2023: '5100 - 16800', 2024: '6200 - 17400', 2025: '6600 - 18100' }
  },
  {
    specialization: 'MD Pathology',
    cutoffGroup: '2A / 2AG / OBC',
    cutoffs: { 2022: '35000-82000', 2023: '24900-88000', 2024: '26000-92000', 2025: '28000-96000' }
  },
  {
    specialization: 'MS General Surgery',
    cutoffGroup: '2A / 2AG / OBC',
    cutoffs: { 2022: '9200 - 20500', 2023: '4800 - 21800', 2024: '7700 - 22400', 2025: '8200 - 23100' }
  },
  {
    specialization: 'MD Anaesthesiology',
    cutoffGroup: '2A / 2AG / OBC',
    cutoffs: { 2022: '16000-35000', 2023: '12900-38000', 2024: '13500-39200', 2025: '14100-41000' }
  },
  {
    specialization: 'MD Radio-Diagnosis',
    cutoffGroup: 'ME',
    cutoffs: { 2022: '', 2023: '', 2024: '', 2025: '' }
  },
  {
    specialization: 'MD General Medicine',
    cutoffGroup: 'ME',
    cutoffs: { 2022: '', 2023: '', 2024: '', 2025: '' }
  },
  {
    specialization: 'MD Dermatology',
    cutoffGroup: 'ME',
    cutoffs: { 2022: '', 2023: '', 2024: '', 2025: '' }
  },
  {
    specialization: 'MS General Surgery',
    cutoffGroup: 'ME',
    cutoffs: { 2022: '', 2023: '', 2024: '', 2025: '' }
  },
  {
    specialization: 'MD Anaesthesiology',
    cutoffGroup: 'ME',
    cutoffs: { 2022: '', 2023: '', 2024: '', 2025: '' }
  }
];

const EXACT_CATEGORY_CUTOFFS = [
  ['MD Paediatrics', 'ME', '', '', ''],
  ['MS OBGYN', 'ME', '', '', ''],
  ['MS Orthopaedics', 'GM', '18,900', '20,150', '21,459'],
  ['MS Orthopaedics', '2A / 2AG', '15,800', '16,702', '17,900'],
  ['MS Orthopaedics', 'OBC', '20,100', '21,400', '22,800'],
  ['MS Orthopaedics', 'ME', '', '', ''],
  ['MD Emergency Medicine', 'GM', '15,100', '16,300', '17,558'],
  ['MD Emergency Medicine', '2A / 2AG', '18,200', '19,500', '20,800'],
  ['MD Emergency Medicine', 'OBC', '17,400', '18,900', '19,950'],
  ['MD Emergency Medicine', 'ME', '', '', ''],
  ['MD Pathology', 'ME', '', '', ''],
  ['MD Community Medicine (PSM)', 'GM', '1,85,000', '1,98,000', '2,11,980'],
  ['MD Community Medicine (PSM)', '2A / 2AG', '1,92,000', '2,05,000', '2,18,500'],
  ['MD Community Medicine (PSM)', 'OBC', '1,90,000', '2,02,000', '2,15,000'],
  ['MD Community Medicine (PSM)', 'ME', '', '', ''],
  ['MD Pharmacology', 'GM', '1,95,000', '2,10,000', '2,26,282'],
  ['MD Pharmacology', '2A / 2AG', '2,01,000', '2,15,000', '2,29,000'],
  ['MD Pharmacology', 'OBC', '2,05,000', '2,18,000', '2,31,000'],
  ['MD Pharmacology', 'ME', '', '', '']
].map(([specialization, cutoffGroup, cutoff2023, cutoff2024, cutoff2025]) => ({
  specialization,
  cutoffGroup,
  cutoffs: { 2022: 'N/A', 2023: cutoff2023, 2024: cutoff2024, 2025: cutoff2025 }
}));

SPECIALIZATION_CUTOFFS.push(...EXACT_CATEGORY_CUTOFFS);

const ME_CUTOFF_UPDATES = [
  ['MD Radio-Diagnosis', '1,200 - 4,500', '1,100 - 3,800'],
  ['MD Dermatology', '14000-22500', '16900-25000'],
  ['MD General Medicine', '12800-20000', '14000-22000'],
  ['MD Paediatrics', '5,200 - 11,500', '4,800 - 10,200'],
  ['MS OBGYN', '6,500 - 14,000', '5,800 - 12,500'],
  ['MS Orthopaedics', '8,000 - 16,500', '7,200 - 15,000'],
  ['MS General Surgery', '28000-38000', '35000-42000'],
  ['MD Anaesthesiology', '45000-58000', '51500-62000'],
  ['MD Pathology', '25,000 - 52,000', '22,000 - 48,000'],
  ['MD Community Medicine (PSM)', '35,000 - 85,000', '32,000 - 78,000']
];

ME_CUTOFF_UPDATES.forEach(([specialization, cutoff2022, cutoff2023]) => {
  const entry = SPECIALIZATION_CUTOFFS.find((item) => item.specialization === specialization && item.cutoffGroup === 'ME');
  if (!entry) return;
  entry.cutoffs[2022] = cutoff2022;
  entry.cutoffs[2023] = cutoff2023;
});

const ME_LATER_YEAR_UPDATES = [
  ['MD Radio-Diagnosis', '7,100', '7,850'],
  ['MD General Medicine', '15100-25000', '16000-27500'],
  ['MD Dermatology', '18000-28000', '19200-30000'],
  ['MS General Surgery', '38000-45000', '40000-48000'],
  ['MD Anaesthesiology', '55000-68000', '58000-72000'],
  ['MD Paediatrics', '19,800', '21,400'],
  ['MS OBGYN', '23,800', '25,100'],
  ['MS Orthopaedics', '33,200', '35,800'],
  ['MD Emergency Medicine', '30,100', '32,400'],
  ['MD Pathology', '1,04,500', '1,12,000'],
  ['MD Community Medicine (PSM)', '2,22,000', '2,28,000'],
  ['MD Pharmacology', '2,25,000', '2,35,000']
];

ME_LATER_YEAR_UPDATES.forEach(([specialization, cutoff2024, cutoff2025]) => {
  const entry = SPECIALIZATION_CUTOFFS.find((item) => item.specialization === specialization && item.cutoffGroup === 'ME');
  if (!entry) return;
  entry.cutoffs[2024] = cutoff2024;
  entry.cutoffs[2025] = cutoff2025;
});

const normalizeBranch = (value) => String(value || '').replace(/\s+/g, ' ').trim().toLowerCase();

const getMatches = (query) => {
  const searchTerm = normalizeBranch(query);
  if (!searchTerm) return [];

  return SPECIALIZATION_CUTOFFS.filter((entry) => normalizeBranch(entry.specialization).includes(searchTerm));
};

const renderResults = (query = '') => {
  const panel = document.getElementById('resultPanel');
  const searchTerm = normalizeBranch(query);

  if (!searchTerm) {
    panel.innerHTML = '';
    panel.hidden = true;
    return;
  }

  panel.hidden = false;
  const matches = getMatches(query);

  if (!matches.length) {
    panel.innerHTML = '<div class="empty-state"><h2>No matching specialization found</h2><p>Try another branch name.</p></div>';
    return;
  }

  const rows = matches.map((entry) => {
    const specialization = entry.specialization;
    return `
      <article class="branch-result">
        <div class="branch-header">
          <div>
            <span class="meta-tag">${entry.cutoffGroup}</span>
            <h2>${specialization}</h2>
          </div>
        </div>

        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Specialization</th>
                <th>2022 Cutoff</th>
                <th>2023 Cutoff</th>
                <th>2024 Cutoff</th>
                <th>2025 Cutoff</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>${specialization}</td>
                <td>${entry.cutoffs[2022]}</td>
                <td>${entry.cutoffs[2023]}</td>
                <td>${entry.cutoffs[2024]}</td>
                <td>${entry.cutoffs[2025]}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </article>
    `;
  });

  panel.innerHTML = rows.join('');
};

const syncThemeButton = () => {
  const button = document.getElementById('themeToggle');
  if (!button) return;
  const mode = StorageManager.getTheme();
  button.textContent = mode === 'dark' ? 'Light mode' : 'Dark mode';
};

const bindControls = () => {
  const welcomeScreen = document.getElementById('welcomeScreen');
  const searchExperience = document.getElementById('searchExperience');
  const appHeader = document.getElementById('appHeader');
  const input = document.getElementById('branchSearch');
  const form = document.getElementById('branchSearchForm');
  const suggestions = document.getElementById('searchSuggestions');

  document.getElementById('openSearchBtn').addEventListener('click', () => {
    welcomeScreen.hidden = true;
    appHeader.hidden = false;
    searchExperience.hidden = false;
    input.focus();
  });

  document.getElementById('backToWelcome').addEventListener('click', () => {
    searchExperience.hidden = true;
    appHeader.hidden = true;
    welcomeScreen.hidden = false;
    input.value = '';
    suggestions.hidden = true;
    renderResults('');
  });

  input.addEventListener('input', () => {
    document.getElementById('resultPanel').innerHTML = '';
    document.getElementById('resultPanel').hidden = true;
    suggestions.replaceChildren();

    const branchSuggestions = [...new Set(getMatches(input.value).map((entry) => entry.specialization))];
    branchSuggestions.forEach((specialization) => {
      const option = document.createElement('button');
      option.className = 'search-suggestion';
      option.type = 'button';
      option.setAttribute('role', 'option');
      option.textContent = specialization;
      option.addEventListener('click', () => {
        input.value = specialization;
        suggestions.hidden = true;
        suggestions.replaceChildren();
        renderResults(specialization);
      });
      suggestions.appendChild(option);
    });
    suggestions.hidden = branchSuggestions.length === 0;
  });

  input.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter') return;
    event.preventDefault();
    suggestions.hidden = true;
    renderResults(input.value);
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    suggestions.hidden = true;
    renderResults(input.value);
  });

  document.getElementById('themeToggle').addEventListener('click', () => {
    StorageManager.toggleTheme();
    syncThemeButton();
  });
};

document.addEventListener('DOMContentLoaded', () => {
  StorageManager.setTheme(StorageManager.getTheme());
  bindControls();
  syncThemeButton();
});
