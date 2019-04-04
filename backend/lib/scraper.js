import axios from 'axios';
import db from './db';

export async function getData(url){
    const { data } = await axios.get(url);
    let modifiedData = data.splice(0, 4);
    return modifiedData;
};

export async function getGithubEvents(){
    const newGithubEventData = await getData('https://api.github.com/users/cmcintyre416/events/public?json');
    return newGithubEventData;
};

export async function runCron(){
    const githubEventData = await getGithubEvents();
    resetDatabase();
    db.get('gitEvents').push({
        date: Date.now(),
        githubActivity: githubEventData
    }).write();
};

const resetDatabase = () => {
  db.set('gitEvents', [])
    .write()
};