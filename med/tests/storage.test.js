const test = require('node:test');
const assert = require('node:assert/strict');

const defaultCutoffs = [{ id: 'base-1', branchName: 'MD General Medicine', year: 2024, category: 'UR', closingRank: 500 }];

const memory = new Map();
const localStorageMock = {
  getItem(key) { return memory.has(key) ? memory.get(key) : null; },
  setItem(key, value) { memory.set(key, String(value)); },
  removeItem(key) { memory.delete(key); },
  clear() { memory.clear(); }
};

global.localStorage = localStorageMock;
global.window = { HISTORICAL_CUTOFFS: defaultCutoffs.slice() };

global.document = {
  body: { appendChild() {}, removeChild() {} },
  createElement() {
    return {
      setAttribute() {},
      click() {}
    };
  }
};

global.Blob = class Blob { constructor(parts) { this.parts = parts; } };
global.URL = { createObjectURL() { return 'blob:test'; } };

require('../js/data.js');
require('../js/storage.js');

const { StorageManager } = global.window;

test('returns default cutoffs when no local data exists', () => {
  const result = StorageManager.getCutoffs();
  assert.deepEqual(result, defaultCutoffs);
});

test('adds a custom cutoff and stores it', () => {
  const original = StorageManager.getCutoffs();
  const result = StorageManager.addCutoff({
    branchName: 'MD Paediatrics',
    college: 'Test Hospital',
    year: 2025,
    category: 'EWS',
    closingRank: 700
  });

  assert.equal(result.branchName, 'MD Paediatrics');
  assert.equal(result.isCustom, true);
  assert.ok(StorageManager.getCutoffs().some(item => item.id === result.id));
  StorageManager.saveCutoffs(original);
});

test('toggles wishlist entries and persists them', () => {
  const list = StorageManager.toggleWishlist('wish-1');
  assert.deepEqual(list, ['wish-1']);
  assert.equal(StorageManager.isWishlisted('wish-1'), true);
  StorageManager.toggleWishlist('wish-1');
});

test('persists and restores theme preference', () => {
  assert.equal(StorageManager.getTheme(), 'light');
  StorageManager.setTheme('dark');
  assert.equal(StorageManager.getTheme(), 'dark');
  StorageManager.setTheme('light');
});
