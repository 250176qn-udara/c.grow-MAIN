// ─── LANGUAGE SELECTION (session-only, auth screen) ────────────
let selectedLanguage = 'en';

const I18N = {
  en: {
    'lang-label': 'Language',
    'txt-tab-login': 'Sign In',
    'txt-tab-register': 'Create Account',
    'txt-login-title': 'Welcome back',
    'txt-login-sub': 'Access your marketing workspace',
    'txt-email-label-1': 'Email Address',
    'txt-password-label-1': 'Password',
    'txt-forgot': 'Forgot password?',
    'txt-signin-btn': 'Sign In to Workspace',
    'txt-register-title': 'Create your account',
    'txt-register-sub': 'Free forever. No credit card needed.',
    'txt-name-label': 'Your Name',
    'txt-email-label-2': 'Email Address',
    'txt-password-label-2': 'Password',
    'txt-business-type-label': 'Business Type',
    'txt-select-type': 'Select type',
    'txt-location-label': 'Location',
    'txt-create-btn': 'Create Free Account'
  },
  ja: {
    'lang-label': '言語',
    'txt-tab-login': 'ログイン',
    'txt-tab-register': 'アカウント作成',
    'txt-login-title': 'おかえりなさい',
    'txt-login-sub': 'マーケティングワークスペースにアクセス',
    'txt-email-label-1': 'メールアドレス',
    'txt-password-label-1': 'パスワード',
    'txt-forgot': 'パスワードをお忘れですか?',
    'txt-signin-btn': 'ワークスペースにログイン',
    'txt-register-title': 'アカウントを作成',
    'txt-register-sub': '永久無料。クレジットカード不要。',
    'txt-name-label': 'お名前',
    'txt-email-label-2': 'メールアドレス',
    'txt-password-label-2': 'パスワード',
    'txt-business-type-label': '事業の種類',
    'txt-select-type': '種類を選択',
    'txt-location-label': '場所',
    'txt-create-btn': '無料アカウントを作成'
  },
  ne: {
    'lang-label': 'भाषा',
    'txt-tab-login': 'साइन इन',
    'txt-tab-register': 'खाता खोल्नुहोस्',
    'txt-login-title': 'फेरि स्वागत छ',
    'txt-login-sub': 'आफ्नो मार्केटिङ कार्यक्षेत्रमा पहुँच गर्नुहोस्',
    'txt-email-label-1': 'इमेल ठेगाना',
    'txt-password-label-1': 'पासवर्ड',
    'txt-forgot': 'पासवर्ड बिर्सनुभयो?',
    'txt-signin-btn': 'कार्यक्षेत्रमा साइन इन गर्नुहोस्',
    'txt-register-title': 'आफ्नो खाता खोल्नुहोस्',
    'txt-register-sub': 'सधैंभरि निःशुल्क। क्रेडिट कार्ड आवश्यक छैन।',
    'txt-name-label': 'तपाईंको नाम',
    'txt-email-label-2': 'इमेल ठेगाना',
    'txt-password-label-2': 'पासवर्ड',
    'txt-business-type-label': 'व्यवसायको प्रकार',
    'txt-select-type': 'प्रकार छान्नुहोस्',
    'txt-location-label': 'स्थान',
    'txt-create-btn': 'निःशुल्क खाता खोल्नुहोस्'
  },
  bn: {
    'lang-label': 'ভাষা',
    'txt-tab-login': 'সাইন ইন',
    'txt-tab-register': 'অ্যাকাউন্ট তৈরি করুন',
    'txt-login-title': 'আবার স্বাগতম',
    'txt-login-sub': 'আপনার মার্কেটিং ওয়ার্কস্পেসে প্রবেশ করুন',
    'txt-email-label-1': 'ইমেইল ঠিকানা',
    'txt-password-label-1': 'পাসওয়ার্ড',
    'txt-forgot': 'পাসওয়ার্ড ভুলে গেছেন?',
    'txt-signin-btn': 'ওয়ার্কস্পেসে সাইন ইন করুন',
    'txt-register-title': 'আপনার অ্যাকাউন্ট তৈরি করুন',
    'txt-register-sub': 'চিরতরে বিনামূল্যে। কোনো ক্রেডিট কার্ড লাগবে না।',
    'txt-name-label': 'আপনার নাম',
    'txt-email-label-2': 'ইমেইল ঠিকানা',
    'txt-password-label-2': 'পাসওয়ার্ড',
    'txt-business-type-label': 'ব্যবসার ধরন',
    'txt-select-type': 'ধরন নির্বাচন করুন',
    'txt-location-label': 'অবস্থান',
    'txt-create-btn': 'বিনামূল্যে অ্যাকাউন্ট তৈরি করুন'
  },
  hi: {
    'lang-label': 'भाषा',
    'txt-tab-login': 'साइन इन',
    'txt-tab-register': 'खाता बनाएं',
    'txt-login-title': 'वापसी पर स्वागत है',
    'txt-login-sub': 'अपने मार्केटिंग वर्कस्पेस तक पहुंचें',
    'txt-email-label-1': 'ईमेल पता',
    'txt-password-label-1': 'पासवर्ड',
    'txt-forgot': 'पासवर्ड भूल गए?',
    'txt-signin-btn': 'वर्कस्पेस में साइन इन करें',
    'txt-register-title': 'अपना खाता बनाएं',
    'txt-register-sub': 'हमेशा के लिए मुफ़्त। क्रेडिट कार्ड की आवश्यकता नहीं।',
    'txt-name-label': 'आपका नाम',
    'txt-email-label-2': 'ईमेल पता',
    'txt-password-label-2': 'पासवर्ड',
    'txt-business-type-label': 'व्यवसाय का प्रकार',
    'txt-select-type': 'प्रकार चुनें',
    'txt-location-label': 'स्थान',
    'txt-create-btn': 'मुफ़्त खाता बनाएं'
  },
  si: {
    'lang-label': 'භාෂාව',
    'txt-tab-login': 'පුරන්න',
    'txt-tab-register': 'ගිණුමක් සාදන්න',
    'txt-login-title': 'නැවත සාදරයෙන් පිළිගනිමු',
    'txt-login-sub': 'ඔබේ අලෙවිකරණ වැඩබිමට ප්‍රවේශ වන්න',
    'txt-email-label-1': 'විද්‍යුත් තැපැල් ලිපිනය',
    'txt-password-label-1': 'මුරපදය',
    'txt-forgot': 'මුරපදය අමතකද?',
    'txt-signin-btn': 'වැඩබිමට පුරන්න',
    'txt-register-title': 'ඔබේ ගිණුම සාදන්න',
    'txt-register-sub': 'සදහටම නොමිලේ. ක්‍රෙඩිට් කාඩ්පතක් අවශ්‍ය නැත.',
    'txt-name-label': 'ඔබේ නම',
    'txt-email-label-2': 'විද්‍යුත් තැපැල් ලිපිනය',
    'txt-password-label-2': 'මුරපදය',
    'txt-business-type-label': 'ව්‍යාපාර වර්ගය',
    'txt-select-type': 'වර්ගය තෝරන්න',
    'txt-location-label': 'ස්ථානය',
    'txt-create-btn': 'නොමිලේ ගිණුමක් සාදන්න'
  }
};

function setLanguage(lang) {
  selectedLanguage = lang;
  const dict = I18N[lang] || I18N.en;
  Object.keys(dict).forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = dict[id];
  });
}

const langSelect = document.getElementById('lang-select');
if (langSelect) {
  langSelect.addEventListener('change', (e) => setLanguage(e.target.value));
}



function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => toast.classList.remove('show'), 2400);
}

// ROUTING ARCHITECTURE
const landingView = document.getElementById('landing-view');
const authView = document.getElementById('auth-view');
const appView = document.getElementById('app-view');
const appPages = document.querySelectorAll('.app-page');

// ─── FLOATING DASHBOARD ILLUSTRATIONS ─────────────────────────
// Decorative only (aria-hidden). Animation is CSS (floatUp keyframe);
// this just randomizes each illustration so the drift feels organic
// instead of a row of identical clones moving in lockstep.
(function initFloatingIllustrations() {
  const host = document.getElementById('app-floaters');
  if (!host) return;

  // Small-business & marketing themed line-icon set, colored with brand tokens
  const icons = [
    { color: 'var(--amber)',  svg: '<path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 01-8 0"/>' },              // shopping bag
    { color: 'var(--coral)',  svg: '<path d="M3 11l18-5v14L3 15v-4z"/><path d="M3 15v4a2 2 0 002 2h1v-6"/>' },                                                       // megaphone
    { color: 'var(--green)',  svg: '<path d="M23 6l-9.5 9.5-5-5L1 18"/><path d="M17 6h6v6"/>' },                                                                     // trending up / growth
    { color: 'var(--purple)', svg: '<path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/>' },       // camera
    { color: 'var(--blue)',   svg: '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>' },                                       // map pin
    { color: 'var(--pink)',   svg: '<path d="M20 12v9a1 1 0 01-1 1H5a1 1 0 01-1-1v-9"/><path d="M2 7h20v5H2z"/><path d="M12 22V7"/><path d="M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 000-5C9 2 12 7 12 7z"/>' }, // gift
    { color: 'var(--teal)',   svg: '<path d="M18 8h1a4 4 0 010 8h-1"/><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4z"/><path d="M6 1v3M10 1v3M14 1v3"/>' },          // coffee cup
    { color: 'var(--navy)',   svg: '<path d="M9 21h6"/><path d="M12 3a6 6 0 00-3.5 10.9c.4.32.7.82.7 1.35V17h5.6v-1.75c0-.53.3-1.03.7-1.35A6 6 0 0012 3z"/>' },       // lightbulb / idea
    { color: 'var(--blue)',   svg: '<path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>' },                                                          // social chat
  ];

  const COUNT = 16;
  for (let i = 0; i < COUNT; i++) {
    const icon = icons[i % icons.length];
    const size     = 18 + Math.random() * 22;        // 18–40px
    const left     = Math.random() * 100;             // 0–100%
    const duration = 16 + Math.random() * 14;          // 16–30s per loop
    const delay    = -Math.random() * duration;        // negative = starts mid-flight, staggers them
    const drift    = (Math.random() * 80 - 40).toFixed(0); // -40 to 40px horizontal wander
    const spin     = (Math.random() * 40 - 20).toFixed(0); // -20 to 20deg rotation
    const opacity  = (0.08 + Math.random() * 0.14).toFixed(2);

    const el = document.createElement('div');
    el.className = 'floater';
    el.style.cssText = `
      left:${left}%;
      width:${size}px; height:${size}px;
      color:${icon.color};
      animation-duration:${duration}s;
      animation-delay:${delay}s;
      --floater-drift:${drift}px;
      --floater-spin:${spin}deg;
      --floater-opacity:${opacity};
    `;
    el.innerHTML = `<svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${icon.svg}</svg>`;
    host.appendChild(el);
  }
})();

