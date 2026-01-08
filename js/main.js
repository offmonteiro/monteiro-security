// ============================================
// MAIN APPLICATION
// Entry point and initialization
// ============================================

import { CONFIG } from './config.js';
import { loadWriteups, getWriteups, getUniquePlatforms } from './data.js';
import { setFilter, filterWriteups } from './filters.js';
import { calculateStats } from './stats.js';
import {
  renderWriteups,
  renderPlatformFilters,
  showLoading,
  showError,
  showNoResults
} from './render.js';
import { debounce, animateCounter } from './utils.js';

// DOM Elements
const elements = {
  grid: null,
  loading: null,
  noResults: null,
  platformFilters: null,
  search: null,
  stats: {
    total: null,
    platforms: null,
    techniques: null,
    hardPlus: null
  }
};

/**
 * Initialize DOM element references
 */
function initElements() {
  elements.grid = document.getElementById('writeups-grid');
  elements.loading = document.getElementById('loading');
  elements.noResults = document.getElementById('no-results');
  elements.platformFilters = document.getElementById('platform-filters');
  elements.search = document.getElementById('search');
  elements.stats.total = document.getElementById('total-count');
  elements.stats.platforms = document.getElementById('platform-count');
  elements.stats.techniques = document.getElementById('technique-count');
  elements.stats.hardPlus = document.getElementById('hard-count');
}

/**
 * Update display based on current filters
 */
function updateDisplay() {
  const writeups = getWriteups();
  const filtered = filterWriteups(writeups);

  const hasResults = renderWriteups(filtered, elements.grid);

  elements.grid.style.display = hasResults ? 'grid' : 'none';
  showNoResults(!hasResults, elements.noResults);
}

/**
 * Update statistics with animation
 */
function updateStats(stats) {
  animateCounter(elements.stats.total, stats.total, CONFIG.counterDuration);
  animateCounter(elements.stats.platforms, stats.platforms, CONFIG.counterDuration);
  animateCounter(elements.stats.techniques, stats.techniques, CONFIG.counterDuration);
  animateCounter(elements.stats.hardPlus, stats.hardPlus, CONFIG.counterDuration);
}

/**
 * Handle filter chip clicks
 */
function handleFilterClick(e) {
  const chip = e.target.closest('.filter-chip');
  if (!chip) return;

  const filterType = chip.dataset.filter;
  const value = chip.dataset.value;

  // Update active state
  document.querySelectorAll(`[data-filter="${filterType}"]`).forEach(c => {
    c.classList.remove('active');
  });
  chip.classList.add('active');

  setFilter(filterType, value);
  updateDisplay();
}

/**
 * Handle search input
 */
function handleSearch(e) {
  setFilter('search', e.target.value);
  updateDisplay();
}

/**
 * Initialize the application
 */
async function init() {
  initElements();

  try {
    // Show loading
    showLoading(elements.loading);
    elements.grid.style.display = 'none';

    // Load data
    await loadWriteups();

    // Initialize platform filters
    const platforms = getUniquePlatforms();
    renderPlatformFilters(platforms, elements.platformFilters);

    // Update stats with animation
    const stats = calculateStats(getWriteups());
    updateStats(stats);

    // Initial render
    updateDisplay();

    // Hide loading, show grid
    elements.loading.style.display = 'none';

    // Attach event listeners
    document.querySelector('.filter-section').addEventListener('click', handleFilterClick);
    elements.search.addEventListener('input', debounce(handleSearch, CONFIG.debounceDelay));

  } catch (error) {
    showError(elements.loading, 'Erro ao carregar writeups. Verifique se o arquivo writeups.json existe.');
  }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', init);
