// Main Services by Size
const servicosPorTamanho = {
    'Pequeno': [
        { nome: 'Tosa Máquina', preco: 'R$ 110,00', msg: 'Quero agendar Tosa Máquina - Porte Pequeno' },
        { nome: 'Tosa Tesoura/Bebê', preco: 'R$ 140,00', msg: 'Quero agendar Tosa Tesoura/Bebê - Porte Pequeno' },
        { nome: 'Trimming', preco: 'R$ 140,00', msg: 'Quero agendar Trimming - Porte Pequeno' }
    ],
    'Médio': [
        { nome: 'Tosa Máquina', preco: 'R$ 140,00', msg: 'Quero agendar Tosa Máquina - Porte Médio' },
        { nome: 'Tosa Tesoura/Bebê', preco: 'R$ 190,00', msg: 'Quero agendar Tosa Tesoura/Bebê - Porte Médio' },
        { nome: 'Trimming', preco: 'R$ 210,00', msg: 'Quero agendar Trimming - Porte Médio' }
    ],
    'Grande': [
        { nome: 'Tosa Máquina', preco: 'R$ 180,00', msg: 'Quero agendar Tosa Máquina - Porte Grande' },
        { nome: 'Tosa Tesoura/Bebê', preco: 'R$ 250,00', msg: 'Quero agendar Tosa Tesoura/Bebê - Porte Grande' },
        { nome: 'Trimming', preco: 'R$ 350,00', msg: 'Quero agendar Trimming - Porte Grande' }
    ]
};

// Additional Services
const servicosAdicionais = [
    { nome: 'Hidratação', preco: 'R$ 20,00 - R$ 40,00', msg: 'Quero agendar Hidratação' },
    { nome: 'Remoção de Pelos Mortos', preco: 'R$ 30,00 - R$ 50,00', msg: 'Quero agendar Remoção de Pelos Mortos' },
    { nome: 'Desembolo', preco: 'R$ 15,00', msg: 'Quero agendar Desembolo' }
];

const WHATSAPP_PHONE = '5519999791812';

function encodeWhatsAppMessage(msg) {
    return encodeURIComponent(msg);
}

function getWhatsAppUrl(msg) {
    return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeWhatsAppMessage(msg)}`;
}

function renderServicosMainGrid() {
    const grid = document.getElementById('servicosMainGrid');
    if (!grid) return;

    grid.innerHTML = Object.keys(servicosPorTamanho).map(tamanho => {
        const servicos = servicosPorTamanho[tamanho];
        return `
            <div class="tamanho-card">
                <h3 class="tamanho-title">Porte ${tamanho}</h3>
                <div class="tamanho-services">
                    ${servicos.map(s => `
                        <div class="service-item">
                            <span class="service-name">${s.nome}</span>
                            <span class="service-price">${s.preco}</span>
                        </div>
                    `).join('')}
                </div>
                <a href="${getWhatsAppUrl(servicosPorTamanho[tamanho][0].msg)}"
                   target="_blank"
                   rel="noopener noreferrer"
                   class="tamanho-btn">
                    Agendar
                </a>
            </div>
        `;
    }).join('');
}

function renderServicosAdicionais() {
    const grid = document.getElementById('servicosAdicionalGrid');
    if (!grid) return;

    grid.innerHTML = servicosAdicionais.map(s => `
        <a href="${getWhatsAppUrl(s.msg)}"
           target="_blank"
           rel="noopener noreferrer"
           class="servico-adicional-card">
            <div class="servico-adicional-nome">${s.nome}</div>
            <div class="servico-adicional-preco">${s.preco}</div>
            <div class="servico-adicional-btn">
                Agendar
            </div>
        </a>
    `).join('');
}

// Mobile Menu Toggle
function setupMobileMenu() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (!navToggle) return;

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close menu when link clicked
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    renderServicosMainGrid();
    renderServicosAdicionais();
    setupMobileMenu();
});