let pendingTargetPage = 'dashboard'; // Defaults to dashboard after logging in
let isLoggedIn = false; // Tracks whether the user has already authenticated this session
let currentUser = null; // Holds the logged-in user's info for the sidebar panel

const PAGE_TITLES = {
  dashboard:  'Home',
  advisor:    'AI Advisor',
  generator:  'Post Generator',
  persona:    'Persona Builder',
  checklist:  'Daily Checklist',
  community:  'Community',
  stories:    'Success Stories',
  goals:      'Goals',
  report:     'Monthly Report',
  knowledge:  'Knowledge Base',
  promotions: 'Promotion Ideas',
};

function setActiveNav(pageId) {
  document.querySelectorAll('.side-link[data-page]').forEach(link => {
    link.classList.toggle('active', link.getAttribute('data-page') === pageId);
  });
  const titleEl = document.getElementById('app-page-title');
  if (titleEl) titleEl.textContent = PAGE_TITLES[pageId] || 'GrowEasy';
}

function navigateToPage(pageId) {
  pendingTargetPage = pageId; // Keep track of where they wanted to go

  if (isLoggedIn) {
    // Already authenticated this session — go straight into the app
    landingView.style.display = 'none';
    authView.style.display = 'none';
    appView.style.display = 'flex';

    appPages.forEach(page => page.style.display = 'none');
    const targetPage = document.getElementById(`page-${pageId}`);
    if (targetPage) targetPage.style.display = 'block';
    setActiveNav(pageId);

    // Trigger the page's own data loader directly (avoid re-dispatching the nav click,
    // which would call navigateToPage() again and loop)
    setTimeout(() => {
      switch (pageId) {
        case 'checklist': loadChecklist(); break;
        case 'community': loadCommunityPosts(); break;
        case 'stories':   loadStories(); break;
        case 'advisor':   loadAdvisorHistory(); break;
        case 'generator': loadSavedPosts(); break;
        case 'persona':   loadPersonaList(); break;
      }
    }, 0);

    const workspace = document.getElementById('app-workspace');
    if (workspace) workspace.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  // Not logged in yet — show Sign-In first
  landingView.style.display = 'none';
  appView.style.display = 'none';
  authView.style.display = 'block';

  showToast('Secure authentication required 🔒');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Handle real entry into the workspace after form submission
// ─── AUTH FORM → auth.php ─────────────────────────────────────


function exitAppView() {
  isLoggedIn = false;
  currentUser = null;
  appView.style.display = 'none';
  authView.style.display = 'none';
  landingView.style.display = 'block';
  showToast('Returned to main site');

  // Actually end the server-side session too, not just the client view
  const formData = new FormData();
  formData.append('action', 'logout');
  fetch('auth.php', { method: 'POST', body: formData }).catch(() => {});
}

// Event bindings for custom routing attributes
document.querySelectorAll('.app-route-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const targetPage = btn.getAttribute('data-page') || 'advisor';
    navigateToPage(targetPage);
  });
});

const exitBtn = document.getElementById('exit-app-btn');
const homeLogo = document.getElementById('go-home-logo');
const backToSiteBtn = document.getElementById('back-to-site-btn');

if (exitBtn) exitBtn.addEventListener('click', exitAppView);
if (homeLogo) homeLogo.addEventListener('click', exitAppView);
if (backToSiteBtn) backToSiteBtn.addEventListener('click', exitAppView);

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

// Stagger adjustments
document.querySelectorAll('.feat-card').forEach((card, i) => {
  card.style.transitionDelay = `${i * 60}ms`;
  revealObserver.observe(card);
});
document.querySelectorAll('.stat-card').forEach((card, i) => {
  card.style.transitionDelay = `${i * 80}ms`;
  revealObserver.observe(card);
});
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
// ─── AUTH FORM → auth.php ─────────────────────────────────────
const authForm = document.getElementById('auth-form');
if (authForm) {
  authForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email    = authForm.querySelector('input[type="email"]').value;
    const password = authForm.querySelector('input[type="password"]').value;

    const formData = new FormData();
    formData.append('action', 'login');
    formData.append('language', selectedLanguage);
    formData.append('email', email);
    formData.append('password', password);

    try {
      const res  = await fetch('auth.php', { method: 'POST', body: formData });
      const data = await res.json();

      if (data.success) {
        isLoggedIn = true;
        // Hide Auth, Show App
        authView.style.display = 'none';
        appView.style.display  = 'block';

        appPages.forEach(page => page.style.display = 'none');
        const targetPage = document.getElementById(`page-${pendingTargetPage}`);
        if (targetPage) targetPage.style.display = 'block';

        showToast(`Welcome back, ${data.user.name}! ⚡`);
      } else {
        showToast('❌ ' + data.message);
      }
    } catch (err) {
      showToast('❌ Connection error. Is the server running?');
    }
  });
}

// ─── AUTH TAB TOGGLE ──────────────────────────────────────────
function switchAuthTab(tab) {
  const loginForm    = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form');
  const tabLogin     = document.getElementById('tab-login');
  const tabRegister  = document.getElementById('tab-register');

  const activeStyle   = 'background: white; color: var(--navy); box-shadow: 0 1px 4px rgba(0,0,0,0.08);';
  const inactiveStyle = 'background: transparent; color: var(--muted); box-shadow: none;';

  if (tab === 'login') {
    loginForm.style.display    = 'block';
    registerForm.style.display = 'none';
    tabLogin.style.cssText    += activeStyle;
    tabRegister.style.cssText += inactiveStyle;
  } else {
    loginForm.style.display    = 'none';
    registerForm.style.display = 'block';
    tabLogin.style.cssText    += inactiveStyle;
    tabRegister.style.cssText += activeStyle;
  }
}

// ─── LOGIN FORM SUBMIT ────────────────────────────────────────
const loginForm = document.getElementById('login-form');
if (loginForm) {
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(loginForm);
    formData.append('action', 'login');
    formData.append('language', selectedLanguage);

    try {
      const res  = await fetch('auth.php', { method: 'POST', body: formData });
      const data = await res.json();

      if (data.success) {
        enterApp(data.user);
      } else {
        showToast('❌ ' + data.message);
      }
    } catch {
      showToast('❌ Connection error. Is Laragon running?');
    }
  });
}

// ─── REGISTER FORM SUBMIT ─────────────────────────────────────
const registerForm = document.getElementById('register-form');
if (registerForm) {
  registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(registerForm);
    formData.append('action', 'register');
    formData.append('language', selectedLanguage);

    try {
      const res  = await fetch('auth.php', { method: 'POST', body: formData });
      const data = await res.json();

      if (data.success) {
        enterApp(data.user);
      } else {
        showToast('❌ ' + data.message);
      }
    } catch {
      showToast('❌ Connection error. Is Laragon running?');
    }
  });
}

// ─── COMMUNITY PAGE ───────────────────────────────────────────

// Load posts when community page is opened
document.querySelectorAll('.app-route-btn').forEach(btn => {
  if (btn.getAttribute('data-page') === 'community') {
    btn.addEventListener('click', () => setTimeout(loadCommunityPosts, 300));
  }
});

async function loadCommunityPosts() {
  const feed = document.getElementById('community-feed');
  if (!feed) return;

  feed.innerHTML = '<div style="text-align:center; padding:40px; color:var(--muted);">Loading posts...</div>';

  try {
    const res  = await fetch('community.php?action=get_posts');
    const data = await res.json();

    if (!data.success) {
      feed.innerHTML = '<div style="text-align:center; padding:40px; color:var(--muted);">Could not load posts.</div>';
      return;
    }

    if (data.posts.length === 0) {
      feed.innerHTML = `
        <div style="text-align:center; padding:50px 20px; background:white; border-radius:var(--radius-lg); border:1px dashed var(--line);">
          <svg width="56" height="56" viewBox="0 0 40 40" fill="none" style="margin:0 auto 14px;">
            <circle cx="14" cy="14" r="5" fill="var(--purple)" opacity="0.45"/>
            <circle cx="27" cy="14" r="4" fill="var(--purple)" opacity="0.3"/>
            <path d="M6 31c1.4-5.4 4.4-8 8-8s6.6 2.6 8 8" stroke="var(--purple)" stroke-width="1.8" stroke-linecap="round" fill="none"/>
            <path d="M22 31c1-4 3-6.5 6-6.5s5 2.5 6 6.5" stroke="var(--purple)" stroke-width="1.8" stroke-linecap="round" fill="none" opacity="0.65"/>
          </svg>
          <p style="color:var(--muted); font-size:14px;">No posts yet. Be the first to share!</p>
        </div>`;
      return;
    }

    feed.innerHTML = data.posts.map(post => `
      <div class="post-card" style="background:white; padding:20px;">
        <div class="post-top">
          <div class="av lg" style="background:#d1fae5; color:#065f46;">${post.initials}</div>
          <div>
            <div class="post-name">${post.owner_name}
              <span style="font-weight:400; color:var(--muted); font-size:12px;">• ${post.time_ago}</span>
            </div>
            <div class="post-meta">
              <span class="badge green">${post.business_type}</span> · ${post.location}
            </div>
          </div>
        </div>
        <p class="post-body">${post.content}</p>
        <div class="post-footer">
          <span style="cursor:pointer;" onclick="likePost(${post.id}, this)">❤️ <span class="like-count">${post.likes_count}</span></span>
          <span>💬 ${post.replies_count} replies</span>
        </div>
      </div>
    `).join('');

  } catch {
    feed.innerHTML = '<div style="text-align:center; padding:40px; color:var(--muted);">Connection error.</div>';
  }
}

