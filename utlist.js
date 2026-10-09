// utils.js

/**
 * Show an error banner with a user-friendly message
 */
export function showError(message) {
  const banner = document.getElementById("errorBanner");
  if (!banner) return;
  banner.textContent = message;
  banner.style.display = "block";
  banner.style.background = "#ffdddd";
  banner.style.color = "#a00";
  banner.style.padding = "0.5rem";
  banner.style.margin = "0.5rem 0";
  banner.style.border = "1px solid #a00";
}

/**
 * Hide the error banner
 */
export function hideError() {
  const banner = document.getElementById("errorBanner");
  if (!banner) return;
  banner.style.display = "none";
}

/**
 * Show a loading skeleton state
 */
export function showLoading() {
  const skeleton = document.getElementById("loadingSkeleton");
  if (!skeleton) return;
  skeleton.style.display = "block";
}

/**
 * Hide the loading skeleton
 */
export function hideLoading() {
  const skeleton = document.getElementById("loadingSkeleton");
  if (!skeleton) return;
  skeleton.style.display = "none";
}

/**
 * Utility: Clear container content
 */
export function clearContainer(id) {
  const container = document.getElementById(id);
  if (container) container.innerHTML = "";
}
