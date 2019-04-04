import express from 'express';
import cors from 'cors';
import db from './lib/db';
import { getGithubEvents } from './lib/scraper';
import './lib/cron';

import { getData } from './lib/scraper';

const app = express();
app.use(cors());

app.get('/scrapeGithubData', async (req, res, next) => {
    const githubData = await getGithubEvents();
    res.json(githubData);
});

app.get('/githubData', async (req, res, next) => {
    const githubData = db.value();
    res.json({recentGithubEvents: githubData});
});

app.listen(2093, () => console.log(`app running`));