function toggleNewPostBox() {
  const box = document.getElementById('new-post-box');
  box.style.display = box.style.display === 'none' ? 'block' : 'none';
  if (box.style.display === 'block') {
    document.getElementById('new-post-text').focus();
  }
}

async function submitPost() {
  const text = document.getElementById('new-post-text').value.trim();
  if (!text) { showToast('Write something first!'); return; }

  const formData = new FormData();
  formData.append('action', 'create_post');
  formData.append('content', text);

  try {
    const res  = await fetch('community.php', { method: 'POST', body: formData });
    const data = await res.json();

    if (data.success) {
      document.getElementById('new-post-text').value = '';
      toggleNewPostBox();
      showToast('Post shared! 🎉');
      loadCommunityPosts();
    } else {
      showToast('❌ ' + data.message);
    }
  } catch {
    showToast('❌ Connection error.');
  }
}

// ─── SUCCESS STORIES PAGE (v2 — illustrated) ──────────────────

document.querySelectorAll('.app-route-btn').forEach(btn => {
  if (btn.getAttribute('data-page') === 'stories') {
    btn.addEventListener('click', () => setTimeout(loadStories, 300));
  }
});

function toggleStoryForm() {
  const box = document.getElementById('story-form-box');
  box.style.display = box.style.display === 'none' ? 'block' : 'none';
}

async function submitStory() {
  const achievement  = document.getElementById('story-achievement').value.trim();
  const timeframe    = document.getElementById('story-timeframe').value.trim();
  const metricValue  = document.getElementById('story-metric-value').value.trim();
  const metricUnit   = document.getElementById('story-metric-unit').value;
  const btn          = document.getElementById('story-submit-btn');

  if (!achievement || !timeframe || !metricValue) {
    showToast('Please fill in all fields');
    return;
  }

  btn.textContent = 'Generating... ⏳';
  btn.disabled = true;

  const formData = new FormData();
  formData.append('action', 'create_story');
  formData.append('achievement', achievement);
  formData.append('timeframe', timeframe);
  formData.append('metric_value', metricValue);
  formData.append('metric_unit', metricUnit);

  try {
    const res  = await fetch('success.php', { method: 'POST', body: formData });
    const data = await res.json();

    btn.textContent = 'Generate & share ✨';
    btn.disabled = false;

    if (data.success) {
      showToast('Your story is live! 🎉');
      document.getElementById('story-achievement').value = '';
      document.getElementById('story-timeframe').value = '';
      document.getElementById('story-metric-value').value = '';
      toggleStoryForm();
      loadStories();
    } else {
      showToast('❌ ' + data.message);
    }
  } catch {
    btn.textContent = 'Generate & share ✨';
    btn.disabled = false;
    showToast('❌ Connection error.');
  }
}

// ─── ICON LIBRARY: picks an illustration based on achievement text ─
function getStoryIcon(achievementText, colorVar) {
  const a = achievementText.toLowerCase();

  // Revenue / sales / money growth → rising bar chart
  if (a.includes('revenue') || a.includes('sales') || a.includes('income') || a.includes('profit')) {
    return `<svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect x="6" y="22" width="6" height="12" rx="1.5" fill="${colorVar}" opacity="0.35"/>
      <rect x="17" y="15" width="6" height="19" rx="1.5" fill="${colorVar}" opacity="0.6"/>
      <rect x="28" y="6" width="6" height="28" rx="1.5" fill="${colorVar}"/>
      <path d="M6 14L17 9L28 3" stroke="${colorVar}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <path d="M22 3H28V9" stroke="${colorVar}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    </svg>`;
  }

  // Referrals / customers / network → connected nodes
  if (a.includes('referral') || a.includes('customer') || a.includes('traffic') || a.includes('foot')) {
    return `<svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="9" r="5" fill="${colorVar}"/>
      <circle cx="8" cy="30" r="5" fill="${colorVar}" opacity="0.55"/>
      <circle cx="32" cy="30" r="5" fill="${colorVar}" opacity="0.55"/>
      <path d="M20 14V25M20 25L8 28M20 25L32 28" stroke="${colorVar}" stroke-width="2" stroke-linecap="round" fill="none"/>
    </svg>`;
  }

  // Time saved / efficiency → clock with check
  if (a.includes('time') || a.includes('hour') || a.includes('efficiency') || a.includes('saved')) {
    return `<svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="15" stroke="${colorVar}" stroke-width="2.5" fill="none"/>
      <path d="M20 11V20L26 24" stroke="${colorVar}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <circle cx="31" cy="9" r="7" fill="${colorVar}"/>
      <path d="M28 9L30 11L34 7" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    </svg>`;
  }

  // Engagement / social / followers → heart + spark
  if (a.includes('engagement') || a.includes('follower') || a.includes('social') || a.includes('like')) {
    return `<svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <path d="M20 33C20 33 6 24.5 6 14.5C6 9.5 10 6 14.5 6C17 6 19 7.2 20 9C21 7.2 23 6 25.5 6C30 6 34 9.5 34 14.5C34 24.5 20 33 20 33Z" fill="${colorVar}" opacity="0.85"/>
      <path d="M30 5L31.5 8.5L35 10L31.5 11.5L30 15L28.5 11.5L25 10L28.5 8.5L30 5Z" fill="${colorVar}"/>
    </svg>`;
  }

  // Default → upward trending arrow
  return `<svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <path d="M6 28L16 18L23 25L34 12" stroke="${colorVar}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <path d="M26 12H34V20" stroke="${colorVar}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  </svg>`;
}

async function loadStories() {
  const grid = document.getElementById('stories-grid');
  if (!grid) return;

  grid.innerHTML = '<div style="text-align:center; padding:40px; color:var(--muted);">Loading stories...</div>';

  try {
    const res  = await fetch('success.php?action=get_stories');
    const data = await res.json();

    if (!data.success || data.stories.length === 0) {
      grid.innerHTML = `
        <div style="text-align:center; padding:50px 20px; background:white; border-radius:var(--radius-lg); border:1px dashed var(--line);">
          <svg width="56" height="56" viewBox="0 0 40 40" fill="none" style="margin-bottom:14px;">
            <path d="M6 28L16 18L23 25L34 12" stroke="var(--green)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
          </svg>
          <p style="color:var(--muted); font-size:14px;">No stories yet. Be the first to share yours!</p>
        </div>`;
      return;
    }

    // Color rotation matching the original cards (green / blue / amber)
    const palette = [
      { main: '#0f9d58', bg: 'var(--green-light)', label: 'var(--green)' },
      { main: '#2563eb', bg: '#eaf1fd',             label: '#2563eb'     },
      { main: '#d97706', bg: '#fef3e0',             label: '#d97706'     }
    ];

    const topThree = data.stories.slice(0, 3);
    const rest      = data.stories.slice(3);

    // ── Illustrated stat cards (top 3) ──
    const statCardsHTML = `
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:18px; margin-bottom:30px;">
        ${topThree.map((s, i) => {
          const c = palette[i % 3];
          const valDisplay = s.metric_unit === 'x' ? '×' + s.metric_value : s.metric_value + s.metric_unit;
          return `
          <div style="background:white; border-radius:var(--radius-lg); padding:24px; border:1px solid var(--line); position:relative; overflow:hidden; transition:transform 0.2s, box-shadow 0.2s;"
            onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 8px 24px rgba(31,41,55,0.08)';"
            onmouseout="this.style.transform='none'; this.style.boxShadow='none';">
            <div style="width:56px; height:56px; border-radius:14px; background:${c.bg}; display:flex; align-items:center; justify-content:center; margin-bottom:16px;">
              ${getStoryIcon(s.achievement, c.main)}
            </div>
            <div style="font-size:30px; font-weight:800; color:${c.label}; margin-bottom:4px; line-height:1;">${valDisplay}</div>
            <div style="font-size:14px; font-weight:700; color:var(--navy); margin-bottom:4px;">${s.achievement}</div>
            <div style="font-size:12px; color:var(--muted);">${s.business_type} · ${s.location} · ${s.timeframe}</div>
          </div>`;
        }).join('')}
      </div>`;

    // ── Featured story cards (full list, with quote styling) ──
    const featuredHTML = data.stories.map((s, i) => {
      const c = palette[i % 3];
      return `
      <div style="background: white; border: 1px solid var(--line); border-radius: var(--radius-lg); padding: 26px; margin-bottom:16px; display:flex; gap:18px; align-items:flex-start;">
        <div style="width:48px; height:48px; border-radius:12px; background:${c.bg}; display:flex; align-items:center; justify-content:center; flex-shrink:0;">
          ${getStoryIcon(s.achievement, c.main).replace('width="40" height="40"', 'width="26" height="26"')}
        </div>
        <div style="flex:1; min-width:0;">
          <div style="display:flex; align-items:center; gap:8px; margin-bottom:10px; flex-wrap:wrap;">
            <span style="background:${c.bg}; color:${c.label}; font-size:11px; font-weight:700; padding:4px 10px; border-radius:99px;">${s.achievement}</span>
            <span style="font-size:12px; color:var(--muted);">${s.business_type} · ${s.location}</span>
          </div>
          <p style="color: var(--text, var(--navy)); line-height: 1.65; font-size:14px; font-style:italic; border-left:3px solid ${c.main}; padding-left:14px;">"${s.story_text}"</p>
        </div>
      </div>`;
    }).join('');

    grid.innerHTML = statCardsHTML + `
      <h3 style="color:var(--navy); font-size:16px; margin:8px 0 16px;">Community spotlights</h3>
      ${featuredHTML}`;

  } catch {
    grid.innerHTML = '<div style="text-align:center; padding:40px; color:var(--muted);">Connection error.</div>';
  }
}

