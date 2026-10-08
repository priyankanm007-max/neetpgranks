const SURGERY_OBC_COLLEGES = [
  'Bangalore Medical College & Research Institute (G)',
  'BGS Global Institute of Medical Sciences (P)',
  'Chamarajanagar Institute of Medical Sciences (G)',
  'Father Muller Medical College (P)',
  'JJM Medical College (P)',
  'K.V.G. Medical College (P)',
  'Karnataka Institute of Medical Sciences, Hubballi (G)',
  'Kempegowda Institute of Medical Sciences (P)',
  'Kodagu Institute of Medical Sciences (G)',
  'M.S. Ramaiah Medical College (D)',
  'S. Nijalingappa Medical College (P)',
  'Shri Atal Bihari Vajpayee Medical College (G)',
  'Vijayanagara Institute of Medical Sciences (G)'
];

const SURGERY_GM_COLLEGES = [
  'BGS Global Institute of Medical Sciences (P)',
  'Chamarajanagar Institute of Medical Sciences (G)',
  'Dr. Chandramma Dayananda Sagar Institute (D)',
  'East Point College of Medical Sciences (P)',
  'Father Muller Medical College (P)',
  'Hassan Institute of Medical Sciences (G)',
  'JJM Medical College (P)',
  'Kanachur Institute of Medical Sciences (P)',
  'Karnataka Institute of Medical Sciences, Hubballi (G)',
  'Karwar Institute of Medical Sciences (G)',
  'Kempegowda Institute of Medical Sciences (P)',
  'M.S. Ramaiah Medical College (D)',
  'Mahadevappa Rampure Medical College (P)',
  'Mandya Institute of Medical Sciences (G)',
  'Raichur Institute of Medical Sciences (G)',
  'S.S. Institute of Medical Sciences (P)',
  'Sapthagiri Institute of Medical Sciences (D)',
  'Shri Atal Bihari Vajpayee Medical College (G)',
  'Srinivas Institute of Medical Sciences (D)',
  'Vydehi Institute of Medical Sciences (P)'
];

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
    cutoffs: { 2022: '6500 - 18200', 2023: '2500 - 19100', 2024: '4800 - 19800', 2025: '5100 - 20500' },
    collegeNote: '2025 also has same college name list',
    collegeLists: [
      { year: 2024, colleges: SURGERY_GM_COLLEGES }
    ]
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
    cutoffs: { 2022: '9200 - 20500', 2023: '4800 - 21800', 2024: '7700 - 22400', 2025: '8200 - 23100' },
    collegeCategory: 'OBC',
    collegeLists: [
      { year: 2024, colleges: SURGERY_OBC_COLLEGES }
    ],
    collegeNote: '2025 also has same college name list'
  },
  {
    specialization: 'MD Anaesthesiology',
    cutoffGroup: '2A / 2AG / OBC',
    cutoffs: { 2022: '16000-35000', 2023: '12900-38000', 2024: '13500-39200', 2025: '14100-41000' }
  },
  {
    specialization: 'MD Radio-Diagnosis',
    cutoffGroup: 'ME',
    cutoffs: { 2022: '10500-16000', 2023: '12000-18000', 2024: '7100', 2025: '7850' }
  },
  {
    specialization: 'MD General Medicine',
    cutoffGroup: 'ME',
    cutoffs: { 2022: '12800-20000', 2023: '14000-22000', 2024: '15100-25000', 2025: '16000-27500' }
  },
  {
    specialization: 'MD Dermatology',
    cutoffGroup: 'ME',
    cutoffs: { 2022: '14000-22500', 2023: '16900-25000', 2024: '18000-28000', 2025: '19200-30000' }
  },
  {
    specialization: 'MS General Surgery',
    cutoffGroup: 'ME',
    cutoffs: { 2022: '28000-38000', 2023: '35000-42000', 2024: '38000-45000', 2025: '40000-48000' },
    collegeLists: [
      {
        year: 2024,
        colleges: [
          'AJ Institute of Medical Sciences (P)',
          'Kanachur Institute of Medical Sciences (P)',
          'K.V.G. Medical College (P)',
          'Srinivas Institute of Medical Sciences (D)'
        ]
      }
    ],
    collegeNote: '2025 also has same college name list'
  },
  {
    specialization: 'MD Anaesthesiology',
    cutoffGroup: 'ME',
    cutoffs: { 2022: '45000-58000', 2023: '51500-62000', 2024: '55000-68000', 2025: '58000-72000' }
  }
];

