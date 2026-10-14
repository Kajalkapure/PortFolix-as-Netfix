/**
 * ==============================================================================
 * PORTFOLIO JAVASCRIPT — KAJAL KAPURE
 * Award-Level Streaming-Style Portfolio
 * ==============================================================================
 * 
 * PERSONAL DETAILS:
 *   Full Name: Kajal Kapure
 *   Email: kapurekajal06@gmail.com
 * ==============================================================================
 */

'use strict';

/* ==============================================================================
   DATA DEFINITIONS
   ============================================================================== */

// ==============================================================================
// EDUCATION & DEGREE DETAILS (Easily editable)
// ==============================================================================
const EDUCATION_DATA = {
  degree: 'B.Tech in Computer Engineering',
  college: 'RCPIT',
  startYear: 2025,
  expectedGraduationYear: 2029,
  duration: '2025 – 2029',
  graduationStatus: 'Expected graduation: 2029',
  currentStanding: 'Currently in 2nd year (2026)'
};

// ==============================================================================
// JOURNEY & EDUCATION TIMELINE (Easily editable)
// ==============================================================================
const TIMELINE_DATA = [
  {
    year: '2025 &bull; Groundwork &amp; Commencement',
    heading: 'B.Tech in Computer Engineering Commenced at RCPIT',
    body: 'Embarked on engineering degree at R. C. Patel Institute of Technology (RCPIT) for the 2025 &ndash; 2029 cycle. Mastered foundational computation: discrete mathematics, object-oriented concepts, and algorithmic problem-solving with Python and C.',
    tags: ['RCPIT', 'Computer Engineering', 'Data Structures', 'Python']
  },
  {
    year: '2025 &ndash; 2026 &bull; Web Architecture',
    heading: 'Building Production-Grade Frontends',
    body: 'Deepened focus into modern web systems during coursework. Prioritized semantic HTML, CSS layout systems, and vanilla JavaScript DOM mechanics without reliance on heavy frameworks. Completed certified responsive accessibility programs.',
    tags: ['Vanilla JS', 'WCAG AA', 'Responsive UX']
  },
  {
    year: '2026 &bull; Current Year &amp; Practice',
    heading: 'Hackathon Finalist &amp; Peer Platforms',
    body: 'Currently in 2nd year of B.Tech at RCPIT. Co-created the university resource-sharing prototype during a 24-hour sprint, finishing as an evaluated finalist. Engineered the Campus Lost &amp; Found Hub and Timetable Tracker for real student daily use.',
    tags: ['RCPIT', 'Hackathon Finalist', 'Team Git', 'State Engines']
  },
  {
    year: '2026 &ndash; 2029 &bull; Looking Ahead',
    heading: 'Advanced Systems &amp; Expected Graduation: 2029',
    body: 'Pursuing advanced computer engineering curriculum at RCPIT. Preparing for software engineering internships and open-source contributions, advancing toward expected graduation in 2029.',
    tags: ['Expected Graduation: 2029', 'RCPIT', 'System Design', 'Continuous Learning']
  }
];

// FEATURED BILLBOARD SPOTLIGHTS (Rotates every 6s in the Hero Banner)
const FEATURED_SPOTLIGHTS = [
  {
    id: 'project-campus-portal',
    title: 'Campus Lost & Found Hub',
    category: 'Web Application',
    description: 'A student-centric platform enabling swift reporting, recovery, and verification of misplaced campus belongings with instant local filters.',
    iconSvg: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><path d="M11 8v6"></path><path d="M8 11h6"></path></svg>`
  },
  {
    id: 'project-attendance-tracker',
    title: 'Student Timetable & Attendance Tracker',
    category: 'Productivity Tool',
    description: 'An offline-first weekly schedule planner that calculates running attendance thresholds and forecasts class safety margins in real time.',
    iconSvg: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line><path d="M9 16l2 2 4-4"></path></svg>`
  },
  {
    id: 'project-eco-tracker',
    title: 'EcoTrack Habit & Footprint Logger',
    category: 'Educational App',
    description: 'An interactive environmental habit tracker encouraging recycling and energy conservation through streak counters and canvas charts.',
    iconSvg: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2a10 10 0 0 1 10 10c0 5.523-4.477 10-10 10S2 17.523 2 12A10 10 0 0 1 12 2z"></path><path d="M12 6v6l4 2"></path></svg>`
  }
];

// ROW 1: "Continue Watching" (Work-In-Progress)
const WIP_DATA = [
  {
    id: 'wip-dev-journal',
    title: 'CodePulse: Student Dev Journal',
    category: 'Full-Stack Experiment',
    progress: 85,
    stage: 'Episode 4: Final Refactoring',
    status: 'Testing Storage Sync',
    snippet: 'A distraction-free technical markdown notebook designed for engineering students to log bug diagnoses and algorithmic insights.',
    tools: ['Vanilla JS', 'IndexedDB', 'Markdown Parser', 'CSS Themes']
  },
  {
    id: 'wip-dorm-inventory',
    title: 'StudyRoom: Seat & Lab Monitor',
    category: 'Campus Utility',
    progress: 60,
    stage: 'Episode 2: UI Prototype',
    status: 'Grid Layout Tuning',
    snippet: 'Real-time library seat visualizer mapping available quiet zones and power outlets across campus academic blocks.',
    tools: ['SVG Maps', 'Local State', 'Flexbox & Grid']
  },
  {
    id: 'wip-algo-visualizer',
    title: 'SortCraft: Sorting Visualizer',
    category: 'Interactive Learning',
    progress: 92,
    stage: 'Episode 5: Release Candidate',
    status: 'Speed Control Added',
    snippet: 'Step-by-step visual breakdowns of QuickSort, MergeSort, and Dijkstra paths with step controls and audio chimes.',
    tools: ['HTML5 Canvas', 'Async Generators', 'Web Audio API']
  }
];

