const introScreen = document.getElementById('introScreen');
const appShell = document.getElementById('appShell');
const loginForm = document.getElementById('loginForm');
const loginDisplayName = document.getElementById('loginDisplayName');
const loginEmail = document.getElementById('loginEmail');
const loginPassword = document.getElementById('loginPassword');
const displayNameField = document.getElementById('displayNameField');
const enterBtn = document.getElementById('enterBtn');
const authModeBtn = document.getElementById('authModeBtn');
const authMessage = document.getElementById('authMessage');
const logoutBtn = document.getElementById('logoutBtn');
const menuBtn = document.getElementById('menuBtn');
const sideMenu = document.getElementById('sideMenu');
const closeMenuBtn = document.getElementById('closeMenuBtn');
const creditBtn = document.getElementById('creditBtn');
const creditsPanel = document.getElementById('creditsPanel');
const closeCreditsBtn = document.getElementById('closeCreditsBtn');
const backToMenuBtn = document.getElementById('backToMenuBtn');
const taskForm = document.getElementById('taskForm');
const startTaskBtn = document.getElementById('startTaskBtn');
const usernameDisplay = document.getElementById('usernameDisplay');
const navUsernameDisplay = document.getElementById('navUsernameDisplay');
const userInitials = document.getElementById('userInitials');
const taskInput = document.getElementById('taskInput');
const taskFeedback = document.getElementById('taskFeedback');
const savedFocusNote = document.getElementById('savedFocusNote');
const savedFocusText = document.getElementById('savedFocusText');
const timeGreeting = document.getElementById('timeGreeting');
const todayDate = document.getElementById('todayDate');
const subjectSelect = document.getElementById('subjectSelect');
const favoriteSubjectStatus = document.getElementById('favoriteSubjectStatus');
const paceSelect = document.getElementById('paceSelect');
const customSubjectInput = document.getElementById('customSubjectInput');
const addCustomSubjectBtn = document.getElementById('addCustomSubjectBtn');
const taskListForm = document.getElementById('taskListForm');
const taskListInput = document.getElementById('taskListInput');
const taskDifficulty = document.getElementById('taskDifficulty');
const taskListItems = document.getElementById('taskListItems');
const taskListMessage = document.getElementById('taskListMessage');
const sideMenuLinks = document.querySelectorAll('.side-menu-link');
const appPageElements = document.querySelectorAll('[data-app-page]');
const focusTimerForm = document.getElementById('focusTimerForm');
const focusTimerDisplay = document.getElementById('focusTimerDisplay');
const focusTimerMessage = document.getElementById('focusTimerMessage');
const timerMinutes = document.getElementById('timerMinutes');
const timerStartBtn = document.getElementById('timerStartBtn');
const timerPauseBtn = document.getElementById('timerPauseBtn');
const timerResetBtn = document.getElementById('timerResetBtn');
const screenLimitMessage = document.getElementById('screenLimitMessage');
const dismissScreenLimitBtn = document.getElementById('dismissScreenLimitBtn');
const myFriendCode = document.getElementById('myFriendCode');
const copyFriendCodeBtn = document.getElementById('copyFriendCodeBtn');
const addBuddyForm = document.getElementById('addBuddyForm');
const buddyCodeInput = document.getElementById('buddyCodeInput');
const buddyCodePreview = document.getElementById('buddyCodePreview');
const buddyMessage = document.getElementById('buddyMessage');
const refreshBuddiesBtn = document.getElementById('refreshBuddiesBtn');
const incomingBuddyRequests = document.getElementById('incomingBuddyRequests');
const outgoingBuddyRequests = document.getElementById('outgoingBuddyRequests');
const myBuddyList = document.getElementById('myBuddyList');
const pointsBalance = document.getElementById('pointsBalance');
const levelNumber = document.getElementById('levelNumber');
const streakCount = document.getElementById('streakCount');
const streakUnit = document.getElementById('streakUnit');
const longestStreakCount = document.getElementById('longestStreakCount');
const longestStreakUnit = document.getElementById('longestStreakUnit');
const xpProgressText = document.getElementById('xpProgressText');
const totalXpText = document.getElementById('totalXpText');
const levelProgressTrack = document.getElementById('levelProgressTrack');
const levelProgressBar = document.getElementById('levelProgressBar');
const mascotFace = document.getElementById('mascotFace');
const mascotMessage = document.getElementById('mascotMessage');
const reminderQuote = document.getElementById('reminderQuote');
const reminderAuthor = document.getElementById('reminderAuthor');
const reminderAbout = document.getElementById('reminderAbout');
const quoteStatus = document.getElementById('quoteStatus');
const splashMark = document.querySelector('.splash-mark');
const splashLogo = document.querySelector('.splash-logo');
const creditMemberButtons = document.querySelectorAll('.credit-member-btn');
const creditDetail = document.getElementById('creditDetail');
const creditDetailTitle = document.getElementById('creditDetailTitle');
const creditDetailText = document.getElementById('creditDetailText');
const creditPhoto = document.getElementById('creditPhoto');
const settingsBtn = document.getElementById('settingsBtn');
const feedbackBtn = document.getElementById('feedbackBtn');
const feedbackPanel = document.getElementById('feedbackPanel');
const closeFeedbackBtn = document.getElementById('closeFeedbackBtn');
const backToMenuFromFeedbackBtn = document.getElementById('backToMenuFromFeedbackBtn');
const feedbackForm = document.getElementById('feedbackForm');
const feedbackType = document.getElementById('feedbackType');
const feedbackMessage = document.getElementById('feedbackMessage');
const feedbackStatus = document.getElementById('feedbackStatus');
const feedbackSubmitBtn = document.getElementById('feedbackSubmitBtn');
const settingsDefaultTimer = document.getElementById('settingsDefaultTimer');
const settingsScreenBreak = document.getElementById('settingsScreenBreak');
const settingsNotifyBtn = document.getElementById('settingsNotifyBtn');
const settingsNotifyStatus = document.getElementById('settingsNotifyStatus');
const settingsGoPreferencesBtn = document.getElementById('settingsGoPreferencesBtn');
const settingsResetBtn = document.getElementById('settingsResetBtn');
const settingsResetStatus = document.getElementById('settingsResetStatus');
const settingsSaveStatus = document.getElementById('settingsSaveStatus');
const screenBreakReminderValue = document.getElementById('screenBreakReminderValue');
const SETTINGS_DEFAULT_TIMER_KEY = 'procrastiNotDefaultTimer';
const SETTINGS_SCREEN_BREAK_KEY = 'procrastiNotScreenBreakMinutes';
const settingsPanel = document.getElementById('settingsPanel');
const closeSettingsBtn = document.getElementById('closeSettingsBtn');
const backToMenuFromSettingsBtn = document.getElementById('backToMenuFromSettingsBtn');
const CALENDAR_KEY = 'procrastiNotCalendarReminders';
const calendarGrid = document.getElementById('calendarGrid');
const calendarMonthLabel = document.getElementById('calendarMonthLabel');
const calendarPrevBtn = document.getElementById('calendarPrevBtn');
const calendarNextBtn = document.getElementById('calendarNextBtn');
const calendarReminderForm = document.getElementById('calendarReminderForm');
const calendarReminderDate = document.getElementById('calendarReminderDate');
const calendarReminderText = document.getElementById('calendarReminderText');
const calendarMessage = document.getElementById('calendarMessage');
const calendarReminderList = document.getElementById('calendarReminderList');
const calendarReminderTime = document.getElementById('calendarReminderTime');
let calendarViewDate = new Date();
let calendarSelectedDate = '';
let calendarReminders = {};
const COLOR_MAP = {
    red: '#9b3e31',
    amber: '#b9770e',
    green: '#5a8f3b',
    blue: '#3a6ea5'
};
let calendarAlarmTimers = {};

function showCreditPhoto(name, photo) {
    if (!photo) {
        creditPhoto.src = '';
        creditPhoto.alt = `${name}, team member`;
        creditPhoto.style.display = 'none';

        let placeholder = creditPhoto.parentElement.querySelector('.credit-placeholder');
        if (!placeholder) {
            placeholder = document.createElement('div');
            placeholder.className = 'credit-placeholder';
            creditPhoto.parentElement.appendChild(placeholder);
        }
        placeholder.textContent = name.charAt(0).toUpperCase();
        placeholder.style.display = 'grid';
        return;
    }

    creditPhoto.style.display = 'grid';
    const placeholder = creditPhoto.parentElement.querySelector('.credit-placeholder');
    if (placeholder) {
        placeholder.style.display = 'none';
    }
    creditPhoto.src = `assets/${photo}`;
    creditPhoto.alt = `${name}, team member`;
}

let audioCtx = null;
function ensureAudio() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
}
async function playPlushieSquish() {
    try {
        ensureAudio();
        if (audioCtx.state === 'suspended') {
            await audioCtx.resume();
        }
        const now = audioCtx.currentTime;

        // Soft "boing" plucky attack
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(220, now);
        osc.frequency.exponentialRampToValueAtTime(330, now + 0.06);
        osc.frequency.exponentialRampToValueAtTime(180, now + 0.14);
        gain.gain.setValueAtTime(0.18, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now);
        osc.stop(now + 0.18);

        // Subtle soft "pop" noise layer
        const noise = audioCtx.createBufferSource();
        const buffer = audioCtx.createBuffer(1, audioCtx.sampleRate * 0.08, audioCtx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < data.length; i++) {
            data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / data.length, 2);
        }
        noise.buffer = buffer;
        const noiseGain = audioCtx.createGain();
        noiseGain.gain.setValueAtTime(0.05, now);
        noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
        noise.connect(noiseGain);
        noiseGain.connect(audioCtx.destination);
        noise.start(now);
        noise.stop(now + 0.08);
    } catch (error) {
        console.warn('Could not play the squish sound. Check browser audio permissions.', error);
    }
}

if (creditMemberButtons.length && creditDetail && creditDetailTitle && creditDetailText && creditPhoto) {
    creditMemberButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const name = button.dataset.name;
            const photo = button.dataset.photo;
            if (!name) {
                return;
            }

            creditMemberButtons.forEach((memberButton) => {
                memberButton.setAttribute('aria-pressed', String(memberButton === button));
            });

            creditDetailTitle.textContent = name;
            creditDetailText.textContent = `${name} is part of the Researcher team.`;
            showCreditPhoto(name, photo);

            creditDetail.classList.remove('is-entering');
            void creditDetail.offsetWidth;
            creditDetail.classList.add('is-entering');
        });
    });

    if (creditPhoto) {
        creditPhoto.addEventListener('click', () => {
            creditPhoto.classList.add('credit-squish');
            playPlushieSquish();
            setTimeout(() => creditPhoto.classList.remove('credit-squish'), 220);
        });
    }
}

