import express from 'express';
import db from './lib/db';

import { getData } from './lib/scraper';

const app = express();

const resetDatabase = () => {
  db.set('gitEvents', [])
    .write()
};

app.get('/githubData', async (req, res, next) => {
    console.log('scraping');
    const newGithubData = await getData('https://api.github.com/users/cmcintyre416/events/public?json');
    resetDatabase();
    db.get('gitEvents').push({
        date: Date.now(),
        githubActivity: newGithubData
    }).write();
    res.json(newGithubData);
});

app.listen(2093, () => console.log(`app running`));