// ROW 2: "My Projects" (6 Cards with Problem -> Solution -> Result)
const PROJECTS_DATA = [
  {
    id: 'project-campus-portal',
    title: 'Campus Lost & Found Hub',
    category: 'web',
    categoryLabel: 'Web Engineering',
    snippet: 'A student-run board where campus peers report and search lost belongings with category filtering and contact verifications.',
    description: 'Campus Lost & Found Hub streamlines university item recoveries. The interface eliminates chaos by grouping misplaced items by date, location tags, and item classes, with instant verification workflows.',
    tools: ['HTML5 Semantic Markup', 'CSS Grid', 'Vanilla JavaScript (ES6+)', 'Local Storage API'],
    problem: 'Misplaced items on campus were reported across disjointed social messaging channels, resulting in low recovery rates and unverified claims.',
    solution: 'Engineered a centralized, searchable portal with tag-based filtering, local persistence, and structured verification queries without external server latency.',
    result: 'Reduced recovery inquiry turnaround time and provided student peers with a single, reliable hub for verified items.',
    demoUrl: '#',
    githubUrl: '#',
    iconSvg: `<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><path d="M11 8v6"></path><path d="M8 11h6"></path></svg>`
  },
  {
    id: 'project-attendance-tracker',
    title: 'Student Timetable & Attendance Tracker',
    category: 'web',
    categoryLabel: 'Web Engineering',
    snippet: 'An offline-first weekly schedule planner that calculates running attendance thresholds and forecasts safety margins.',
    description: 'Designed to help collegiate peers manage mandatory attendance requirements. Computes attendance ratios per subject and warns students before mandatory minimums are breached.',
    tools: ['Vanilla JavaScript', 'CSS Custom Properties', 'Web Storage API', 'SVG Visualizer'],
    problem: 'Undergraduate students frequently miscalculate semester class attendance, leading to last-minute exam debarment warnings.',
    solution: 'Built an algorithmic predictor that calculates exact attend/bunk margins per course, with instant warning alerts and offline data persistence.',
    result: 'Provided students with transparent daily visibility, helping users maintain attendance averages safely above 75%.',
    demoUrl: '#',
    githubUrl: '#',
    iconSvg: `<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line><path d="M9 16l2 2 4-4"></path></svg>`
  },
  {
    id: 'project-eco-tracker',
    title: 'EcoTrack Habit & Footprint Logger',
    category: 'design',
    categoryLabel: 'UI / UX Design',
    snippet: 'An interactive web tool helping students track daily eco-friendly habits like recycling and energy conservation.',
    description: 'Promotes daily sustainable campus routines. Features visual milestone streaks, dynamic energy-saved counters, and lightweight canvas illustrations.',
    tools: ['HTML5 Canvas', 'Modern CSS Animations', 'Vanilla JS', 'Accessible Modal Dialogs'],
    problem: 'Students find sustainability goals abstract and difficult to measure in small daily campus routines.',
    solution: 'Designed an engaging micro-logging interface with immediate visual streak feedback and lightweight canvas badges that celebrate progress.',
    result: 'Observed continuous 14-day logging streaks among test student study groups with high user satisfaction.',
    demoUrl: '#',
    githubUrl: '#',
    iconSvg: `<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2a10 10 0 0 1 10 10c0 5.523-4.477 10-10 10S2 17.523 2 12A10 10 0 0 1 12 2z"></path><path d="M12 6v6l4 2"></path></svg>`
  },
  {
    id: 'project-book-exchange',
    title: 'Neighborhood Book Exchange Hub',
    category: 'web',
    categoryLabel: 'Web Engineering',
    snippet: 'A lightweight catalog facilitating peer-to-peer textbook and novel lending across student dorms and study circles.',
    description: 'A platform connecting student readers. Peers list books they are willing to lend, search for semester coursebooks by department or title, and coordinate exchanges directly.',
    tools: ['JavaScript (ES6+)', 'DOM Manipulation', 'CSS Grid', 'Semantic Landmarks'],
    problem: 'High textbook costs each semester combined with discarded semester books across student residential halls.',
    solution: 'Developed an intuitive peer-to-peer exchange catalog with category filtering, condition tags, and direct lending handshakes.',
    result: 'Facilitated dozens of direct peer book loans, saving students textbook expenses across multiple terms.',
    demoUrl: '#',
    githubUrl: '#',
    iconSvg: `<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path><line x1="9" y1="7" x2="15" y2="7"></line></svg>`
  },
  {
    id: 'project-design-system',
    title: 'WarmStone: Minimalist UI Design Tokens',
    category: 'design',
    categoryLabel: 'UI / UX Design',
    snippet: 'A bespoke design system and component spec emphasizing warm charcoal tones, high contrast, and accessible tokens.',
    description: 'An open-source accessible component guide built from scratch. Includes button patterns, dialog boxes, typography scales, and keyboard focus states.',
    tools: ['CSS Custom Properties', 'WCAG 2.1 AA Audit', 'Figma Tokens', 'HTML Living Spec'],
    problem: 'Many student web projects rely on bloated CSS frameworks that sacrifice contrast ratios and keyboard operability.',
    solution: 'Crafted a zero-dependency design token specification with strictly calibrated contrast ratios, consistent 8px grids, and built-in focus styling.',
    result: 'Achieved 100/100 Lighthouse accessibility scores across all component demonstrations.',
    demoUrl: '#',
    githubUrl: '#',
    iconSvg: `<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>`
  },
  {
    id: 'project-cli-taskmaster',
    title: 'PyTask Master: Academic Task CLI',
    category: 'other',
    categoryLabel: 'Core Systems & CLI',
    snippet: 'A Python command-line utility for organizing lab submissions, deadlines, and Git commits with clean terminal output.',
    description: 'A terminal tool for developers. Integrates directly with student shell environments to display upcoming assignment deadlines and track Git commit logs.',
    tools: ['Python 3', 'Argparse', 'JSON Persistence', 'Unix Signals'],
    problem: 'Switching between IDEs and web browsers to check assignment deadlines disrupts developer focus during deep coding sessions.',
    solution: 'Constructed an ultra-fast terminal CLI tool that renders colorized deadline tables and reminders directly in the developer terminal.',
    result: 'Enabled instant single-command checks (`task status`), saving valuable developer context switches.',
    demoUrl: '#',
    githubUrl: '#',
    iconSvg: `<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>`
  }
];

