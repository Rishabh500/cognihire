import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

if (!fs.existsSync(distDir)) {
  console.error('dist directory does not exist!');
  process.exit(1);
}

const indexHtmlPath = path.join(distDir, 'index.html');
if (!fs.existsSync(indexHtmlPath)) {
  console.error('dist/index.html does not exist!');
  process.exit(1);
}

const indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');

const routes = [
  'privacy',
  'privacy-policy',
  'terms',
  'terms-and-conditions',
];

routes.forEach((route) => {
  // 1. Create route directory with index.html (e.g. dist/privacy/index.html)
  const routeDir = path.join(distDir, route);
  if (!fs.existsSync(routeDir)) {
    fs.mkdirSync(routeDir, { recursive: true });
  }
  fs.writeFileSync(path.join(routeDir, 'index.html'), indexHtml, 'utf8');

  // 2. Create route.html (e.g. dist/privacy.html)
  fs.writeFileSync(path.join(distDir, `${route}.html`), indexHtml, 'utf8');

  console.log(`Generated static entrypoints for /${route}`);
});

console.log('All static SPA route fallbacks successfully created!');
