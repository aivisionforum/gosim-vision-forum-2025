// Script to reorder speakers in ScheduleEn.json 
// Speakers with images come first, then those without

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the ScheduleEn.json file
const scheduleEnPath = path.join(__dirname, '..', 'src', 'json', 'ScheduleEn.json');
const scheduleData = JSON.parse(fs.readFileSync(scheduleEnPath, 'utf8'));

// Function to reorder speakers (with images first, without images last)
function reorderSpeakers(speakers) {
    const withImages = speakers.filter(s => s.image && s.image !== '');
    const withoutImages = speakers.filter(s => !s.image || s.image === '');
    return [...withImages, ...withoutImages];
}

// Process each session category
for (const categoryKey in scheduleData.sessions) {
    if (scheduleData.sessions[categoryKey] && Array.isArray(scheduleData.sessions[categoryKey])) {
        scheduleData.sessions[categoryKey] = scheduleData.sessions[categoryKey].map(session => {
            if (session.speakers && session.speakers.length > 0) {
                session.speakers = reorderSpeakers(session.speakers);
            }
            return session;
        });
    }
}

// Write the updated data back
fs.writeFileSync(scheduleEnPath, JSON.stringify(scheduleData, null, 2), 'utf8');
console.log('Successfully reordered speakers in ScheduleEn.json');