async function likePost(postId, el) {
  const formData = new FormData();
  formData.append('action', 'like_post');
  formData.append('post_id', postId);

  try {
    const res  = await fetch('community.php', { method: 'POST', body: formData });
    const data = await res.json();

    if (data.success) {
      el.querySelector('.like-count').textContent = data.likes_count;
    }
  } catch {
    showToast('❌ Could not like post.');
  }
}
// ─── CHECKLIST PAGE ───────────────────────────────────────────

// Load tasks when checklist page is opened
document.querySelectorAll('.app-route-btn').forEach(btn => {
  if (btn.getAttribute('data-page') === 'checklist') {
    btn.addEventListener('click', () => setTimeout(loadChecklist, 300));
  }
});

async function loadChecklist() {
  const container = document.getElementById('checklist-tasks');
  if (!container) return;

  container.innerHTML = '<div style="text-align:center; padding:40px; color:var(--muted);">Loading tasks...</div>';

  try {
    const res  = await fetch('checklist.php?action=get_tasks');
    const data = await res.json();

    if (!data.success) {
      container.innerHTML = '<div style="text-align:center; padding:40px; color:var(--muted);">Could not load tasks.</div>';
      return;
    }

    updateChecklistProgress(data.completed, data.total);

    container.innerHTML = data.tasks.map(task => `
      <div class="post-card" style="background:white; padding:18px 20px; display:flex; align-items:flex-start; gap:14px; border-radius:var(--radius-lg);">
        <input
          type="checkbox"
          id="task-${task.id}"
          ${task.is_completed == 1 ? 'checked' : ''}
          onchange="toggleTask(${task.id}, this)"
          style="width:20px; height:20px; margin-top:3px; accent-color:var(--teal); cursor:pointer; flex-shrink:0; border-radius:6px;"
        >
        <label for="task-${task.id}" style="cursor:pointer; flex:1;">
          <div style="font-weight:700; color:var(--navy); font-size:14px; margin-bottom:4px;
            ${task.is_completed == 1 ? 'text-decoration:line-through; opacity:0.5;' : ''}">
            ${task.task_name}
          </div>
          <div style="font-size:13px; color:var(--muted);">${task.description ?? ''}</div>
        </label>
        ${task.is_completed == 1
          ? '<span class="badge green" style="flex-shrink:0;">Done ✓</span>'
          : '<span class="badge" style="flex-shrink:0; background:var(--amber-light); color:#c9852e;">Pending</span>'
        }
      </div>
    `).join('');

  } catch {
    container.innerHTML = '<div style="text-align:center; padding:40px; color:var(--muted);">Connection error.</div>';
  }
}

async function toggleTask(taskId, checkbox) {
  const isCompleted = checkbox.checked ? 1 : 0;

  const formData = new FormData();
  formData.append('action', 'toggle_task');
  formData.append('task_id', taskId);
  formData.append('is_completed', isCompleted);

  try {
    const res  = await fetch('checklist.php', { method: 'POST', body: formData });
    const data = await res.json();

    if (data.success) {
      updateChecklistProgress(data.completed, data.total);
      // Reload to update strikethrough + badge
      loadChecklist();
      if (isCompleted) showToast('Task completed! 🎉');
    } else {
      showToast('❌ ' + data.message);
      checkbox.checked = !checkbox.checked; // revert
    }
  } catch {
    showToast('❌ Connection error.');
    checkbox.checked = !checkbox.checked; // revert
  }
}

function updateChecklistProgress(completed, total) {
  const bar   = document.getElementById('checklist-bar');
  const count = document.getElementById('checklist-count');
  if (!bar || !count) return;

  const pct = total > 0 ? Math.round((completed / total) * 100) : 0;
  bar.style.width     = pct + '%';
  count.textContent   = `${completed} / ${total}`;
}
// ─── ADVISOR CHAT PAGE ────────────────────────────────────────

// Load history when advisor page is opened
document.querySelectorAll('.app-route-btn').forEach(btn => {
  if (btn.getAttribute('data-page') === 'advisor') {
    btn.addEventListener('click', () => setTimeout(loadAdvisorHistory, 300));
  }
});

async function loadAdvisorHistory() {
  const chat = document.getElementById('advisor-chat');
  if (!chat) return;

  try {
    const res  = await fetch('advisor.php?action=get_history');
    const data = await res.json();

    if (!data.success || data.messages.length === 0) {
      // Show default welcome message
      chat.innerHTML = '<div class="chat-bubble ai">👋 Welcome! What specific marketing goal are we targeting today?</div>';
      return;
    }

    // Render saved messages
    chat.innerHTML = data.messages.map(msg => `
      <div class="chat-bubble ${msg.sender === 'user' ? 'user' : 'ai'}">
        ${msg.message_text}
      </div>
    `).join('');

    scrollChatToBottom();

  } catch {
    // Silently keep the default welcome message
  }
}

async function sendAdvisorMessage() {
  const input   = document.getElementById('advisor-input');
  const chat    = document.getElementById('advisor-chat');
  const message = input.value.trim();

  if (!message) return;

  // Show user message immediately
  chat.innerHTML += `<div class="chat-bubble user">${message}</div>`;
  input.value = '';
  scrollChatToBottom();

  // Show typing indicator
  const typingId = 'typing-' + Date.now();
  chat.innerHTML += `
    <div id="${typingId}" class="chat-typing">
      <span></span><span></span><span></span>
    </div>`;
  scrollChatToBottom();

  const formData = new FormData();
  formData.append('action', 'send_message');
  formData.append('message', message);

  try {
    const res  = await fetch('advisor.php', { method: 'POST', body: formData });
    const data = await res.json();

    // Remove typing indicator
    document.getElementById(typingId)?.remove();

    if (data.success) {
      chat.innerHTML += `<div class="chat-bubble ai">${data.reply}</div>`;
    } else {
      chat.innerHTML += `<div class="chat-bubble ai">❌ ${data.message}</div>`;
    }

    scrollChatToBottom();

  } catch {
    document.getElementById(typingId)?.remove();
    chat.innerHTML += `<div class="chat-bubble ai">❌ Connection error. Is Laragon running?</div>`;
    scrollChatToBottom();
  }
}

async function clearAdvisorChat() {
  const formData = new FormData();
  formData.append('action', 'clear_history');

  try {
    await fetch('advisor.php', { method: 'POST', body: formData });
    const chat = document.getElementById('advisor-chat');
    chat.innerHTML = '<div class="chat-bubble ai">👋 Welcome! What specific marketing goal are we targeting today?</div>';
    showToast('Chat cleared');
  } catch {
    showToast('❌ Could not clear chat.');
  }
}

function scrollChatToBottom() {
  const chat = document.getElementById('advisor-chat');
  if (chat) chat.scrollTop = chat.scrollHeight;
}
// ─── POST GENERATOR PAGE ──────────────────────────────────────

// Load saved posts when generator page is opened
document.querySelectorAll('.app-route-btn').forEach(btn => {
  if (btn.getAttribute('data-page') === 'generator') {
    btn.addEventListener('click', () => setTimeout(loadSavedPosts, 300));
  }
});

// Store last generated content for saving
let lastGenerated = { prompt: '', content: '', platform: '' };

async function generatePosts() {
  const prompt   = document.getElementById('generator-prompt').value.trim();
  const platform = document.getElementById('generator-platform').value;
  const btn      = document.getElementById('generate-btn');
  const results  = document.getElementById('generator-results');
  const output   = document.getElementById('generator-output');

  if (!prompt) { showToast('Tell us what you are promoting first!'); return; }

  // Loading state
  btn.textContent = 'Generating... ⏳';
  btn.disabled    = true;
  results.style.display = 'none';

  const formData = new FormData();
  formData.append('action', 'generate');
  formData.append('prompt_idea', prompt);
  formData.append('platform', platform);

  try {
    const res  = await fetch('generator.php', { method: 'POST', body: formData });
    const data = await res.json();

    btn.textContent = 'Generate Post Ideas ✨';
    btn.disabled    = false;

    if (!data.success) {
      showToast('❌ ' + data.message);
      return;
    }

    // Store for saving
    lastGenerated = {
      prompt:   data.prompt_idea,
      content:  data.generated_content,
      platform: data.platform
    };

    // Split into 3 post cards by "--- Post N ---" separator
    const posts = data.generated_content
      .split(/---\s*Post\s*\d+\s*---/)
      .map(p => p.trim())
      .filter(p => p.length > 0);

    output.innerHTML = posts.map((post, i) => `
      <div style="background:white; border-radius:12px; padding:18px; border:1px solid var(--line);">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
          <span style="font-size:12px; font-weight:700; color:var(--teal);">Post ${i + 1} · ${platform}</span>
          <button onclick="copyPost(this)" data-text="${encodeURIComponent(post)}"
            style="background:none; border:1px solid var(--line); border-radius:6px; padding:4px 10px; font-size:12px; cursor:pointer; color:var(--navy);">
            Copy
          </button>
        </div>
        <p style="font-size:14px; line-height:1.7; color:var(--text); white-space:pre-wrap;">${post}</p>
      </div>
    `).join('');

    results.style.display = 'block';
    showToast('3 posts generated! 🎉');

  } catch {
    btn.textContent = 'Generate Post Ideas ✨';
    btn.disabled    = false;
    showToast('❌ Connection error. Is Laragon running?');
  }
}

function copyPost(btn) {
  const text = decodeURIComponent(btn.getAttribute('data-text'));
  navigator.clipboard.writeText(text).then(() => {
    btn.textContent = 'Copied ✓';
    setTimeout(() => btn.textContent = 'Copy', 2000);
  });
}

async function saveGeneratedPost() {
  if (!lastGenerated.prompt) {
    showToast('Generate some posts first!');
    return;
  }

  const formData = new FormData();
  formData.append('action', 'save_post');
  formData.append('prompt_idea', lastGenerated.prompt);
  formData.append('generated_content', lastGenerated.content);
  formData.append('platform', lastGenerated.platform);

  try {
    const res  = await fetch('generator.php', { method: 'POST', body: formData });
    const data = await res.json();

    if (data.success) {
      showToast('Posts saved! 💾');
      loadSavedPosts();
    } else {
      showToast('❌ ' + data.message);
    }
  } catch {
    showToast('❌ Connection error.');
  }
}

