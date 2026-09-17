/**
 * CivicPulse — Voter Awareness Platform
 * Interactive JavaScript Application
 * 100% Non-Partisan Civic Empowerment Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  initVoterJourney();
  initInfoEvaluation();
  initApathyMythbuster();
  initCivicQuiz();
  initCivicPledge();
  initFinalActions();
  initConfettiEngine();
  updateCurrentYear();
});

/* ==========================================================================
   1. THEME MANAGER (Dark & Light Mode)
   ========================================================================== */
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const root = document.documentElement;

  // Retrieve saved preference or default to dark
  const savedTheme = localStorage.getItem('civicpulse_theme') || 'dark';
  root.setAttribute('data-theme', savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = root.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', newTheme);
      localStorage.setItem('civicpulse_theme', newTheme);
      showToast(`Switched to ${newTheme} theme`);
    });
  }
}

/* ==========================================================================
   2. NAVIGATION & SCROLLSPY
   ========================================================================== */
function initNavigation() {
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  // Toggle mobile drawer
  if (mobileBtn && mobileDrawer) {
    mobileBtn.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('open');
      mobileBtn.classList.toggle('open');
      mobileBtn.setAttribute('aria-expanded', isOpen);
      mobileDrawer.setAttribute('aria-hidden', !isOpen);
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        mobileBtn.classList.remove('open');
        mobileBtn.setAttribute('aria-expanded', 'false');
        mobileDrawer.setAttribute('aria-hidden', 'true');
      });
    });
  }

  // Scrollspy to highlight active link
  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   3. VOTER JOURNEY (5-Step Interactive Timeline)
   ========================================================================== */
