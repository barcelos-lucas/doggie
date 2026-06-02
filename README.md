# Doggie Estética Animal - Landing Page

Landing page moderna e responsiva para estética pet em São Bernardo do Campo. Design minimalista com glassmorphism, modo escuro/claro e animações fluidas.

## ✨ Características

- **Design Moderno**: Glassmorphism, liquid glass effects e backdrop blur
- **Dark Mode**: Alterna automaticamente conforme preferência do sistema, com opção manual
- **Hero Animado**: Palavras-chave com animação de cycling contínuo
- **Menu Mobile**: Sidebar drawer com overlay blur, fechar ao clicar
- **Responsivo**: Mobile-first, desktop-optimized
- **Integração WhatsApp**: Botões flutuantes e links diretos com mensagens pré-preenchidas
- **Pacotes de Serviços**: Tabela comparativa com 4 tamanhos de pets
- **Serviços Adicionais**: Cartões em grid responsivo (hidratação, desembolo, etc.)
- **Botão Back-to-Top**: Aparece após scroll hero, smooth scroll
- **Links Úteis**: Google Maps, Instagram, contato direto

## 🛠 Tech Stack

- **HTML5** — Semântico, acessível
- **CSS3** — CSS Variables, Flexbox, Grid, backdrop-filter, keyframes
- **JavaScript Vanilla** — Renderização dinâmica, tema, menu mobile, animações

## 📁 Estrutura

```
.
├── index.html              # Página principal
├── css/
│   └── styles.css          # Design system, variáveis, temas light/dark
├── js/
│   └── main.js             # Lógica: pacotes, serviços, menu, tema, scroll
└── assets/
    ├── logo-transparente.png
    ├── logo-hero.png
    ├── whatsapp.svg
    └── favicon.ico
```

## 🚀 Executar Localmente

### Opção 1: Abrir direto no navegador
```bash
# Clonar repo
git clone <repo-url>
cd www/doggie

# Abrir index.html no navegador (duplo clique)
```

### Opção 2: Servidor local (recomendado)
```bash
# Python 3
cd www/doggie
python -m http.server 8000

# Abrir http://localhost:8000
```

## 🎨 Design System

**Cores Primárias:**
- Terracota: `#c85a54` (brand, botões, destaque)
- Bege: `#d4b896` (secundária, glass tint)
- Branco: `#ffffff` (light mode bg)
- Preto: `#000000` (dark mode bg)

**Glass Effects:**
- Hero buttons: `blur(20px) saturate(160%)`
- Header scrollado: `blur(40px) saturate(180%)`
- Sidebar, nav pills: `blur(16px) saturate(180%)`

**Fontes:**
- Display: Poppins (títulos, destaque)
- Body: Inter (texto, descrição)

## 📱 Responsividade

- **Mobile**: 320px - 768px (menu sidebar, stacked layout)
- **Tablet**: 769px - 1024px (2-col grid)
- **Desktop**: 1025px+ (3-col, layout completo)

## 🔌 Integração WhatsApp

Todos botões usam URL format: `https://wa.me/5519999791812?text=<msg>`

- Agendar serviço → `"Quero agendar [tamanho/serviço]"`
- Contato → `"Olá, gostaria de mais informações"`
- Links footer automáticos

## 🌙 Tema Light/Dark

- **Trigger**: Dropdown no header (Claro/Escuro/Sistema)
- **Persistência**: localStorage → `theme-preference`
- **Sistema**: Detecta `prefers-color-scheme` via media query
- **Transição**: Smooth 0.3s entre temas

## 🚢 Deploy

Pronto para hosting estático:
- **GitHub Pages**: Push em `gh-pages` branch
- **Netlify**: Conectar repo, deploy automático
- **Vercel**: Similar Netlify
- Sem backend, sem build process

## 📞 Contato

- **WhatsApp**: +5519999791812
- **Instagram**: @doggie.esteticapet
- **Endereço**: Avenida 14 de Maio, 444 - São Bernardo do Campo, SP
- **Horários**: Segunda a domingo, consultar WhatsApp

## 📝 License

Proprietário. Uso interno Doggie Estética Animal.