async function loadSavedPosts() {
  const container = document.getElementById('saved-posts');
  if (!container) return;

  try {
    const res  = await fetch('generator.php?action=get_saved');
    const data = await res.json();

    if (!data.success || data.posts.length === 0) {
      container.innerHTML = '<div style="text-align:center; padding:20px; color:var(--muted); font-size:13px;">No saved posts yet.</div>';
      return;
    }

    container.innerHTML = data.posts.map(post => `
      <div style="background:white; border-radius:12px; padding:18px; border:1px solid var(--line);">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
          <div>
            <span style="font-size:13px; font-weight:700; color:var(--navy);">${post.prompt_idea}</span>
            <span class="badge green" style="margin-left:8px;">${post.platform}</span>
          </div>
          <button onclick="deletePost(${post.id}, this)"
            style="background:none; border:none; color:var(--muted); font-size:18px; cursor:pointer; line-height:1;">×</button>
        </div>
        <p style="font-size:13px; color:var(--muted); white-space:pre-wrap; line-height:1.6;">${post.generated_content.substring(0, 200)}...</p>
      </div>
    `).join('');

  } catch {
    container.innerHTML = '<div style="text-align:center; padding:20px; color:var(--muted); font-size:13px;">Connection error.</div>';
  }
}

async function deletePost(postId, btn) {
  const formData = new FormData();
  formData.append('action', 'delete_post');
  formData.append('post_id', postId);

  try {
    const res  = await fetch('generator.php', { method: 'POST', body: formData });
    const data = await res.json();

    if (data.success) {
      btn.closest('div[style]').remove();
      showToast('Post deleted');
    } else {
      showToast('❌ ' + data.message);
    }
  } catch {
    showToast('❌ Connection error.');
  }
}
// ─── PERSONA BUILDER PAGE ─────────────────────────────────────

document.querySelectorAll('.app-route-btn').forEach(btn => {
  if (btn.getAttribute('data-page') === 'persona') {
    btn.addEventListener('click', () => setTimeout(loadPersonaList, 300));
  }
});

function togglePersonaForm() {
  const box = document.getElementById('persona-form-box');
  box.style.display = box.style.display === 'none' ? 'block' : 'none';
}

async function submitPersona() {
  const name        = document.getElementById('persona-name').value.trim();
  const description = document.getElementById('persona-description').value.trim();
  const btn         = document.getElementById('persona-submit-btn');

  if (!description) { showToast('Describe your ideal customer first'); return; }

  btn.textContent = 'Generating... ⏳';
  btn.disabled = true;

  const formData = new FormData();
  formData.append('action', 'create_persona');
  formData.append('persona_name', name);
  formData.append('description', description);

  try {
    const res  = await fetch('persona.php', { method: 'POST', body: formData });
    const data = await res.json();

    btn.textContent = 'Generate Persona ✨';
    btn.disabled = false;

    if (data.success) {
      showToast('Persona created! 🎯');
      document.getElementById('persona-name').value = '';
      document.getElementById('persona-description').value = '';
      togglePersonaForm();
      renderPersonaDiagram(data.persona);
      loadPersonaList();
    } else {
      showToast('❌ ' + data.message);
    }
  } catch {
    btn.textContent = 'Generate Persona ✨';
    btn.disabled = false;
    showToast('❌ Connection error.');
  }
}

async function loadPersonaList() {
  const list = document.getElementById('persona-list');
  if (!list) return;

  try {
    const res  = await fetch('persona.php?action=get_personas');
    const data = await res.json();

    if (!data.success || data.personas.length === 0) {
      list.innerHTML = `
        <div class="persona-empty">
          <div class="persona-empty-icon">
            <svg width="22" height="22" viewBox="0 0 40 40" fill="none">
              <rect x="6" y="9" width="28" height="22" rx="5" fill="var(--purple)" opacity="0.14"/>
              <rect x="6" y="9" width="28" height="22" rx="5" stroke="var(--purple)" stroke-width="1.8"/>
              <circle cx="15" cy="18" r="3.4" fill="var(--purple)" opacity="0.5"/>
              <path d="M9.5 26c1-2.8 3-4.2 5.5-4.2s4.5 1.4 5.5 4.2" stroke="var(--purple)" stroke-width="1.8" stroke-linecap="round" fill="none"/>
            </svg>
          </div>
          <p>No personas yet. Build your first one above.</p>
        </div>`;
      return;
    }

    list.innerHTML = data.personas.map(p => `
      <div class="persona-mini" onclick='showPersonaFromList(${JSON.stringify(p).replace(/'/g, "&apos;")})'>
        <div class="persona-mini-avatar">${p.name.substring(0,2).toUpperCase()}</div>
        <div>
          <div class="persona-mini-name">${p.name}</div>
          <div class="persona-mini-sub">${p.age} · ${p.occupation}</div>
        </div>
        <button class="persona-mini-delete" onclick="event.stopPropagation(); deletePersonaCard(${p.id}, this)">×</button>
      </div>
    `).join('');

    // Auto-show the most recent persona's diagram if nothing is shown
    const container = document.getElementById('persona-diagram-container');
    if (container && container.innerHTML.trim() === '') {
      renderPersonaDiagram(data.personas[0]);
    }

  } catch {
    list.innerHTML = '<div style="color:var(--muted); font-size:13px;">Connection error.</div>';
  }
}

