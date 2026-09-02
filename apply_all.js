const fs = require('fs');
let css = fs.readFileSync('style.css', 'utf8');

function normalize(str) {
    return str.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
}

css = normalize(css);

function apply(oldStr, newStr) {
    const nOld = normalize(oldStr);
    if (!css.includes(nOld)) {
        console.error('Bloco não encontrado:', nOld.slice(0, 80));
        process.exit(1);
    }
    css = css.replace(nOld, newStr);
}

apply(`.section-title {`, `/* Header transparente sobre o hero */
.header-transparent {
    background: transparent;
    border-bottom: none;
    box-shadow: none;
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
}

.header-transparent .nav {
    justify-content: flex-start;
    gap: 3rem;
}

.header-transparent .nav-links a {
    color: #ffffff;
}

.header-transparent .nav-links a:hover {
    color: var(--primary-light);
}

.header-transparent .mobile-menu-btn {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: #ffffff;
}

.header-transparent .dropdown-menu {
    background: rgba(15, 23, 42, 0.85);
    -webkit-backdrop-filter: blur(15px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.header-transparent .dropdown-menu li a {
    color: rgba(255, 255, 255, 0.9);
}

.header-transparent .dropdown-menu li a:hover {
    background: rgba(255, 255, 255, 0.1);
    color: var(--primary-light);
}

.header-transparent.scrolled {
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.header-transparent.scrolled .nav-links a {
    color: #1e293b;
}

.header-transparent.scrolled .nav-links a:hover {
    color: var(--primary);
}

.header-transparent.scrolled .mobile-menu-btn {
    background: rgba(15, 23, 42, 0.08);
    border: 1px solid rgba(15, 23, 42, 0.15);
    color: #1e293b;
}

.header-transparent.scrolled .dropdown-menu {
    background: rgba(255, 255, 255, 0.95);
    border: 1px solid rgba(0, 0, 0, 0.05);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.header-transparent.scrolled .dropdown-menu li a {
    color: #475569;
}

.header-transparent.scrolled .dropdown-menu li a:hover {
    background: rgba(37, 99, 235, 0.05);
    color: var(--primary);
}

/* Hero começa no topo quando o header é transparente */
.header-transparent ~ main .hero-slideshow {
    margin-top: 0;
}

/* Hero com imagem única */
.hero-single-image {
    position: relative;
    height: 100vh;
    min-height: 600px;
    overflow: hidden;
}

.hero-single-image .hero-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}

.hero-single-image .hero-bg img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

.hero-single-image .hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    background: linear-gradient(135deg,
            rgba(15, 23, 42, 0.92) 0%,
            rgba(15, 23, 42, 0.75) 40%,
            rgba(15, 23, 42, 0.4) 100%);
    display: flex;
    align-items: center;
}

.hero-single-image .hero-content {
    max-width: 700px;
}

.hero-cards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    margin-top: 3rem;
}

.hero-card {
    background: rgba(15, 23, 42, 0.6);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 1.2rem;
    padding: 1.8rem;
    color: #ffffff;
}

.hero-card h3 {
    color: #ffffff;
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 1rem;
}

.hero-card ul {
    list-style: none;
    padding: 0;
    margin: 0 0 1.5rem 0;
}

.hero-card li {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.85);
    margin-bottom: 0.6rem;
}

.hero-card li i {
    color: var(--primary-light);
    font-size: 0.8rem;
}

.hero-card .btn-cta {
    width: 100%;
    padding: 0.7rem 1rem;
    font-size: 0.85rem;
}

@media (max-width: 768px) {
    .header-transparent .nav {
        justify-content: space-between;
    }

    .header-transparent .mobile-menu-btn {
        color: #ffffff;
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .header-transparent .nav-links.nav-active {
        background: rgba(15, 23, 42, 0.95);
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    }

    .header-transparent .nav-links.nav-active .dropdown-menu {
        background: rgba(0, 0, 0, 0.2);
    }

    .header-transparent .nav-links.nav-active li a {
        color: #ffffff;
    }

    .hero-cards {
        grid-template-columns: 1fr;
        margin-top: 2rem;
    }

    .hero-single-image .hero-content {
        max-width: 100%;
    }
}

.section-title {`);

apply(`.hero-overlay .hero-content p {\n    font-size: 1.25rem;\n    color: rgba(255, 255, 255, 0.95);\n    margin-bottom: 2.5rem;\n    line-height: 1.8;\n    max-width: 600px;\n}`, `.hero-overlay .hero-content p {\n    font-size: 1.25rem;\n    color: rgba(255, 255, 255, 0.95);\n    margin-bottom: 2.5rem;\n    line-height: 1.8;\n    max-width: 600px;\n}\n\n.hero-tagline {\n    font-size: 36px;\n    font-weight: 700;\n    color: #ffffff;\n    letter-spacing: 0.02em;\n    text-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);\n    margin-bottom: 0;\n    line-height: 1.3;\n}\n\n.hero-tagline span {\n    display: inline;\n}\n\n@media (max-width: 768px) {\n    .hero-tagline {\n        font-size: 24px;\n    }\n}`);

fs.writeFileSync('style.css', css);
console.log('style.css atualizado.');