// ROW 3: "Top 10 Skills" (Rendered with Big Streaming Numbers 1 to 10)
const TOP10_SKILLS_DATA = [
  {
    rank: 1,
    title: 'Semantic HTML5 Architecture',
    category: 'Frontend Core',
    desc: 'Accessible document outlines, screen reader landmarks, and clean semantic foundations.',
    level: 'Advanced & Production Ready'
  },
  {
    rank: 2,
    title: 'Modern CSS3 (Grid & Flexbox)',
    category: 'Layout & Tokens',
    desc: 'Fluid responsive design, custom property theming, and responsive container layouts.',
    level: 'Advanced & Production Ready'
  },
  {
    rank: 3,
    title: 'Vanilla JavaScript (ES6+)',
    category: 'Core Programming',
    desc: 'DOM manipulation, asynchronous workflows, event delegation, and modular patterns.',
    level: 'Proficient'
  },
  {
    rank: 4,
    title: 'Web Accessibility (WCAG 2.1 AA)',
    category: 'User Experience',
    desc: 'Keyboard focus management, aria live regions, and high-contrast color validation.',
    level: 'Specialized'
  },
  {
    rank: 5,
    title: 'Python 3 & Object-Oriented Logic',
    category: 'Computer Science',
    desc: 'Algorithmic problem solving, scripting utilities, and object-oriented architectures.',
    level: 'Proficient'
  },
  {
    rank: 6,
    title: 'Data Structures & Algorithms',
    category: 'Foundations',
    desc: 'Trees, heaps, graph traversals, and asymptotic complexity analysis (Big-O).',
    level: 'Core Coursework'
  },
  {
    rank: 7,
    title: 'Relational Database Design & SQL',
    category: 'Data Systems',
    desc: 'Normalized entity schemas, multi-table joins, primary/foreign keys, and indexes.',
    level: 'Proficient'
  },
  {
    rank: 8,
    title: 'Git Version Control & PR Reviews',
    category: 'Engineering Workflow',
    desc: 'Atomic commits, clean branch isolation, merge conflict resolution, and code reviews.',
    level: 'Proficient'
  },
  {
    rank: 9,
    title: 'Responsive Cross-Browser Design',
    category: 'Frontend Engineering',
    desc: 'Mobile-first optimization, fluid typography, and multi-device usability testing.',
    level: 'Advanced'
  },
  {
    rank: 10,
    title: 'First-Principles Problem Solving',
    category: 'Analytical Mindset',
    desc: 'Isolating root causes, debugging edge cases, and delivering resilient software.',
    level: 'Core Mindset'
  }
];

// ROW 4: "Achievements & Certificates"
const ACHIEVEMENTS_DATA = [
  {
    id: 'achieve-merit-scholar',
    title: 'Dean\'s Academic Merit Scholar',
    category: 'Academic Honor',
    date: '2025 &ndash; 2026',
    snippet: 'Recognized for top academic standing and consistent excellence across Computer Engineering coursework at RCPIT.',
    description: 'Awarded institutional Dean\'s Merit honors at RCPIT in recognition of top performance across core technical subjects including algorithms, systems architecture, and discrete mathematics.',
    tools: ['Data Structures', 'Operating Systems', 'Mathematics', 'Software Engineering'],
    iconSvg: `<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>`
  },
  {
    id: 'achieve-hackathon-finalist',
    title: 'University 24-Hour Hackathon Finalist',
    category: 'Competition',
    date: '2025 &ndash; 2026',
    snippet: 'Collaborated in a team of four to architect and pitch an accessible campus resource tool within 24 hours.',
    description: 'Competed among university teams in an intensive 24-hour sprint. Spearheaded frontend development, state architecture, and pitch presentation to the technical jury.',
    tools: ['Rapid Prototyping', 'Team Git Coordination', 'Technical Pitching', 'Vanilla Web Stack'],
    iconSvg: `<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`
  },
  {
    id: 'achieve-responsive-cert',
    title: 'Responsive Web Design Certification',
    category: 'Professional Credential',
    date: 'Verified 2025',
    snippet: 'Completed accredited comprehensive curriculum covering semantic HTML, CSS layout systems, and accessibility.',
    description: 'Successfully built five standalone projects meeting rigorous automated test suites covering responsive viewport layouts, accessibility landmarks, and form validations.',
    tools: ['Responsive Web Design', 'CSS Grid & Flexbox', 'Accessibility (a11y)', 'Mobile-First Testing'],
    iconSvg: `<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>`
  }
];

/* ==============================================================================
   1. "WHO'S WATCHING?" PERSONA SYSTEM
   ============================================================================== */

const PERSONA_CONFIGS = {
  recruiter: {
    label: 'Recruiter Mode',
    calloutIcon: '💼',
    calloutText: 'Welcome, Recruiter! Spotlighting Kajal Kapure\'s technical stack, resume highlights, and production-ready code.',
    highlightSection: '#skills-matrix'
  },
  judge: {
    label: 'Judge Mode',
    calloutIcon: '🏆',
    calloutText: 'Welcome, Evaluator! Spotlighting system architecture, algorithmic rigor, and evaluated hackathon honors.',
    highlightSection: '#projects'
  },
  friend: {
    label: 'Friend Mode',
    calloutIcon: '✨',
    calloutText: 'Hey there, friend! Grab a cup of chai and browse Kajal\'s latest experiments, side projects, and journey.',
    highlightSection: '#journey'
  }
};

function initializePersonaGate() {
  const introGate = document.getElementById('intro-gate');
  const skipBtn = document.getElementById('intro-skip-btn');
  const profileCards = document.querySelectorAll('.profile-card');
  const badgeBtn = document.getElementById('persona-badge-btn');
  const badgeText = document.getElementById('persona-badge-text');
  const calloutIcon = document.getElementById('persona-callout-icon');
  const calloutText = document.getElementById('persona-callout-text');
  const calloutSwitch = document.getElementById('persona-callout-switch');

  const savedPersona = sessionStorage.getItem('kajal_portfolio_persona');

  const applyPersona = (personaKey, shouldScroll = false) => {
    const config = PERSONA_CONFIGS[personaKey];
    if (!config) return;

    if (badgeText) badgeText.textContent = config.label;
    if (calloutIcon) calloutIcon.textContent = config.calloutIcon;
    if (calloutText) calloutText.textContent = config.calloutText;

    sessionStorage.setItem('kajal_portfolio_persona', personaKey);
    dismissGate();

    if (shouldScroll && config.highlightSection) {
      setTimeout(() => {
        const target = document.querySelector(config.highlightSection);
        target?.scrollIntoView({ behavior: 'smooth' });
      }, 350);
    }
  };

  const dismissGate = () => {
    if (introGate) {
      introGate.classList.add('is-dismissed');
      introGate.setAttribute('aria-hidden', 'true');
    }
  };

  const showGate = () => {
    if (introGate) {
      introGate.classList.remove('is-dismissed');
      introGate.setAttribute('aria-hidden', 'false');
      // Focus first profile card
      const firstCard = introGate.querySelector('.profile-card');
      firstCard?.focus();
    }
  };

  // If already chosen in this session, hide gate immediately
  if (savedPersona && PERSONA_CONFIGS[savedPersona]) {
    applyPersona(savedPersona, false);
  } else {
    // Show gate
    if (introGate) introGate.classList.remove('is-dismissed');
  }

  // Profile clicks
  profileCards.forEach(card => {
    card.addEventListener('click', () => {
      const persona = card.dataset.persona;
      applyPersona(persona, true);
    });
  });

  // Skip button
  skipBtn?.addEventListener('click', () => {
    sessionStorage.setItem('kajal_portfolio_persona', 'friend');
    applyPersona('friend', false);
  });

  // Switch persona triggers
  badgeBtn?.addEventListener('click', showGate);
  calloutSwitch?.addEventListener('click', showGate);
}

