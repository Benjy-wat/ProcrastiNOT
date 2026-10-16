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
const usernameDisplay = document.getElementById('usernameDisplay');
const navUsernameDisplay = document.getElementById('navUsernameDisplay');
const userInitials = document.getElementById('userInitials');
const taskInput = document.getElementById('taskInput');
const taskFeedback = document.getElementById('taskFeedback');
const timeGreeting = document.getElementById('timeGreeting');
const todayDate = document.getElementById('todayDate');
const subjectSelect = document.getElementById('subjectSelect');
const paceSelect = document.getElementById('paceSelect');
const favoriteSubjectDisplay = document.getElementById('favoriteSubjectDisplay');
const studyPaceDisplay = document.getElementById('studyPaceDisplay');
const reminderQuote = document.getElementById('reminderQuote');
const reminderAuthor = document.getElementById('reminderAuthor');
const reminderAbout = document.getElementById('reminderAbout');
const splashMark = document.querySelector('.splash-mark');
const splashLogo = document.querySelector('.splash-logo');
const creditMemberButtons = document.querySelectorAll('.credit-member-btn');
const creditDetail = document.getElementById('creditDetail');
const creditDetailTitle = document.getElementById('creditDetailTitle');
const creditDetailText = document.getElementById('creditDetailText');
const creditPhotoPlaceholder = document.getElementById('creditPhotoPlaceholder');

if (creditMemberButtons.length && creditDetail && creditDetailTitle && creditDetailText && creditPhotoPlaceholder) {
    creditMemberButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const person = button.dataset.person;
            if (!person) {
                return;
            }

            creditMemberButtons.forEach((memberButton) => {
                memberButton.setAttribute('aria-pressed', String(memberButton === button));
            });

            creditDetailTitle.textContent = `Person ${person}`;
            creditDetailText.textContent = `Add Person ${person}'s role, contributions, and project details here.`;
            creditPhotoPlaceholder.setAttribute('aria-label', `Photo placeholder for Person ${person}`);
            creditDetail.classList.remove('is-entering');
            void creditDetail.offsetWidth;
            creditDetail.classList.add('is-entering');
        });
    });
}

if (splashMark && splashLogo) {
    let activePointerId = null;
    let lastPointerX = 0;

    function resetLogoTouch() {
        activePointerId = null;
        splashMark.classList.remove('is-pressed');
        splashMark.style.setProperty('--touch-x', '50%');
        splashMark.style.setProperty('--touch-y', '50%');
        splashLogo.style.setProperty('--logo-rotate-x', '0deg');
        splashLogo.style.setProperty('--logo-rotate-y', '0deg');
        splashLogo.style.setProperty('--logo-scale-x', '1');
        splashLogo.style.setProperty('--logo-scale-y', '1');
    }

    function updateLogoTouch(event, isPressed) {
        const bounds = splashMark.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width;
        const y = (event.clientY - bounds.top) / bounds.height;
        const normalizedX = Math.max(-1, Math.min(1, x * 2 - 1));
        const normalizedY = Math.max(-1, Math.min(1, y * 2 - 1));
        const stretch = isPressed
            ? Math.max(-0.055, Math.min(0.055, (event.clientX - lastPointerX) / bounds.width * 0.6))
            : 0;

        splashMark.style.setProperty('--touch-x', `${x * 100}%`);
        splashMark.style.setProperty('--touch-y', `${y * 100}%`);
        splashLogo.style.setProperty('--logo-rotate-x', `${-normalizedY * (isPressed ? 4 : 1.5)}deg`);
        splashLogo.style.setProperty('--logo-rotate-y', `${normalizedX * (isPressed ? 4 : 1.5)}deg`);
        splashLogo.style.setProperty('--logo-scale-x', String(isPressed ? 1.035 + stretch : 1));
        splashLogo.style.setProperty('--logo-scale-y', String(isPressed ? 0.96 - stretch * 0.45 : 1));
        lastPointerX = event.clientX;
    }

    splashLogo.addEventListener('pointerdown', (event) => {
        if (!event.isPrimary) {
            return;
        }

        event.preventDefault();
        activePointerId = event.pointerId;
        splashMark.classList.add('is-pressed');
        splashLogo.setPointerCapture(event.pointerId);
        updateLogoTouch(event, true);
    });

    splashLogo.addEventListener('pointermove', (event) => {
        if (event.pointerId === activePointerId) {
            updateLogoTouch(event, true);
        } else if (event.pointerType === 'mouse') {
            updateLogoTouch(event, false);
        }
    });

    splashLogo.addEventListener('pointerup', (event) => {
        if (event.pointerId === activePointerId) {
            resetLogoTouch();
        }
    });

    splashLogo.addEventListener('pointercancel', resetLogoTouch);
    splashLogo.addEventListener('lostpointercapture', resetLogoTouch);
    splashLogo.addEventListener('pointerleave', () => {
        if (activePointerId === null) {
            resetLogoTouch();
        }
    });

    splashLogo.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            splashMark.classList.add('is-pressed');
        }
    });

    splashLogo.addEventListener('keyup', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            resetLogoTouch();
        }
    });

    splashLogo.addEventListener('blur', resetLogoTouch);
}

