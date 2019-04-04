import cron from 'node-cron';
import { runCron } from './scraper';

cron.schedule('* 1 * * *', () => {
    console.log('Running the cron!');
    runCron();
});