/* ==============================================================================
   2. SCROLL PROGRESS BAR & THEME SWITCHER
   ============================================================================== */

function initializeThemeAndProgress() {
  const progressBar = document.getElementById('scroll-progress-bar');
  const themeToggle = document.getElementById('theme-toggle-btn');
  const root = document.documentElement;

  // 1. Theme toggle
  const currentTheme = localStorage.getItem('kajal_theme') || 'dark';
  root.setAttribute('data-theme', currentTheme);

  themeToggle?.addEventListener('click', () => {
    const nextTheme = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', nextTheme);
    localStorage.setItem('kajal_theme', nextTheme);
  });

  // 2. Scroll Progress Bar
  window.addEventListener('scroll', () => {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
    if (progressBar) {
      progressBar.style.width = `${scrolled}%`;
    }
  }, { passive: true });
}

/* ==============================================================================
   3. HERO BILLBOARD & TYPING ANIMATION
   ============================================================================== */

let currentSpotlightIndex = 0;
let billboardInterval = null;

function renderFeaturedSpotlight(index) {
  const item = FEATURED_SPOTLIGHTS[index];
  if (!item) return;

  const titleEl = document.getElementById('billboard-title');
  const catEl = document.getElementById('billboard-category');
  const descEl = document.getElementById('billboard-description');
  const graphicEl = document.getElementById('billboard-graphic');
  const dotsContainer = document.getElementById('billboard-dots');
  const exploreBtn = document.getElementById('billboard-explore-btn');

  if (titleEl) titleEl.textContent = item.title;
  if (catEl) catEl.textContent = item.category;
  if (descEl) descEl.textContent = item.description;

  if (graphicEl) {
    graphicEl.innerHTML = `
      <div class="billboard-icon-large">${item.iconSvg}</div>
    `;
  }

  // Update dots
  if (dotsContainer) {
    dotsContainer.innerHTML = '';
    FEATURED_SPOTLIGHTS.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = `billboard-dot ${i === index ? 'active' : ''}`;
      dot.type = 'button';
      dot.setAttribute('aria-label', `Switch to featured item ${i + 1}`);
      dot.addEventListener('click', () => {
        currentSpotlightIndex = i;
        renderFeaturedSpotlight(i);
        restartBillboardTimer();
      });
      dotsContainer.appendChild(dot);
    });
  }

  // Explore button opens modal for this project
  if (exploreBtn) {
    exploreBtn.onclick = () => {
      const targetProject = PROJECTS_DATA.find(p => p.id === item.id);
      if (targetProject) openProjectModal(targetProject);
    };
  }
}

function startBillboardTimer() {
  billboardInterval = setInterval(() => {
    currentSpotlightIndex = (currentSpotlightIndex + 1) % FEATURED_SPOTLIGHTS.length;
    renderFeaturedSpotlight(currentSpotlightIndex);
  }, 6000);
}

function restartBillboardTimer() {
  clearInterval(billboardInterval);
  startBillboardTimer();
}

function initializeBillboard() {
  renderFeaturedSpotlight(0);
  startBillboardTimer();

  const billboardCard = document.getElementById('featured-billboard');
  billboardCard?.addEventListener('mouseenter', () => clearInterval(billboardInterval));
  billboardCard?.addEventListener('mouseleave', () => startBillboardTimer());
}

// Typing Animation for Hero Roles
function initializeTyping() {
  const roles = [
    'Computer Science Student',
    'Full-Stack Web Craftsman',
    'Accessibility & UX Advocate',
    'Creative Problem Solver'
  ];
  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  const typingEl = document.getElementById('typing-text');
  if (!typingEl) return;

  function typeTick() {
    const currentRole = roles[roleIdx];

    if (isDeleting) {
      charIdx--;
      typingEl.textContent = currentRole.substring(0, charIdx);
    } else {
      charIdx++;
      typingEl.textContent = currentRole.substring(0, charIdx);
    }

    let speed = isDeleting ? 45 : 90;

    if (!isDeleting && charIdx === currentRole.length) {
      speed = 2200; // Pause at full word
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      speed = 400;
    }

    setTimeout(typeTick, speed);
  }

  typeTick();
}

/* ==============================================================================
   4. RENDER STREAMING RAILS (DRAG + ARROWS + SWIPE)
   ============================================================================== */

function createWipCard(item) {
  const card = document.createElement('article');
  card.className = 'rail-card';
  card.setAttribute('role', 'button');
  card.setAttribute('tabindex', '0');
  card.setAttribute('aria-label', `Work in progress: ${item.title}`);

  card.innerHTML = `
    <div class="card-media">
      <span class="card-badge">${escapeHtml(item.category)}</span>
      <div class="card-icon-art">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      </div>
    </div>
    <div class="card-body">
      <h3 class="card-title">${escapeHtml(item.title)}</h3>
      <p class="card-snippet">${escapeHtml(item.snippet)}</p>
      
      <div class="wip-progress-wrap">
        <div class="wip-progress-meta">
          <span>${escapeHtml(item.stage)}</span>
          <span>${item.progress}%</span>
        </div>
        <div class="wip-progress-bar">
          <div class="wip-progress-fill" style="width: ${item.progress}%;"></div>
        </div>
      </div>

      <div class="card-footer" style="margin-top: 14px;">
        <span class="card-tags-mini">${escapeHtml(item.status)}</span>
        <span class="card-action-cue">Live WIP</span>
      </div>
    </div>
  `;

  return card;
}