const REMINDER_KEY = 'procrastiNotReminder';
const supabaseConfig = window.SUPABASE_CONFIG;
const supabaseClient = window.supabase && supabaseConfig && supabaseConfig.url && supabaseConfig.anonKey
    ? window.supabase.createClient(supabaseConfig.url, supabaseConfig.anonKey)
    : null;
let currentUser = null;
let isSignUpMode = true;
const REMINDERS = [
    {
        quote: 'Well done is better than well said.',
        author: 'Benjamin Franklin',
        about: 'American writer, inventor, and statesman'
    },
    {
        quote: 'To strive, to seek, to find, and not to yield.',
        author: 'Alfred, Lord Tennyson',
        about: 'English poet and Poet Laureate'
    },
    {
        quote: 'A thing of beauty is a joy for ever.',
        author: 'John Keats',
        about: 'English Romantic poet'
    }
];

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

function getReminderKey(email) {
    return `${REMINDER_KEY}:${email.trim().toLowerCase()}`;
}

function advanceReminder(email) {
    const reminderKey = getReminderKey(email);
    const previousIndex = Number.parseInt(localStorage.getItem(reminderKey) || '-1', 10);
    const nextIndex = (Number.isInteger(previousIndex) ? previousIndex + 1 : 0) % REMINDERS.length;
    localStorage.setItem(reminderKey, String(nextIndex));
    showReminder(nextIndex);
}

function showReminder(index) {
    const reminder = REMINDERS[index];
    if (!reminder) {
        return;
    }

    if (reminderQuote) {
        reminderQuote.textContent = `“${reminder.quote}”`;
    }

    if (reminderAuthor) {
        reminderAuthor.textContent = reminder.author;
    }

    if (reminderAbout) {
        reminderAbout.textContent = reminder.about;
    }
}

function syncPreferenceDisplays() {
    if (favoriteSubjectDisplay && subjectSelect) {
        favoriteSubjectDisplay.textContent = subjectSelect.value;
    }

    if (studyPaceDisplay && paceSelect) {
        studyPaceDisplay.textContent = paceSelect.value;
    }
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

    if (subjectSelect && profile.favorite_subject) {
        subjectSelect.value = profile.favorite_subject;
    }

    if (paceSelect && profile.study_pace) {
        paceSelect.value = profile.study_pace;
    }

    if (taskInput) {
        taskInput.value = profile.focus_task || '';
    }

    if (taskFeedback) {
        taskFeedback.textContent = profile.focus_task ? 'Your focus is saved to your account.' : '';
    }

    syncPreferenceDisplays();
}

function setAuthMessage(message, isError = false) {
    if (authMessage) {
        authMessage.textContent = message;
        authMessage.classList.toggle('is-error', isError);
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
        advanceReminder(user.email);
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

document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') {
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
        return;
    }

    if (taskFeedback) {
        taskFeedback.textContent = 'Saving to your account…';
        taskFeedback.classList.remove('is-error');
    }

    let error;
    try {
        ({ error } = await supabaseClient
            .from('student_profiles')
            .update(changes)
            .eq('user_id', currentUser.id));
    } catch (requestError) {
        if (taskFeedback) {
            taskFeedback.textContent = `Could not save your changes: ${requestError.message}`;
            taskFeedback.classList.add('is-error');
        }
        return;
    }

    if (taskFeedback) {
        taskFeedback.textContent = error
            ? `Could not save your changes: ${error.message}`
            : 'Your changes are saved to your account.';
        taskFeedback.classList.toggle('is-error', Boolean(error));
    }
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

        await saveProfile({ focus_task: task });
    });
}

if (subjectSelect) {
    subjectSelect.addEventListener('change', async () => {
        if (currentUser) {
            await saveProfile({ favorite_subject: subjectSelect.value });
        }
        syncPreferenceDisplays();
    });
}

if (paceSelect) {
    paceSelect.addEventListener('change', async () => {
        if (currentUser) {
            await saveProfile({ study_pace: paceSelect.value });
        }
        syncPreferenceDisplays();
    });
}

if (timeGreeting) {
    timeGreeting.textContent = getTimeGreeting();
    showReminder(0);
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
                currentUser = null;
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