function showPersonaFromList(persona) {
  renderPersonaDiagram(persona);
  document.getElementById('persona-diagram-container').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

async function deletePersonaCard(personaId, btn) {
  const formData = new FormData();
  formData.append('action', 'delete_persona');
  formData.append('persona_id', personaId);

  try {
    const res  = await fetch('persona.php', { method: 'POST', body: formData });
    const data = await res.json();

    if (data.success) {
      showToast('Persona deleted');
      loadPersonaList();
    } else {
      showToast('❌ ' + data.message);
    }
  } catch {
    showToast('❌ Connection error.');
  }
}

// ─── RENDER PERSONA PROFILE CARD (uses real AI data) ──────────
function renderPersonaDiagram(p) {
  const container = document.getElementById('persona-diagram-container');
  if (!container) return;

  const initials = p.name.substring(0, 2).toUpperCase();

  function escapeHTML(str) {
    return String(str ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  // Turn a "a | b | c" string into individual chips
  function chipList(value) {
    return String(value ?? '')
      .split('|')
      .map(v => v.trim())
      .filter(Boolean)
      .map(v => `<span class="persona-chip">${escapeHTML(v)}</span>`)
      .join('');
  }

  const attrs = [
    { label: 'Needs',           body: `<div class="persona-chip-row">${chipList(p.needs)}</div>` },
    { label: 'Preferred channels', body: `<div class="persona-chip-row">${chipList(p.channels)}</div>` },
    { label: 'Pain point',       body: `<p class="persona-attr-text">${escapeHTML(p.pain_point)}</p>` },
    { label: 'What motivates them', body: `<p class="persona-attr-text">${escapeHTML(p.motivator)}</p>` },
  ];

  container.innerHTML = `
    <div class="persona-card">
      <div class="persona-card-header">
        <div class="persona-avatar">${escapeHTML(initials)}</div>
        <div>
          <div class="persona-name">${escapeHTML(p.name)}</div>
          <div class="persona-meta">${escapeHTML(p.age)} yrs old · ${escapeHTML(p.occupation)}</div>
        </div>
      </div>
      <div class="persona-attrs">
        ${attrs.map(a => `
          <div class="persona-attr">
            <div class="persona-attr-label">${a.label}</div>
            ${a.body}
          </div>
        `).join('')}
      </div>
    </div>
  `;
}
// ─── GOAL TRACKER PAGE ────────────────────────────────────────

document.querySelectorAll('.app-route-btn').forEach(btn => {
  if (btn.getAttribute('data-page') === 'goals') {
    btn.addEventListener('click', () => setTimeout(loadGoals, 300));
  }
});

function toggleGoalForm() {
  const box = document.getElementById('goal-form-box');
  box.style.display = box.style.display === 'none' ? 'block' : 'none';
  // Set min date to tomorrow
  const dateInput = document.getElementById('goal-deadline');
  if (dateInput && !dateInput.value) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    dateInput.min = tomorrow.toISOString().split('T')[0];
  }
}

async function createGoal() {
  const title    = document.getElementById('goal-title').value.trim();
  const target   = document.getElementById('goal-target').value;
  const unit     = document.getElementById('goal-unit').value;
  const deadline = document.getElementById('goal-deadline').value;

  if (!title || !target || !deadline) { showToast('Please fill in all fields'); return; }

  const formData = new FormData();
  formData.append('action', 'create_goal');
  formData.append('goal_title', title);
  formData.append('target_value', target);
  formData.append('unit', unit);
  formData.append('deadline', deadline);

  try {
    const res  = await fetch('goals.php', { method: 'POST', body: formData });
    const data = await res.json();

    if (data.success) {
      showToast('Goal created! 🏆');
      document.getElementById('goal-title').value   = '';
      document.getElementById('goal-target').value  = '';
      document.getElementById('goal-deadline').value = '';
      toggleGoalForm();
      loadGoals();
    } else {
      showToast('❌ ' + data.message);
    }
  } catch {
    showToast('❌ Connection error.');
  }
}

async function loadGoals() {
  const list = document.getElementById('goals-list');
  if (!list) return;

  list.innerHTML = '<div style="text-align:center; padding:40px; color:var(--muted);">Loading goals...</div>';

  try {
    const res  = await fetch('goals.php?action=get_goals');
    const data = await res.json();

    if (!data.success || data.goals.length === 0) {
      list.innerHTML = `
        <div style="text-align:center; padding:50px 20px; background:white; border-radius:var(--radius-lg); border:1px dashed var(--line);">
          <div style="font-size:40px; margin-bottom:12px;">🏆</div>
          <p style="color:var(--muted); font-size:14px;">No goals yet. Set your first business goal!</p>
        </div>`;
      return;
    }

    list.innerHTML = data.goals.map(g => {
      const statusColor = g.status === 'completed' ? 'var(--teal)' : g.status === 'expired' ? 'var(--coral)' : 'var(--blue)';
      const statusBg    = g.status === 'completed' ? 'var(--green-light)' : g.status === 'expired' ? 'var(--coral-light)' : 'var(--blue-light)';
      const statusLabel = g.status === 'completed' ? '✓ Completed' : g.status === 'expired' ? '✗ Expired' : `${g.days_left} days left`;
      const barColor    = g.status === 'completed' ? 'linear-gradient(90deg, var(--green), var(--teal))' :
                          g.status === 'expired'   ? 'var(--coral)' :
                                                     'linear-gradient(90deg, var(--blue), #4f8ef7)';

      return `
      <div style="background:white; border-radius:var(--radius-lg); padding:22px; border:1px solid var(--line); box-shadow:0 4px 16px rgba(45,49,66,0.03);">
        <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:14px; flex-wrap:wrap; gap:8px;">
          <div>
            <div style="font-weight:700; color:var(--navy); font-size:15px; margin-bottom:4px;">${g.goal_title}</div>
            <div style="font-size:12px; color:var(--muted);">Deadline: ${g.deadline}</div>
          </div>
          <div style="display:flex; gap:8px; align-items:center;">
            <span style="font-size:11px; font-weight:700; padding:4px 10px; border-radius:999px; background:${statusBg}; color:${statusColor};">${statusLabel}</span>
            <button onclick="deleteGoal(${g.id})" style="background:none; border:none; color:var(--muted); font-size:18px; cursor:pointer; line-height:1;">×</button>
          </div>
        </div>

        <!-- Progress bar -->
        <div style="display:flex; justify-content:space-between; font-size:13px; margin-bottom:6px;">
          <span style="color:var(--muted);">Progress</span>
          <span style="font-weight:700; color:var(--navy);">${parseFloat(g.current_value).toLocaleString()} / ${parseFloat(g.target_value).toLocaleString()} ${g.unit} <span style="color:${statusColor};">(${g.pct}%)</span></span>
        </div>
        <div style="background:var(--soft); border-radius:999px; height:10px; margin-bottom:16px; overflow:hidden;">
          <div style="background:${barColor}; height:10px; border-radius:999px; width:${g.pct}%; transition:width 0.5s ease;"></div>
        </div>

        <!-- Update progress (only for active goals) -->
        ${g.status === 'active' ? `
        <div style="display:flex; gap:10px; align-items:center;">
          <input type="number" id="progress-${g.id}" placeholder="Update current number (e.g. 120)" value="${parseFloat(g.current_value)}"
            style="flex:1; padding:10px 14px; border-radius:10px; border:1px solid var(--line); font-size:14px; outline:none;">
          <button class="btn primary" onclick="updateProgress(${g.id})" style="padding:10px 18px; font-size:13px; white-space:nowrap;">Update</button>
        </div>` : ''}
      </div>`;
    }).join('');

  } catch {
    list.innerHTML = '<div style="text-align:center; padding:40px; color:var(--muted);">Connection error.</div>';
  }
}

async function updateProgress(goalId) {
  const input = document.getElementById(`progress-${goalId}`);
  const value = parseFloat(input.value);

  if (isNaN(value) || value < 0) { showToast('Enter a valid number'); return; }

  const formData = new FormData();
  formData.append('action', 'update_progress');
  formData.append('goal_id', goalId);
  formData.append('current_value', value);

  try {
    const res  = await fetch('goals.php', { method: 'POST', body: formData });
    const data = await res.json();

    if (data.success) {
      showToast('Progress updated! 💪');
      loadGoals();
    } else {
      showToast('❌ ' + data.message);
    }
  } catch {
    showToast('❌ Connection error.');
  }
}

async function deleteGoal(goalId) {
  const formData = new FormData();
  formData.append('action', 'delete_goal');
  formData.append('goal_id', goalId);

  try {
    const res  = await fetch('goals.php', { method: 'POST', body: formData });
    const data = await res.json();

    if (data.success) {
      showToast('Goal deleted');
      loadGoals();
    } else {
      showToast('❌ ' + data.message);
    }
  } catch {
    showToast('❌ Connection error.');
  }
}

// ─── MONTHLY REPORT CARD ──────────────────────────────────────

document.querySelectorAll('.app-route-btn').forEach(btn => {
  if (btn.getAttribute('data-page') === 'report') {
    btn.addEventListener('click', () => {
      // Set month picker to current month
      const monthInput = document.getElementById('report-month');
      if (monthInput && !monthInput.value) {
        const now = new Date();
        monthInput.value = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
      }
      setTimeout(loadReport, 300);
    });
  }
});

async function loadReport() {
  const container = document.getElementById('report-content');
  const monthInput = document.getElementById('report-month');
  if (!container) return;

  const now = new Date();
  const month = monthInput?.value || `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;

  container.innerHTML = '<div style="text-align:center; padding:40px; color:var(--muted);">Generating report...</div>';

  try {
    const res  = await fetch(`report.php?month=${month}`);
    const data = await res.json();
    if (!data.success) { container.innerHTML = '<div style="text-align:center; padding:40px; color:var(--muted);">Could not load report.</div>'; return; }

    const budgetPct = data.budget_limit > 0 ? Math.min(100, Math.round((data.budget_spent / data.budget_limit) * 100)) : 0;
    const budgetColor = budgetPct > 90 ? 'var(--coral)' : budgetPct > 70 ? '#f3b15e' : 'var(--green)';

    container.innerHTML = `
      <!-- Grade Card -->
      <div style="background:linear-gradient(135deg, var(--navy), #3d4154); border-radius:var(--radius-xl); padding:32px; margin-bottom:24px; color:white; display:flex; align-items:center; gap:28px; flex-wrap:wrap; position:relative; overflow:hidden;">
        <div style="position:absolute; top:-40px; right:-40px; width:180px; height:180px; border-radius:50%; background:rgba(255,255,255,0.04);"></div>
        <div style="text-align:center; flex-shrink:0;">
          <div style="width:90px; height:90px; border-radius:50%; background:${data.grade.color}; display:flex; align-items:center; justify-content:center; font-size:40px; font-weight:800; color:white; box-shadow:0 8px 24px rgba(0,0,0,0.2); margin:0 auto 8px;">${data.grade.label}</div>
          <div style="font-size:28px; font-weight:800; color:white;">${data.overall_score}<span style="font-size:16px; opacity:0.7;">/100</span></div>
        </div>
        <div style="flex:1; min-width:200px;">
          <div style="font-size:11px; font-weight:700; letter-spacing:.08em; text-transform:uppercase; color:rgba(255,255,255,0.5); margin-bottom:6px;">Overall Score · ${data.month}</div>
          <div style="font-size:20px; font-weight:700; margin-bottom:8px;">Marketing Report Card</div>
          <div style="font-size:14px; color:rgba(255,255,255,0.7); line-height:1.6;">${data.grade.msg}</div>
        </div>
      </div>

      <!-- Stat Cards Row -->
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(150px, 1fr)); gap:14px; margin-bottom:24px;">
        ${statCard('✅', 'Checklist', data.checklist_pct + '%', 'completion rate', 'var(--green-light)', 'var(--teal)')}
        ${statCard('✨', 'Posts Made', data.posts_generated, 'generated this month', 'var(--blue-light)', 'var(--blue)')}
        ${statCard('👥', 'Community', data.community_posts, 'posts shared', 'var(--purple-light)', 'var(--purple)')}
        ${statCard('💬', 'Advisor', data.advisor_messages, 'questions asked', 'var(--amber-light)', '#c9852e')}
        ${statCard('🏆', 'Goals', `${data.goals.completed}/${data.goals.total}`, 'completed', 'var(--green-light)', 'var(--teal)')}
      </div>

      <!-- Checklist Progress Bar -->
      <div style="background:white; border-radius:var(--radius-lg); padding:22px; margin-bottom:16px; border:1px solid var(--line);">
        <div style="display:flex; justify-content:space-between; margin-bottom:10px;">
          <span style="font-weight:700; color:var(--navy); font-size:14px;">✅ Checklist completion</span>
          <span style="font-weight:700; color:var(--teal);">${data.checklist_pct}%</span>
        </div>
        <div style="background:var(--soft); border-radius:999px; height:10px; overflow:hidden;">
          <div style="background:linear-gradient(90deg,var(--green),var(--teal)); height:10px; border-radius:999px; width:${data.checklist_pct}%; transition:width 0.6s ease;"></div>
        </div>
        <div style="font-size:12px; color:var(--muted); margin-top:8px;">${data.checklist_pct >= 75 ? '🎉 Great habit consistency!' : data.checklist_pct >= 50 ? '💪 Keep going — you are halfway there.' : '📌 Try to complete more checklist items daily.'}</div>
      </div>

      <!-- Active Goals -->
      ${data.active_goals.length > 0 ? `
      <div style="background:white; border-radius:var(--radius-lg); padding:22px; margin-bottom:16px; border:1px solid var(--line);">
        <div style="font-weight:700; color:var(--navy); font-size:14px; margin-bottom:14px;">🏆 Active goals progress</div>
        ${data.active_goals.map(g => `
          <div style="margin-bottom:14px;">
            <div style="display:flex; justify-content:space-between; font-size:13px; margin-bottom:5px;">
              <span style="color:var(--navy); font-weight:600;">${g.goal_title}</span>
              <span style="color:var(--blue); font-weight:700;">${parseFloat(g.current_value).toLocaleString()} / ${parseFloat(g.target_value).toLocaleString()} ${g.unit}</span>
            </div>
            <div style="background:var(--soft); border-radius:999px; height:8px; overflow:hidden;">
              <div style="background:linear-gradient(90deg,var(--blue),#4f8ef7); height:8px; border-radius:999px; width:${Math.min(100, g.pct)}%;"></div>
            </div>
          </div>
        `).join('')}
      </div>` : ''}

      <!-- Budget Summary -->
      ${data.budget_limit > 0 ? `
      <div style="background:white; border-radius:var(--radius-lg); padding:22px; border:1px solid var(--line);">
        <div style="display:flex; justify-content:space-between; margin-bottom:10px;">
          <span style="font-weight:700; color:var(--navy); font-size:14px;">💰 Budget used</span>
          <span style="font-weight:700; color:${budgetColor};">¥${data.budget_spent.toLocaleString()} / ¥${data.budget_limit.toLocaleString()}</span>
        </div>
        <div style="background:var(--soft); border-radius:999px; height:10px; overflow:hidden;">
          <div style="background:${budgetColor}; height:10px; border-radius:999px; width:${budgetPct}%; transition:width 0.6s ease;"></div>
        </div>
        <div style="font-size:12px; color:var(--muted); margin-top:8px;">¥${(data.budget_limit - data.budget_spent).toLocaleString()} remaining this month</div>
      </div>` : ''}
    `;

  } catch {
    container.innerHTML = '<div style="text-align:center; padding:40px; color:var(--muted);">Connection error.</div>';
  }
}

function statCard(emoji, label, value, sub, bg, color) {
  return `
    <div style="background:${bg}; border-radius:var(--radius-lg); padding:20px; text-align:center; border:1px solid rgba(0,0,0,0.04);">
      <div style="font-size:24px; margin-bottom:6px;">${emoji}</div>
      <div style="font-size:22px; font-weight:800; color:${color}; margin-bottom:2px;">${value}</div>
      <div style="font-size:12px; font-weight:700; color:var(--navy); margin-bottom:2px;">${label}</div>
      <div style="font-size:11px; color:var(--muted);">${sub}</div>
    </div>`;
}
// ─── KNOWLEDGE BASE PAGE ──────────────────────────────────────

let activeCategory = 'All';

document.querySelectorAll('.app-route-btn').forEach(btn => {
  if (btn.getAttribute('data-page') === 'knowledge') {
    btn.addEventListener('click', () => setTimeout(loadKnowledge, 300));
  }
});

async function loadKnowledge(category = activeCategory) {
  activeCategory = category;
  const grid    = document.getElementById('knowledge-grid');
  const filters = document.getElementById('knowledge-filters');
  if (!grid) return;

  grid.innerHTML = '<div style="text-align:center; padding:40px; color:var(--muted);">Loading...</div>';

  try {
    const res  = await fetch(`knowledge.php?action=get_articles&category=${encodeURIComponent(category)}`);
    const data = await res.json();
    if (!data.success) return;

    const allCats = ['All', ...data.categories];
    filters.innerHTML = allCats.map(cat => `
      <button onclick="loadKnowledge('${cat}')"
        style="padding:7px 16px; border-radius:999px; border:1px solid var(--line); font-size:13px; font-weight:600; cursor:pointer;
               background:${cat === activeCategory ? 'var(--navy)' : 'white'};
               color:${cat === activeCategory ? 'white' : 'var(--muted)'};">
        ${cat}
      </button>`).join('');

    if (data.articles.length === 0) {
      grid.innerHTML = '<div style="text-align:center; padding:40px; color:var(--muted);">No articles in this category yet.</div>';
      return;
    }

    const catColors = {
      'Getting Started': { bg: 'var(--green-light)',  color: 'var(--teal)'   },
      'Google':          { bg: 'var(--blue-light)',   color: 'var(--blue)'   },
      'Instagram':       { bg: 'var(--purple-light)', color: 'var(--purple)' },
      'In-store':        { bg: 'var(--amber-light)',  color: '#c9852e'       },
      'Seasonal':        { bg: 'var(--coral-light)',  color: 'var(--coral)'  },
    };

    grid.innerHTML = data.articles.map(a => {
      const c = catColors[a.category] || { bg: 'var(--soft)', color: 'var(--muted)' };
      return `
      <div onclick="openArticle(${a.id})"
        style="background:white; border:1px solid var(--line); border-radius:var(--radius-lg); padding:24px; cursor:pointer; transition:all .25s; position:relative; overflow:hidden;"
        onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 16px 40px rgba(45,49,66,0.08)';"
        onmouseout="this.style.transform='none'; this.style.boxShadow='none';">
        <div style="position:absolute; top:-20px; right:-20px; width:80px; height:80px; border-radius:50%; background:${c.bg}; opacity:0.6;"></div>
        <div style="font-size:28px; margin-bottom:12px;">${a.emoji}</div>
        <span style="font-size:11px; font-weight:700; padding:3px 10px; border-radius:999px; background:${c.bg}; color:${c.color}; margin-bottom:10px; display:inline-block;">${a.category}</span>
        <div style="font-weight:700; color:var(--navy); font-size:15px; margin-bottom:8px; line-height:1.4;">${a.title}</div>
        <div style="font-size:13px; color:var(--muted); line-height:1.6;">${a.summary}</div>
        <div style="margin-top:14px; font-size:13px; font-weight:700; color:${c.color};">Read guide →</div>
      </div>`;
    }).join('');

  } catch(e) {
    grid.innerHTML = '<div style="text-align:center; padding:40px; color:var(--muted);">Connection error.</div>';
  }
}

async function openArticle(id) {
  const reader = document.getElementById('knowledge-reader');
  const body   = document.getElementById('article-body');
  reader.style.display = 'flex';
  body.innerHTML = '<div style="text-align:center; padding:40px; color:var(--muted);">Loading...</div>';

  try {
    const res  = await fetch(`knowledge.php?action=get_article&id=${id}`);
    const data = await res.json();
    if (!data.success) return;
    const a = data.article;

    const paragraphs = a.body.split('\n\n').map(p =>
      p.trim().startsWith('-') || /^\d+\./.test(p.trim())
        ? `<div style="margin-bottom:10px; padding-left:8px; border-left:3px solid var(--line); color:var(--text); font-size:14px; line-height:1.7;">${p.replace(/\n/g, '<br>')}</div>`
        : `<p style="color:var(--text); font-size:14px; line-height:1.8; margin-bottom:14px;">${p}</p>`
    ).join('');

    body.innerHTML = `
      <div style="font-size:36px; margin-bottom:12px;">${a.emoji}</div>
      <span style="font-size:11px; font-weight:700; padding:3px 10px; border-radius:999px; background:var(--green-light); color:var(--teal); margin-bottom:14px; display:inline-block;">${a.category}</span>
      <h2 style="color:var(--navy); font-size:22px; font-weight:800; margin-bottom:16px; line-height:1.3;">${a.title}</h2>
      <p style="color:var(--muted); font-size:14px; line-height:1.7; margin-bottom:22px; padding-bottom:18px; border-bottom:1px solid var(--line);">${a.summary}</p>
      <div>${paragraphs}</div>`;

  } catch(e) {
    body.innerHTML = '<div style="text-align:center; padding:20px; color:var(--muted);">Could not load article.</div>';
  }
}

function closeArticle() {
  document.getElementById('knowledge-reader').style.display = 'none';
}

document.addEventListener('click', (e) => {
  const reader = document.getElementById('knowledge-reader');
  if (reader && e.target === reader) closeArticle();
});
// ─── DASHBOARD PAGE ───────────────────────────────────────────

// Load dashboard when entering app (after login)
function enterApp(user) {
  isLoggedIn = true; // FIX: this was never being set, so every nav click re-triggered the login screen
  currentUser = user;
  authView.style.display = 'none';
  appView.style.display  = 'flex';

  appPages.forEach(page => page.style.display = 'none');
  const targetPage = document.getElementById(`page-${pendingTargetPage}`);
  if (targetPage) targetPage.style.display = 'block';
  setActiveNav(pendingTargetPage);

  const nameEl = document.getElementById('sidebar-user-name');
  const bizEl  = document.getElementById('sidebar-user-biz');
  if (nameEl) nameEl.textContent = user.owner_name;
  if (bizEl)  bizEl.textContent  = `${user.business_type} · ${user.location}`;

  showToast(`Welcome, ${user.owner_name}! ⚡`);
  setTimeout(loadDashboard, 300);
}

// Also load when nav button clicked
document.querySelectorAll('.app-route-btn').forEach(btn => {
  if (btn.getAttribute('data-page') === 'dashboard') {
    btn.addEventListener('click', () => setTimeout(loadDashboard, 300));
  }
});

async function loadDashboard() {
  try {
    const res  = await fetch('dashboard.php');
    const data = await res.json();
    if (!data.success) return;

    // Welcome banner
    document.getElementById('dash-greeting').textContent  = data.greeting;
    document.getElementById('dash-name').textContent      = `${data.greeting}, ${data.user.owner_name}! 👋`;
    document.getElementById('dash-business').textContent  = `${data.user.business_type} · ${data.user.location}`;

    // Quick stats
    document.getElementById('dash-posts').textContent       = data.posts_this_month;
    document.getElementById('dash-community').textContent   = data.community_this_month;
    document.getElementById('dash-goals-done').textContent  = data.goals_completed;

    // Checklist progress
    const pct = data.checklist_pct;
    document.getElementById('dash-checklist-bar').style.width = pct + '%';
    document.getElementById('dash-checklist-pct').textContent = pct + '%';
    document.getElementById('dash-checklist-sub').textContent =
      `${data.checklist_done} of ${data.checklist_total} tasks completed`;
    document.getElementById('dash-checklist-msg').textContent =
      pct >= 100 ? '🎉 All done today!' :
      pct >= 75  ? '💪 Almost there!' :
      pct >= 50  ? '👍 Good progress!' :
      pct > 0    ? '📌 Keep going!' : '📋 Start your checklist today';

    // Active goals
    const goalsEl = document.getElementById('dash-goals');
    if (data.goals.length === 0) {
      goalsEl.innerHTML = `
        <div style="background:white; border-radius:var(--radius-lg); padding:20px; border:1px dashed var(--line); text-align:center;">
          <div style="font-size:28px; margin-bottom:8px;">🏆</div>
          <p style="color:var(--muted); font-size:13px;">No active goals yet.</p>
          <button class="btn primary app-route-btn" data-page="goals" style="padding:8px 18px; font-size:13px; margin-top:10px;">Set your first goal</button>
        </div>`;
      // Re-bind new button
      goalsEl.querySelector('.app-route-btn')?.addEventListener('click', () => {
        appPages.forEach(p => p.style.display = 'none');
        document.getElementById('page-goals').style.display = 'block';
        setTimeout(loadGoals, 300);
      });
      return;
    }

    goalsEl.innerHTML = data.goals.map(g => {
      const pct      = Math.min(100, g.pct ?? 0);
      const daysLeft = g.days_left;
      const urgency  = daysLeft <= 3 ? 'var(--coral)' : daysLeft <= 7 ? '#c9852e' : 'var(--blue)';
      const urgencyBg= daysLeft <= 3 ? 'var(--coral-light)' : daysLeft <= 7 ? 'var(--amber-light)' : 'var(--blue-light)';

      return `
      <div style="background:white; border-radius:var(--radius-lg); padding:18px; border:1px solid var(--line); box-shadow:0 4px 14px rgba(45,49,66,0.03);">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; flex-wrap:wrap; gap:6px;">
          <span style="font-weight:700; color:var(--navy); font-size:14px;">${g.goal_title}</span>
          <span style="font-size:11px; font-weight:700; padding:3px 10px; border-radius:999px; background:${urgencyBg}; color:${urgency};">
            ${daysLeft === 0 ? 'Due today!' : daysLeft + ' days left'}
          </span>
        </div>
        <div style="display:flex; justify-content:space-between; font-size:12px; color:var(--muted); margin-bottom:6px;">
          <span>Progress</span>
          <span style="font-weight:700; color:var(--navy);">${parseFloat(g.current_value).toLocaleString()} / ${parseFloat(g.target_value).toLocaleString()} ${g.unit}</span>
        </div>
        <div style="background:var(--soft); border-radius:999px; height:8px; overflow:hidden;">
          <div style="background:linear-gradient(90deg,var(--blue),#4f8ef7); height:8px; border-radius:999px; width:${pct}%; transition:width 0.5s ease;"></div>
        </div>
        <div style="text-align:right; font-size:11px; font-weight:700; color:var(--blue); margin-top:4px;">${pct}%</div>
      </div>`;
    }).join('');

  } catch(e) {
    console.error('Dashboard error:', e);
  }
}
// ─── PROMOTION IDEAS BANK ─────────────────────────────────────

let allPromoIdeas     = [];
let activePromoCategory = 'All';
let promoShowSaved    = false;

document.querySelectorAll('.app-route-btn').forEach(btn => {
  if (btn.getAttribute('data-page') === 'promotions') {
    btn.addEventListener('click', () => setTimeout(loadPromotions, 300));
  }
});

async function loadPromotions() {
  const grid = document.getElementById('promo-grid');
  const cats = document.getElementById('promo-categories');
  if (!grid) return;

  grid.innerHTML = '<div style="text-align:center; padding:40px; color:var(--muted);">Loading ideas...</div>';

  try {
    const res  = await fetch(`promotions.php?action=get_ideas&category=${encodeURIComponent(activePromoCategory)}`);
    const data = await res.json();
    if (!data.success) return;

    allPromoIdeas = data.ideas;

    // Update stats
    document.getElementById('promo-saved-count').textContent = data.saved;
    document.getElementById('promo-tried-count').textContent = data.tried;

    // Category pills
    const allCats = ['All', ...data.categories];
    cats.innerHTML = allCats.map(cat => `
      <button onclick="setPromoCategory('${cat}')"
        style="padding:7px 16px; border-radius:999px; border:1px solid var(--line); font-size:13px; font-weight:600; cursor:pointer;
               background:${cat === activePromoCategory ? 'var(--navy)' : 'white'};
               color:${cat === activePromoCategory ? 'white' : 'var(--muted)'};">
        ${cat}
      </button>`).join('');

    renderPromoGrid();

  } catch {
    grid.innerHTML = '<div style="text-align:center; padding:40px; color:var(--muted);">Connection error.</div>';
  }
}

function setPromoCategory(cat) {
  activePromoCategory = cat;
  loadPromotions();
}

function filterPromos(type) {
  promoShowSaved = type === 'saved';
  document.getElementById('promo-filter-all').style.background   = promoShowSaved ? 'white'       : 'var(--navy)';
  document.getElementById('promo-filter-all').style.color        = promoShowSaved ? 'var(--muted)' : 'white';
  document.getElementById('promo-filter-saved').style.background = promoShowSaved ? 'var(--navy)'  : 'white';
  document.getElementById('promo-filter-saved').style.color      = promoShowSaved ? 'white'        : 'var(--muted)';
  renderPromoGrid();
}

function renderPromoGrid() {
  const grid = document.getElementById('promo-grid');
  if (!grid) return;

  const diffColors = {
    easy:   { bg: 'var(--green-light)',  color: 'var(--teal)'   },
    medium: { bg: 'var(--amber-light)',  color: '#c9852e'       },
    hard:   { bg: 'var(--coral-light)',  color: 'var(--coral)'  },
  };

  const catColors = {
    'Online':   { bg: 'var(--blue-light)',   color: 'var(--blue)'   },
    'In-store': { bg: 'var(--purple-light)', color: 'var(--purple)' },
    'Seasonal': { bg: 'var(--pink-light)',   color: '#d4669e'       },
    'Google':   { bg: 'var(--green-light)',  color: 'var(--teal)'   },
  };

  let ideas = allPromoIdeas;
  if (promoShowSaved) ideas = ideas.filter(i => i.is_saved);

  if (ideas.length === 0) {
    grid.innerHTML = `
      <div style="text-align:center; padding:50px 20px; background:white; border-radius:var(--radius-lg); border:1px dashed var(--line); grid-column:1/-1;">
        <div style="font-size:36px; margin-bottom:12px;">💡</div>
        <p style="color:var(--muted); font-size:14px;">${promoShowSaved ? 'No saved ideas yet. Browse and save ideas you like!' : 'No ideas in this category.'}</p>
      </div>`;
    return;
  }

  grid.innerHTML = ideas.map(idea => {
    const diff = diffColors[idea.difficulty] || diffColors.easy;
    const cat  = catColors[idea.category]    || { bg: 'var(--soft)', color: 'var(--muted)' };
    const isSaved = idea.is_saved > 0;
    const isTried = idea.tried > 0;

    return `
    <div style="background:white; border-radius:var(--radius-lg); padding:22px; border:1px solid var(--line); box-shadow:0 4px 14px rgba(45,49,66,0.03); display:flex; flex-direction:column; gap:10px; position:relative; overflow:hidden; transition:transform .2s, box-shadow .2s;"
      onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 12px 30px rgba(45,49,66,0.08)';"
      onmouseout="this.style.transform='none'; this.style.boxShadow='0 4px 14px rgba(45,49,66,0.03)';">

      <!-- Blob accent -->
      <div style="position:absolute; top:-20px; right:-20px; width:70px; height:70px; border-radius:50%; background:${cat.bg}; opacity:0.5;"></div>

      <!-- Header -->
      <div style="display:flex; align-items:flex-start; gap:12px;">
        <div style="font-size:26px; flex-shrink:0;">${idea.emoji}</div>
        <div style="flex:1;">
          <div style="font-weight:700; color:var(--navy); font-size:14px; line-height:1.4; margin-bottom:6px;">${idea.title}</div>
          <div style="display:flex; gap:6px; flex-wrap:wrap;">
            <span style="font-size:10px; font-weight:700; padding:2px 8px; border-radius:999px; background:${cat.bg}; color:${cat.color};">${idea.category}</span>
            <span style="font-size:10px; font-weight:700; padding:2px 8px; border-radius:999px; background:${diff.bg}; color:${diff.color};">${idea.difficulty}</span>
            ${isTried ? '<span style="font-size:10px; font-weight:700; padding:2px 8px; border-radius:999px; background:var(--green-light); color:var(--teal);">✓ Tried</span>' : ''}
          </div>
        </div>
      </div>

      <!-- Description -->
      <p style="font-size:13px; color:var(--muted); line-height:1.65; flex:1;">${idea.description}</p>

      <!-- Actions -->
      <div style="display:flex; gap:8px; padding-top:10px; border-top:1px solid var(--line);">
        <button onclick="toggleSavePromo(${idea.id}, ${isSaved ? 1 : 0})"
          style="flex:1; padding:8px; border-radius:10px; border:1px solid var(--line); font-size:12px; font-weight:700; cursor:pointer;
                 background:${isSaved ? 'var(--navy)' : 'white'}; color:${isSaved ? 'white' : 'var(--muted)'};">
          ${isSaved ? '🔖 Saved' : '+ Save'}
        </button>
        <button onclick="toggleTriedPromo(${idea.id}, ${isTried ? 1 : 0})"
          style="flex:1; padding:8px; border-radius:10px; border:1px solid var(--line); font-size:12px; font-weight:700; cursor:pointer;
                 background:${isTried ? 'var(--green-light)' : 'white'}; color:${isTried ? 'var(--teal)' : 'var(--muted)'};">
          ${isTried ? '✅ Tried it' : 'Mark tried'}
        </button>
      </div>
    </div>`;
  }).join('');
}

async function toggleSavePromo(ideaId, isSaved) {
  const action = isSaved ? 'unsave_idea' : 'save_idea';
  const formData = new FormData();
  formData.append('action', action);
  formData.append('idea_id', ideaId);

  try {
    const res  = await fetch('promotions.php', { method: 'POST', body: formData });
    const data = await res.json();
    if (data.success) {
      showToast(isSaved ? 'Removed from saved' : '🔖 Saved!');
      loadPromotions();
    }
  } catch { showToast('❌ Connection error.'); }
}

async function toggleTriedPromo(ideaId, isTried) {
  const formData = new FormData();
  formData.append('action', 'mark_tried');
  formData.append('idea_id', ideaId);
  formData.append('tried', isTried ? 0 : 1);

  try {
    const res  = await fetch('promotions.php', { method: 'POST', body: formData });
    const data = await res.json();
    if (data.success) {
      showToast(data.message);
      loadPromotions();
    }
  } catch { showToast('❌ Connection error.'); }
}

// Smooth active nav link highlight
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  if (landingView.style.display === 'none') return; // skip if in app view
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.getAttribute('id');
  });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current ? 'var(--navy)' : '';
  });
}, { passive: true });