function createProjectCard(item) {
  const card = document.createElement('article');
  card.className = 'rail-card';
  card.setAttribute('role', 'button');
  card.setAttribute('tabindex', '0');
  card.setAttribute('aria-haspopup', 'dialog');
  card.setAttribute('aria-label', `Open details for ${item.title}`);
  card.dataset.id = item.id;
  card.dataset.category = item.category;

  const toolsMini = (item.tools || []).slice(0, 2).join(' • ');

  card.innerHTML = `
    <div class="card-media">
      <span class="card-badge">${escapeHtml(item.categoryLabel)}</span>
      <div class="card-icon-art">${item.iconSvg}</div>
    </div>
    <div class="card-body">
      <h3 class="card-title">${escapeHtml(item.title)}</h3>
      <p class="card-snippet">${escapeHtml(item.snippet)}</p>
      <div class="card-footer">
        <span class="card-tags-mini">${escapeHtml(toolsMini)}</span>
        <span class="card-action-cue">
          Explore
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </span>
      </div>
    </div>
  `;

  card.addEventListener('click', () => openProjectModal(item));
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openProjectModal(item);
    }
  });

  return card;
}

function createTop10Card(item) {
  const wrap = document.createElement('div');
  wrap.className = 'top10-card-wrap';

  wrap.innerHTML = `
    <div class="top10-rank-number" aria-hidden="true">${item.rank}</div>
    <article class="rail-card top10-inner-card" tabindex="0" role="region" aria-label="Skill rank ${item.rank}: ${item.title}">
      <div class="card-body">
        <span class="card-badge" style="align-self: flex-start; position: static; margin-bottom: 8px;">${escapeHtml(item.category)}</span>
        <h3 class="card-title" style="font-size: 1.15rem;">${escapeHtml(item.title)}</h3>
        <p class="card-snippet">${escapeHtml(item.desc)}</p>
        <div class="card-footer">
          <span class="card-tags-mini">${escapeHtml(item.level)}</span>
          <span class="card-action-cue">Top ${item.rank}</span>
        </div>
      </div>
    </article>
  `;

  return wrap;
}

function createAchievementCard(item) {
  const card = document.createElement('article');
  card.className = 'rail-card';
  card.setAttribute('role', 'button');
  card.setAttribute('tabindex', '0');
  card.setAttribute('aria-haspopup', 'dialog');
  card.setAttribute('aria-label', `View honor: ${item.title}`);

  card.innerHTML = `
    <div class="card-media">
      <span class="card-badge">${escapeHtml(item.category)}</span>
      <div class="card-icon-art">${item.iconSvg}</div>
    </div>
    <div class="card-body">
      <h3 class="card-title">${escapeHtml(item.title)}</h3>
      <p class="card-snippet">${escapeHtml(item.snippet)}</p>
      <div class="card-footer">
        <span class="card-tags-mini">${item.date}</span>
        <span class="card-action-cue">Verified</span>
      </div>
    </div>
  `;

  card.addEventListener('click', () => openGenericModal(item));
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openGenericModal(item);
    }
  });

  return card;
}

function renderRails() {
  // 1. WIP Rail
  const wipRail = document.getElementById('rail-wip');
  if (wipRail) {
    wipRail.innerHTML = '';
    WIP_DATA.forEach(item => wipRail.appendChild(createWipCard(item)));
  }

  // 2. Projects Rail
  renderProjectsRail('all');

  // 3. Top 10 Rail
  const top10Rail = document.getElementById('rail-top10');
  if (top10Rail) {
    top10Rail.innerHTML = '';
    TOP10_SKILLS_DATA.forEach(item => top10Rail.appendChild(createTop10Card(item)));
  }

  // 4. Achievements Rail
  const achieveRail = document.getElementById('rail-achievements');
  if (achieveRail) {
    achieveRail.innerHTML = '';
    ACHIEVEMENTS_DATA.forEach(item => achieveRail.appendChild(createAchievementCard(item)));
  }
}

function renderProjectsRail(filter = 'all') {
  const projectsRail = document.getElementById('rail-projects-list');
  if (!projectsRail) return;

  projectsRail.innerHTML = '';
  const filtered = filter === 'all' 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter(p => p.category === filter);

  filtered.forEach(p => projectsRail.appendChild(createProjectCard(p)));
}

// Project Filter Chips
function initializeFilterChips() {
  const chips = document.querySelectorAll('.filter-chips .chip');
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const filter = chip.dataset.filter;
      renderProjectsRail(filter);
    });
  });
}

// Rail Navigation Controls (Arrows + Mouse Drag + Touch Swipe)
function initializeRailInteractions() {
  const arrowButtons = document.querySelectorAll('.rail-arrow-btn');

  arrowButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const railId = btn.dataset.rail;
      const rail = document.getElementById(railId);
      if (!rail) return;

      const scrollAmount = 360;
      if (btn.classList.contains('prev-arrow')) {
        rail.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        rail.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    });
  });

  // Mouse Drag to Scroll for all rails
  const rails = document.querySelectorAll('.rail-track');
  rails.forEach(rail => {
    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    rail.addEventListener('mousedown', (e) => {
      // Don't drag if clicking interactive button
      if (e.target.closest('button, a')) return;
      isDown = true;
      startX = e.pageX - rail.offsetLeft;
      scrollLeft = rail.scrollLeft;
    });

    rail.addEventListener('mouseleave', () => { isDown = false; });
    rail.addEventListener('mouseup', () => { isDown = false; });

    rail.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - rail.offsetLeft;
      const walk = (x - startX) * 1.5; // Drag scroll speed
      rail.scrollLeft = scrollLeft - walk;
    });

    // Update arrow states
    const updateArrows = () => {
      const railId = rail.id;
      const prevBtn = document.querySelector(`.prev-arrow[data-rail="${railId}"]`);
      const nextBtn = document.querySelector(`.next-arrow[data-rail="${railId}"]`);

      if (prevBtn) prevBtn.disabled = rail.scrollLeft <= 5;
      if (nextBtn) nextBtn.disabled = rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - 8;
    };

    rail.addEventListener('scroll', updateArrows, { passive: true });
    updateArrows();
  });
}

