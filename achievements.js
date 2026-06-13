// Sistema completo de logros e insignias

const ACHIEVEMENTS = {
    // Logros de cantidad de intentos
    FIRST_ATTEMPT: {
        id: 'first_attempt',
        name: '¡Primer Intento!',
        description: 'Completa tu primer problema',
        icon: '🎬',
        condition: (stats) => stats.totalAttempts >= 1,
        rarity: 'common'
    },
    TEN_ATTEMPTS: {
        id: 'ten_attempts',
        name: 'Principiante',
        description: 'Completa 10 problemas',
        icon: '📚',
        condition: (stats) => stats.totalAttempts >= 10,
        rarity: 'common'
    },
    FIFTY_ATTEMPTS: {
        id: 'fifty_attempts',
        name: 'Estudiante Dedicado',
        description: 'Completa 50 problemas',
        icon: '📖',
        condition: (stats) => stats.totalAttempts >= 50,
        rarity: 'uncommon'
    },
    HUNDRED_ATTEMPTS: {
        id: 'hundred_attempts',
        name: 'Matemático Apasionado',
        description: 'Completa 100 problemas',
        icon: '🎓',
        condition: (stats) => stats.totalAttempts >= 100,
        rarity: 'uncommon'
    },
    FIVE_HUNDRED_ATTEMPTS: {
        id: 'five_hundred_attempts',
        name: 'Maestro de las Matemáticas',
        description: 'Completa 500 problemas',
        icon: '👑',
        condition: (stats) => stats.totalAttempts >= 500,
        rarity: 'rare'
    },

    // Logros de precisión
    PERFECT_SCORE: {
        id: 'perfect_score',
        name: '100% Perfecto',
        description: 'Obtén una precisión del 100%',
        icon: '💯',
        condition: (stats) => stats.totalAttempts > 0 && stats.correctAnswers === stats.totalAttempts,
        rarity: 'rare'
    },
    NINETY_PERCENT: {
        id: 'ninety_percent',
        name: 'Casi Perfecto',
        description: 'Obtén una precisión del 90% o más',
        icon: '✨',
        condition: (stats) => stats.totalAttempts >= 10 && (stats.correctAnswers / stats.totalAttempts) >= 0.9,
        rarity: 'uncommon'
    },
    EIGHTY_PERCENT: {
        id: 'eighty_percent',
        name: 'Muy Bueno',
        description: 'Obtén una precisión del 80% o más',
        icon: '⭐',
        condition: (stats) => stats.totalAttempts >= 10 && (stats.correctAnswers / stats.totalAttempts) >= 0.8,
        rarity: 'common'
    },

    // Logros de racha
    FIVE_IN_A_ROW: {
        id: 'five_in_a_row',
        name: 'En Racha',
        description: 'Obtén 5 respuestas correctas seguidas',
        icon: '🔥',
        condition: (stats) => stats.currentStreak >= 5,
        rarity: 'uncommon'
    },
    TEN_IN_A_ROW: {
        id: 'ten_in_a_row',
        name: 'Racha Épica',
        description: 'Obtén 10 respuestas correctas seguidas',
        icon: '🌟',
        condition: (stats) => stats.currentStreak >= 10,
        rarity: 'rare'
    },

    // Logros por dificultad
    FIRST_EASY: {
        id: 'first_easy',
        name: 'Primeros Pasos',
        description: 'Completa un problema de 1 cifra',
        icon: '🚀',
        condition: (stats) => stats.difficulty1 >= 1,
        rarity: 'common'
    },
    FIRST_MEDIUM: {
        id: 'first_medium',
        name: 'Desafío Intermedio',
        description: 'Completa un problema de 2 cifras',
        icon: '📊',
        condition: (stats) => stats.difficulty2 >= 1,
        rarity: 'uncommon'
    },
    FIRST_HARD: {
        id: 'first_hard',
        name: 'Dominio Supremo',
        description: 'Completa un problema de 3 cifras',
        icon: '🎯',
        condition: (stats) => stats.difficulty3 >= 1,
        rarity: 'rare'
    },
    TWENTY_EASY: {
        id: 'twenty_easy',
        name: 'Experto en Básicos',
        description: 'Completa 20 problemas de 1 cifra',
        icon: '✅',
        condition: (stats) => stats.difficulty1 >= 20,
        rarity: 'uncommon'
    },
    TWENTY_MEDIUM: {
        id: 'twenty_medium',
        name: 'Experto Intermedio',
        description: 'Completa 20 problemas de 2 cifras',
        icon: '🎓',
        condition: (stats) => stats.difficulty2 >= 20,
        rarity: 'uncommon'
    },
    TWENTY_HARD: {
        id: 'twenty_hard',
        name: 'Campeón de Dificultad',
        description: 'Completa 20 problemas de 3 cifras',
        icon: '💪',
        condition: (stats) => stats.difficulty3 >= 20,
        rarity: 'rare'
    },

    // Logros por operación
    FIRST_ADDITION: {
        id: 'first_addition',
        name: 'Sumador Principiante',
        description: 'Completa tu primer problema de suma',
        icon: '➕',
        condition: (stats) => stats.additions >= 1,
        rarity: 'common'
    },
    FIRST_SUBTRACTION: {
        id: 'first_subtraction',
        name: 'Restador Principiante',
        description: 'Completa tu primer problema de resta',
        icon: '➖',
        condition: (stats) => stats.subtractions >= 1,
        rarity: 'common'
    },
    FIFTY_ADDITIONS: {
        id: 'fifty_additions',
        name: 'Maestro de Sumas',
        description: 'Completa 50 problemas de suma',
        icon: '🔢',
        condition: (stats) => stats.additions >= 50,
        rarity: 'uncommon'
    },
    FIFTY_SUBTRACTIONS: {
        id: 'fifty_subtractions',
        name: 'Maestro de Restas',
        description: 'Completa 50 problemas de resta',
        icon: '📉',
        condition: (stats) => stats.subtractions >= 50,
        rarity: 'uncommon'
    },

    // Logros especiales
    FIRST_HINT: {
        id: 'first_hint',
        name: '¿Necesitas Ayuda?',
        description: 'Usa tu primera pista',
        icon: '💡',
        condition: (stats) => stats.hintsUsed >= 1,
        rarity: 'common'
    },
    HINT_MASTER: {
        id: 'hint_master',
        name: 'Maestro de Pistas',
        description: 'Usa 10 pistas',
        icon: '🔍',
        condition: (stats) => stats.hintsUsed >= 10,
        rarity: 'uncommon'
    },
    BALANCED_PLAYER: {
        id: 'balanced_player',
        name: 'Jugador Equilibrado',
        description: 'Completa 10 sumas y 10 restas',
        icon: '⚖️',
        condition: (stats) => stats.additions >= 10 && stats.subtractions >= 10,
        rarity: 'uncommon'
    },
    ALL_DIFFICULTIES: {
        id: 'all_difficulties',
        name: 'Conquistador Total',
        description: 'Completa al menos 1 problema de cada dificultad',
        icon: '🏆',
        condition: (stats) => stats.difficulty1 >= 1 && stats.difficulty2 >= 1 && stats.difficulty3 >= 1,
        rarity: 'rare'
    },
    COMEBACK_KID: {
        id: 'comeback_kid',
        name: 'Regreso Triunfal',
        description: 'Obtén 3 respuestas correctas después de una incorrecta',
        icon: '💫',
        condition: (stats) => stats.hasComeback,
        rarity: 'rare'
    }
};

