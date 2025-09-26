const fs = require('fs');
const path = require('path');

// نُنشئ مجلد dist وننسخ كل الملفات إليه
const srcDir = __dirname;
const distDir = path.join(srcDir, 'dist');

if (!fs.existsSync(distDir)) fs.mkdirSync(distDir);

// ننسخ index.html وكل الملفات
fs.copyFileSync(path.join(srcDir, 'index.html'), path.join(distDir, 'index.html'));

console.log('✅ Build completed! dist folder is ready.');
