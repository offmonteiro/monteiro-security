// ============================================
// DOM RENDERING
// ============================================

import { PLATFORM_NAMES } from './config.js';
import { formatDate } from './utils.js';

/**
 * Render writeups to grid
 */
export function renderWriteups(writeups, container) {
  if (writeups.length === 0) {
    container.innerHTML = '';
    return false;
  }

  container.innerHTML = writeups.map(w => `
    <a href="${w.pdf}" target="_blank" rel="noopener" class="writeup-card">
      <div class="card-content">
        <div class="card-header">
          <div>
            <h3 class="card-title">${escapeHtml(w.title)}</h3>
            <span class="difficulty-badge diff-${w.difficulty}">
              <span class="dot">●</span> ${w.difficulty.toUpperCase()}
            </span>
          </div>
          <span class="platform-badge badge-${w.platform}">
            ${PLATFORM_NAMES[w.platform] || w.platform.toUpperCase()}
          </span>
        </div>
        <p class="card-description">${escapeHtml(w.description)}</p>
        <div class="tags-container">
          ${w.tags.map(tag => `<span class="tag">${escapeHtml(tag)}</span>`).join('')}
        </div>
      </div>
      <div class="card-footer">
        <span class="footer-date">${formatDate(w.date)}</span>
        <span class="footer-pdf">PDF</span>
      </div>
    </a>
  `).join('');

  // Add mouse tracking for reveal effect
  setupRevealEffect(container);

  return true;
}

/**
 * Setup reveal highlight effect on cards
 */
function setupRevealEffect(container) {
  const cards = container.querySelectorAll('.writeup-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
      card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
    });
  });
}

/**
 * Render platform filter buttons
 */
export function renderPlatformFilters(platforms, container) {
  const buttons = platforms.map(platform => `
    <button class="filter-chip" data-filter="platform" data-value="${platform}">
      ${PLATFORM_NAMES[platform] || platform.toUpperCase()}
    </button>
  `).join('');

  container.insertAdjacentHTML('beforeend', buttons);
}

/**
 * Show loading state
 */
export function showLoading(container) {
  container.innerHTML = `
    <div class="loading">
      <div class="loading-spinner"></div>
      <p class="loading-text">Carregando writeups...</p>
    </div>
  `;
  container.style.display = 'flex';
}

/**
 * Show error state
 */
export function showError(container, message) {
  container.innerHTML = `
    <div class="error-state">
      <div class="error-icon">!</div>
      <p class="error-text">${escapeHtml(message)}</p>
    </div>
  `;
  container.style.display = 'flex';
}

/**
 * Show no results state
 */
export function showNoResults(show, container) {
  container.style.display = show ? 'flex' : 'none';
}

/**
 * Escape HTML to prevent XSS
 */
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}
