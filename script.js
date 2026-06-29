const toast = document.getElementById('toast');
const startBtn = document.getElementById('start');
const ctaBtn = document.getElementById('cta-btn');
const startNav = document.getElementById('start-nav');

function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => toast.classList.remove('show'), 2400);
}

function scrollToFeatures(e) {
  e.preventDefault();
  showToast('Welcome to GrowEasy! 🌱');
  document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
}

if (startBtn) startBtn.addEventListener('click', scrollToFeatures);
if (ctaBtn) ctaBtn.addEventListener('click', scrollToFeatures);
if (startNav) startNav.addEventListener('click', scrollToFeatures);

// Intersection observer for reveal animations
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// Stagger feature cards
document.querySelectorAll('.feat-card').forEach((card, i) => {
  card.style.transitionDelay = `${i * 60}ms`;
  revealObserver.observe(card);
});

// Stagger stat cards
document.querySelectorAll('.stat-card').forEach((card, i) => {
  card.style.transitionDelay = `${i * 80}ms`;
  revealObserver.observe(card);
});

// Stagger post cards
document.querySelectorAll('.post-card').forEach((card, i) => {
  card.style.transitionDelay = `${i * 80}ms`;
  revealObserver.observe(card);
});

// Welcome toast on load
window.addEventListener('load', () => {
  setTimeout(() => showToast('Explore GrowEasy — your AI marketing partner 🚀'), 800);
});

// Interactive progress bar in hero panel
const progFill = document.getElementById('prog-fill');
const progCount = document.getElementById('prog-count');
let completed = 1;
const total = 4;

function updateProgress() {
  const pct = Math.round((completed / total) * 100);
  if (progFill) progFill.style.width = pct + '%';
  if (progCount) progCount.textContent = completed + ' / ' + total;
}

// Simulate checklist ticking up on hero panel scroll-in
const heroPanel = document.querySelector('.hero-panel');
if (heroPanel) {
  const panelObs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      let step = completed;
      const tick = setInterval(() => {
        if (step < total) {
          step++;
          completed = step;
          updateProgress();
        } else {
          clearInterval(tick);
          setTimeout(() => {
            completed = 1;
            updateProgress();
          }, 1800);
        }
      }, 700);
      panelObs.disconnect();
    }
  }, { threshold: 0.5 });
  panelObs.observe(heroPanel);
}

// Smooth active nav link highlight
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.getAttribute('id');
  });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current ? 'var(--navy)' : '';
  });
}, { passive: true });