/* ==============================================================================
   5. PROJECT MODAL (With Problem -> Solution -> Result)
   ============================================================================== */

let currentModalProjectIndex = 0;
let lastActiveElement = null;

const projectModal = document.getElementById('project-modal');
const modalDynamicBody = document.getElementById('modal-dynamic-body');
const modalCloseBtn = document.getElementById('modal-close-btn');
const modalPrevBtn = document.getElementById('modal-prev-btn');
const modalNextBtn = document.getElementById('modal-next-btn');
const modalCounter = document.getElementById('modal-counter');

function openProjectModal(projectItem) {
  if (!projectModal || !modalDynamicBody) return;

  lastActiveElement = document.activeElement;
  currentModalProjectIndex = PROJECTS_DATA.findIndex(p => p.id === projectItem.id);
  if (currentModalProjectIndex === -1) currentModalProjectIndex = 0;

  renderProjectModalContent(PROJECTS_DATA[currentModalProjectIndex]);

  projectModal.classList.add('is-open');
  projectModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  modalCloseBtn?.focus();
}

function renderProjectModalContent(p) {
  if (!modalDynamicBody || !p) return;

  // Counter
  if (modalCounter) {
    modalCounter.textContent = `Project ${currentModalProjectIndex + 1} of ${PROJECTS_DATA.length}`;
  }

  const toolsHtml = (p.tools || [])
    .map(t => `<span class="modal-pill">${escapeHtml(t)}</span>`)
    .join('');

  modalDynamicBody.innerHTML = `
    <div class="modal-badge-row">
      <span class="modal-badge-tag">${escapeHtml(p.categoryLabel || 'Featured')}</span>
    </div>

    <h2 id="modal-project-title" class="modal-hero-title">${escapeHtml(p.title)}</h2>
    
    <div class="modal-mockup-frame">
      <div style="text-align: center;">
        <div style="margin-bottom: 8px;">${p.iconSvg}</div>
        <span style="font-size: 0.86rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em;">Interactive Engineering Spec</span>
      </div>
    </div>

    <p class="modal-desc-lead">${escapeHtml(p.description)}</p>

    <!-- Problem -> Solution -> Result Columns -->
    <div class="psr-grid">
      <div class="psr-card psr-problem">
        <div class="psr-card-header">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
          <span>The Problem</span>
        </div>
        <p>${escapeHtml(p.problem || 'Complex friction point addressed during architecture.')}</p>
      </div>

      <div class="psr-card psr-solution">
        <div class="psr-card-header">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
          <span>The Solution</span>
        </div>
        <p>${escapeHtml(p.solution || 'Implemented modular client-side logic with fast UI response.')}</p>
      </div>

      <div class="psr-card psr-result">
        <div class="psr-card-header">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
          <span>The Result</span>
        </div>
        <p>${escapeHtml(p.result || 'Achieved resilient usability, clean code structure, and positive feedback.')}</p>
      </div>
    </div>

    <div class="modal-tech-stack-row">
      <span class="modal-tech-label">Architecture &amp; Tools Used</span>
      <div class="modal-pills">${toolsHtml}</div>
    </div>

    <div class="modal-cta-row">
      <a href="${escapeHtml(p.demoUrl || '#')}" class="btn btn-primary" target="_blank" rel="noopener">
        <span>Live Interactive Demo</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
          <polyline points="15 3 21 3 21 9"></polyline>
          <line x1="10" y1="14" x2="21" y2="3"></line>
        </svg>
      </a>
      <a href="${escapeHtml(p.githubUrl || '#')}" class="btn btn-secondary" target="_blank" rel="noopener">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
        <span>GitHub Repository</span>
      </a>
    </div>
  `;
}

function openGenericModal(item) {
  // Fallback for achievements modal
  openProjectModal({
    id: item.id,
    title: item.title,
    categoryLabel: item.category,
    description: item.description,
    tools: item.tools,
    problem: 'Rigorous selection criteria and academic / competitive requirements.',
    solution: 'Dedicated coursework study, deliberate practice, and collaborative sprint delivery.',
    result: 'Awarded formal certificate and distinguished institutional standing.',
    demoUrl: '#',
    githubUrl: '#',
    iconSvg: item.iconSvg
  });
}

function closeProjectModal() {
  if (!projectModal) return;
  projectModal.classList.remove('is-open');
  projectModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  if (lastActiveElement && typeof lastActiveElement.focus === 'function') {
    lastActiveElement.focus();
  }
}