const journeyData = [
  {
    step: 1,
    label: "Learn",
    title: "1. Learn: Understand Community Needs & Key Issues",
    desc: "Every vote begins with informed curiosity. Review official voter pamphlets, read public service records, and understand the real impact of proposed policies on local schools, roads, healthcare, and economic opportunity.",
    checklist: [
      "Consult official election commission guides and voter information pamphlets.",
      "Explore non-partisan candidate debates and policy platforms.",
      "Identify the issues that matter most to your family and neighborhood."
    ],
    hint: "Pro-Tip: Bookmark official non-partisan voter portals at least two weeks before election day.",
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="45" stroke="#3a86ff" stroke-width="3" stroke-dasharray="6 4" opacity="0.4"/>
      <path d="M30 40H70M30 52H60M30 64H50" stroke="#00f5d4" stroke-width="4" stroke-linecap="round"/>
      <circle cx="70" cy="62" r="14" fill="#3a86ff" fill-opacity="0.2" stroke="#3a86ff" stroke-width="3"/>
      <line x1="79" y1="71" x2="88" y2="80" stroke="#3a86ff" stroke-width="4" stroke-linecap="round"/>
    </svg>`
  },
  {
    step: 2,
    label: "Decide",
    title: "2. Decide: Compare Platforms with Discerning Values",
    desc: "Weigh long-term sustainable governance against short-term promises. Compare facts objectively, evaluate credibility, and form your own independent judgment without yielding to social or partisan pressure.",
    checklist: [
      "Compare candidate track records and past voting history on key issues.",
      "Distinguish between realistic policy plans and exaggerated campaign promises.",
      "Make an independent, values-driven choice that aligns with your vision."
    ],
    hint: "Pro-Tip: Create a quick personal scorecard comparing candidates on your top 3 civic priorities.",
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="45" stroke="#10b981" stroke-width="3" stroke-dasharray="6 4" opacity="0.4"/>
      <path d="M50 25V75M30 42L50 25L70 42" stroke="#10b981" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
      <rect x="22" y="42" width="16" height="10" rx="3" fill="#3a86ff"/>
      <rect x="62" y="42" width="16" height="10" rx="3" fill="#00f5d4"/>
      <path d="M22 75H78" stroke="#10b981" stroke-width="4" stroke-linecap="round"/>
    </svg>`
  },
  {
    step: 3,
    label: "Participate",
    title: "3. Participate: Prepare & Plan Your Polling Day",
    desc: "Civic participation is seamless when you prepare ahead. Verify your voter registration status, check your designated polling station or mail-in ballot deadlines, and gather necessary identification documents.",
    checklist: [
      "Confirm your registration status on your local election portal.",
      "Note your exact polling precinct location and operating hours.",
      "Arrange transportation or review early voting and absentee ballot options."
    ],
    hint: "Pro-Tip: Setting a reminder on your phone for morning or early afternoon voting helps avoid peak line hours.",
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="28" width="50" height="50" rx="8" stroke="#8b5cf6" stroke-width="3" fill="none"/>
      <path d="M25 42H75" stroke="#8b5cf6" stroke-width="3"/>
      <circle cx="42" cy="56" r="4" fill="#00f5d4"/>
      <circle cx="58" cy="56" r="4" fill="#3a86ff"/>
      <circle cx="42" cy="68" r="4" fill="#3a86ff"/>
      <circle cx="58" cy="68" r="4" fill="#10b981"/>
      <path d="M35 20V32M65 20V32" stroke="#8b5cf6" stroke-width="4" stroke-linecap="round"/>
    </svg>`
  },
  {
    step: 4,
    label: "Vote",
    title: "4. Vote: Cast Your Confidential & Equal Ballot",
    desc: "Step into the voting booth with confidence. Your ballot is completely private, legally protected, and counts equally with every other citizen’s voice in your democracy.",
    checklist: [
      "Follow all official ballot instructions carefully to ensure validity.",
      "Exercise your right in complete secrecy and peace of mind.",
      "Take pride in participating in one of humanity's greatest civic achievements."
    ],
    hint: "Pro-Tip: In a secret ballot, nobody has the right to know how you voted—your choice is 100% yours.",
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="45" width="60" height="40" rx="6" stroke="#3a86ff" stroke-width="3" fill="none"/>
      <path d="M35 45L50 25L65 45" stroke="#00f5d4" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
      <rect x="42" y="32" width="16" height="24" rx="2" fill="#3a86ff" fill-opacity="0.3" stroke="#3a86ff" stroke-width="2"/>
      <line x1="36" y1="65" x2="64" y2="65" stroke="#3a86ff" stroke-width="3" stroke-linecap="round"/>
    </svg>`
  },
  {
    step: 5,
    label: "Count",
    title: "5. Make Your Voice Count: Sustaining Civic Progress",
    desc: "Casting a vote is the beginning of continuous civic engagement. Stay informed on enacted legislation, participate in public town halls, and hold elected representatives accountable to their commitments.",
    checklist: [
      "Follow post-election local government meetings and policy updates.",
      "Engage respectfully in constructive community discussions.",
      "Inspire friends, family, and peers to stay engaged for future elections."
    ],
    hint: "Pro-Tip: Democracy works best all year round through ongoing community participation.",
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="42" stroke="#10b981" stroke-width="3"/>
      <path d="M32 50L44 62L70 36" stroke="#00f5d4" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="50" cy="50" r="48" stroke="#3a86ff" stroke-width="2" stroke-dasharray="4 6" opacity="0.5"/>
    </svg>`
  }
];

let currentJourneyIndex = 0;

function initVoterJourney() {
  const stepButtons = document.querySelectorAll('.journey-step-btn');
  const prevBtn = document.getElementById('prev-step-btn');
  const nextBtn = document.getElementById('next-step-btn');

  function renderStep(index) {
    currentJourneyIndex = index;
    const data = journeyData[index];

    // Update buttons active states
    stepButtons.forEach((btn, i) => {
      btn.classList.toggle('active', i === index);
      btn.classList.toggle('completed', i < index);
      btn.setAttribute('aria-selected', i === index);
    });

    // Update progress fill
    const fillBar = document.getElementById('journey-progress-fill');
    if (fillBar) {
      fillBar.style.width = `${((index + 1) / journeyData.length) * 100}%`;
    }

    // Update Content
    const titleEl = document.getElementById('step-title');
    const descEl = document.getElementById('step-desc');
    const badgeEl = document.getElementById('step-badge');
    const checklistEl = document.getElementById('step-checklist');
    const graphicEl = document.getElementById('step-graphic-box');
    const tipEl = document.getElementById('step-tip-text');

    if (titleEl) titleEl.textContent = data.title;
    if (descEl) descEl.textContent = data.desc;
    if (badgeEl) badgeEl.textContent = `Phase ${data.step} of 5`;
    if (tipEl) tipEl.textContent = data.hint;
    if (graphicEl) graphicEl.innerHTML = data.svg;

    if (checklistEl) {
      checklistEl.innerHTML = data.checklist.map(item => `
        <div class="step-checklist-item">
          <span class="step-check-icon">✓</span>
          <span>${item}</span>
        </div>
      `).join('');
    }

    // Update Dots
    const dots = document.querySelectorAll('.step-dot');
    dots.forEach((dot, i) => dot.classList.toggle('active', i === index));

    // Update Nav buttons
    if (prevBtn) {
      prevBtn.disabled = index === 0;
    }
    if (nextBtn) {
      if (index === journeyData.length - 1) {
        nextBtn.innerHTML = `<span>Complete Journey</span> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`;
      } else {
        const nextLabel = journeyData[index + 1].label;
        nextBtn.innerHTML = `<span>Next: ${nextLabel}</span> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>`;
      }
    }
  }

  stepButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const stepIdx = parseInt(btn.getAttribute('data-step'), 10);
      renderStep(stepIdx);
    });
  });

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentJourneyIndex > 0) renderStep(currentJourneyIndex - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (currentJourneyIndex < journeyData.length - 1) {
        renderStep(currentJourneyIndex + 1);
      } else {
        // Scrolled or navigated to quiz
        showToast("Great job exploring the 5-step voter journey!");
        const quizSection = document.getElementById('voter-quiz');
        if (quizSection) quizSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  renderStep(0);
}

/* ==========================================================================
   4. THINK BEFORE YOU VOTE (Information Evaluation Tool)
   ========================================================================== */
function initInfoEvaluation() {
  const checkboxes = document.querySelectorAll('.eval-check');
  const fillBar = document.getElementById('eval-status-fill');
  const statusText = document.getElementById('eval-status-text');

  const messages = [
    "Select verification steps above to evaluate information reliability.",
    "Good start! Always verify primary source documentation.",
    "Great progress! Multiple independent sources significantly reduce misinformation risk.",
    "Strong evaluation! Checking objective tone prevents emotional manipulation.",
    "Excellent! This claim has passed the 4-point Civic Truth & Reliability Standard! 🎉"
  ];

  function updateEvalProgress() {
    let checkedCount = 0;
    checkboxes.forEach(cb => {
      if (cb.checked) checkedCount++;
    });

    const percent = (checkedCount / checkboxes.length) * 100;
    if (fillBar) fillBar.style.width = `${percent}%`;
    if (statusText) {
      statusText.textContent = messages[checkedCount];
      if (checkedCount === 4) {
        statusText.style.color = 'var(--color-emerald)';
        triggerConfetti(0.3);
      } else {
        statusText.style.color = 'var(--text-muted)';
      }
    }
  }

  checkboxes.forEach(cb => {
    cb.addEventListener('change', updateEvalProgress);
  });
}

/* ==========================================================================
   5. BEAT VOTER APATHY (Interactive Mythbuster)
   ========================================================================== */
const apathyContent = [
  {
    myth: "“My one single vote won't make any difference in a large election.”",
    factTitle: "Elections are regularly decided by razor-thin margins.",
    factDesc: "Throughout history and in local municipalities, crucial school board measures, town council elections, and city referendums have been decided by fewer than 10 votes—and in some cases, a single ballot! Furthermore, voter turnout is an aggregate of millions of individuals: when thousands of citizens assume their vote doesn't matter, collective democracy loses its voice.",
    takeaway: "When you vote, you guarantee that your voice is officially recorded and counted."
  },
  {
    myth: "“I don't know enough about politics to make a good decision.”",
    factTitle: "You don't need a political science degree to make a meaningful choice.",
    factDesc: "No one is expected to master every complex legislative code. Responsible voting simply means caring about what matters to your daily life—good roads, fair taxes, accessible healthcare, and thriving schools. Reviewing non-partisan voter guides for just 15 minutes before election day gives you all the tools you need.",
    takeaway: "Your life experience as a citizen is already a valuable and legitimate perspective."
  },
  {
    myth: "“Voting takes too much time, effort, and scheduling hassle.”",
    factTitle: "Modern election systems offer flexible, accessible options for all.",
    factDesc: "Many election systems now offer mail-in ballots, early voting weekends, and streamlined polling locators. With a small amount of advance planning—like checking your polling station ahead of time and voting during non-peak morning or early afternoon hours—voting takes as little as 10 to 15 minutes.",
    takeaway: "A few minutes invested at the ballot box protects your community rights for years to come."
  },
  {
    myth: "“Nothing ever changes anyway, no matter who gets elected.”",
    factTitle: "Local and regional policies directly shape our daily living conditions.",
    factDesc: "While national politics can feel slow, local and municipal governance moves rapidly. Local officials set park budgets, approve clean water infrastructure, direct public transit lines, and set property tax rates. When citizens participate in local elections, the impact is swift, tangible, and visible right outside your doorstep.",
    takeaway: "Change is tangible and immediate when communities participate actively at the ballot box."
  }
];

function initApathyMythbuster() {
  const tabs = document.querySelectorAll('.apathy-tab-btn');
  const mythTitle = document.getElementById('apathy-myth-title');
  const factTitle = document.getElementById('apathy-fact-title');
  const factDesc = document.getElementById('apathy-fact-desc');
  const takeawayText = document.getElementById('apathy-takeaway-text');
  const card = document.getElementById('apathy-card');

  function renderApathy(index) {
    tabs.forEach((tab, i) => {
      tab.classList.toggle('active', i === index);
      tab.setAttribute('aria-selected', i === index);
    });

    const data = apathyContent[index];

    // Card fade effect
    if (card) {
      card.style.opacity = '0.4';
      setTimeout(() => {
        if (mythTitle) mythTitle.textContent = data.myth;
        if (factTitle) factTitle.textContent = data.factTitle;
        if (factDesc) factDesc.textContent = data.factDesc;
        if (takeawayText) takeawayText.innerHTML = `<strong>Key Insight:</strong> ${data.takeaway}`;
        card.style.opacity = '1';
      }, 150);
    }
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const idx = parseInt(tab.getAttribute('data-apathy'), 10);
      renderApathy(idx);
    });
  });
}

/* ==========================================================================
   6. VOTER AWARENESS CHALLENGE (Quiz Engine)
   ========================================================================== */
const quizQuestions = [
  {
    question: "Why is the secret ballot considered a cornerstone of a healthy democracy?",
    options: [
      "To prevent election authorities from counting valid ballots.",
      "To protect voters from coercion, intimidation, and social pressure.",
      "To make election day take longer to count.",
      "To discourage people from discussing community issues."
    ],
    correctIndex: 1,
    explanation: "A secret ballot ensures every citizen can vote according to their true convictions and conscience without fear of retaliation, peer pressure, or intimidation."
  },
  {
    question: "What is the most reliable way to evaluate candidate claims before casting a vote?",
    options: [
      "Believe viral rumors shared in private group chats.",
      "Check official manifestos, verified legislative records, and non-partisan sources.",
      "Only listen to sensational headlines on social media.",
      "Vote based strictly on how celebrity influencers vote."
    ],
    correctIndex: 1,
    explanation: "Responsible voters consult official election commission guidelines, direct voting track records, and independent non-partisan fact-checkers."
  },
  {
    question: "Why are local and municipal elections just as critical as national elections?",
    options: [
      "Because local elections decide neighborhood roads, school funding, and clean water infrastructure.",
      "They aren't important at all.",
      "Because local elections have no effect on daily life.",
      "Only national laws have any impact on citizens."
    ],
    correctIndex: 0,
    explanation: "Local governance directly shapes everyday services—such as municipal sanitation, fire and police emergency response, schools, zoning, and parks."
  },
  {
    question: "What should you do when encountering sensational political claims designed to cause outrage?",
    options: [
      "Instantly forward it to all your contacts to spread urgency.",
      "Accept it as truth if it aligns with your personal opinions.",
      "Pause, cross-verify with reputable independent sources, and avoid resharing unverified claims.",
      "Assume truth without looking for citations or primary documents."
    ],
    correctIndex: 2,
    explanation: "Pausing to verify citations and facts prevents the spread of misinformation and keeps democratic discourse grounded in truth."
  },
  {
    question: "In a constitutional democracy, who holds the ultimate power of accountability over elected representatives?",
    options: [
      "Special interest groups and large marketing agencies.",
      "The participating citizens through the power of their vote.",
      "Automated computer algorithms.",
      "Only politicians themselves."
    ],
    correctIndex: 1,
    explanation: "Democracy literally translates to 'power of the people'. The ultimate authority to retain or replace representatives rests in the hands of participating voters."
  }
];

let currentQuizIndex = 0;
let userQuizScore = 0;
let answeredCurrent = false;

function initCivicQuiz() {
  const qIndexEl = document.getElementById('quiz-q-index');
  const scoreBadgeEl = document.getElementById('quiz-current-score');
  const progressFill = document.getElementById('quiz-progress-fill');
  const questionTextEl = document.getElementById('quiz-question-text');
  const optionsListEl = document.getElementById('quiz-options-list');
  const feedbackBox = document.getElementById('quiz-feedback-box');
  const feedbackIcon = document.getElementById('feedback-icon');
  const feedbackTitle = document.getElementById('feedback-title');
  const feedbackText = document.getElementById('feedback-text');
  const nextBtn = document.getElementById('quiz-next-btn');
  const hintBtn = document.getElementById('quiz-hint-btn');
  const hintPopup = document.getElementById('quiz-hint-popup');
  const questionBox = document.getElementById('quiz-question-box');
  const resultView = document.getElementById('quiz-result-view');
  const retakeBtn = document.getElementById('quiz-retake-btn');

  function renderQuestion(index) {
    answeredCurrent = false;
    const qData = quizQuestions[index];

    if (qIndexEl) qIndexEl.textContent = `Question ${index + 1} of ${quizQuestions.length}`;
    if (scoreBadgeEl) scoreBadgeEl.textContent = `Score: ${userQuizScore} / ${quizQuestions.length}`;
    if (progressFill) progressFill.style.width = `${((index + 1) / quizQuestions.length) * 100}%`;
    if (questionTextEl) questionTextEl.textContent = qData.question;
    
    if (feedbackBox) {
      feedbackBox.classList.add('hidden');
      feedbackBox.classList.remove('correct', 'incorrect');
    }

    if (nextBtn) {
      nextBtn.disabled = true;
      nextBtn.innerHTML = index === quizQuestions.length - 1 
        ? `<span>See Final Results</span> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>`
        : `<span>Next Question</span> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>`;
    }

    if (hintPopup) hintPopup.classList.add('hidden');

    if (optionsListEl) {
      const letters = ['A', 'B', 'C', 'D'];
      optionsListEl.innerHTML = qData.options.map((opt, i) => `
        <button class="quiz-option-btn" data-opt-index="${i}">
          <span class="quiz-option-letter">${letters[i]}</span>
          <span class="quiz-option-text">${opt}</span>
        </button>
      `).join('');

      // Add click listener to options
      const optButtons = optionsListEl.querySelectorAll('.quiz-option-btn');
      optButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          if (answeredCurrent) return;
          handleOptionSelect(parseInt(btn.getAttribute('data-opt-index'), 10), optButtons);
        });
      });
    }
  }

  function handleOptionSelect(selectedIndex, optButtons) {
    answeredCurrent = true;
    const qData = quizQuestions[currentQuizIndex];
    const isCorrect = selectedIndex === qData.correctIndex;

    optButtons.forEach((btn, i) => {
      btn.classList.add('disabled');
      if (i === qData.correctIndex) {
        btn.classList.add('correct');
      } else if (i === selectedIndex && !isCorrect) {
        btn.classList.add('incorrect');
      }
    });

    if (isCorrect) {
      userQuizScore++;
      if (scoreBadgeEl) scoreBadgeEl.textContent = `Score: ${userQuizScore} / ${quizQuestions.length}`;
      if (feedbackBox) {
        feedbackBox.classList.remove('hidden', 'incorrect');
        feedbackBox.classList.add('correct');
      }
      if (feedbackIcon) feedbackIcon.textContent = '✓';
      if (feedbackTitle) feedbackTitle.textContent = 'Correct!';
    } else {
      if (feedbackBox) {
        feedbackBox.classList.remove('hidden', 'correct');
        feedbackBox.classList.add('incorrect');
      }
      if (feedbackIcon) feedbackIcon.textContent = '✗';
      if (feedbackTitle) feedbackTitle.textContent = 'Learning Opportunity:';
    }

    if (feedbackText) feedbackText.textContent = qData.explanation;
    if (nextBtn) nextBtn.disabled = false;
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (currentQuizIndex < quizQuestions.length - 1) {
        currentQuizIndex++;
        renderQuestion(currentQuizIndex);
      } else {
        showQuizResults();
      }
    });
  }

  if (hintBtn && hintPopup) {
    hintBtn.addEventListener('click', () => {
      hintPopup.classList.toggle('hidden');
    });
  }

  function showQuizResults() {
    if (questionBox) questionBox.classList.add('hidden');
    if (document.querySelector('.quiz-footer')) document.querySelector('.quiz-footer').classList.add('hidden');
    if (resultView) resultView.classList.remove('hidden');

    const scorePct = Math.round((userQuizScore / quizQuestions.length) * 100);
    const scoreTextEl = document.getElementById('result-score-text');
    const titleEl = document.getElementById('result-title');
    const msgEl = document.getElementById('result-message');

    if (scoreTextEl) scoreTextEl.textContent = `You scored ${userQuizScore} out of ${quizQuestions.length} (${scorePct}%)`;

    if (userQuizScore === 5) {
      if (titleEl) titleEl.textContent = "Civic Champion! 🏆";
      if (msgEl) msgEl.textContent = "Incredible! You have a comprehensive and nuanced understanding of democratic participation, discernment, and civic duty.";
      triggerConfetti(0.8);
    } else if (userQuizScore >= 3) {
      if (titleEl) titleEl.textContent = "Informed Citizen! 🌟";
      if (msgEl) msgEl.textContent = "Great job! You grasp the key pillars of voting rights and critical thinking in democracy.";
      triggerConfetti(0.4);
    } else {
      if (titleEl) titleEl.textContent = "Aspiring Citizen! 📖";
      if (msgEl) msgEl.textContent = "Every election is a learning journey! Review the voter journey and think-before-you-vote guides to sharpen your civic knowledge.";
    }
  }

  if (retakeBtn) {
    retakeBtn.addEventListener('click', () => {
      currentQuizIndex = 0;
      userQuizScore = 0;
      if (resultView) resultView.classList.add('hidden');
      if (questionBox) questionBox.classList.remove('hidden');
      if (document.querySelector('.quiz-footer')) document.querySelector('.quiz-footer').classList.remove('hidden');
      renderQuestion(0);
    });
  }

  renderQuestion(0);
}

/* ==========================================================================
   7. MY VOTE, MY RESPONSIBILITY (Civic Pledge)
   ========================================================================== */
function initCivicPledge() {
  const checkboxes = document.querySelectorAll('.pledge-checkbox');
  const radialBar = document.getElementById('pledge-radial-bar');
  const percentText = document.getElementById('pledge-percent-text');
  const nameInput = document.getElementById('pledge-user-name');
  const certDisplayName = document.getElementById('cert-display-name');
  const certDate = document.getElementById('cert-date');
  const certStatus = document.getElementById('cert-status-badge');
  const unlockBtn = document.getElementById('pledge-unlock-btn');
  const selectAllBtn = document.getElementById('pledge-all-btn');
  const resetBtn = document.getElementById('pledge-reset-btn');

  // Set today's date formatted nicely
  const today = new Date();
  const dateFormatted = today.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
  if (certDate) certDate.textContent = `Issued: ${dateFormatted}`;

  // Update pledge state
  function updatePledgeProgress() {
    let checkedCount = 0;
    checkboxes.forEach(cb => {
      if (cb.checked) checkedCount++;
    });

    const percent = Math.round((checkedCount / checkboxes.length) * 100);
    
    // Circumference = 2 * PI * r (r=50) ~= 314
    const offset = 314 - (314 * (percent / 100));
    if (radialBar) radialBar.style.strokeDashoffset = offset;
    if (percentText) percentText.textContent = `${percent}%`;

    if (checkedCount === checkboxes.length) {
      if (certStatus) {
        certStatus.textContent = "Verified Pledge ✓";
        certStatus.classList.add('completed');
      }
      if (unlockBtn) unlockBtn.disabled = false;
      triggerConfetti(0.6);
      showToast("Pledge completed! Your Civic Responsibility Badge is ready.");
    } else {
      if (certStatus) {
        certStatus.textContent = `Locked (${checkedCount}/${checkboxes.length})`;
        certStatus.classList.remove('completed');
      }
      if (unlockBtn) unlockBtn.disabled = true;
    }
  }

  checkboxes.forEach(cb => {
    cb.addEventListener('change', updatePledgeProgress);
  });

  // Dynamic Name Update
  if (nameInput && certDisplayName) {
    nameInput.addEventListener('input', (e) => {
      const val = e.target.value.trim();
      certDisplayName.textContent = val.length > 0 ? val : "Responsible Citizen";
    });
  }

  // Quick Select All
  if (selectAllBtn) {
    selectAllBtn.addEventListener('click', () => {
      checkboxes.forEach(cb => cb.checked = true);
      updatePledgeProgress();
    });
  }

  // Reset
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      checkboxes.forEach(cb => cb.checked = false);
      updatePledgeProgress();
    });
  }

  // Download / Share Action
  if (unlockBtn) {
    unlockBtn.addEventListener('click', () => {
      const name = nameInput ? (nameInput.value.trim() || "Responsible Citizen") : "Responsible Citizen";
      const shareText = `🗳️ I, ${name}, have taken the Civic Responsibility Pledge at CivicPulse!\n\nI commit to:\n1. Verifying facts from primary sources\n2. Thinking critically & independently\n3. Respecting differing viewpoints\n4. Participating on election day\n5. Inspiring others to vote\n\nYour Vote. Your Voice. Your Future. ✨`;

      if (navigator.clipboard) {
        navigator.clipboard.writeText(shareText).then(() => {
          showToast("Pledge text copied to clipboard! Share it with friends.");
        }).catch(() => {
          showToast("Certificate Verified! Thank you for your commitment.");
        });
      } else {
        showToast("Certificate Verified! Thank you for your commitment.");
      }
    });
  }
}

/* ==========================================================================
   8. FINAL ACTIONS (Calendar Reminder & Share Modal)
   ========================================================================== */
function initFinalActions() {
  const calendarBtn = document.getElementById('calendar-reminder-btn');
  const shareBtn = document.getElementById('share-platform-btn');
  const modal = document.getElementById('share-modal');
  const modalClose = document.getElementById('modal-close-btn');
  const copyShareBtn = document.getElementById('copy-share-text-btn');
  const shareText = document.getElementById('share-text-input');

  // Generate .ics Calendar reminder file
  if (calendarBtn) {
    calendarBtn.addEventListener('click', () => {
      generateElectionCalendarFile();
      showToast("Election Day reminder downloaded to your calendar!");
    });
  }

  // Open Share Modal
  if (shareBtn && modal) {
    shareBtn.addEventListener('click', () => {
      modal.classList.remove('hidden');
    });
  }

  // Close Share Modal
  if (modalClose && modal) {
    modalClose.addEventListener('click', () => {
      modal.classList.add('hidden');
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.add('hidden');
    });
  }

  // Copy share text
  if (copyShareBtn && shareText) {
    copyShareBtn.addEventListener('click', () => {
      shareText.select();
      shareText.setSelectionRange(0, 99999);
      if (navigator.clipboard) {
        navigator.clipboard.writeText(shareText.value).then(() => {
          showToast("Share message copied to clipboard!");
        });
      } else {
        document.execCommand('copy');
        showToast("Share message copied!");
      }
    });
  }
}

/**
 * Creates and triggers download of a standardized .ics calendar file
 */
function generateElectionCalendarFile() {
  const now = new Date();
  // Set date to upcoming election reminder (e.g., first Tuesday of November or next month)
  const eventDate = new Date(now.getFullYear(), 10, 3, 8, 0, 0); // Default Election Day sample
  
  const formatDate = (date) => {
    return date.toISOString().replace(/-|:|\.\d+/g, '');
  };

  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//CivicPulse//Voter Awareness Reminder//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `DTSTAMP:${formatDate(new Date())}`,
    `DTSTART:${formatDate(eventDate)}`,
    `DTEND:${formatDate(new Date(eventDate.getTime() + 12 * 60 * 60 * 1000))}`,
    'SUMMARY:🗳️ Election Day — Make Your Voice Count!',
    'DESCRIPTION:Remember to cast your confidential and informed vote today. Check your polling location and bring any necessary identification. Democracy powered by you! Visit CivicPulse for guides.',
    'LOCATION:Your Designated Local Polling Station',
    'STATUS:CONFIRMED',
    'BEGIN:VALARM',
    'TRIGGER:-PT2H',
    'DESCRIPTION:Election Day Reminder: Polling Stations are open!',
    'ACTION:DISPLAY',
    'END:VALARM',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.setAttribute('download', 'Election_Day_Civic_Reminder.ics');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/* ==========================================================================
   9. TOAST NOTIFICATION UTILITY
   ========================================================================== */
function showToast(message) {
  const toast = document.getElementById('toast-notification');
  const toastMsg = document.getElementById('toast-msg');

  if (toast && toastMsg) {
    toastMsg.textContent = message;
    toast.classList.remove('hidden');

    setTimeout(() => {
      toast.classList.add('hidden');
    }, 3200);
  }
}

/* ==========================================================================
   10. LIGHTWEIGHT CANVAS CONFETTI ENGINE
   ========================================================================== */
let confettiParticles = [];
let confettiAnimationId = null;

function initConfettiEngine() {
  const canvas = document.getElementById('confetti-canvas');
  if (!canvas) return;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();
}

function triggerConfetti(intensity = 0.5) {
  const canvas = document.getElementById('confetti-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const count = Math.floor(60 * intensity);
  const colors = ['#3a86ff', '#00f5d4', '#10b981', '#f59e0b', '#8b5cf6', '#ffffff'];

  for (let i = 0; i < count; i++) {
    confettiParticles.push({
      x: canvas.width / 2 + (Math.random() - 0.5) * 200,
      y: canvas.height / 2 + (Math.random() - 0.5) * 100,
      vx: (Math.random() - 0.5) * 14,
      vy: (Math.random() - 0.7) * 14 - 3,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 8,
      life: 1,
      decay: Math.random() * 0.015 + 0.008
    });
  }

  if (!confettiAnimationId) {
    animateConfetti(canvas, ctx);
  }
}

function animateConfetti(canvas, ctx) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = confettiParticles.length - 1; i >= 0; i--) {
    const p = confettiParticles[i];
    p.x += p.vx;
    p.y += p.vy;
    p.vy += 0.35; // gravity
    p.rotation += p.rotationSpeed;
    p.life -= p.decay;

    if (p.life <= 0 || p.y > canvas.height) {
      confettiParticles.splice(i, 1);
      continue;
    }

    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate((p.rotation * Math.PI) / 180);
    ctx.globalAlpha = p.life;
    ctx.fillStyle = p.color;
    ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.7);
    ctx.restore();
  }

  if (confettiParticles.length > 0) {
    confettiAnimationId = requestAnimationFrame(() => animateConfetti(canvas, ctx));
  } else {
    confettiAnimationId = null;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}

function updateCurrentYear() {
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
}
