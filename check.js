const fs = require('fs');
const p = 'F:\\QCLAW\\workbuddy\\2026-09-20-17-51-49\\reading-assessment\\index.html';
const h = fs.readFileSync(p, 'utf8');
const m = h.match(/<script>([\s\S]*?)<\/script>/);
if (!m) { console.log('NO SCRIPT FOUND'); process.exit(1); }
try { new Function(m[1]); console.log('SYNTAX OK (' + m[1].length + ' chars)'); }
catch (e) { console.log('SYNTAX ERROR: ' + e.message); process.exit(1); }