class AchievementManager {
    constructor() {
        this.unlockedAchievements = this.loadUnlockedAchievements();
    }

    loadUnlockedAchievements() {
        const saved = localStorage.getItem('unlockedAchievements');
        return saved ? JSON.parse(saved) : [];
    }

    saveUnlockedAchievements() {
        localStorage.setItem('unlockedAchievements', JSON.stringify(this.unlockedAchievements));
    }

    checkAchievements(stats) {
        const newlyUnlocked = [];

        Object.values(ACHIEVEMENTS).forEach(achievement => {
            if (!this.unlockedAchievements.includes(achievement.id)) {
                if (achievement.condition(stats)) {
                    this.unlockedAchievements.push(achievement.id);
                    newlyUnlocked.push(achievement);
                }
            }
        });

        if (newlyUnlocked.length > 0) {
            this.saveUnlockedAchievements();
        }

        return newlyUnlocked;
    }

    isUnlocked(achievementId) {
        return this.unlockedAchievements.includes(achievementId);
    }

    getUnlockedCount() {
        return this.unlockedAchievements.length;
    }

    getTotalCount() {
        return Object.keys(ACHIEVEMENTS).length;
    }

    resetAchievements() {
        this.unlockedAchievements = [];
        this.saveUnlockedAchievements();
    }
}

