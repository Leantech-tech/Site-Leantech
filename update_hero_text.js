const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Remover o h1
html = html.replace(/<h1>[\s\S]*?<\/h1>\r?\n/, '');

// Destacar o parágrafo
html = html.replace(
    /<p>Conecte\. Resolva\. Evolua\.<\/p>/,
    '<p class="hero-tagline">Conecte. Resolva. Evolua.</p>'
);

// Limpar espaços em branco
html = html.replace(/\r?\n[\s]*\r?\n[\s]*\r?\n/g, '\r\n\r\n');

fs.writeFileSync('index.html', html);
console.log('Hero atualizado.');