const EXACT_CATEGORY_CUTOFFS = [
  ['MD Paediatrics', 'ME', '22,000 - 30,000', '24,000 - 32,000', '25,000 - 35,000', '26,000 - 38,000'],
  ['MS OBGYN', 'ME', '25,000 - 33,000', '28,000 - 35,000', '29,000 - 38,000', '31,000 - 41,000'],
  ['MS Orthopaedics', 'GM', '', '18,900', '20,150', '21,459'],
  ['MS Orthopaedics', '2A / 2AG', '', '15,800', '16,702', '17,900'],
  ['MS Orthopaedics', 'OBC', '', '20,100', '21,400', '22,800'],
  ['MS Orthopaedics', 'ME', '', '', '', ''],
  ['MD Emergency Medicine', 'GM', '', '15,100', '16,300', '17,558'],
  ['MD Emergency Medicine', '2A / 2AG', '', '18,200', '19,500', '20,800'],
  ['MD Emergency Medicine', 'OBC', '', '17,400', '18,900', '19,950'],
  ['MD Emergency Medicine', 'ME', '', '', '', ''],
  ['MD Pathology', 'ME', '95,000 - 1,10,000', '1,10,000 - 1,25,000', '1,15,000 - 1,35,000', '1,20,000 - 1,45,000'],
  ['MD Community Medicine (PSM)', 'GM', '', '1,85,000', '1,98,000', '2,11,980'],
  ['MD Community Medicine (PSM)', '2A / 2AG', '', '1,92,000', '2,05,000', '2,18,500'],
  ['MD Community Medicine (PSM)', 'OBC', '', '1,90,000', '2,02,000', '2,15,000'],
  ['MD Community Medicine (PSM)', 'ME', '', '', '', ''],
  ['MD Pharmacology', 'GM', '', '1,95,000', '2,10,000', '2,26,282'],
  ['MD Pharmacology', '2A / 2AG', '', '2,01,000', '2,15,000', '2,29,000'],
  ['MD Pharmacology', 'OBC', '', '2,05,000', '2,18,000', '2,31,000'],
  ['MD Pharmacology', 'ME', '', '', '', '']
].map(([specialization, cutoffGroup, cutoff2022, cutoff2023, cutoff2024, cutoff2025]) => ({
  specialization,
  cutoffGroup,
  cutoffs: { 2022: cutoff2022, 2023: cutoff2023, 2024: cutoff2024, 2025: cutoff2025 }
}));

SPECIALIZATION_CUTOFFS.push(...EXACT_CATEGORY_CUTOFFS);

