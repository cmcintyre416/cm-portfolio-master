import express from 'express';

import { getData } from './lib/scraper';
import db from './lib/db';

const app = express();

app.get('/githubData', async (req, res, next) => {
    console.log('scraping');
    const newGithubData = await getData('https://api.github.com/users/cmcintyre416/events/public?json', 6);
    db.get('gitEvents')
        .push({
            date: Date.now(),
            githubActivity:  newGithubData
    })
    .write();
    res.json(newGithubData);
});

app.listen(2093, () => console.log(`app running`));