// Instancia global del administrador de logros
const achievementManager = new AchievementManager();

function displayAchievementNotification(achievement) {
    const modal = document.getElementById('achievementModal');
    const icon = document.getElementById('achievementIcon');
    const name = document.getElementById('achievementName');
    const description = document.getElementById('achievementDescription');

    icon.textContent = achievement.icon;
    name.textContent = achievement.name;
    description.textContent = achievement.description;

    modal.style.display = 'flex';
    playAchievementSound();
}

function closeAchievementModal() {
    document.getElementById('achievementModal').style.display = 'none';
}

function playAchievementSound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const now = audioContext.currentTime;

        // Secuencia victoriosa: DO - RE - MI - SOL
        const notes = [262, 294, 330, 392];
        const duration = 0.15;

        notes.forEach((frequency, index) => {
            const osc = audioContext.createOscillator();
            const gain = audioContext.createGain();
            osc.connect(gain);
            gain.connect(audioContext.destination);

            osc.frequency.value = frequency;
            osc.type = 'sine';

            gain.gain.setValueAtTime(0.3, now + index * duration);
            gain.gain.exponentialRampToValueAtTime(0.01, now + index * duration + duration);

            osc.start(now + index * duration);
            osc.stop(now + index * duration + duration);
        });
    } catch (e) {
        console.log('Audio API no disponible');
    }
}

function displayAchievementsGrid() {
    const grid = document.getElementById('achievementsGrid');
    grid.innerHTML = '';

    Object.values(ACHIEVEMENTS).forEach(achievement => {
        const isUnlocked = achievementManager.isUnlocked(achievement.id);
        const card = document.createElement('div');
        card.className = `achievement-card ${isUnlocked ? 'unlocked' : 'locked'} rarity-${achievement.rarity}`;

        card.innerHTML = `
            <div class="achievement-icon-large">${achievement.icon}</div>
            <h4>${achievement.name}</h4>
            <p>${achievement.description}</p>
            ${isUnlocked ? '<span class="unlocked-badge">✓ Desbloqueado</span>' : '<span class="locked-badge">🔒 Bloqueado</span>'}
        `;

        grid.appendChild(card);
    });
}

function displayBadgesPreview() {
    const container = document.getElementById('badgesPreviewContainer');
    container.innerHTML = '';

    if (achievementManager.getUnlockedCount() === 0) {
        container.innerHTML = '<p class="no-badges">Completa problemas para desbloquear insignias</p>';
        return;
    }

    Object.values(ACHIEVEMENTS).forEach(achievement => {
        if (achievementManager.isUnlocked(achievement.id)) {
            const badge = document.createElement('div');
            badge.className = 'badge-item';
            badge.title = achievement.name;
            badge.innerHTML = `
                <span class="badge-icon">${achievement.icon}</span>
                <span class="badge-name">${achievement.name}</span>
            `;
            container.appendChild(badge);
        }
    });
}

function updateBadgeCount() {
    const count = achievementManager.getUnlockedCount();
    const total = achievementManager.getTotalCount();
    document.getElementById('badgeCount').textContent = count;
}