const SAME_2025_COLLEGE_LISTS = [
  {
    specialization: 'MD Radio-Diagnosis',
    cutoffGroup: 'GM',
    collegeCategory: 'GM',
    colleges: ['Bangalore Medical College & Research Institute (G)', 'BGS Global Institute of Medical Sciences (P)', 'Father Muller Medical College (P)', 'JJM Medical College (P)', 'Karnataka Institute of Medical Sciences, Hubballi (G)', 'Kempegowda Institute of Medical Sciences (P)', 'M.S. Ramaiah Medical College (D)', 'Mysore Medical College (G)', 'S.S. Institute of Medical Sciences (P)', 'Sapthagiri Institute of Medical Sciences (D)', 'Vydehi Institute of Medical Sciences (P)']
  },
  {
    specialization: 'MD Radio-Diagnosis',
    cutoffGroup: '2A / 2AG / OBC',
    collegeCategory: 'OBC (2A/2AG)',
    colleges: ['Bangalore Medical College & Research Institute (G)', 'BGS Global Institute of Medical Sciences (P)', 'Father Muller Medical College (P)', 'JJM Medical College (P)', 'Kempegowda Institute of Medical Sciences (P)', 'M.S. Ramaiah Medical College (D)', 'Mysore Medical College (G)', 'S. Nijalingappa Medical College (P)', 'Vijayanagara Institute of Medical Sciences (G)']
  },
  {
    specialization: 'MD Radio-Diagnosis',
    cutoffGroup: 'ME',
    collegeCategory: 'ME',
    colleges: ['AJ Institute of Medical Sciences (P)', 'K.V.G. Medical College (P)', 'Navodaya Medical College (P)', 'Srinivas Institute of Medical Sciences (D)', 'Vydehi Institute of Medical Sciences (P)']
  },
  {
    specialization: 'MD Dermatology',
    cutoffGroup: 'GM',
    collegeCategory: 'GM',
    colleges: ['Bangalore Medical College & Research Institute (G)', 'BGS Global Institute of Medical Sciences (P)', 'Father Muller Medical College (P)', 'JJM Medical College (P)', 'Kempegowda Institute of Medical Sciences (P)', 'M.S. Ramaiah Medical College (D)', 'Mandya Institute of Medical Sciences (G)', 'Mysore Medical College (G)', 'Sapthagiri Institute of Medical Sciences (D)', 'Vydehi Institute of Medical Sciences (P)']
  },
  {
    specialization: 'MD Dermatology',
    cutoffGroup: '2A / 2AG / OBC',
    collegeCategory: 'OBC (2A/2AG)',
    colleges: ['Bangalore Medical College & Research Institute (G)', 'BGS Global Institute of Medical Sciences (P)', 'Father Muller Medical College (P)', 'JJM Medical College (P)', 'Karnataka Institute of Medical Sciences, Hubballi (G)', 'Kempegowda Institute of Medical Sciences (P)', 'M.S. Ramaiah Medical College (D)', 'Mysore Medical College (G)']
  },
  {
    specialization: 'MD Dermatology',
    cutoffGroup: 'ME',
    collegeCategory: 'ME',
    colleges: ['AJ Institute of Medical Sciences (P)', 'Kanachur Institute of Medical Sciences (P)', 'Navodaya Medical College (P)', 'Srinivas Institute of Medical Sciences (D)', 'Subbaiah Institute of Medical Sciences (P)']
  },
  {
    specialization: 'MD Paediatrics',
    cutoffGroup: 'GM',
    collegeCategory: 'GM',
    colleges: ['Bangalore Medical College & Research Institute (G)', 'BGS Global Institute of Medical Sciences (P)', 'Dr. BR Ambedkar Medical College (P)', 'Father Muller Medical College (P)', 'Hassan Institute of Medical Sciences (G)', 'JJM Medical College (P)', 'Kempegowda Institute of Medical Sciences (P)', 'M.S. Ramaiah Medical College (D)', 'Mandya Institute of Medical Sciences (G)', 'Mysore Medical College (G)', 'S.S. Institute of Medical Sciences (P)', 'Sapthagiri Institute of Medical Sciences (D)', 'Vydehi Institute of Medical Sciences (P)']
  },
  {
    specialization: 'MD Paediatrics',
    cutoffGroup: '2A / 2AG / OBC',
    collegeCategory: 'OBC (2A/2AG)',
    colleges: ['Bangalore Medical College & Research Institute (G)', 'BGS Global Institute of Medical Sciences (P)', 'Chamarajanagar Institute of Medical Sciences (G)', 'Father Muller Medical College (P)', 'Hassan Institute of Medical Sciences (G)', 'JJM Medical College (P)', 'Karnataka Institute of Medical Sciences, Hubballi (G)', 'Kempegowda Institute of Medical Sciences (P)', 'Mysore Medical College (G)', 'Vijayanagara Institute of Medical Sciences (G)']
  },
  {
    specialization: 'MD Paediatrics',
    cutoffGroup: 'ME',
    collegeCategory: 'ME',
    colleges: ['AJ Institute of Medical Sciences (P)', 'Kanachur Institute of Medical Sciences (P)', 'K.V.G. Medical College (P)', 'Navodaya Medical College (P)', 'Srinivas Institute of Medical Sciences (D)', 'Vydehi Institute of Medical Sciences (P)']
  },
  {
    specialization: 'MS OBGYN',
    cutoffGroup: 'GM',
    collegeCategory: 'GM',
    colleges: ['Bangalore Medical College & Research Institute (G)', 'BGS Global Institute of Medical Sciences (P)', 'Dr. BR Ambedkar Medical College (P)', 'Father Muller Medical College (P)', 'Hassan Institute of Medical Sciences (G)', 'JJM Medical College (P)', 'Kempegowda Institute of Medical Sciences (P)', 'M.S. Ramaiah Medical College (D)', 'Mandya Institute of Medical Sciences (G)', 'Mysore Medical College (G)', 'S.S. Institute of Medical Sciences (P)', 'Sapthagiri Institute of Medical Sciences (D)', 'Vydehi Institute of Medical Sciences (P)']
  },
  {
    specialization: 'MS OBGYN',
    cutoffGroup: '2A / 2AG / OBC',
    collegeCategory: 'OBC (2A/2AG)',
    colleges: ['Bangalore Medical College & Research Institute (G)', 'BGS Global Institute of Medical Sciences (P)', 'Chamarajanagar Institute of Medical Sciences (G)', 'Father Muller Medical College (P)', 'JJM Medical College (P)', 'Karnataka Institute of Medical Sciences, Hubballi (G)', 'Kempegowda Institute of Medical Sciences (P)', 'Kodagu Institute of Medical Sciences (G)', 'M.S. Ramaiah Medical College (D)', 'Mysore Medical College (G)', 'Vijayanagara Institute of Medical Sciences (G)']
  },
  {
    specialization: 'MS OBGYN',
    cutoffGroup: 'ME',
    collegeCategory: 'ME',
    colleges: ['AJ Institute of Medical Sciences (P)', 'Kanachur Institute of Medical Sciences (P)', 'K.V.G. Medical College (P)', 'Navodaya Medical College (P)', 'Srinivas Institute of Medical Sciences (D)', 'Vydehi Institute of Medical Sciences (P)']
  },
  {
    specialization: 'MD Anaesthesiology',
    cutoffGroup: 'GM',
    collegeCategory: 'GM',
    colleges: ['Bangalore Medical College & Research Institute (G)', 'BGS Global Institute of Medical Sciences (P)', 'Chamarajanagar Institute of Medical Sciences (G)', 'Dr. BR Ambedkar Medical College (P)', 'East Point College of Medical Sciences (P)', 'Hassan Institute of Medical Sciences (G)', 'JJM Medical College (P)', 'Kempegowda Institute of Medical Sciences (P)', 'M.S. Ramaiah Medical College (D)', 'Mandya Institute of Medical Sciences (G)', 'Mysore Medical College (G)', 'S.S. Institute of Medical Sciences (P)', 'Sapthagiri Institute of Medical Sciences (D)', 'Vydehi Institute of Medical Sciences (P)']
  },
  {
    specialization: 'MD Anaesthesiology',
    cutoffGroup: '2A / 2AG / OBC',
    collegeCategory: 'OBC (2A/2AG)',
    colleges: ['Bangalore Medical College & Research Institute (G)', 'BGS Global Institute of Medical Sciences (P)', 'Chamarajanagar Institute of Medical Sciences (G)', 'Father Muller Medical College (P)', 'JJM Medical College (P)', 'K.V.G. Medical College (P)', 'Karnataka Institute of Medical Sciences, Hubballi (G)', 'Kempegowda Institute of Medical Sciences (P)', 'M.S. Ramaiah Medical College (D)', 'S. Nijalingappa Medical College (P)', 'Shri Atal Bihari Vajpayee Medical College (G)', 'Vijayanagara Institute of Medical Sciences (G)']
  },
  {
    specialization: 'MD Anaesthesiology',
    cutoffGroup: 'ME',
    collegeCategory: 'ME',
    colleges: ['AJ Institute of Medical Sciences (P)', 'Kanachur Institute of Medical Sciences (P)', 'K.V.G. Medical College (P)', 'Navodaya Medical College (P)', 'Srinivas Institute of Medical Sciences (D)', 'Subbaiah Institute of Medical Sciences (P)', 'Vydehi Institute of Medical Sciences (P)']
  },
  {
    specialization: 'MD Pathology',
    cutoffGroup: 'GM',
    collegeCategory: 'GM',
    colleges: ['Bangalore Medical College & Research Institute (G)', 'BGS Global Institute of Medical Sciences (P)', 'Belagavi Institute of Medical Sciences (G)', 'Dr. BR Ambedkar Medical College (P)', 'Hassan Institute of Medical Sciences (G)', 'JJM Medical College (P)', 'Kempegowda Institute of Medical Sciences (P)', 'M.S. Ramaiah Medical College (D)', 'Mandya Institute of Medical Sciences (G)', 'Mysore Medical College (G)', 'S.S. Institute of Medical Sciences (P)', 'Sapthagiri Institute of Medical Sciences (D)', 'Vydehi Institute of Medical Sciences (P)']
  },
  {
    specialization: 'MD Pathology',
    cutoffGroup: '2A / 2AG / OBC',
    collegeCategory: 'OBC (2A/2AG)',
    colleges: ['Bangalore Medical College & Research Institute (G)', 'BGS Global Institute of Medical Sciences (P)', 'Belagavi Institute of Medical Sciences (G)', 'Father Muller Medical College (P)', 'JJM Medical College (P)', 'Karnataka Institute of Medical Sciences, Hubballi (G)', 'Kempegowda Institute of Medical Sciences (P)', 'M.S. Ramaiah Medical College (D)', 'Mysore Medical College (G)', 'Vijayanagara Institute of Medical Sciences (G)']
  },
  {
    specialization: 'MD Pathology',
    cutoffGroup: 'ME',
    collegeCategory: 'ME',
    colleges: ['AJ Institute of Medical Sciences (P)', 'Kanachur Institute of Medical Sciences (P)', 'K.V.G. Medical College (P)', 'Navodaya Medical College (P)', 'Srinivas Institute of Medical Sciences (D)', 'Subbaiah Institute of Medical Sciences (P)', 'Vydehi Institute of Medical Sciences (P)']
  }
];