if (splashMark && splashLogo) {
    let activePointerId = null;

    function triggerLogoSquish() {
        splashLogo.classList.remove('is-squishing');
        void splashLogo.offsetWidth;
        splashLogo.classList.add('is-squishing');
        playPlushieSquish();
    }

    splashLogo.addEventListener('animationend', (event) => {
        if (event.animationName === 'juicy-squish') {
            splashLogo.classList.remove('is-squishing');
        }
    });

    splashLogo.addEventListener('pointerdown', (event) => {
        if (!event.isPrimary) {
            return;
        }

        event.preventDefault();
        activePointerId = event.pointerId;
        splashLogo.setPointerCapture(event.pointerId);
        triggerLogoSquish();
    });

    splashLogo.addEventListener('pointerup', (event) => {
        if (event.pointerId === activePointerId) {
            activePointerId = null;
        }
    });

    splashLogo.addEventListener('pointercancel', () => {
        activePointerId = null;
    });

    splashLogo.addEventListener('lostpointercapture', () => {
        activePointerId = null;
    });

    splashLogo.addEventListener('keydown', (event) => {
        if ((event.key === 'Enter' || event.key === ' ') && !event.repeat) {
            event.preventDefault();
            triggerLogoSquish();
        }
    });
}

const DAILY_QUOTE_KEY = 'procrastiNotDailyQuote';
const supabaseConfig = window.SUPABASE_CONFIG;
const supabaseClient = window.supabase && supabaseConfig && supabaseConfig.url && supabaseConfig.anonKey
    ? window.supabase.createClient(supabaseConfig.url, supabaseConfig.anonKey)
    : null;
let currentUser = null;
let taskList = [];
let gameState = createGameState();
let timerRemainingSeconds = 25 * 60;
let timerEndTime = null;
let timerInterval = null;
let timerHasStarted = false;
let siteUsageSeconds = 0;
let nextBreakReminderAt = 5 * 60;
let siteUsageLastTick = null;
let siteUsageLastSavedAt = 0;
let siteUsageInterval = null;
let siteUsageDate = '';
let buddyDashboardRequest = 0;
let buddyCodeLookupRequest = 0;
let buddyCodePreviewed = '';
let buddyCodeLookupTimeout = null;
let isSignUpMode = true;
const TASK_LIST_KEY = 'procrastiNotTasks';
const SITE_USAGE_KEY = 'procrastiNotSiteUsage';
let SCREEN_LIMIT_SECONDS = 5 * 60;
const POINTS_BY_DIFFICULTY = { small: 5, medium: 10, large: 20 };
const SAVED_MASCOT_IDS = ['bunny', 'cat', 'fox', 'panda', 'bear'];
const OFFLINE_QUOTE = {
    quote: 'To strive, to seek, to find, and not to yield.',
    author: 'Alfred, Lord Tennyson'
};

function getTimeGreeting() {
    const hour = new Date().getHours();

    if (hour < 12) {
        return 'Good morning';
    }

    if (hour < 18) {
        return 'Good afternoon';
    }

    return 'Good evening';
}

function showDailyQuote(quote, isOnline) {
    if (reminderQuote) {
        reminderQuote.textContent = `“${quote.quote}”`;
    }
    if (reminderAuthor) {
        reminderAuthor.textContent = quote.author;
    }
    if (reminderAbout) {
        reminderAbout.hidden = !isOnline;
    }
    if (quoteStatus) {
        quoteStatus.textContent = isOnline
            ? ''
            : 'Today’s quote could not load online. Showing an offline quote instead.';
    }
}

async function loadDailyQuote() {
    let cachedQuote = null;
    let cacheReadFailed = false;
    try {
        const cached = localStorage.getItem(DAILY_QUOTE_KEY);
        const parsed = cached ? JSON.parse(cached) : null;
        if (parsed?.source === 'quoteslate' && parsed.date === dateKey(new Date()) &&
            typeof parsed.quote === 'string' && parsed.quote.trim() &&
            typeof parsed.author === 'string' && parsed.author.trim()) {
            cachedQuote = { quote: parsed.quote.trim(), author: parsed.author.trim() };
        }
    } catch {
        cachedQuote = null;
        cacheReadFailed = true;
    }

    if (cachedQuote) {
        showDailyQuote(cachedQuote, true);
        return;
    }

    showDailyQuote(OFFLINE_QUOTE, false);

    try {
        const response = await fetch('https://quoteslate.vercel.app/api/quotes/random?tags=motivation', {
            headers: { Accept: 'application/json' }
        });
        if (!response.ok) {
            throw new Error(`Quote service returned HTTP ${response.status}.`);
        }

        const today = await response.json();
        if (!today || typeof today.quote !== 'string' || !today.quote.trim() ||
            typeof today.author !== 'string' || !today.author.trim() ||
            !Array.isArray(today.tags) || !today.tags.some((tag) =>
                typeof tag === 'string' && tag.toLowerCase() === 'motivation')) {
            throw new Error('Quote service returned an invalid daily quote.');
        }

        const quote = { quote: today.quote.trim(), author: today.author.trim() };
        showDailyQuote(quote, true);
        if (cacheReadFailed && quoteStatus) {
            quoteStatus.textContent = 'Could not read the saved quote; loaded a fresh quote online.';
        }
        try {
            localStorage.setItem(DAILY_QUOTE_KEY, JSON.stringify({
                source: 'quoteslate',
                date: dateKey(new Date()),
                ...quote
            }));
        } catch {
            if (quoteStatus) {
                quoteStatus.textContent = 'Today’s quote is live, but could not be saved for offline use.';
            }
        }
    } catch (error) {
        showDailyQuote(OFFLINE_QUOTE, false);
        if (quoteStatus && error instanceof Error) {
            quoteStatus.textContent = `Could not load today’s quote online (${error.message}). Showing an offline quote instead.`;
        }
    }
}

let currentFavoriteSubject = '';

function setFavoriteSubjectStatus(message, isError = false) {
    if (favoriteSubjectStatus) {
        favoriteSubjectStatus.textContent = message;
        favoriteSubjectStatus.classList.toggle('is-error', isError);
    }
}

function selectSubjectButton(selectedButton) {
    subjectSelect.querySelectorAll('.subject-btn').forEach((button) => {
        const isSelected = button === selectedButton;
        button.classList.toggle('is-selected', isSelected);
        button.setAttribute('aria-pressed', String(isSelected));
    });
}

function attachSubjectButton(button) {
    button.addEventListener('click', () => {
        void saveFavoriteSubject(button.dataset.subject);
    });
}

function getOrCreateSubjectButton(subject) {
    const existingButton = Array.from(subjectSelect.querySelectorAll('.subject-btn'))
        .find((button) => button.dataset.subject === subject);
    if (existingButton) {
        return existingButton;
    }

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'subject-btn';
    button.dataset.subject = subject;
    button.setAttribute('aria-pressed', 'false');
    button.textContent = subject;
    subjectSelect.append(button);
    attachSubjectButton(button);
    return button;
}

async function saveFavoriteSubject(subject) {
    if (!subject) {
        return false;
    }

    const previousSubject = currentFavoriteSubject;
    const selectedButton = getOrCreateSubjectButton(subject);
    selectSubjectButton(selectedButton);
    setFavoriteSubjectStatus(`Saving ${subject} as your favorite…`);

    if (!currentUser) {
        selectSubjectButton(previousSubject ? getOrCreateSubjectButton(previousSubject) : null);
        setFavoriteSubjectStatus('Sign in to save your favorite subject.', true);
        return false;
    }

    if (!await saveProfile({ favorite_subject: subject })) {
        selectSubjectButton(previousSubject ? getOrCreateSubjectButton(previousSubject) : null);
        setFavoriteSubjectStatus(
            taskFeedback?.textContent || 'Could not save your favorite subject. Please try again.',
            true
        );
        return false;
    }

    currentFavoriteSubject = subject;
    setFavoriteSubjectStatus(`${subject} is saved as your favorite subject.`);
    return true;
}

function syncDashboard(profile) {
    const firstName = profile.display_name || 'Student';

    if (usernameDisplay) {
        usernameDisplay.textContent = firstName;
    }

    if (navUsernameDisplay) {
        navUsernameDisplay.textContent = firstName;
    }

    if (userInitials) {
        userInitials.textContent = firstName.trim().charAt(0).toUpperCase() || 'S';
    }

    if (timeGreeting) {
        timeGreeting.textContent = getTimeGreeting();
    }

    if (todayDate) {
        todayDate.textContent = new Intl.DateTimeFormat(undefined, {
            weekday: 'long',
            month: 'long',
            day: 'numeric'
        }).format(new Date());
    }

    if (subjectSelect) {
        subjectSelect.querySelectorAll('.subject-btn').forEach((btn) => {
            btn.classList.remove('is-selected');
            btn.setAttribute('aria-pressed', 'false');
        });
        currentFavoriteSubject = profile.favorite_subject || '';
        if (profile.favorite_subject) {
            const button = getOrCreateSubjectButton(profile.favorite_subject);
            selectSubjectButton(button);
            setFavoriteSubjectStatus(`Your favorite subject is ${profile.favorite_subject}.`);
        } else {
            setFavoriteSubjectStatus('Choose a subject to set your favorite.');
        }
    }

    if (paceSelect && profile.study_pace) {
        const btn = paceSelect.querySelector(`[data-pace="${profile.study_pace}"]`);
        if (btn) {
            btn.classList.add('is-selected');
            btn.setAttribute('aria-pressed', 'true');
        }
        applyStudyPace(profile.study_pace);
    }

    if (taskInput) {
        taskInput.value = profile.focus_task || '';
    }

    setSavedFocusNote(profile.focus_task || '');

    if (taskFeedback) {
        taskFeedback.textContent = profile.focus_task ? 'Your focus is saved to your account.' : '';
    }

}

