// Service Data
const servicos = [
    // Tosa Máquina
    { id: 'tosa-maquina-pequeno', porte: 'Pequeno', servico: 'Tosa Máquina', preco: 'R$ 110,00', whatsappMsg: 'Quero agendar Tosa Máquina - Porte Pequeno' },
    { id: 'tosa-maquina-medio', porte: 'Médio', servico: 'Tosa Máquina', preco: 'R$ 140,00', whatsappMsg: 'Quero agendar Tosa Máquina - Porte Médio' },
    { id: 'tosa-maquina-grande', porte: 'Grande', servico: 'Tosa Máquina', preco: 'R$ 180,00', whatsappMsg: 'Quero agendar Tosa Máquina - Porte Grande' },

    // Tosa Tesoura/Bebê
    { id: 'tosa-tesoura-pequeno', porte: 'Pequeno', servico: 'Tosa Tesoura/Bebê', preco: 'R$ 140,00', whatsappMsg: 'Quero agendar Tosa Tesoura/Bebê - Porte Pequeno' },
    { id: 'tosa-tesoura-medio', porte: 'Médio', servico: 'Tosa Tesoura/Bebê', preco: 'R$ 190,00', whatsappMsg: 'Quero agendar Tosa Tesoura/Bebê - Porte Médio' },
    { id: 'tosa-tesoura-grande', porte: 'Grande', servico: 'Tosa Tesoura/Bebê', preco: 'R$ 250,00', whatsappMsg: 'Quero agendar Tosa Tesoura/Bebê - Porte Grande' },

    // Trimming
    { id: 'trimming-pequeno', porte: 'Pequeno', servico: 'Trimming', preco: 'R$ 140,00', whatsappMsg: 'Quero agendar Trimming - Porte Pequeno' },
    { id: 'trimming-medio', porte: 'Médio', servico: 'Trimming', preco: 'R$ 210,00', whatsappMsg: 'Quero agendar Trimming - Porte Médio' },
    { id: 'trimming-grande', porte: 'Grande', servico: 'Trimming', preco: 'R$ 350,00', whatsappMsg: 'Quero agendar Trimming - Porte Grande' },

    // Hidratação
    { id: 'hidratacao-pequeno', porte: 'Pequeno', servico: 'Hidratação', preco: 'R$ 20,00', whatsappMsg: 'Quero agendar Hidratação - Porte Pequeno' },
    { id: 'hidratacao-medio', porte: 'Médio', servico: 'Hidratação', preco: 'R$ 30,00', whatsappMsg: 'Quero agendar Hidratação - Porte Médio' },
    { id: 'hidratacao-grande', porte: 'Grande', servico: 'Hidratação', preco: 'R$ 40,00', whatsappMsg: 'Quero agendar Hidratação - Porte Grande' },

    // Remoção de Pelos Mortos
    { id: 'remocao-pequeno', porte: 'Pequeno', servico: 'Remoção de Pelos Mortos', preco: 'R$ 30,00', whatsappMsg: 'Quero agendar Remoção de Pelos Mortos - Porte Pequeno' },
    { id: 'remocao-medio', porte: 'Médio', servico: 'Remoção de Pelos Mortos', preco: 'R$ 40,00', whatsappMsg: 'Quero agendar Remoção de Pelos Mortos - Porte Médio' },
    { id: 'remocao-grande', porte: 'Grande', servico: 'Remoção de Pelos Mortos', preco: 'R$ 50,00', whatsappMsg: 'Quero agendar Remoção de Pelos Mortos - Porte Grande' },

    // Desembolo
    { id: 'desembolo-pequeno', porte: 'Pequeno', servico: 'Desembolo', preco: 'R$ 15,00', whatsappMsg: 'Quero agendar Desembolo - Porte Pequeno' },
    { id: 'desembolo-medio', porte: 'Médio', servico: 'Desembolo', preco: 'R$ 15,00', whatsappMsg: 'Quero agendar Desembolo - Porte Médio' },
    { id: 'desembolo-grande', porte: 'Grande', servico: 'Desembolo', preco: 'R$ 15,00', whatsappMsg: 'Quero agendar Desembolo - Porte Grande' },
];

const WHATSAPP_PHONE = '5519999791812';

function encodeWhatsAppMessage(msg) {
    return encodeURIComponent(msg);
}

function getWhatsAppUrl(msg) {
    return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeWhatsAppMessage(msg)}`;
}

function renderServicos() {
    const grid = document.getElementById('servicosGrid');
    if (!grid) return;

    grid.innerHTML = servicos.map(s => `
        <a href="${getWhatsAppUrl(s.whatsappMsg)}"
           target="_blank"
           rel="noopener noreferrer"
           class="servico-card"
           data-id="${s.id}">
            <div class="servico-porte">${s.porte}</div>
            <div class="servico-nome">${s.servico}</div>
            <div class="servico-preco">${s.preco}</div>
            <div class="servico-btn">
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
    if (!navMenu) return;

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
    renderServicos();
    setupMobileMenu();
});