SAME_2025_COLLEGE_LISTS.forEach(({ specialization, cutoffGroup, collegeCategory, colleges }) => {
  const entry = SPECIALIZATION_CUTOFFS.find((item) => item.specialization === specialization && item.cutoffGroup === cutoffGroup);
  if (!entry) return;
  entry.collegeCategory = collegeCategory;
  entry.collegeLists = [{ year: 2024, colleges }];
  entry.collegeNote = '2025 also has same college name list';
});

const DISPLAYED_YEARS = [2022, 2023, 2024, 2025];

const BRANCH_ALLOTMENT_TABLES = [
  {
    specialization: 'MD General Medicine',
    year: 2024,
    gmColleges: 'Bangalore Medical College & Research Institute (G); Bangalore Baptist Hospital (P); BGS Global Institute of Medical Sciences (P); Dr. BR Ambedkar Medical College (P); East Point College of Medical Sciences (P); Hassan Institute of Medical Sciences (G); JJM Medical College (P); Kempegowda Institute of Medical Sciences (P); M.S. Ramaiah Medical College (D); Mandya Institute of Medical Sciences (G); Mysore Medical College (G); S.S. Institute of Medical Sciences (P); Sapthagiri Institute of Medical Sciences (D); Shri Atal Bihari Vajpayee Medical College (G); Vydehi Institute of Medical Sciences (P)',
    obcColleges: 'Bangalore Medical College & Research Institute (G); BGS Global Institute of Medical Sciences (P); Hassan Institute of Medical Sciences (G); JJM Medical College (P); Karnataka Institute of Medical Sciences, Hubballi (G); Kempegowda Institute of Medical Sciences (P); M.S. Ramaiah Medical College (D); Mandya Institute of Medical Sciences (G); Mysore Medical College (G); S. Nijalingappa Medical College (P); Vijayanagara Institute of Medical Sciences (G)',
    meColleges: 'AJ Institute of Medical Sciences (P); Kanachur Institute of Medical Sciences (P); K.V.G. Medical College (P); Navodaya Medical College (P); Srinivas Institute of Medical Sciences (D); Subbaiah Institute of Medical Sciences (P); Vydehi Institute of Medical Sciences (P)'
  },
  {
    specialization: 'MD General Medicine',
    year: 2025,
    gmColleges: 'Bangalore Medical College & Research Institute (G); BGS Global Institute of Medical Sciences (P); Father Muller Medical College (P); JJM Medical College (P); Karnataka Institute of Medical Sciences, Hubballi (G); Kempegowda Institute of Medical Sciences (P); M.S. Ramaiah Medical College (D); Mysore Medical College (G); S.S. Institute of Medical Sciences (P); Sapthagiri Institute of Medical Sciences (D); Vydehi Institute of Medical Sciences (P)',
    obcColleges: 'Bangalore Medical College & Research Institute (P); BGS Global Institute of Medical Sciences (P); Father Muller Medical College (P); JJM Medical College (P); Kempegowda Institute of Medical Sciences (P); M.S. Ramaiah Medical College (D); Mysore Medical College (G); S. Nijalingappa Medical College (P); Vijayanagara Institute of Medical Sciences (G)',
    meColleges: 'AJ Institute of Medical Sciences (P); K.V.G. Medical College (P); Navodaya Medical College (P); Srinivas Institute of Medical Sciences (D); Vydehi Institute of Medical Sciences (P)'
  }
];

