const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');
const start = html.indexOf('<div class="hero-content">');
const end = html.indexOf('</div>', html.indexOf('</div>', html.indexOf('</div>', html.indexOf('</div>', start) + 6) + 6) + 6) + 6;
let block = html.slice(start, end);
block = block.replace(/<p>[\s\S]*?<\/p>/, '<p>Conecte. Resolva. Evolua.</p>');
html = html.slice(0, start) + block + html.slice(end);
fs.writeFileSync('index.html', html);
console.log('Texto do hero atualizado.');