function initializeProjectModal() {
  modalCloseBtn?.addEventListener('click', closeProjectModal);

  projectModal?.addEventListener('click', (e) => {
    if (e.target === projectModal) closeProjectModal();
  });

  // Prev / Next Project Buttons
  modalPrevBtn?.addEventListener('click', () => {
    currentModalProjectIndex = (currentModalProjectIndex - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length;
    renderProjectModalContent(PROJECTS_DATA[currentModalProjectIndex]);
  });

  modalNextBtn?.addEventListener('click', () => {
    currentModalProjectIndex = (currentModalProjectIndex + 1) % PROJECTS_DATA.length;
    renderProjectModalContent(PROJECTS_DATA[currentModalProjectIndex]);
  });

  // Global Escape & Focus Trapping
  document.addEventListener('keydown', (e) => {
    if (!projectModal?.classList.contains('is-open')) return;

    if (e.key === 'Escape') {
      e.preventDefault();
      closeProjectModal();
      return;
    }

    if (e.key === 'Tab') {
      const focusables = projectModal.querySelectorAll('button, [href], input, textarea, [tabindex]:not([tabindex="-1"])');
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });
}

/* ==============================================================================
   6. RESUME MODAL CONTROLS
   ============================================================================== */

function initializeResumeModal() {
  const resumeModal = document.getElementById('resume-modal');
  const openBtn = document.getElementById('resume-open-btn');
  const closeBtn = document.getElementById('resume-close-btn');

  const openResume = () => {
    if (!resumeModal) return;
    resumeModal.classList.add('is-open');
    resumeModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    closeBtn?.focus();
  };

  const closeResume = () => {
    if (!resumeModal) return;
    resumeModal.classList.remove('is-open');
    resumeModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  openBtn?.addEventListener('click', openResume);
  closeBtn?.addEventListener('click', closeResume);
  resumeModal?.addEventListener('click', (e) => {
    if (e.target === resumeModal) closeResume();
  });
}

/* ==============================================================================
   7. ANIMATED STATS COUNTERS
   ============================================================================== */

function initializeStatsCounters() {
  const statCards = document.querySelectorAll('.stat-card');
  let animated = false;

  const countUp = (el, target) => {
    let current = 0;
    const duration = 1600;
    const stepTime = 20;
    const totalSteps = duration / stepTime;
    const increment = target / totalSteps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        el.textContent = target;
        clearInterval(timer);
      } else {
        el.textContent = Math.floor(current);
      }
    }, stepTime);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        statCards.forEach(card => {
          const target = parseInt(card.dataset.target, 10);
          const numEl = card.querySelector('.stat-number');
          if (numEl && !isNaN(target)) {
            countUp(numEl, target);
          }
        });
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.querySelector('.stats-counter-section');
  if (statsSection) observer.observe(statsSection);
}

/* ==============================================================================
   8. SKILLS MATRIX (TABS & ANIMATED PROGRESS BARS)
   ============================================================================== */

function initializeSkillsMatrix() {
  const tabButtons = document.querySelectorAll('.matrix-tab-btn');
  const panels = document.querySelectorAll('.matrix-panel');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      panels.forEach(p => {
        p.classList.remove('active');
        p.hidden = true;
      });

      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const targetId = btn.getAttribute('aria-controls');
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.add('active');
        targetPanel.hidden = false;
        animatePanelBars(targetPanel);
      }
    });
  });

  const animatePanelBars = (panel) => {
    const bars = panel.querySelectorAll('.bar-fill');
    bars.forEach(bar => {
      const progress = bar.dataset.progress || '80';
      bar.style.width = `${progress}%`;
    });
  };

  // Scroll into view trigger
  const matrixSection = document.getElementById('skills-matrix');
  if (matrixSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const activePanel = document.querySelector('.matrix-panel.active');
          if (activePanel) animatePanelBars(activePanel);
        }
      });
    }, { threshold: 0.2 });

    observer.observe(matrixSection);
  }
}

/* ==============================================================================
   9. TESTIMONIALS SLIDER
   ============================================================================== */

function initializeTestimonialsSlider() {
  const slides = document.querySelectorAll('.testimonial-slide');
  const dotsContainer = document.getElementById('testimonial-dots');
  const prevBtn = document.getElementById('testimonial-prev');
  const nextBtn = document.getElementById('testimonial-next');
  let currentSlide = 0;
  let autoTimer = null;

  if (slides.length === 0) return;

  // Build pagination dots
  if (dotsContainer) {
    dotsContainer.innerHTML = '';
    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = `slider-dot ${i === 0 ? 'active' : ''}`;
      dot.type = 'button';
      dot.setAttribute('aria-label', `Go to testimonial ${i + 1}`);
      dot.addEventListener('click', () => {
        goToSlide(i);
        restartTimer();
      });
      dotsContainer.appendChild(dot);
    });
  }

  const goToSlide = (idx) => {
    slides.forEach((s, i) => {
      s.classList.toggle('active', i === idx);
    });
    const dots = dotsContainer?.querySelectorAll('.slider-dot');
    dots?.forEach((d, i) => {
      d.classList.toggle('active', i === idx);
    });
    currentSlide = idx;
  };

  const nextSlide = () => {
    const next = (currentSlide + 1) % slides.length;
    goToSlide(next);
  };

  const prevSlide = () => {
    const prev = (currentSlide - 1 + slides.length) % slides.length;
    goToSlide(prev);
  };

  prevBtn?.addEventListener('click', () => {
    prevSlide();
    restartTimer();
  });

  nextBtn?.addEventListener('click', () => {
    nextSlide();
    restartTimer();
  });

  const startTimer = () => {
    autoTimer = setInterval(nextSlide, 5000);
  };

  const restartTimer = () => {
    clearInterval(autoTimer);
    startTimer();
  };

  startTimer();

  const sliderWrap = document.getElementById('testimonials-slider');
  sliderWrap?.addEventListener('mouseenter', () => clearInterval(autoTimer));
  sliderWrap?.addEventListener('mouseleave', () => startTimer());
}

/* ==============================================================================
   10. LIVE SEARCH WIDGET
   ============================================================================== */

function initializeLiveSearch() {
  const searchInput = document.getElementById('portfolio-search');
  const clearBtn = document.getElementById('search-clear-btn');
  const dropdown = document.getElementById('search-results-dropdown');

  if (!searchInput || !dropdown) return;

  const searchableItems = [
    ...PROJECTS_DATA.map(p => ({ title: p.title, meta: 'Project', type: 'project', data: p })),
    ...TOP10_SKILLS_DATA.map(s => ({ title: s.title, meta: 'Skill', type: 'skill', data: s })),
    ...ACHIEVEMENTS_DATA.map(a => ({ title: a.title, meta: 'Honor', type: 'achievement', data: a }))
  ];

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim().toLowerCase();

    if (!query) {
      if (clearBtn) clearBtn.hidden = true;
      dropdown.hidden = true;
      dropdown.innerHTML = '';
      return;
    }

    if (clearBtn) clearBtn.hidden = false;

    const matches = searchableItems.filter(item => 
      item.title.toLowerCase().includes(query) ||
      item.meta.toLowerCase().includes(query)
    );

    if (matches.length === 0) {
      dropdown.innerHTML = `<div class="search-no-results">No matches found for "${escapeHtml(query)}"</div>`;
      dropdown.hidden = false;
      return;
    }

    dropdown.innerHTML = matches.slice(0, 5).map(m => `
      <div class="search-result-item" role="option" tabindex="0" data-id="${m.data.id || ''}" data-type="${m.type}">
        <span class="result-item-title">${escapeHtml(m.title)}</span>
        <span class="result-item-meta">${escapeHtml(m.meta)}</span>
      </div>
    `).join('');

    dropdown.hidden = false;

    dropdown.querySelectorAll('.search-result-item').forEach(itemEl => {
      itemEl.addEventListener('click', () => {
        const itemType = itemEl.dataset.type;
        const itemId = itemEl.dataset.id;
        dropdown.hidden = true;

        if (itemType === 'project') {
          const p = PROJECTS_DATA.find(x => x.id === itemId);
          if (p) openProjectModal(p);
        } else if (itemType === 'achievement') {
          const a = ACHIEVEMENTS_DATA.find(x => x.id === itemId);
          if (a) openGenericModal(a);
        } else {
          document.getElementById('top-skills')?.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  });

  clearBtn?.addEventListener('click', () => {
    searchInput.value = '';
    clearBtn.hidden = true;
    dropdown.hidden = true;
    dropdown.innerHTML = '';
    searchInput.focus();
  });

  // Close search dropdown on click outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('#search-widget')) {
      dropdown.hidden = true;
    }
  });
}

