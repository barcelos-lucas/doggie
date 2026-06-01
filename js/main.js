const tamanhos = [
    {
        titulo: 'Pequeno - Pelagem Curta',
        tamanho: 'Pequeno',
        pelagem: 'Curta',
        banhoAvulso: { preco: 70, tosaHigienica: false },
        packages: [
            {
                nome: 'Banho Avulso',
                banhosNoMes: 1,
                precoBanho: 70,
                tosaHigienica: false,
                precoTotal: 70,
                economia: null
            },
            {
                nome: 'Pacote Quinzenal',
                banhosNoMes: 2,
                precoBanho: 65,
                tosaHigienica: 1,
                precoTotal: 130,
                economiaTotal: 10,
                economiaMsg: 'R$ 10,00 de economia'
            },
            {
                nome: 'Pacote Semanal',
                banhosNoMes: 4,
                precoBanho: 60,
                tosaHigienica: 1,
                precoTotal: 240,
                economiaTotal: 40,
                economiaMsg: 'R$ 40,00 de economia'
            }
        ]
    },
    {
        titulo: 'Pequeno - Pelagem Longa',
        tamanho: 'Pequeno',
        pelagem: 'Longa',
        banhoAvulso: { preco: 80, tosaHigienica: false },
        packages: [
            { nome: 'Banho Avulso', banhosNoMes: 1, precoBanho: 80, tosaHigienica: false, precoTotal: 80, economia: null },
            { nome: 'Pacote Quinzenal', banhosNoMes: 2, precoBanho: 75, tosaHigienica: 1, precoTotal: 150, economiaTotal: 10, economiaMsg: 'R$ 10,00 de economia' },
            { nome: 'Pacote Semanal', banhosNoMes: 4, precoBanho: 70, tosaHigienica: 1, precoTotal: 280, economiaTotal: 40, economiaMsg: 'R$ 40,00 de economia' }
        ]
    },
    {
        titulo: 'Médio',
        tamanho: 'Médio',
        pelagem: null,
        banhoAvulso: { preco: 90, tosaHigienica: false },
        packages: [
            { nome: 'Banho Avulso', banhosNoMes: 1, precoBanho: 90, tosaHigienica: false, precoTotal: 90, economia: null },
            { nome: 'Pacote Quinzenal', banhosNoMes: 2, precoBanho: 85, tosaHigienica: 1, precoTotal: 170, economiaTotal: 30, economiaMsg: 'R$ 30,00 de economia' },
            { nome: 'Pacote Semanal', banhosNoMes: 4, precoBanho: 80, tosaHigienica: 1, precoTotal: 300, economiaTotal: 80, economiaMsg: 'R$ 80,00 de economia' }
        ]
    },
    {
        titulo: 'Grande',
        tamanho: 'Grande',
        pelagem: null,
        banhoAvulso: { preco: 110, tosaHigienica: false },
        packages: [
            { nome: 'Banho Avulso', banhosNoMes: 1, precoBanho: 110, tosaHigienica: false, precoTotal: 110, economia: null },
            { nome: 'Pacote Quinzenal', banhosNoMes: 2, precoBanho: 100, tosaHigienica: 1, precoTotal: 200, economiaTotal: 60, economiaMsg: 'R$ 60,00 de economia' },
            { nome: 'Pacote Semanal', banhosNoMes: 4, precoBanho: 95, tosaHigienica: 1, precoTotal: 360, economiaTotal: 80, economiaMsg: 'R$ 80,00 de economia' }
        ]
    }
];

const servicosAdicionais = [
    { nome: 'Hidratação', preco: 'R$ 20 - R$ 40', msg: 'Quero agendar Hidratação' },
    { nome: 'Remoção de Pelos Mortos', preco: 'R$ 30 - R$ 50', msg: 'Quero agendar Remoção de Pelos Mortos' },
    { nome: 'Desembolo', preco: 'R$ 15', msg: 'Quero agendar Desembolo' }
];

const WHATSAPP_PHONE = '5519999791812';

function encodeWhatsAppMessage(msg) {
    return encodeURIComponent(msg);
}

function getWhatsAppUrl(msg) {
    return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeWhatsAppMessage(msg)}`;
}

function detectSystemTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    }
    return 'light';
}

function getStoredTheme() {
    return localStorage.getItem('theme-preference');
}

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme-preference', theme);
    updateThemeToggleIcon(theme);
}

function updateThemeToggleIcon(theme) {
    const toggle = document.getElementById('themeToggle');
    if (toggle) {
        toggle.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
}

function initThemeToggle() {
    const storedTheme = getStoredTheme();
    const theme = storedTheme || detectSystemTheme();

    setTheme(theme);

    const toggle = document.getElementById('themeToggle');
    if (toggle) {
        toggle.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme') || 'light';
            const newTheme = current === 'dark' ? 'light' : 'dark';
            setTheme(newTheme);
        });
    }

    // Listen for system theme changes
    if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (!getStoredTheme()) {
                const newTheme = e.matches ? 'dark' : 'light';
                setTheme(newTheme);
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', initThemeToggle);
