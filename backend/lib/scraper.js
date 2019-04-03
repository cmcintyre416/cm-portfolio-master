import axios from 'axios';

async function getData(url){
    const { data } = await axios.get(url);
    let modifiedData = data.splice(0, 4);
    return modifiedData;
}

export { getData };