function formatTimer(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainder = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainder).padStart(2, '0')}`;
}

function setFocusTimerMessage(message, isError = false) {
    if (focusTimerMessage) {
        focusTimerMessage.textContent = message;
        focusTimerMessage.classList.toggle('is-error', isError);
    }
}

function renderFocusTimer() {
    if (focusTimerDisplay) {
        focusTimerDisplay.textContent = formatTimer(timerRemainingSeconds);
    }
    if (timerPauseBtn) {
        timerPauseBtn.disabled = !timerHasStarted || !timerEndTime;
    }
    if (timerStartBtn) {
        timerStartBtn.textContent = timerEndTime ? 'Running' : timerHasStarted ? 'Resume' : 'Start';
        timerStartBtn.disabled = Boolean(timerEndTime);
    }
    if (timerMinutes) {
        timerMinutes.disabled = timerHasStarted;
    }
}

function notifyTimerDone() {
    try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain); gain.connect(ctx.destination);
        osc.type = 'sine'; osc.frequency.value = 880;
        gain.gain.setValueAtTime(0.25, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.8);
        osc.start(); osc.stop(ctx.currentTime + 0.8);
    } catch (e) {}
    if ('Notification' in window) {
        if (Notification.permission === 'granted') {
            new Notification('Focus session complete', { body: 'Take a short screen break!' });
        } else if (Notification.permission !== 'denied') {
            Notification.requestPermission().then(p => {
                if (p === 'granted') new Notification('Focus session complete', { body: 'Take a short screen break!' });
            });
        }
    }
}

function tickFocusTimer() {
    if (!timerEndTime) {
        return;
    }
    timerRemainingSeconds = Math.max(0, Math.ceil((timerEndTime - Date.now()) / 1000));
    renderFocusTimer();
    if (timerRemainingSeconds === 0) {
        clearInterval(timerInterval);
        timerInterval = null;
        timerEndTime = null;
        timerHasStarted = false;
        renderFocusTimer();
        setFocusTimerMessage('Focus session complete. Take a short screen break!');
        notifyTimerDone();
    }
}

function startFocusTimer() {
    if (timerEndTime) {
        return;
    }
    if (!timerHasStarted) {
        const minutes = Number(timerMinutes && timerMinutes.value);
        if (!Number.isInteger(minutes) || minutes < 1 || minutes > 120) {
            setFocusTimerMessage('Choose a timer between 1 and 120 minutes.', true);
            return;
        }
        timerRemainingSeconds = minutes * 60;
    }
    timerHasStarted = true;
    timerEndTime = Date.now() + timerRemainingSeconds * 1000;
    setFocusTimerMessage('Timer running. You can pause whenever you need.');
    clearInterval(timerInterval);
    timerInterval = setInterval(tickFocusTimer, 250);
    renderFocusTimer();
}

function pauseFocusTimer() {
    if (!timerEndTime) {
        return;
    }
    timerRemainingSeconds = Math.max(0, Math.ceil((timerEndTime - Date.now()) / 1000));
    clearInterval(timerInterval);
    timerInterval = null;
    timerEndTime = null;
    renderFocusTimer();
    setFocusTimerMessage('Timer paused.');
}

function resetFocusTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    timerEndTime = null;
    timerHasStarted = false;
    const minutes = Number(timerMinutes && timerMinutes.value);
    timerRemainingSeconds = Number.isInteger(minutes) && minutes >= 1 && minutes <= 120
        ? minutes * 60
        : 25 * 60;
    renderFocusTimer();
    setFocusTimerMessage('Timer reset. Ready when you are.');
}

function siteUsageStorageKey() {
    return `${SITE_USAGE_KEY}:${siteUsageDate}`;
}

function loadSiteUsage() {
    siteUsageDate = dateKey(new Date());
    SCREEN_LIMIT_SECONDS = getSavedScreenBreakMinutes() * 60;
    updateScreenBreakReminderValue();
    try {
        const raw = localStorage.getItem(siteUsageStorageKey());
        const saved = raw ? JSON.parse(raw) : null;
        siteUsageSeconds = saved && Number.isSafeInteger(saved.seconds) && saved.seconds >= 0
            ? saved.seconds
            : 0;
        nextBreakReminderAt = saved && Number.isSafeInteger(saved.nextReminderAt) && saved.nextReminderAt >= SCREEN_LIMIT_SECONDS
            ? saved.nextReminderAt
            : SCREEN_LIMIT_SECONDS;
    } catch (error) {
        siteUsageSeconds = 0;
        nextBreakReminderAt = SCREEN_LIMIT_SECONDS;
        if (screenLimitMessage) {
            screenLimitMessage.textContent = `Screen-time reminder could not load: ${error.message}`;
            screenLimitMessage.classList.add('is-error');
        }
    }
}

function saveSiteUsage() {
    try {
        localStorage.setItem(siteUsageStorageKey(), JSON.stringify({
            seconds: Math.floor(siteUsageSeconds),
            nextReminderAt: Math.floor(nextBreakReminderAt)
        }));
    } catch (error) {
        if (screenLimitMessage) {
            screenLimitMessage.textContent = `Screen-time reminder could not be saved: ${error.message}`;
            screenLimitMessage.classList.add('is-error');
        }
    }
}

function updateScreenLimitMessage() {
    if (!screenLimitMessage || siteUsageSeconds < nextBreakReminderAt) {
        return;
    }
    screenLimitMessage.textContent = `You’ve been on this site for ${Math.floor(siteUsageSeconds / 60)} minutes. Consider stepping away for a screen break.`;
    screenLimitMessage.classList.remove('is-error');
    if (dismissScreenLimitBtn) {
        dismissScreenLimitBtn.hidden = false;
    }
}

function tickSiteUsage() {
    const now = Date.now();
    const today = dateKey(new Date());
    if (today !== siteUsageDate) {
        siteUsageDate = today;
        siteUsageSeconds = 0;
        nextBreakReminderAt = SCREEN_LIMIT_SECONDS;
        if (dismissScreenLimitBtn) {
            dismissScreenLimitBtn.hidden = true;
        }
        if (screenLimitMessage) {
            screenLimitMessage.textContent = '';
        }
        saveSiteUsage();
    }
    if (!currentUser || document.visibilityState !== 'visible') {
        siteUsageLastTick = null;
        return;
    }
    if (siteUsageLastTick !== null) {
        siteUsageSeconds += Math.max(0, Math.min(2, (now - siteUsageLastTick) / 1000));
        updateScreenLimitMessage();
        if (now - siteUsageLastSavedAt >= 15000) {
            saveSiteUsage();
            siteUsageLastSavedAt = now;
        }
    }
    siteUsageLastTick = now;
}

function startSiteUsageTracking() {
    loadSiteUsage();
    siteUsageLastTick = null;
    if (siteUsageInterval) {
        clearInterval(siteUsageInterval);
    }
    updateScreenLimitMessage();
    siteUsageInterval = setInterval(tickSiteUsage, 1000);
}

function setBuddyMessage(message, isError = false) {
    if (buddyMessage) {
        buddyMessage.textContent = message;
        buddyMessage.classList.toggle('is-error', isError);
    }
}

function explainBuddyError(error) {
    if (error && (error.code === 'PGRST202' || error.code === '42P01' || error.code === '42883')) {
        return 'The buddy feature needs setup. Run buddy-system.sql in your Supabase SQL Editor, then refresh this page.';
    }
    return error && error.message ? error.message : 'The buddy request failed. Please try again.';
}

function createBuddyListItem(text) {
    const item = document.createElement('li');
    item.className = 'buddy-empty';
    item.textContent = text;
    return item;
}

function renderBuddyDashboard(data) {
    if (myFriendCode) {
        myFriendCode.textContent = data.friend_code;
    }
    if (copyFriendCodeBtn) {
        copyFriendCodeBtn.disabled = false;
    }

    incomingBuddyRequests.replaceChildren();
    const incoming = Array.isArray(data.incoming) ? data.incoming : [];
    if (incoming.length === 0) {
        incomingBuddyRequests.append(createBuddyListItem('No new requests.'));
    }
    incoming.forEach((request) => {
        const item = document.createElement('li');
        item.className = 'buddy-request-item';
        const name = document.createElement('span');
        name.textContent = request.display_name;
        const actions = document.createElement('div');
        actions.className = 'buddy-actions';
        [['Accept', true], ['Decline', false]].forEach(([label, accept]) => {
            const button = document.createElement('button');
            button.className = accept ? 'buddy-action-btn is-primary' : 'buddy-action-btn';
            button.type = 'button';
            button.textContent = label;
            button.addEventListener('click', async () => {
                button.disabled = true;
                try {
                    const { error } = await supabaseClient.rpc('respond_to_study_buddy_request', {
                        p_request_id: request.request_id,
                        p_accept: accept
                    });
                    if (error) {
                        setBuddyMessage(explainBuddyError(error), true);
                        button.disabled = false;
                        return;
                    }
                    await loadBuddyDashboard();
                } catch (error) {
                    setBuddyMessage(explainBuddyError(error), true);
                    button.disabled = false;
                }
            });
            actions.append(button);
        });
        item.append(name, actions);
        incomingBuddyRequests.append(item);
    });

    outgoingBuddyRequests.replaceChildren();
    const outgoing = Array.isArray(data.outgoing) ? data.outgoing : [];
    if (outgoing.length === 0) {
        outgoingBuddyRequests.append(createBuddyListItem('No sent requests.'));
    }
    outgoing.forEach((request) => {
        const item = document.createElement('li');
        item.className = 'buddy-request-item';
        const name = document.createElement('span');
        name.textContent = request.display_name;
        const actions = document.createElement('div');
        actions.className = 'buddy-actions';
        const pending = document.createElement('span');
        pending.className = 'buddy-pending';
        pending.textContent = 'Pending';
        const cancelButton = document.createElement('button');
        cancelButton.className = 'buddy-action-btn';
        cancelButton.type = 'button';
        cancelButton.textContent = 'Cancel';
        cancelButton.setAttribute('aria-label', `Cancel request to ${request.display_name}`);
        cancelButton.addEventListener('click', async () => {
            cancelButton.disabled = true;
            try {
                const { error } = await supabaseClient.rpc('cancel_study_buddy_request', {
                    p_request_id: request.request_id
                });
                if (error) {
                    setBuddyMessage(explainBuddyError(error), true);
                    cancelButton.disabled = false;
                    return;
                }
                await loadBuddyDashboard();
            } catch (error) {
                setBuddyMessage(explainBuddyError(error), true);
                cancelButton.disabled = false;
            }
        });
        actions.append(pending, cancelButton);
        item.append(name, actions);
        outgoingBuddyRequests.append(item);
    });

    myBuddyList.replaceChildren();
    const friends = Array.isArray(data.friends) ? data.friends : [];
    if (friends.length === 0) {
        myBuddyList.append(createBuddyListItem('Your accepted buddies will show here.'));
    }
    friends.forEach((friend) => {
        const item = document.createElement('li');
        item.className = 'buddy-friend-item';
        const info = document.createElement('div');
        info.className = 'buddy-friend-info';
        const name = document.createElement('strong');
        name.textContent = friend.display_name;
        const stats = document.createElement('span');
        stats.textContent = `${friend.points} points · Level ${friend.current_level} · ${friend.current_streak} day streak`;
        info.append(name, stats);
        const removeButton = document.createElement('button');
        removeButton.className = 'buddy-action-btn';
        removeButton.type = 'button';
        removeButton.textContent = 'Remove';
        removeButton.setAttribute('aria-label', `Remove ${friend.display_name} as a buddy`);
        removeButton.addEventListener('click', async () => {
            if (!window.confirm(`Remove ${friend.display_name} from your study buddies?`)) {
                return;
            }
            removeButton.disabled = true;
            try {
                const { error } = await supabaseClient.rpc('remove_study_buddy', {
                    p_buddy_id: friend.user_id
                });
                if (error) {
                    setBuddyMessage(explainBuddyError(error), true);
                    removeButton.disabled = false;
                    return;
                }
                setBuddyMessage(`${friend.display_name} was removed from your study buddies.`);
                await loadBuddyDashboard();
            } catch (error) {
                setBuddyMessage(explainBuddyError(error), true);
                removeButton.disabled = false;
            }
        });
        item.append(info, removeButton);
        myBuddyList.append(item);
    });
}

async function syncBuddyProgress() {
    if (!currentUser || !supabaseClient) {
        return false;
    }
    const progress = getStreakSummary(gameState.streakDates);
    try {
        const { error } = await supabaseClient.rpc('sync_study_buddy_progress', {
            p_points: gameState.points,
            p_current_level: Math.floor(gameState.xp / 100) + 1,
            p_current_streak: progress.current
        });
        if (error) {
            setBuddyMessage(explainBuddyError(error), true);
            return false;
        }
        return true;
    } catch (error) {
        setBuddyMessage(explainBuddyError(error), true);
        return false;
    }
}

async function loadBuddyDashboard() {
    if (!currentUser || !supabaseClient) {
        return false;
    }
    const requestId = ++buddyDashboardRequest;
    setBuddyMessage('Loading study buddies…');
    try {
        if (!await syncBuddyProgress()) {
            return false;
        }
        const { data, error } = await supabaseClient.rpc('get_study_buddy_dashboard');
        if (error) {
            setBuddyMessage(explainBuddyError(error), true);
            if (myFriendCode) {
                myFriendCode.textContent = 'Unavailable';
            }
            if (copyFriendCodeBtn) {
                copyFriendCodeBtn.disabled = true;
            }
            return false;
        }
        if (requestId !== buddyDashboardRequest) {
            return;
        }
        renderBuddyDashboard(data);
        setBuddyMessage('Only your display name and study progress are shared with accepted buddies.');
        return true;
    } catch (error) {
        setBuddyMessage(explainBuddyError(error), true);
        return false;
    }
}

function taskListStorageKey(userId) {
    return `${TASK_LIST_KEY}:${userId}`;
}

function createGameState() {
    return {
        points: 0,
        xp: 0,
        streakDates: [],
        unlockedMascots: ['bunny'],
        activeMascot: 'bunny'
    };
}

function dateKey(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function streakLengthEndingAt(startDate, streakDates) {
    let count = 0;
    const date = new Date(`${startDate}T12:00:00`);
    const dates = new Set(streakDates);

    while (dates.has(dateKey(date))) {
        count += 1;
        date.setDate(date.getDate() - 1);
    }
    return count;
}

function getStreakSummary(streakDates) {
    if (streakDates.length === 0) {
        return { current: 0, longest: 0 };
    }

    const today = new Date();
    const todayKey = dateKey(today);
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayKey = dateKey(yesterday);
    const activeStart = streakDates.includes(todayKey)
        ? todayKey
        : streakDates.includes(yesterdayKey) ? yesterdayKey : null;
    const current = activeStart ? streakLengthEndingAt(activeStart, streakDates) : 0;
    const sortedDates = [...new Set(streakDates)].sort();
    let longest = 0;
    let run = 0;
    let previousDate = null;

    sortedDates.forEach((value) => {
        const date = new Date(`${value}T12:00:00`);
        const distance = previousDate ? Math.round((date - previousDate) / 86400000) : null;
        run = distance === 1 ? run + 1 : 1;
        longest = Math.max(longest, run);
        previousDate = date;
    });

    return { current, longest };
}

function setMascotMessage(message, isError = false) {
    if (mascotMessage) {
        mascotMessage.textContent = message;
        mascotMessage.classList.toggle('is-error', isError);
    }
}

function setTaskListMessage(message, isError = false) {
    if (taskListMessage) {
        taskListMessage.textContent = message;
        taskListMessage.classList.toggle('is-error', isError);
    }
}

function saveTaskList() {
    if (!currentUser) {
        setTaskListMessage('Sign in to save your task list.', true);
        return false;
    }

    try {
        localStorage.setItem(taskListStorageKey(currentUser.id), JSON.stringify({
            tasks: taskList,
            gameState
        }));
        setTaskListMessage('');
        return true;
    } catch (error) {
        setTaskListMessage(`Could not save your task list: ${error.message}`, true);
        return false;
    }
}

function renderTaskList() {
    if (!taskListItems) {
        return;
    }

    taskListItems.replaceChildren();
    if (taskList.length === 0) {
        const emptyItem = document.createElement('li');
        emptyItem.className = 'task-list-empty';
        emptyItem.textContent = 'No tasks yet. Add one above to get started.';
        taskListItems.append(emptyItem);
        return;
    }

    taskList.forEach((task) => {
        const item = document.createElement('li');
        item.className = 'task-list-item';

        const label = document.createElement('label');
        label.className = 'task-list-label';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        checkbox.setAttribute('aria-label', `Mark "${task.title}" ${task.completed ? 'incomplete' : 'complete'}`);
        checkbox.addEventListener('change', () => {
            const previousCompleted = task.completed;
            const previousAwarded = task.awarded;
            const previousCompletedAt = task.completedAt;
            const previousGameState = JSON.stringify(gameState);
            task.completed = checkbox.checked;
            if (checkbox.checked && !task.awarded) {
                const points = POINTS_BY_DIFFICULTY[task.difficulty];
                task.awarded = true;
                task.completedAt = new Date().toISOString();
                gameState.points += points;
                gameState.xp += points;
                const today = dateKey(new Date());
                if (!gameState.streakDates.includes(today)) {
                    gameState.streakDates.push(today);
                }
            }

            if (saveTaskList()) {
                if (checkbox.checked && !previousAwarded) {
                    setTaskListMessage(`Task complete! +${POINTS_BY_DIFFICULTY[task.difficulty]} points and XP.`);
                    void syncBuddyProgress();
                } else if (!checkbox.checked) {
                    setTaskListMessage('Task marked incomplete. Any points already earned are yours to keep.');
                } else {
                    setTaskListMessage('Task complete again. Rewards for this task were already earned.');
                }
                renderTaskList();
                renderGameProgress();
                if (!checkbox.checked && previousAwarded) {
                    void syncBuddyProgress();
                }
            } else {
                task.completed = previousCompleted;
                task.awarded = previousAwarded;
                task.completedAt = previousCompletedAt;
                gameState = JSON.parse(previousGameState);
                checkbox.checked = previousCompleted;
            }
        });

        const title = document.createElement('span');
        title.className = task.completed ? 'is-complete' : '';
        title.textContent = task.title;
        label.append(checkbox, title);

        const taskInfo = document.createElement('span');
        taskInfo.className = 'task-list-info';
        const difficulty = document.createElement('span');
        difficulty.className = `task-difficulty is-${task.difficulty}`;
        difficulty.textContent = `${task.difficulty} · ${POINTS_BY_DIFFICULTY[task.difficulty]} pts`;
        taskInfo.append(difficulty);
        if (task.awarded) {
            const earned = document.createElement('span');
            earned.className = 'task-earned';
            earned.textContent = 'Earned';
            taskInfo.append(earned);
        }

        const removeButton = document.createElement('button');
        removeButton.className = 'task-list-remove';
        removeButton.type = 'button';
        removeButton.textContent = 'Remove';
        removeButton.setAttribute('aria-label', `Remove task: ${task.title}`);
        removeButton.addEventListener('click', () => {
            const taskIndex = taskList.findIndex((itemTask) => itemTask.id === task.id);
            if (taskIndex < 0) {
                return;
            }
            const [removedTask] = taskList.splice(taskIndex, 1);
            if (saveTaskList()) {
                renderTaskList();
            } else {
                taskList.splice(taskIndex, 0, removedTask);
                renderTaskList();
            }
        });

        item.append(label, taskInfo, removeButton);
        taskListItems.append(item);
    });
}

function renderGameProgress() {
    const level = Math.floor(gameState.xp / 100) + 1;
    const progress = gameState.xp % 100;
    const streak = getStreakSummary(gameState.streakDates);

    if (pointsBalance) pointsBalance.textContent = String(gameState.points);
    if (levelNumber) levelNumber.textContent = String(level);
    if (streakCount) streakCount.textContent = String(streak.current);
    if (streakUnit) streakUnit.textContent = streak.current === 1 ? 'day' : 'days';
    if (longestStreakCount) longestStreakCount.textContent = String(streak.longest);
    if (longestStreakUnit) longestStreakUnit.textContent = streak.longest === 1 ? 'day' : 'days';
    if (xpProgressText) xpProgressText.textContent = `${progress} / 100 XP to level ${level + 1}`;
    if (totalXpText) totalXpText.textContent = `${gameState.xp} XP total`;
    if (levelProgressBar) levelProgressBar.style.width = `${progress}%`;
    if (levelProgressTrack) levelProgressTrack.setAttribute('aria-valuenow', String(progress));
}

function loadTaskList(userId) {
    let loaded = true;
    try {
        const storedData = localStorage.getItem(taskListStorageKey(userId));
        const parsedData = storedData ? JSON.parse(storedData) : null;
        const savedTasks = Array.isArray(parsedData) ? parsedData : parsedData?.tasks || [];
        const savedGameState = Array.isArray(parsedData) ? createGameState() : parsedData?.gameState || createGameState();
        if (!Array.isArray(savedTasks) || savedTasks.some((task) =>
            !task || typeof task.id !== 'string' || typeof task.title !== 'string' ||
            typeof task.completed !== 'boolean' ||
            (task.difficulty !== undefined && !Object.hasOwn(POINTS_BY_DIFFICULTY, task.difficulty))
        )) {
            throw new Error('Saved task list data is invalid.');
        }
        if (!Array.isArray(savedGameState.streakDates)) {
            throw new Error('Saved streak data is invalid.');
        }
        const hasValidStreakDates = savedGameState.streakDates.every((value) =>
            typeof value === 'string' &&
            /^\d{4}-\d{2}-\d{2}$/.test(value) &&
            dateKey(new Date(`${value}T12:00:00`)) === value
        );
        if (!Number.isSafeInteger(savedGameState.points) || savedGameState.points < 0 ||
            !Number.isSafeInteger(savedGameState.xp) || savedGameState.xp < 0 ||
            !hasValidStreakDates ||
            !Array.isArray(savedGameState.unlockedMascots) ||
            !savedGameState.unlockedMascots.includes('bunny') ||
            !SAVED_MASCOT_IDS.includes(savedGameState.activeMascot) ||
            !savedGameState.unlockedMascots.includes(savedGameState.activeMascot) ||
            savedGameState.unlockedMascots.some((id) => !SAVED_MASCOT_IDS.includes(id))) {
            throw new Error('Saved progress data is invalid.');
        }
        taskList = savedTasks.map((task) => ({
            ...task,
            difficulty: task.difficulty || 'medium',
            awarded: task.awarded === true,
            completedAt: typeof task.completedAt === 'string' ? task.completedAt : null
        }));
        gameState = savedGameState;
        setTaskListMessage('');
        setMascotMessage('');
    } catch (error) {
        loaded = false;
        taskList = [];
        gameState = createGameState();
        setTaskListMessage(`Could not load your task list: ${error.message}`, true);
        setMascotMessage(`Could not load your progress: ${error.message}`, true);
    }
    renderTaskList();
    renderGameProgress();
    return loaded;
}

function setAuthMessage(message, isError = false) {
    if (authMessage) {
        authMessage.textContent = message;
        authMessage.classList.toggle('is-error', isError);
    }
}

function setSavedFocusNote(task) {
    if (!savedFocusNote || !savedFocusText) {
        return;
    }

    const hasFocus = Boolean(task.trim());
    const wasHidden = savedFocusNote.hidden;
    const focusChanged = savedFocusText.textContent !== task;
    savedFocusNote.classList.remove('is-appearing', 'is-replacing');
    savedFocusText.textContent = task;
    savedFocusNote.hidden = !hasFocus;

    if (hasFocus && (wasHidden || focusChanged)) {
        void savedFocusNote.offsetWidth;
        savedFocusNote.classList.add(wasHidden ? 'is-appearing' : 'is-replacing');
    }
}

function setAuthMode(isSignUp) {
    isSignUpMode = isSignUp;
    displayNameField.hidden = !isSignUp;
    loginDisplayName.required = isSignUp;
    loginPassword.autocomplete = isSignUp ? 'new-password' : 'current-password';
    enterBtn.innerHTML = isSignUp
        ? 'Create account <span aria-hidden="true">→</span>'
        : 'Sign in <span aria-hidden="true">→</span>';
    authModeBtn.textContent = isSignUp
        ? 'Already have an account? Sign in'
        : 'New here? Create an account';
    setAuthMessage(isSignUp
        ? 'Create an account to save your focus and study preferences.'
        : 'Sign in to continue to your saved work.');
}

async function loadAccount(user) {
    currentUser = user;
    try {
        const { data: profile, error } = await supabaseClient
            .from('student_profiles')
            .select('display_name, focus_task, favorite_subject, study_pace')
            .eq('user_id', user.id)
            .maybeSingle();

        if (error) {
            currentUser = null;
            setAuthMessage(`Could not load your saved work: ${error.message}`, true);
            return;
        }

        const accountProfile = profile || {
            display_name: (user.user_metadata && user.user_metadata.display_name) || user.email.split('@')[0],
            focus_task: '',
            favorite_subject: 'Science',
            study_pace: 'My own pace'
        };

        if (!profile) {
            const { error: saveError } = await supabaseClient
                .from('student_profiles')
                .insert({ user_id: user.id, ...accountProfile });

            if (saveError) {
                currentUser = null;
                setAuthMessage(`Could not create your saved-work profile: ${saveError.message}`, true);
                return;
            }
        }

        syncDashboard(accountProfile);
        const taskListLoaded = loadTaskList(user.id);
        startSiteUsageTracking();
        loadCalendarReminders();
        renderCalendar();
        renderReminderList();
        rescheduleAllAlarms();
        if (taskListLoaded) {
            void loadBuddyDashboard();
        }
        setAuthMessage('');
        if (appShell) {
            appShell.inert = false;
            appShell.setAttribute('aria-hidden', 'false');
        }
        if (introScreen) {
            introScreen.classList.add('hidden');
        }
    } catch (error) {
        currentUser = null;
        setAuthMessage(`Could not load your saved work: ${error.message}`, true);
    }
}

if (authModeBtn) {
    authModeBtn.addEventListener('click', () => setAuthMode(!isSignUpMode));
}

if (supabaseClient && loginForm) {
    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        enterBtn.disabled = true;
        setAuthMessage(isSignUpMode ? 'Creating your account…' : 'Signing you in…');

        try {
            const result = isSignUpMode
                ? await supabaseClient.auth.signUp({
                    email: loginEmail.value.trim(),
                    password: loginPassword.value,
                    options: { data: { display_name: loginDisplayName.value.trim() } }
                })
                : await supabaseClient.auth.signInWithPassword({
                    email: loginEmail.value.trim(),
                    password: loginPassword.value
                });

            if (result.error) {
                setAuthMessage(result.error.message, true);
                return;
            }

            if (isSignUpMode && !result.data.session) {
                setAuthMessage('Account created. Check your email to confirm your address, then sign in.');
            }
        } catch (error) {
            setAuthMessage(`Account request failed: ${error.message}`, true);
        } finally {
            enterBtn.disabled = false;
        }
    });
}

if (logoutBtn) {
    logoutBtn.addEventListener('click', async () => {
        if (!supabaseClient) {
            return;
        }
        const { error } = await supabaseClient.auth.signOut();
        if (error) {
            setAuthMessage(`Could not sign out: ${error.message}`, true);
            if (taskFeedback) {
                taskFeedback.textContent = `Could not sign out: ${error.message}`;
                taskFeedback.classList.add('is-error');
            }
        }
    });
}

function toggleMenu(forceOpen) {
    if (!sideMenu || !menuBtn) {
        return;
    }

    const openingMenu = typeof forceOpen === 'boolean' ? forceOpen : !sideMenu.classList.contains('open');
    sideMenu.classList.toggle('open', openingMenu);
    sideMenu.setAttribute('aria-hidden', String(!openingMenu));
    menuBtn.setAttribute('aria-expanded', String(openingMenu));
}

if (menuBtn) {
    menuBtn.addEventListener('click', () => toggleMenu());
}

if (closeMenuBtn) {
    closeMenuBtn.addEventListener('click', () => toggleMenu(false));
}

sideMenuLinks.forEach((link) => {
    link.addEventListener('click', () => {
        updateAppPage();
        toggleMenu(false);
    });
});

function updateAppPage() {
    const targetId = window.location.hash.slice(1) || 'home';
    const targetElement = document.getElementById(targetId);
    const activePage = targetId === 'home' ? 'home' : targetElement?.dataset.appPage || 'home';

    appPageElements.forEach((page) => {
        page.hidden = page.dataset.appPage !== activePage;
    });

    const activeLink = Array.from(sideMenuLinks).find((link) => link.hash === `#${targetId}`)
        || Array.from(sideMenuLinks).find((link) => link.hash === '#home');
    sideMenuLinks.forEach((link) => {
        link.classList.toggle('active', link === activeLink);
    });
}

