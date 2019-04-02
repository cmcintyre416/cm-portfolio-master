import axios from 'axios';

async function getData(url, number){
    const { data } = await axios.get(url);
    let modifiedData = data.splice(0, number);
    return modifiedData;
}

export { getData };