const getMatches = (query) => {
  const searchTerm = normalizeBranch(query);
  if (!searchTerm) return [];
  return SPECIALIZATION_CUTOFFS.filter((entry) => normalizeBranch(entry.specialization).includes(searchTerm));
};

const normalizeBranch = (value) => String(value || '').trim().toLowerCase().replace(/[^a-z0-9]+/g, ' ');

const RANK_BAND_20K_TO_29K = {
  "MD Radio-Diagnosis": {
    "GM": {
      "2024": [
        "Closed before 20k rank range"
      ],
      "2025": [
        "Closed before 20k rank range"
      ]
    },
    "OBC": {
      "2024": [
        "Chamarajanagar Institute of Medical Sciences (G)",
        "Karwar Institute of Medical Sciences (G)"
      ],
      "2025": [
        "Kodagu Institute of Medical Sciences (G)",
        "Haveri Institute of Medical Sciences (G)"
      ]
    },
    "ME": {
      "2024": [
        "Father Muller Medical College (P)",
        "Yenepoya Medical College (D)",
        "AJ Institute of Medical Sciences (P)"
      ],
      "2025": [
        "Father Muller Medical College (P)",
        "AJ Institute of Medical Sciences (P)",
        "Kanachur Institute of Medical Sciences (P)"
      ]
    }
  },
  "MD Dermatology": {
    "GM": {
      "2024": [
        "Closed before 20k rank range"
      ],
      "2025": [
        "Closed before 20k rank range"
      ]
    },
    "OBC": {
      "2024": [
        "Hassan Institute of Medical Sciences (G)",
        "Mandya Institute of Medical Sciences (G)"
      ],
      "2025": [
        "Karnataka Institute of Medical Sciences, Hubballi (G)",
        "Vijayanagara Institute of Medical Sciences (G)"
      ]
    },
    "ME": {
      "2024": [
        "Father Muller Medical College (P)",
        "Yenepoya Medical College (D)"
      ],
      "2025": [
        "Father Muller Medical College (P)",
        "AJ Institute of Medical Sciences (P)"
      ]
    }
  },
  "MD General Medicine": {
    "GM": {
      "2024": [
        "Closed before 20k rank range"
      ],
      "2025": [
        "Kodagu Institute of Medical Sciences (G)",
        "Chamarajanagar Institute of Medical Sciences (G)"
      ]
    },
    "OBC": {
      "2024": [
        "Karnataka Institute of Medical Sciences, Hubballi (G)",
        "Vijayanagara Institute of Medical Sciences (G)",
        "Mandya Institute of Medical Sciences (G)"
      ],
      "2025": [
        "Hassan Institute of Medical Sciences (G)",
        "Shimoga Institute of Medical Sciences (G)"
      ]
    },
    "ME": {
      "2024": [
        "AJ Institute of Medical Sciences (P)",
        "Father Muller Medical College (P)",
        "Yenepoya Medical College (D)",
        "Al-Ameen Medical College (P)"
      ],
      "2025": [
        "AJ Institute of Medical Sciences (P)",
        "Father Muller Medical College (P)",
        "Kanachur Institute of Medical Sciences (P)"
      ]
    }
  },
  "MD Paediatrics": {
    "GM": {
      "2024": [
        "Closed before 20k rank range"
      ],
      "2025": [
        "Kodagu Institute of Medical Sciences (G)",
        "Chamarajanagar Institute of Medical Sciences (G)"
      ]
    },
    "OBC": {
      "2024": [
        "Mandya Institute of Medical Sciences (G)",
        "Raichur Institute of Medical Sciences (G)",
        "Hassan Institute of Medical Sciences (G)"
      ],
      "2025": [
        "Karnataka Institute of Medical Sciences, Hubballi (G)",
        "Vijayanagara Institute of Medical Sciences, Ballari (G)"
      ]
    },
    "ME": {
      "2024": [
        "Yenepoya Medical College (D)",
        "Father Muller Medical College (P)",
        "Al-Ameen Medical College (P)"
      ],
      "2025": [
        "AJ Institute of Medical Sciences (P)",
        "Father Muller Medical College (P)",
        "Navodaya Medical College (P)"
      ]
    }
  },
  "MS General Surgery": {
    "GM": {
      "2024": [
        "Chamarajanagar Institute of Medical Sciences (G)",
        "Karwar Institute of Medical Sciences (G)"
      ],
      "2025": [
        "Kodagu Institute of Medical Sciences (G)",
        "Haveri Institute of Medical Sciences (G)",
        "Yadgiri Institute of Medical Sciences (G)"
      ]
    },
    "OBC": {
      "2024": [
        "Karnataka Institute of Medical Sciences, Hubballi (G)",
        "Vijayanagara Institute of Medical Sciences, Ballari (G)",
        "Shimoga Institute of Medical Sciences (G)"
      ],
      "2025": [
        "Mandya Institute of Medical Sciences (G)",
        "Hassan Institute of Medical Sciences (G)"
      ]
    },
    "ME": {
      "2024": [
        "AJ Institute of Medical Sciences (P)",
        "Kanachur Institute of Medical Sciences (P)",
        "K.V.G. Medical College (P)",
        "Srinivas Institute of Medical Sciences (D)"
      ],
      "2025": [
        "AJ Institute of Medical Sciences (P)",
        "Kanachur Institute of Medical Sciences (P)",
        "K.V.G. Medical College (P)",
        "Srinivas Institute of Medical Sciences (D)"
      ]
    }
  },
  "MS OBGYN": {
    "GM": {
      "2024": [
        "Hassan Institute of Medical Sciences (G)",
        "Mandya Institute of Medical Sciences (G)",
        "Belagavi Institute of Medical Sciences (G)"
      ],
      "2025": [
        "Vijayanagara Institute of Medical Sciences (G)",
        "Shimoga Institute of Medical Sciences (G)",
        "Kodagu Institute of Medical Sciences (G)"
      ]
    },
    "OBC": {
      "2024": [
        "Bangalore Medical College & Research Institute (G)",
        "Mysore Medical College & Research Institute (G)"
      ],
      "2025": [
        "Karnataka Institute of Medical Sciences, Hubballi (G)",
        "Mandya Institute of Medical Sciences (G)"
      ]
    },
    "ME": {
      "2024": [
        "Father Muller Medical College (P)",
        "AJ Institute of Medical Sciences (P)",
        "Yenepoya Medical College (D)"
      ],
      "2025": [
        "Father Muller Medical College (P)",
        "AJ Institute of Medical Sciences (P)",
        "Kanachur Institute of Medical Sciences (P)"
      ]
    }
  },
  "MS Orthopaedics": {
    "GM": {
      "2024": [
        "Chamarajanagar Institute of Medical Sciences (G)",
        "Karwar Institute of Medical Sciences (G)",
        "Kodagu Institute of Medical Sciences (G)"
      ],
      "2025": [
        "Hassan Institute of Medical Sciences (G)",
        "Mandya Institute of Medical Sciences (G)",
        "Haveri Institute of Medical Sciences (G)"
      ]
    },
    "OBC": {
      "2024": [
        "Karnataka Institute of Medical Sciences, Hubballi (G)",
        "Vijayanagara Institute of Medical Sciences (G)"
      ],
      "2025": [
        "Mysore Medical College & Research Institute (G)",
        "Shimoga Institute of Medical Sciences (G)"
      ]
    },
    "ME": {
      "2024": [
        "Father Muller Medical College (P)",
        "AJ Institute of Medical Sciences (P)",
        "K.V.G. Medical College (P)"
      ],
      "2025": [
        "Father Muller Medical College (P)",
        "AJ Institute of Medical Sciences (P)",
        "Srinivas Institute of Medical Sciences (D)"
      ]
    }
  },
  "MD Emergency Medicine": {
    "GM": {
      "2024": [
        "Mysore Medical College & Research Institute (G)",
        "Karnataka Institute of Medical Sciences (G)",
        "Vijayanagara Institute of Medical Sciences (G)"
      ],
      "2025": [
        "Karnataka Institute of Medical Sciences (G)",
        "Mandya Institute of Medical Sciences (G)",
        "Hassan Institute of Medical Sciences (G)"
      ]
    },
    "OBC": {
      "2024": [
        "Bangalore Medical College & Research Institute (G)",
        "Mysore Medical College & Research Institute (G)"
      ],
      "2025": [
        "Bangalore Medical College & Research Institute (G)",
        "Mysore Medical College & Research Institute (G)"
      ]
    },
    "ME": {
      "2024": [
        "Father Muller Medical College (P)",
        "AJ Institute of Medical Sciences (P)"
      ],
      "2025": [
        "Father Muller Medical College (P)",
        "AJ Institute of Medical Sciences (P)"
      ]
    }
  },
  "MD Anaesthesiology": {
    "GM": {
      "2024": [
        "Hassan Institute of Medical Sciences (G)",
        "Mandya Institute of Medical Sciences (G)",
        "Belagavi Institute of Medical Sciences (G)",
        "Karwar Institute of Medical Sciences (G)"
      ],
      "2025": [
        "Bangalore Medical College & Research Institute (G)",
        "Mysore Medical College & Research Institute (G)",
        "Shimoga Institute of Medical Sciences (G)",
        "Hassan Institute of Medical Sciences (G)"
      ]
    },
    "OBC": {
      "2024": [
        "Mysore Medical College & Research Institute (G)",
        "Karnataka Institute of Medical Sciences, Hubballi (G)"
      ],
      "2025": [
        "Bangalore Medical College & Research Institute (G)",
        "Indira Gandhi Institute of Child Health (G)"
      ]
    },
    "ME": {
      "2024": [
        "AJ Institute of Medical Sciences (P)",
        "Yenepoya Medical College (D)",
        "Kanachur Institute of Medical Sciences (P)",
        "Father Muller Medical College (P)"
      ],
      "2025": [
        "AJ Institute of Medical Sciences (P)",
        "Al-Ameen Medical College (P)",
        "K.V.G. Medical College (P)",
        "Srinivas Institute of Medical Sciences (D)"
      ]
    }
  },
  "MD Pathology": {
    "GM": {
      "2024": [
        "Bangalore Medical College & Research Institute (G)",
        "Mysore Medical College & Research Institute (G)",
        "KIMS Hubballi (G)"
      ],
      "2025": [
        "Bangalore Medical College & Research Institute (G)",
        "Mysore Medical College & Research Institute (G)",
        "KIMS Hubballi (G)"
      ]
    },
    "OBC": {
      "2024": [
        "Bangalore Medical College & Research Institute (G)",
        "Mysore Medical College & Research Institute (G)"
      ],
      "2025": [
        "Bangalore Medical College & Research Institute (G)",
        "Mysore Medical College & Research Institute (G)"
      ]
    },
    "ME": {
      "2024": [
        "Father Muller Medical College (P)",
        "AJ Institute of Medical Sciences (P)",
        "St. John's Medical College (P)"
      ],
      "2025": [
        "Father Muller Medical College (P)",
        "AJ Institute of Medical Sciences (P)",
        "St. John's Medical College (P)"
      ]
    }
  },
  "MD Community Medicine (PSM)": {
    "GM": {
      "2024": [
        "Bangalore Medical College & Research Institute (G)",
        "Mysore Medical College & Research Institute (G)",
        "KIMS Hubballi (G)"
      ],
      "2025": [
        "Bangalore Medical College & Research Institute (G)",
        "Mysore Medical College & Research Institute (G)",
        "KIMS Hubballi (G)"
      ]
    },
    "OBC": {
      "2024": [
        "Bangalore Medical College & Research Institute (G)",
        "Mysore Medical College & Research Institute (G)"
      ],
      "2025": [
        "Bangalore Medical College & Research Institute (G)",
        "Mysore Medical College & Research Institute (G)"
      ]
    },
    "ME": {
      "2024": [
        "Father Muller Medical College (P)",
        "AJ Institute of Medical Sciences (P)",
        "St. John's Medical College (P)"
      ],
      "2025": [
        "Father Muller Medical College (P)",
        "AJ Institute of Medical Sciences (P)",
        "St. John's Medical College (P)"
      ]
    }
  },
  "MD Pharmacology": {
    "GM": {
      "2024": [
        "Bangalore Medical College & Research Institute (G)",
        "Mysore Medical College & Research Institute (G)",
        "KIMS Hubballi (G)"
      ],
      "2025": [
        "Bangalore Medical College & Research Institute (G)",
        "Mysore Medical College & Research Institute (G)",
        "KIMS Hubballi (G)"
      ]
    },
    "OBC": {
      "2024": [
        "Bangalore Medical College & Research Institute (G)",
        "Mysore Medical College & Research Institute (G)"
      ],
      "2025": [
        "Bangalore Medical College & Research Institute (G)",
        "Mysore Medical College & Research Institute (G)"
      ]
    },
    "ME": {
      "2024": [
        "Father Muller Medical College (P)",
        "AJ Institute of Medical Sciences (P)",
        "St. John's Medical College (P)"
      ],
      "2025": [
        "Father Muller Medical College (P)",
        "AJ Institute of Medical Sciences (P)",
        "St. John's Medical College (P)"
      ]
    }
  }
};