window.addEventListener('hashchange', updateAppPage);
window.addEventListener('popstate', updateAppPage);
updateAppPage();

function toggleCreditsPanel(forceOpen) {
    if (!creditsPanel) {
        return;
    }

    const openingPanel = typeof forceOpen === 'boolean' ? forceOpen : !creditsPanel.classList.contains('open');
    creditsPanel.classList.toggle('open', openingPanel);
    creditsPanel.setAttribute('aria-hidden', String(!openingPanel));

    if (openingPanel) {
        toggleMenu(false);
    }
}

if (creditBtn) {
    creditBtn.addEventListener('click', () => toggleCreditsPanel());
}

if (closeCreditsBtn) {
    closeCreditsBtn.addEventListener('click', () => toggleCreditsPanel(false));
}

if (backToMenuBtn) {
    backToMenuBtn.addEventListener('click', () => {
        toggleCreditsPanel(false);
        toggleMenu(true);
    });
}

function toggleSettingsPanel(forceOpen) {
    if (!settingsPanel) {
        return;
    }

    const openingPanel = typeof forceOpen === 'boolean' ? forceOpen : !settingsPanel.classList.contains('open');
    settingsPanel.classList.toggle('open', openingPanel);
    settingsPanel.setAttribute('aria-hidden', String(!openingPanel));

    if (openingPanel) {
        toggleMenu(false);
        toggleCreditsPanel(false);
        readSettingsIntoControls();
    }
}

