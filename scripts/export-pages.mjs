import fs from 'node:fs/promises';
import './build.mjs';

// A committed static entry point also supports Pages' branch publishing mode.
let html = await fs.readFile('dist/index.html', 'utf8');
html = html.replace(/"assets\//g, '"public/assets/')
  .replace(/"downloads\//g, '"public/downloads/')
  .replace('href="favicon.svg"', 'href="public/favicon.svg"')
  .replace('href="portfolio.css"', 'href="public/portfolio.css"')
  .replace('src="portfolio.js"', 'src="public/portfolio.js"');
await fs.writeFile('index.html', html);
await fs.writeFile('.nojekyll', '');
await fs.copyFile('dist/portfolio.js', 'public/portfolio.js');
await fs.copyFile('dist/portfolio.css', 'public/portfolio.css');
await fs.copyFile('public/Guia_Portfolio_Wesley_Vieira.html', 'Guia_Portfolio_Wesley_Vieira.html');
console.log('Static root export ready for GitHub Pages: main / (root).');