/* ==============================================================================
   11. NAVIGATION & MOBILE MENU
   ============================================================================== */

function initializeNavigation() {
  const header = document.getElementById('site-header');
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('primary-navigation');
  const links = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  }, { passive: true });

  menuToggle?.addEventListener('click', () => {
    const isOpen = navLinks?.classList.contains('is-open');
    if (isOpen) {
      navLinks?.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    } else {
      navLinks?.classList.add('is-open');
      menuToggle.setAttribute('aria-expanded', 'true');
    }
  });

  links.forEach(l => {
    l.addEventListener('click', () => {
      navLinks?.classList.remove('is-open');
      menuToggle?.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ==============================================================================
   12. CONTACT FORM VALIDATION & MAILTO DISPATCH
   ============================================================================== */

function initializeContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const nameInput = document.getElementById('form-name');
  const emailInput = document.getElementById('form-email');
  const subjectInput = document.getElementById('form-subject');
  const messageInput = document.getElementById('form-message');
  const alertDiv = document.getElementById('form-alert');

  const errName = document.getElementById('err-name');
  const errEmail = document.getElementById('err-email');
  const errSubject = document.getElementById('err-subject');
  const errMessage = document.getElementById('err-message');

  const recipient = 'kapurekajal06@gmail.com';

  const clearErrors = () => {
    [nameInput, emailInput, subjectInput, messageInput].forEach(inp => {
      inp?.classList.remove('has-error');
    });
    if (errName) errName.textContent = '';
    if (errEmail) errEmail.textContent = '';
    if (errSubject) errSubject.textContent = '';
    if (errMessage) errMessage.textContent = '';
    if (alertDiv) {
      alertDiv.className = 'form-alert';
      alertDiv.textContent = '';
    }
  };

  const isEmail = (email) => {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(String(email).trim().toLowerCase());
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    clearErrors();

    let valid = true;
    let firstFocus = null;

    const n = nameInput ? nameInput.value.trim() : '';
    const em = emailInput ? emailInput.value.trim() : '';
    const s = subjectInput ? subjectInput.value.trim() : '';
    const m = messageInput ? messageInput.value.trim() : '';

    if (!n || n.length < 2) {
      valid = false;
      nameInput.classList.add('has-error');
      if (errName) errName.textContent = 'Please enter your name (at least 2 characters).';
      if (!firstFocus) firstFocus = nameInput;
    }

    if (!em || !isEmail(em)) {
      valid = false;
      emailInput.classList.add('has-error');
      if (errEmail) errEmail.textContent = 'Please enter a valid email address.';
      if (!firstFocus) firstFocus = emailInput;
    }

    if (!s || s.length < 3) {
      valid = false;
      subjectInput.classList.add('has-error');
      if (errSubject) errSubject.textContent = 'Please enter a subject (at least 3 characters).';
      if (!firstFocus) firstFocus = subjectInput;
    }

    if (!m || m.length < 10) {
      valid = false;
      messageInput.classList.add('has-error');
      if (errMessage) errMessage.textContent = 'Please enter a message with at least 10 characters.';
      if (!firstFocus) firstFocus = messageInput;
    }

    if (!valid) {
      firstFocus?.focus();
      return;
    }

    // Compose mailto query
    const mailSubject = encodeURIComponent(`[Portfolio Inquiry] ${s}`);
    const mailBody = encodeURIComponent(
      `Hi Kajal,\n\n${m}\n\n---\nFrom: ${n}\nReply-To: ${em}`
    );
    const mailtoLink = `mailto:${recipient}?subject=${mailSubject}&body=${mailBody}`;

    if (alertDiv) {
      alertDiv.className = 'form-alert alert-success';
      alertDiv.textContent = `Thank you, ${n}! Opening your email app to message Kajal Kapure (${recipient})...`;
    }

    window.location.href = mailtoLink;
    form.reset();
  });
}

/* ==============================================================================
   UTILITY HELPERS
   ============================================================================== */

function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/* ==============================================================================
   TIMELINE RENDERING
   ============================================================================== */

/**
 * Renders the Education & Journey timeline dynamically from TIMELINE_DATA
 */
function renderTimeline() {
  const timelineList = document.getElementById('timeline-list');
  if (!timelineList || !Array.isArray(TIMELINE_DATA)) return;

  timelineList.innerHTML = '';
  TIMELINE_DATA.forEach(item => {
    const el = document.createElement('div');
    el.className = 'timeline-item';
    const tagsHtml = (item.tags || [])
      .map(t => `<span class="timeline-chip">${escapeHtml(t)}</span>`)
      .join('');

    el.innerHTML = `
      <div class="timeline-marker" aria-hidden="true">
        <span class="marker-dot"></span>
      </div>
      <div class="timeline-content">
        <span class="timeline-year">${item.year}</span>
        <h3 class="timeline-heading">${escapeHtml(item.heading)}</h3>
        <p class="timeline-body">${item.body}</p>
        <div class="timeline-tags">${tagsHtml}</div>
      </div>
    `;
    timelineList.appendChild(el);
  });
}

/* ==============================================================================
   INITIALIZATION
   ============================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initializePersonaGate();
  initializeThemeAndProgress();
  initializeBillboard();
  initializeTyping();
  renderRails();
  renderTimeline();
  initializeFilterChips();
  initializeRailInteractions();
  initializeProjectModal();
  initializeResumeModal();
  initializeStatsCounters();
  initializeSkillsMatrix();
  initializeTestimonialsSlider();
  initializeLiveSearch();
  initializeNavigation();
  initializeContactForm();
});