if (settingsBtn) {
    settingsBtn.addEventListener('click', () => toggleSettingsPanel());
}

if (closeSettingsBtn) {
    closeSettingsBtn.addEventListener('click', () => toggleSettingsPanel(false));
}

if (backToMenuFromSettingsBtn) {
    backToMenuFromSettingsBtn.addEventListener('click', () => {
        toggleSettingsPanel(false);
        toggleMenu(true);
    });
}

if (settingsGoPreferencesBtn) {
    settingsGoPreferencesBtn.addEventListener('click', () => {
        toggleSettingsPanel(false);
        window.location.hash = 'preferences';
        updateAppPage();
    });
}

function getSavedDefaultTimer() {
    try {
        const saved = Number(localStorage.getItem(SETTINGS_DEFAULT_TIMER_KEY));
        return Number.isInteger(saved) && saved >= 1 && saved <= 120 ? saved : 25;
    } catch (error) {
        setSettingsStatus(`Could not load the default session length: ${error.message}`, true);
        return 25;
    }
}

function getSavedScreenBreakMinutes() {
    try {
        const saved = Number(localStorage.getItem(SETTINGS_SCREEN_BREAK_KEY));
        return Number.isInteger(saved) && saved >= 1 && saved <= 120 ? saved : 5;
    } catch (error) {
        setSettingsStatus(`Could not load the screen-break reminder: ${error.message}`, true);
        return 5;
    }
}

function setSettingsStatus(message, isError = false) {
    if (settingsSaveStatus) {
        settingsSaveStatus.textContent = message;
        settingsSaveStatus.classList.toggle('is-error', isError);
    }
}

function updateScreenBreakReminderValue() {
    if (screenBreakReminderValue) {
        const minutes = SCREEN_LIMIT_SECONDS / 60;
        screenBreakReminderValue.textContent = `${minutes} ${minutes === 1 ? 'minute' : 'minutes'}`;
    }
}

function readSettingsIntoControls() {
    setSettingsStatus('');
    if (settingsDefaultTimer) {
        settingsDefaultTimer.value = String(getSavedDefaultTimer());
    }
    if (settingsScreenBreak) {
        const screenBreak = getSavedScreenBreakMinutes();
        settingsScreenBreak.value = String(screenBreak);
        SCREEN_LIMIT_SECONDS = screenBreak * 60;
        updateScreenBreakReminderValue();
    }
    updateNotifyStatus();
}

SCREEN_LIMIT_SECONDS = getSavedScreenBreakMinutes() * 60;
updateScreenBreakReminderValue();

function saveDefaultTimerSetting() {
    const defaultTimer = Number(settingsDefaultTimer && settingsDefaultTimer.value);
    if (!Number.isInteger(defaultTimer) || defaultTimer < 1 || defaultTimer > 120) {
        setSettingsStatus('Enter a whole number from 1 to 120 minutes for the default session length.', true);
        return;
    }

    try {
        localStorage.setItem(SETTINGS_DEFAULT_TIMER_KEY, String(defaultTimer));
    } catch (error) {
        setSettingsStatus(`Could not save the default session length: ${error.message}`, true);
        return;
    }

    if (timerMinutes && !timerHasStarted) {
        timerMinutes.value = String(defaultTimer);
        timerRemainingSeconds = defaultTimer * 60;
        if (focusTimerDisplay) {
            focusTimerDisplay.textContent = formatTimer(timerRemainingSeconds);
        }
    }
    setSettingsStatus('Settings saved automatically.');
}