const resolveQuotaKey = (cutoffGroup) => {
  const norm = String(cutoffGroup || '').trim().toUpperCase();
  if (norm === 'GM') return 'GM';
  if (norm === 'ME') return 'ME';
  if (norm.includes('OBC') || norm.includes('2A')) return 'OBC';
  return null;
};

SPECIALIZATION_CUTOFFS.forEach((entry) => {
  const branchKey = Object.keys(RANK_BAND_20K_TO_29K).find(
    (name) => normalizeBranch(name) === normalizeBranch(entry.specialization)
  );
  if (!branchKey) return;
  const quotaKey = resolveQuotaKey(entry.cutoffGroup);
  if (quotaKey && RANK_BAND_20K_TO_29K[branchKey]?.[quotaKey]) {
    entry.rankBand20kTo29k = RANK_BAND_20K_TO_29K[branchKey][quotaKey];
  }
});

const renderRankBandSection = (entry) => {
  const quotaData = entry.rankBand20kTo29k || (() => {
    const branchKey = Object.keys(RANK_BAND_20K_TO_29K).find(
      (name) => normalizeBranch(name) === normalizeBranch(entry.specialization)
    );
    if (!branchKey) return null;
    const quotaKey = resolveQuotaKey(entry.cutoffGroup);
    return quotaKey ? RANK_BAND_20K_TO_29K[branchKey]?.[quotaKey] : null;
  })();

  if (!quotaData) return '';

  const years = [2024, 2025];
  const yearCards = years.map((year) => {
    const colleges = quotaData[year] || [];
    const isClosed = colleges.length === 1 && colleges[0].toLowerCase().includes('closed');
    const content = isClosed
      ? `<div class="college-closed">${colleges[0]}</div>`
      : colleges.map((college) => `<div>${college}</div>`).join('');

    return `
      <section class="college-year-card">
        <h4>${year} Allotted Colleges</h4>
        <div class="college-stack">
          ${content}
        </div>
      </section>
    `;
  }).join('');

  return `
    <div class="branch-allotment-wrap rank-band-wrap">
      <div class="rank-band-header">
        <h3 class="rank-band-heading">rank band:20k to 29k</h3>
      </div>
      <div class="college-list-groups college-lists--side-by-side">
        ${yearCards}
      </div>
    </div>
  `;
};


