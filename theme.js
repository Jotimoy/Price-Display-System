function applyTheme() {
  const theme = localStorage.getItem('theme') || 'dark';
  if (theme === 'light') {
    document.body.classList.add('light');
  } else {
    document.body.classList.remove('light');
  }
  updateToggleIcon();
}

function toggleMode() {
  const isLight = document.body.classList.toggle('light');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
  updateToggleIcon();
}

function updateToggleIcon() {
  const toggle = document.querySelector('.toggle');
  if (!toggle) return;
  toggle.textContent = document.body.classList.contains('light') ? '🌙' : '☀️';
}

document.addEventListener('DOMContentLoaded', applyTheme);

document.addEventListener('DOMContentLoaded', () => {
  const observer = new MutationObserver((mutations, obs) => {
    if (document.querySelector('.toggle')) {
      updateToggleIcon();
      obs.disconnect();
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });
});
