// Premium Developer Portfolio Scripts

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  initLucideIcons();

  // 1. Theme Toggle (Light Default, Dark Option via .dark class)
  initThemeToggle();

  // 2. Project Category Filtering
  initProjectFilters();

  // 3. Mobile Navigation Menu Toggle & Auto-Close
  initMobileNav();

  // 4. Modal Event Listeners
  initModalListeners();
});

function initLucideIcons() {
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }
}

// ----------------------------------------------------
// 1. Theme Toggle Logic (Light Mode by Default)
// ----------------------------------------------------
function initThemeToggle() {
  const themeBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark');
    if (themeIcon) themeIcon.setAttribute('data-lucide', 'moon');
  } else {
    document.documentElement.classList.remove('dark');
    if (themeIcon) themeIcon.setAttribute('data-lucide', 'sun');
  }
  initLucideIcons();

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');

      if (themeIcon) {
        themeIcon.setAttribute('data-lucide', isDark ? 'moon' : 'sun');
        initLucideIcons();
      }
      showToast(isDark ? 'Switched to Dark Theme' : 'Switched to Light Theme');
    });
  }
}

// ----------------------------------------------------
// 2. Project Filtering Logic
// ----------------------------------------------------
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-tab');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterVal = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const categories = (card.getAttribute('data-category') || '').split(' ');
        if (filterVal === 'all' || categories.includes(filterVal)) {
          card.classList.remove('is-hidden');
        } else {
          card.classList.add('is-hidden');
        }
      });
    });
  });
}

// ----------------------------------------------------
// 3. Mobile Navigation Menu
// ----------------------------------------------------
function initMobileNav() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  if (!menuBtn || !menu) return;

  const menuIcon = menuBtn.querySelector('[data-lucide]');

  function toggleMenu(forceClose = false) {
    const isOpening = forceClose ? false : !menu.classList.contains('open');

    if (isOpening) {
      menu.classList.add('open');
      if (menuIcon) menuIcon.setAttribute('data-lucide', 'x');
    } else {
      menu.classList.remove('open');
      if (menuIcon) menuIcon.setAttribute('data-lucide', 'menu');
    }
    initLucideIcons();
  }

  menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  // Auto-close menu when clicking any nav link
  menu.querySelectorAll('a, button').forEach(item => {
    item.addEventListener('click', () => {
      toggleMenu(true);
    });
  });

  // Close when clicking outside header
  document.addEventListener('click', (e) => {
    const header = document.querySelector('header');
    if (header && !header.contains(e.target) && menu.classList.contains('open')) {
      toggleMenu(true);
    }
  });
}

// ----------------------------------------------------
// 4. Resume Modal Controls
// ----------------------------------------------------
function initModalListeners() {
  const modal = document.getElementById('resume-modal');
  if (!modal) return;

  // ESC key to close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeResumeModal();
    }
  });

  // Backdrop click to close
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeResumeModal();
    }
  });
}

function openResumeModal() {
  const modal = document.getElementById('resume-modal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  }
}

function closeResumeModal() {
  const modal = document.getElementById('resume-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  }
}

// ----------------------------------------------------
// 5. Toast & Clipboard Copy
// ----------------------------------------------------
function showToast(msg) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    document.body.appendChild(toast);
  }
  toast.className = 'px-4 py-2.5 rounded-xl shadow-lg border text-xs font-semibold flex items-center gap-2 bg-slate-900 text-slate-100 border-slate-700 dark:bg-slate-100 dark:text-slate-900 dark:border-slate-200';
  toast.innerHTML = `<i data-lucide="check-circle-2" class="w-4 h-4 text-sky-400 dark:text-sky-600"></i> <span>${msg}</span>`;
  initLucideIcons();

  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2800);
}

function copyText(text, label) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(`${label} copied to clipboard!`);
    }).catch(() => {
      fallbackCopyText(text, label);
    });
  } else {
    fallbackCopyText(text, label);
  }
}

function fallbackCopyText(text, label) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  try {
    document.execCommand('copy');
    showToast(`${label} copied to clipboard!`);
  } catch (err) {
    showToast(`Failed to copy ${label}`);
  }
  document.body.removeChild(textArea);
}
