import express from 'express';
import db from './lib/db';
import { getGithubEvents } from './lib/scraper';
import './lib/cron';

import { getData } from './lib/scraper';

const app = express();

app.get('/githubData', async (req, res, next) => {
    const githubData = await getGithubEvents();
    res.json(githubData);
});

app.listen(2093, () => console.log(`app running`));