function saveScreenBreakSetting() {
    const screenBreak = Number(settingsScreenBreak && settingsScreenBreak.value);
    if (!Number.isInteger(screenBreak) || screenBreak < 1 || screenBreak > 120) {
        setSettingsStatus('Enter a whole number from 1 to 120 minutes for the screen-break reminder.', true);
        return;
    }

    try {
        localStorage.setItem(SETTINGS_SCREEN_BREAK_KEY, String(screenBreak));
    } catch (error) {
        setSettingsStatus(`Could not save the screen-break reminder: ${error.message}`, true);
        return;
    }

    SCREEN_LIMIT_SECONDS = screenBreak * 60;
    nextBreakReminderAt = Math.floor(siteUsageSeconds) + SCREEN_LIMIT_SECONDS;
    updateScreenBreakReminderValue();
    if (siteUsageSeconds < nextBreakReminderAt) {
        if (dismissScreenLimitBtn) {
            dismissScreenLimitBtn.hidden = true;
        }
        if (screenLimitMessage) {
            screenLimitMessage.textContent = '';
            screenLimitMessage.classList.remove('is-error');
        }
    } else {
        updateScreenLimitMessage();
    }
    saveSiteUsage();
    setSettingsStatus('Settings saved automatically.');
}

if (settingsDefaultTimer) {
    settingsDefaultTimer.addEventListener('change', saveDefaultTimerSetting);
}

if (settingsScreenBreak) {
    settingsScreenBreak.addEventListener('change', saveScreenBreakSetting);
}

function updateNotifyStatus() {
    if (!settingsNotifyStatus) {
        return;
    }
    if (!('Notification' in window)) {
        settingsNotifyStatus.textContent = 'Notifications are not supported in this browser.';
        if (settingsNotifyBtn) {
            settingsNotifyBtn.disabled = true;
        }
        return;
    }
    if (Notification.permission === 'granted') {
        settingsNotifyStatus.textContent = 'Notifications are enabled. You will get a desktop alert when a focus session finishes.';
        if (settingsNotifyBtn) {
            settingsNotifyBtn.textContent = 'Notifications enabled';
            settingsNotifyBtn.disabled = true;
        }
    } else if (Notification.permission === 'denied') {
        settingsNotifyStatus.textContent = 'Notifications are blocked. Enable them in your browser settings to receive focus alerts.';
        if (settingsNotifyBtn) {
            settingsNotifyBtn.textContent = 'Notifications blocked';
            settingsNotifyBtn.disabled = true;
        }
    } else {
        settingsNotifyStatus.textContent = 'Allow desktop alerts so you never miss a completed focus session.';
        if (settingsNotifyBtn) {
            settingsNotifyBtn.textContent = 'Enable notifications';
            settingsNotifyBtn.disabled = false;
        }
    }
}

if (settingsNotifyBtn) {
    settingsNotifyBtn.addEventListener('click', async () => {
        if (!('Notification' in window)) {
            return;
        }
        try {
            const permission = await Notification.requestPermission();
            updateNotifyStatus();
            if (permission === 'granted' && settingsNotifyStatus) {
                settingsNotifyStatus.textContent = 'Notifications are enabled. You will get a desktop alert when a focus session finishes.';
            }
        } catch (error) {
            if (settingsNotifyStatus) {
                settingsNotifyStatus.textContent = `Could not update notification settings: ${error.message}`;
                settingsNotifyStatus.classList.add('is-error');
            }
        }
    });
}

if (settingsResetBtn) {
    settingsResetBtn.addEventListener('click', () => {
        if (!window.confirm('Reset all local data for this account? This clears tasks, game progress, site usage, and settings stored in this browser. Your account and profile stay intact.')) {
            return;
        }
        const keysToRemove = [
            TASK_LIST_KEY,
            SITE_USAGE_KEY,
            SETTINGS_DEFAULT_TIMER_KEY,
            SETTINGS_SCREEN_BREAK_KEY,
            DAILY_QUOTE_KEY
        ];
        if (currentUser) {
            keysToRemove.push(taskListStorageKey(currentUser.id));
            keysToRemove.push(siteUsageStorageKey());
        }
        try {
            keysToRemove.forEach((key) => {
                if (typeof key === 'string' && key) {
                    localStorage.removeItem(key);
                }
            });
            taskList = [];
            gameState = createGameState();
            setSettingsStatus('');
            const defaultTimer = getSavedDefaultTimer();
            if (timerMinutes) {
                timerMinutes.value = String(defaultTimer);
            }
            resetFocusTimer();
            SCREEN_LIMIT_SECONDS = getSavedScreenBreakMinutes() * 60;
            siteUsageSeconds = 0;
            nextBreakReminderAt = SCREEN_LIMIT_SECONDS;
            updateScreenBreakReminderValue();
            renderTaskList();
            renderGameProgress();
            renderFocusTimer();
            updateScreenLimitMessage();
            readSettingsIntoControls();
            if (settingsResetStatus) {
                settingsResetStatus.textContent = 'Local data reset. Your saved preferences are restored.';
                settingsResetStatus.classList.remove('is-error');
            }
            setSettingsStatus('Settings reset to their defaults.');
        } catch (error) {
            if (settingsResetStatus) {
                settingsResetStatus.textContent = `Could not reset local data: ${error.message}`;
                settingsResetStatus.classList.add('is-error');
            }
        }
    });
}

if (focusTimerForm) {
    focusTimerForm.addEventListener('submit', (event) => {
        event.preventDefault();
        startFocusTimer();
    });
}

if (timerPauseBtn) {
    timerPauseBtn.addEventListener('click', pauseFocusTimer);
}

if (timerResetBtn) {
    timerResetBtn.addEventListener('click', resetFocusTimer);
}

if (timerMinutes) {
    timerMinutes.addEventListener('input', () => {
        if (!timerHasStarted) {
            resetFocusTimer();
        }
    });
}

if (dismissScreenLimitBtn) {
    dismissScreenLimitBtn.addEventListener('click', () => {
        nextBreakReminderAt = Math.floor(siteUsageSeconds) + SCREEN_LIMIT_SECONDS;
        dismissScreenLimitBtn.hidden = true;
        if (screenLimitMessage) {
            screenLimitMessage.textContent = 'Reminder dismissed. Take a break whenever you need one.';
        }
        saveSiteUsage();
    });
}

document.addEventListener('visibilitychange', () => {
    siteUsageLastTick = null;
    if (currentUser) {
        saveSiteUsage();
    }
});

function toggleFeedbackPanel(forceOpen) {
    if (!feedbackPanel) {
        return;
    }

    const openingPanel = typeof forceOpen === 'boolean' ? forceOpen : !feedbackPanel.classList.contains('open');
    feedbackPanel.classList.toggle('open', openingPanel);
    feedbackPanel.setAttribute('aria-hidden', String(!openingPanel));

    if (openingPanel) {
        toggleMenu(false);
        toggleCreditsPanel(false);
        toggleSettingsPanel(false);
        if (feedbackStatus) {
            feedbackStatus.textContent = '';
            feedbackStatus.classList.remove('is-error');
        }
        if (feedbackMessage) {
            feedbackMessage.value = '';
        }
        if (feedbackType) {
            feedbackType.value = 'bug';
        }
        if (feedbackMessage) {
            feedbackMessage.focus();
        }
    }
}

if (feedbackBtn) {
    feedbackBtn.addEventListener('click', () => toggleFeedbackPanel());
}

if (closeFeedbackBtn) {
    closeFeedbackBtn.addEventListener('click', () => toggleFeedbackPanel(false));
}

if (backToMenuFromFeedbackBtn) {
    backToMenuFromFeedbackBtn.addEventListener('click', () => {
        toggleFeedbackPanel(false);
        toggleMenu(true);
    });
}

if (feedbackForm) {
    feedbackForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        if (!feedbackType || !feedbackMessage || !feedbackSubmitBtn) {
            return;
        }

        const message = feedbackMessage.value.trim();
        if (!message) {
            if (feedbackStatus) {
                feedbackStatus.textContent = 'Enter a message before sending.';
                feedbackStatus.classList.add('is-error');
            }
            return;
        }

        if (!supabaseClient || !currentUser) {
            if (feedbackStatus) {
                feedbackStatus.textContent = 'Sign in with a configured Supabase account before sending feedback.';
                feedbackStatus.classList.add('is-error');
            }
            return;
        }

        if (feedbackStatus) {
            feedbackStatus.textContent = 'Submitting your feedback…';
            feedbackStatus.classList.remove('is-error');
        }
        feedbackSubmitBtn.disabled = true;

        try {
            const { error } = await supabaseClient
                .from('app_feedback')
                .insert({
                    user_id: currentUser.id,
                    feedback_type: feedbackType.value,
                    message
                });

            if (error) {
                console.error('Could not submit feedback to Supabase.', error);
                if (feedbackStatus) {
                    feedbackStatus.textContent = `Could not submit feedback: ${error.message}`;
                    feedbackStatus.classList.add('is-error');
                }
                return;
            }

            feedbackMessage.value = '';
            if (feedbackStatus) {
                feedbackStatus.textContent = 'Thanks—your feedback was submitted. The team can review it in Supabase.';
                feedbackStatus.classList.remove('is-error');
            }
        } catch (error) {
            console.error('Could not submit feedback to Supabase.', error);
            if (feedbackStatus) {
                feedbackStatus.textContent = 'Could not submit feedback because of a network error. Please try again.';
                feedbackStatus.classList.add('is-error');
            }
        } finally {
            feedbackSubmitBtn.disabled = false;
        }
    });
}

function calendarStorageKey() {
    return currentUser ? `${CALENDAR_KEY}:${currentUser.id}` : CALENDAR_KEY;
}

function loadCalendarReminders() {
    try {
        const raw = localStorage.getItem(calendarStorageKey());
        const parsed = raw ? JSON.parse(raw) : null;
        calendarReminders = parsed && typeof parsed === 'object' ? parsed : {};
    } catch {
        calendarReminders = {};
    }
    if (!calendarReminders || typeof calendarReminders !== 'object' || Array.isArray(calendarReminders)) {
        calendarReminders = {};
    }
}

function saveCalendarReminders() {
    try {
        localStorage.setItem(calendarStorageKey(), JSON.stringify(calendarReminders));
        return true;
    } catch (error) {
        if (calendarMessage) {
            calendarMessage.textContent = `Could not save calendar: ${error.message}`;
            calendarMessage.classList.add('is-error');
        }
        return false;
    }
}

function setCalendarMessage(message, isError = false) {
    if (!calendarMessage) {
        return;
    }
    calendarMessage.textContent = message;
    calendarMessage.classList.toggle('is-error', isError);
}

function formatCalendarDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function isSameDate(a, b) {
    return a.getFullYear() === b.getFullYear() &&
        a.getMonth() === b.getMonth() &&
        a.getDate() === b.getDate();
}

function renderCalendar() {
    if (!calendarGrid) {
        return;
    }

    const year = calendarViewDate.getFullYear();
    const month = calendarViewDate.getMonth();
    if (calendarMonthLabel) {
        calendarMonthLabel.textContent = calendarViewDate.toLocaleDateString(undefined, {
            month: 'long', year: 'numeric'
        });
    }

    const firstDay = new Date(year, month, 1);
    const startOffset = firstDay.getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const today = new Date();

    calendarGrid.replaceChildren();
    for (let i = 0; i < startOffset; i++) {
        const empty = document.createElement('div');
        empty.className = 'calendar-day is-other-month';
        calendarGrid.append(empty);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const cellDate = new Date(year, month, day);
        const dateKey = formatCalendarDate(cellDate);
        const reminders = calendarReminders[dateKey] || [];
        const hasReminder = Array.isArray(reminders) && reminders.length > 0;

        const dayButton = document.createElement('button');
        dayButton.type = 'button';
        dayButton.className = 'calendar-day';
        if (isSameDate(cellDate, today)) {
            dayButton.classList.add('is-today');
        }
        if (calendarSelectedDate === dateKey) {
            dayButton.classList.add('is-selected');
        }
        if (hasReminder) {
            dayButton.classList.add('has-reminder');
        }

        const number = document.createElement('span');
        number.className = 'calendar-day-number';
        number.textContent = String(day);
        dayButton.append(number);

        if (hasReminder) {
            const last = reminders[reminders.length - 1];
            const text = typeof last === 'string' ? last : (last && last.text) || '';
            const color = typeof last === 'string' ? 'red' : (last && last.color) || 'red';
            const dot = document.createElement('span');
            dot.className = 'calendar-day-dot';
            dot.style.setProperty('--reminder-color', COLOR_MAP[color] || COLOR_MAP.red);
            dayButton.append(dot);
            if (text) {
                const preview = document.createElement('span');
                preview.className = 'calendar-day-reminder';
                preview.textContent = text;
                dayButton.append(preview);
            }
        }

        dayButton.addEventListener('click', () => {
            calendarSelectedDate = dateKey;
            if (calendarReminderDate) {
                calendarReminderDate.value = dateKey;
            }
            if (calendarReminderText) {
                calendarReminderText.value = '';
                calendarReminderText.focus();
            }
            renderCalendar();
            renderReminderList();
        });

        calendarGrid.append(dayButton);
    }
}

function renderReminderList() {
    if (!calendarReminderList) {
        return;
    }

    calendarReminderList.replaceChildren();
    const entries = Object.entries(calendarReminders)
        .filter(([, list]) => Array.isArray(list) && list.length > 0)
        .sort(([a], [b]) => a.localeCompare(b));

    if (entries.length === 0) {
        const empty = document.createElement('li');
        empty.className = 'calendar-empty';
        empty.textContent = 'No reminders yet. Tap a date to add one.';
        calendarReminderList.append(empty);
        return;
    }

    entries.forEach(([dateKey, list]) => {
        (list || []).forEach((entry, index) => {
            const item = typeof entry === 'string' ? { text: entry } : entry;
            const text = (item && item.text) || '';
            const color = (item && item.color) || 'red';
            const time = (item && item.time) || '';

            const li = document.createElement('li');
            li.className = 'calendar-reminder-item';
            li.style.setProperty('--reminder-color', COLOR_MAP[color] || COLOR_MAP.red);

            const dateSpan = document.createElement('span');
            dateSpan.className = 'calendar-reminder-date';
            dateSpan.textContent = time ? `${dateKey} ${time}` : dateKey;

            const textSpan = document.createElement('span');
            textSpan.className = 'calendar-reminder-text';
            textSpan.textContent = text;

            const removeBtn = document.createElement('button');
            removeBtn.type = 'button';
            removeBtn.className = 'calendar-reminder-remove';
            removeBtn.textContent = 'Remove';
            removeBtn.setAttribute('aria-label', `Remove reminder "${text}" on ${dateKey}`);
            removeBtn.addEventListener('click', () => {
                const remaining = (calendarReminders[dateKey] || []).filter((_, i) => i !== index);
                if (time) {
                    clearAlarmsForDate(dateKey);
                }
                if (remaining.length === 0) {
                    delete calendarReminders[dateKey];
                } else {
                    calendarReminders[dateKey] = remaining;
                }
                if (saveCalendarReminders()) {
                    renderCalendar();
                    renderReminderList();
                }
            });

            li.append(dateSpan, textSpan, removeBtn);
            calendarReminderList.append(li);
        });
    });
}

if (calendarPrevBtn) {
    calendarPrevBtn.addEventListener('click', () => {
        calendarViewDate = new Date(calendarViewDate.getFullYear(), calendarViewDate.getMonth() - 1, 1);
        renderCalendar();
    });
}

if (calendarNextBtn) {
    calendarNextBtn.addEventListener('click', () => {
        calendarViewDate = new Date(calendarViewDate.getFullYear(), calendarViewDate.getMonth() + 1, 1);
        renderCalendar();
    });
}

function scheduleAlarm(dateKey, timeValue, text) {
    if (!timeValue || !/^\d{2}:\d{2}$/.test(timeValue)) {
        return;
    }
    const [hours, minutes] = timeValue.split(':').map(Number);
    const alarmDate = new Date(`${dateKey}T${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:00`);
    const now = new Date();
    const delayMs = alarmDate.getTime() - now.getTime();
    if (delayMs <= 0) {
        setCalendarMessage('That alarm time has already passed. Pick a future time.', true);
        return;
    }
    const alarmKey = `${dateKey}::${timeValue}`;
    if (calendarAlarmTimers[alarmKey]) {
        clearTimeout(calendarAlarmTimers[alarmKey]);
    }
    calendarAlarmTimers[alarmKey] = setTimeout(() => {
        fireAlarm(dateKey, timeValue, text);
    }, delayMs);
}

function fireAlarm(dateKey, timeValue, text) {
    const message = `Reminder: ${text} (${dateKey} at ${timeValue})`;
    if ('Notification' in window && Notification.permission === 'granted') {
        try {
            new Notification('Calendar reminder', { body: message });
        } catch {}
    }
    if (calendarMessage) {
        calendarMessage.textContent = message;
        calendarMessage.classList.remove('is-error');
    }
    if (calendarReminderText) {
        calendarReminderText.focus();
    }
    delete calendarAlarmTimers[`${dateKey}::${timeValue}`];
}

function rescheduleAllAlarms() {
    Object.keys(calendarAlarmTimers).forEach((key) => {
        clearTimeout(calendarAlarmTimers[key]);
    });
    calendarAlarmTimers = {};
    Object.entries(calendarReminders).forEach(([dateKey, list]) => {
        (list || []).forEach((entry) => {
            const item = typeof entry === 'string' ? { text: entry } : entry;
            if (item.time) {
                scheduleAlarm(dateKey, item.time, item.text);
            }
        });
    });
}

function clearAlarmsForDate(dateKey) {
    Object.keys(calendarAlarmTimers).forEach((key) => {
        if (key.startsWith(`${dateKey}::`)) {
            clearTimeout(calendarAlarmTimers[key]);
            delete calendarAlarmTimers[key];
        }
    });
}

if (calendarReminderForm) {
    const colorButtons = Array.from(calendarReminderForm.querySelectorAll('.calendar-color-btn'));
    let selectedColor = 'red';

    colorButtons.forEach((button) => {
        button.addEventListener('click', () => {
            selectedColor = button.dataset.color;
            colorButtons.forEach((btn) => {
                btn.setAttribute('aria-pressed', String(btn === button));
            });
        });
    });

    calendarReminderForm.addEventListener('submit', (event) => {
        event.preventDefault();
        if (!calendarReminderDate || !calendarReminderText) {
            return;
        }
        const dateKey = calendarReminderDate.value.trim();
        const text = calendarReminderText.value.trim();
        if (!dateKey || !/^\d{4}-\d{2}-\d{2}$/.test(dateKey)) {
            setCalendarMessage('Tap a valid calendar date first.', true);
            return;
        }
        if (!text) {
            setCalendarMessage('Enter a reminder before saving.', true);
            return;
        }
        const timeValue = calendarReminderTime ? calendarReminderTime.value.trim() : '';
        if (timeValue && !/^\d{2}:\d{2}$/.test(timeValue)) {
            setCalendarMessage('Alarm time must be in HH:MM format.', true);
            return;
        }
        if (!Array.isArray(calendarReminders[dateKey])) {
            calendarReminders[dateKey] = [];
        }
        const entry = { text, color: selectedColor };
        if (timeValue) {
            entry.time = timeValue;
        }
        calendarReminders[dateKey].push(entry);
        if (saveCalendarReminders()) {
            calendarReminderText.value = '';
            if (calendarReminderTime) {
                calendarReminderTime.value = '';
            }
            calendarSelectedDate = dateKey;
            if (timeValue) {
                scheduleAlarm(dateKey, timeValue, text);
            }
            renderCalendar();
            renderReminderList();
            setCalendarMessage(`Reminder saved for ${dateKey}${timeValue ? ` at ${timeValue}` : ''}.`);
        }
    });
}

if (calendarGrid) {
    loadCalendarReminders();
    renderCalendar();
    renderReminderList();
    rescheduleAllAlarms();
}