const renderCutoffCell = (entry, year) => {
  const value = entry.cutoffs[year] || '';
  return `<td class="cutoff-cell"><span class="cutoff-range">${value}</span></td>`;
};

const renderCategoryColleges = (entry) => {
  let collegeLists = entry.collegeLists || (entry.colleges ? [{ year: entry.collegeYear, colleges: entry.colleges }] : []);

  if (!collegeLists.length) {
    const category = {
      GM: { column: 'gmColleges', label: 'GM' },
      '2A / 2AG / OBC': { column: 'obcColleges', label: 'OBC (2A/2AG)' },
      ME: { column: 'meColleges', label: 'ME' }
    }[entry.cutoffGroup];

    if (category) {
      collegeLists = BRANCH_ALLOTMENT_TABLES
        .filter((table) => normalizeBranch(table.specialization) === normalizeBranch(entry.specialization))
        .map((table) => ({
          year: table.year,
          category: category.label,
          colleges: String(table[category.column] || '').split(';').map((college) => college.trim()).filter(Boolean)
        }));
    }
  }

  if (!collegeLists.length) return '';
  const layoutClass = collegeLists.length > 1 ? ' college-lists--side-by-side' : '';

  return `
    <div class="branch-allotment-wrap">
      <div class="college-list-groups${layoutClass}">
        ${collegeLists.map(({ year, colleges, category }) => `
          <section>
            <h3>${year} ${category || entry.collegeCategory || entry.cutoffGroup} Colleges</h3>
            <div class="college-stack">${colleges.map((college) => `<div>${college}</div>`).join('')}</div>
          </section>
        `).join('')}
      </div>
      ${entry.collegeNote ? `<p class="college-note"><strong>${entry.collegeNote}</strong></p>` : ''}
    </div>
  `;
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
                ${DISPLAYED_YEARS.map((year) => `<th>${year} Cutoff</th>`).join('')}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>${specialization}</td>
                ${DISPLAYED_YEARS.map((year) => renderCutoffCell(entry, year)).join('')}
              </tr>
            </tbody>
          </table>
        </div>
        ${renderCategoryColleges(entry)}
        ${renderRankBandSection(entry)}
      </article>
    `;
  });

  panel.innerHTML = rows.join('');
};

const syncThemeButton = () => {
  const button = document.getElementById('themeToggle');
  if (!button) return;
  const mode = localStorage.getItem('theme') || 'light';
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
    const currentTheme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
    document.body.dataset.theme = currentTheme;
    localStorage.setItem('theme', currentTheme);
    syncThemeButton();
  });
};
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.body.dataset.theme = savedTheme;
  bindControls();
  syncThemeButton();
});
