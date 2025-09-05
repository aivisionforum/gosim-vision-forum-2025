#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read all JSON files
const speakersPath = path.join(__dirname, '../src/json/Speakers.json');
const schedulePath = path.join(__dirname, '../src/json/Schedule.json');
const scheduleEnPath = path.join(__dirname, '../src/json/ScheduleEn.json');

const speakers = JSON.parse(fs.readFileSync(speakersPath, 'utf8'));
const schedule = JSON.parse(fs.readFileSync(schedulePath, 'utf8'));
const scheduleEn = JSON.parse(fs.readFileSync(scheduleEnPath, 'utf8'));

// Create a map of speaker IDs to images (only if they have images)
const speakerImages = {};
speakers.speakers.forEach(speaker => {
  if (speaker.image && speaker.image.trim() !== '') {
    speakerImages[speaker.id] = speaker.image;
  }
});

// Update Schedule.json
let scheduleUpdated = false;
Object.values(schedule.sessions).forEach(categorySession => {
  categorySession.forEach(session => {
    if (session.speakers) {
      session.speakers.forEach(speaker => {
        if (speakerImages[speaker.id] !== undefined && speaker.image !== speakerImages[speaker.id]) {
          console.log(`Updating ${speaker.id} image in Schedule.json: "${speaker.image}" -> "${speakerImages[speaker.id]}"`);
          speaker.image = speakerImages[speaker.id];
          scheduleUpdated = true;
        }
      });
    }
  });
});

// Update ScheduleEn.json
let scheduleEnUpdated = false;
Object.values(scheduleEn.sessions).forEach(categorySession => {
  categorySession.forEach(session => {
    if (session.speakers) {
      session.speakers.forEach(speaker => {
        if (speakerImages[speaker.id] !== undefined && speaker.image !== speakerImages[speaker.id]) {
          console.log(`Updating ${speaker.id} image in ScheduleEn.json: "${speaker.image}" -> "${speakerImages[speaker.id]}"`);
          speaker.image = speakerImages[speaker.id];
          scheduleEnUpdated = true;
        }
      });
    }
  });
});

// Write back if changes were made
if (scheduleUpdated) {
  fs.writeFileSync(schedulePath, JSON.stringify(schedule, null, 2));
  console.log('✅ Schedule.json updated');
}

if (scheduleEnUpdated) {
  fs.writeFileSync(scheduleEnPath, JSON.stringify(scheduleEn, null, 2));
  console.log('✅ ScheduleEn.json updated');
}

if (!scheduleUpdated && !scheduleEnUpdated) {
  console.log('✅ All speaker images are already in sync');
}