if (addBuddyForm && buddyCodeInput) {
    const submitButton = addBuddyForm.querySelector('button[type="submit"]');

    buddyCodeInput.addEventListener('input', () => {
        const code = buddyCodeInput.value.trim().toUpperCase();
        const requestId = ++buddyCodeLookupRequest;
        buddyCodePreviewed = '';
        submitButton.disabled = true;
        buddyCodePreview.classList.remove('is-error');
        buddyCodePreview.textContent = '';
        if (buddyCodeLookupTimeout) {
            clearTimeout(buddyCodeLookupTimeout);
        }
        if (!code) {
            return;
        }
        if (!/^[A-F0-9]{16}$/.test(code)) {
            buddyCodePreview.textContent = code.length >= 16
                ? 'Friend codes must be 16 characters using A–F and 0–9.'
                : 'Enter all 16 characters to check the code.';
            if (code.length >= 16) {
                buddyCodePreview.classList.add('is-error');
            }
            return;
        }

        buddyCodePreview.textContent = 'Checking whose code this is…';
        buddyCodeLookupTimeout = setTimeout(async () => {
            try {
                const { data: name, error } = await supabaseClient.rpc('lookup_study_buddy_by_code', {
                    p_friend_code: code
                });
                if (requestId !== buddyCodeLookupRequest || code !== buddyCodeInput.value.trim().toUpperCase()) {
                    return;
                }
                if (error) {
                    buddyCodePreview.textContent = explainBuddyError(error);
                    buddyCodePreview.classList.add('is-error');
                    return;
                }
                if (typeof name !== 'string' || !name.trim()) {
                    buddyCodePreview.textContent = 'Could not identify this friend code. Refresh and try again.';
                    buddyCodePreview.classList.add('is-error');
                    return;
                }
                buddyCodePreviewed = code;
                buddyCodePreview.textContent = `This code belongs to ${name}. Send a request to connect.`;
                submitButton.disabled = false;
            } catch (error) {
                if (requestId === buddyCodeLookupRequest) {
                    buddyCodePreview.textContent = explainBuddyError(error);
                    buddyCodePreview.classList.add('is-error');
                }
            }
        }, 350);
    });

    addBuddyForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const code = buddyCodeInput.value.trim().toUpperCase();
        if (buddyCodePreviewed !== code) {
            setBuddyMessage('Check the friend code to confirm whose account it belongs to before sending a request.', true);
            return;
        }
        submitButton.disabled = true;
        setBuddyMessage('Sending buddy request…');
        try {
            const { data: name, error } = await supabaseClient.rpc('send_study_buddy_request', {
                p_friend_code: code
            });
            if (error) {
                setBuddyMessage(explainBuddyError(error), true);
                return;
            }
            buddyCodeInput.value = '';
            buddyCodePreviewed = '';
            buddyCodePreview.textContent = '';
            if (await loadBuddyDashboard()) {
                setBuddyMessage(`Buddy request sent to ${name}. It will appear in sent requests until accepted.`);
            }
        } catch (error) {
            setBuddyMessage(explainBuddyError(error), true);
        } finally {
            submitButton.disabled = buddyCodePreviewed !== buddyCodeInput.value.trim().toUpperCase();
        }
    });
}

if (refreshBuddiesBtn) {
    refreshBuddiesBtn.addEventListener('click', () => loadBuddyDashboard());
}

if (copyFriendCodeBtn) {
    copyFriendCodeBtn.addEventListener('click', async () => {
        const code = myFriendCode && myFriendCode.textContent;
        if (!code || code === 'Loading…' || code === 'Unavailable') {
            return;
        }
        try {
            await navigator.clipboard.writeText(code);
            setBuddyMessage('Friend code copied. Share it only with people you want to connect with.');
        } catch (error) {
            setBuddyMessage(`Could not copy the friend code: ${error.message}`, true);
        }
    });
}

document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') {
        return;
    }

    if (settingsPanel && settingsPanel.classList.contains('open')) {
        toggleSettingsPanel(false);
        return;
    }

    if (feedbackPanel && feedbackPanel.classList.contains('open')) {
        toggleFeedbackPanel(false);
        return;
    }

    if (creditsPanel && creditsPanel.classList.contains('open')) {
        toggleCreditsPanel(false);
        return;
    }

    if (sideMenu && sideMenu.classList.contains('open')) {
        toggleMenu(false);
    }
});

async function saveProfile(changes) {
    if (!currentUser) {
        return false;
    }

    if (taskFeedback) {
        taskFeedback.textContent = 'Saving to your account…';
        taskFeedback.classList.remove('is-error');
    }

    try {
        const displayName = usernameDisplay?.textContent.trim()
            || currentUser.user_metadata?.display_name
            || currentUser.email?.split('@')[0]
            || 'Student';
        const { data, error } = await supabaseClient
            .from('student_profiles')
            .upsert({
                user_id: currentUser.id,
                display_name: displayName,
                ...changes
            }, { onConflict: 'user_id' })
            .select('user_id')
            .single();
        if (error) {
            throw error;
        }
        if (!data) {
            throw new Error('The saved profile was not returned by the database.');
        }
    } catch (requestError) {
        if (taskFeedback) {
            taskFeedback.textContent = `Could not save your changes: ${requestError.message}`;
            taskFeedback.classList.add('is-error');
        }
        return false;
    }

    if (taskFeedback) {
        taskFeedback.textContent = 'Your changes are saved to your account.';
        taskFeedback.classList.remove('is-error');
    }
    return true;
}

if (taskForm && taskInput) {
    taskForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const task = taskInput.value.trim();

        if (!currentUser || !task) {
            if (taskFeedback) {
                taskFeedback.textContent = currentUser
                    ? 'Add a task first, then save your focus.'
                    : 'Sign in to save your focus.';
            }
            return;
        }

        if (startTaskBtn) {
            startTaskBtn.disabled = true;
            startTaskBtn.setAttribute('aria-busy', 'true');
        }
        try {
            if (await saveProfile({ focus_task: task })) {
                setSavedFocusNote(task);
            }
        } finally {
            if (startTaskBtn) {
                startTaskBtn.disabled = false;
                startTaskBtn.removeAttribute('aria-busy');
            }
        }
    });
}

if (taskListForm && taskListInput) {
    taskListForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const title = taskListInput.value.trim();
        if (!title) {
            setTaskListMessage('Enter a task before adding it.', true);
            return;
        }
        if (!currentUser) {
            setTaskListMessage('Sign in to save your task list.', true);
            return;
        }

        taskList.push({
            id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
            title,
            difficulty: taskDifficulty && Object.hasOwn(POINTS_BY_DIFFICULTY, taskDifficulty.value)
                ? taskDifficulty.value
                : 'medium',
            completed: false
        });
        if (saveTaskList()) {
            taskListInput.value = '';
            renderTaskList();
            taskListInput.focus();
        } else {
            taskList.pop();
        }
    });
}

function applyStudyPace(pace) {
    const defaults = { 'Quick sessions': 15, 'Deep focus': 45, 'My own pace': 25 };
    const minutes = defaults[pace] || 25;
    if (timerMinutes && !timerHasStarted) {
        timerMinutes.value = minutes;
        timerRemainingSeconds = minutes * 60;
        if (focusTimerDisplay) focusTimerDisplay.textContent = formatTimer(timerRemainingSeconds);
    }
    document.body.dataset.pace = (pace || 'My own pace').toLowerCase().replace(/\s+/g, '-');
}

if (subjectSelect) {
    const subjectBtns = subjectSelect.querySelectorAll('.subject-btn');
    subjectBtns.forEach(btn => {
        attachSubjectButton(btn);
    });
}

if (addCustomSubjectBtn && customSubjectInput) {
    customSubjectInput.addEventListener('input', () => {
        addCustomSubjectBtn.disabled = !customSubjectInput.value.trim();
    });

    customSubjectInput.addEventListener('keydown', async (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            await saveCustomSubject();
        }
    });

    addCustomSubjectBtn.addEventListener('click', async () => {
        await saveCustomSubject();
    });

    async function saveCustomSubject() {
        const subject = customSubjectInput.value.trim();
        if (!subject) {
            setFavoriteSubjectStatus('Enter a subject first.');
            customSubjectInput.focus();
            return;
        }

        const existingSubject = Array.from(subjectSelect.querySelectorAll('.subject-btn'))
            .find((button) => button.dataset.subject.toLocaleLowerCase() === subject.toLocaleLowerCase());
        const selectedSubject = existingSubject?.dataset.subject || subject;
        addCustomSubjectBtn.disabled = true;
        addCustomSubjectBtn.textContent = 'Saving…';

        try {
            if (!await saveFavoriteSubject(selectedSubject)) {
                addCustomSubjectBtn.textContent = 'Add';
                addCustomSubjectBtn.disabled = !customSubjectInput.value.trim();
                return;
            }
            addCustomSubjectBtn.textContent = 'Added';
            setTimeout(() => {
                addCustomSubjectBtn.textContent = 'Add';
                addCustomSubjectBtn.disabled = !customSubjectInput.value.trim();
            }, 1500);
        } catch (error) {
            addCustomSubjectBtn.textContent = 'Add';
            addCustomSubjectBtn.disabled = !customSubjectInput.value.trim();
            setFavoriteSubjectStatus(`Could not add subject: ${error.message}`, true);
        }
    }
}

if (paceSelect) {
    const paceBtns = paceSelect.querySelectorAll('.pace-btn');
    paceBtns.forEach(btn => {
        btn.addEventListener('click', async () => {
            paceBtns.forEach(b => {
                b.classList.remove('is-selected');
                b.setAttribute('aria-pressed', 'false');
            });
            btn.classList.add('is-selected');
            btn.setAttribute('aria-pressed', 'true');
            if (currentUser) {
                await saveProfile({ study_pace: btn.dataset.pace });
            }
            applyStudyPace(btn.dataset.pace);
        });
    });
}

if (timeGreeting) {
    timeGreeting.textContent = getTimeGreeting();
}
void loadDailyQuote();
const selectedPaceBtn = paceSelect ? paceSelect.querySelector('.pace-btn.is-selected') : null;
applyStudyPace(selectedPaceBtn ? selectedPaceBtn.dataset.pace : 'My own pace');

if (timerMinutes && !timerHasStarted) {
    const savedTimer = getSavedDefaultTimer();
    timerMinutes.value = String(savedTimer);
    timerRemainingSeconds = savedTimer * 60;
    if (focusTimerDisplay) {
        focusTimerDisplay.textContent = formatTimer(timerRemainingSeconds);
    }
}

setAuthMode(true);

if (!supabaseClient) {
    enterBtn.disabled = true;
    setAuthMessage(
        supabaseConfig && supabaseConfig.url && supabaseConfig.anonKey
            ? 'Could not load the Supabase client. Check your internet connection and refresh.'
            : 'Account sign-in is not configured yet. Add your Supabase project URL and public anon key in supabase-config.js.',
        true
    );
}

if (supabaseClient) {
    supabaseClient.auth.onAuthStateChange((event, session) => {
        queueMicrotask(() => {
            if (session && session.user) {
                if (!currentUser || currentUser.id !== session.user.id) {
                    loadAccount(session.user);
                }
                return;
            }

            if (event === 'SIGNED_OUT') {
                saveSiteUsage();
                currentUser = null;
                calendarReminders = {};
                calendarSelectedDate = '';
                calendarViewDate = new Date();
                if (calendarReminderDate) {
                    calendarReminderDate.value = '';
                }
                if (calendarReminderText) {
                    calendarReminderText.value = '';
                }
                renderCalendar();
                renderReminderList();
                if (siteUsageInterval) {
                    clearInterval(siteUsageInterval);
                    siteUsageInterval = null;
                }
                resetFocusTimer();
                if (appShell) {
                    appShell.inert = true;
                    appShell.setAttribute('aria-hidden', 'true');
                }
                if (introScreen) {
                    introScreen.classList.remove('hidden');
                }
                if (loginEmail) {
                    loginEmail.focus();
                }
            }
        });
    });

    supabaseClient.auth.getSession().then(({ data, error }) => {
        if (error) {
            setAuthMessage(`Could not restore your sign-in: ${error.message}`, true);
            return;
        }

        if (data.session && data.session.user && (!currentUser || currentUser.id !== data.session.user.id)) {
            loadAccount(data.session.user);
        }
    });
}
