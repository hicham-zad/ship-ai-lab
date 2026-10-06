// Copies the important App Store screenshots from the app folders into /public, resized to 720px wide.
// Usage: node scripts/prepare-app-screens.mjs
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const DESK = '/Users/Apple/Desktop';
const jobs = [];

// Sober Girl: the seven screenshots that show real UI or the privacy and pricing story (06-share is skipped).
const SG = `${DESK}/Sober Girl/app/store/screenshots`;
for (const [src, name] of [['01-home', 'home'], ['02-tree', 'tree'], ['03-private', 'private'], ['04-sos', 'sos'], ['05-milestones', 'milestones'], ['07-journal', 'journal'], ['08-benefits', 'benefits']]) {
  jobs.push([`${SG}/${src}.png`, `public/sobergirl/screens/${name}.png`]);
}
// Examen Civique: answers, mock exam, score by topic, progress. English and French sets.
const EC = `${DESK}/examen-civique/store/screenshots`;
for (const lang of ['en', 'fr']) {
  for (const [src, name] of [['01', 'answers'], ['02', 'mock-exam'], ['03', 'score'], ['05', 'progress']]) {
    jobs.push([`${EC}/${lang}/${src}.png`, `public/examen-civique/${lang}/${name}.png`]);
  }
}

for (const [from, to] of jobs) {
  fs.mkdirSync(path.dirname(to), { recursive: true });
  await sharp(from).resize({ width: 720 }).png({ compressionLevel: 9, palette: true, quality: 88 }).toFile(to);
}
console.log(`Wrote ${jobs.length} screenshots`);
