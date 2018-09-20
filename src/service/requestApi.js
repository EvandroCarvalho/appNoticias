import axios from 'axios';

const nationalGeographic = 'https://newsapi.org/v2/top-headlines?sources=national-geographic&apiKey=d235c46b851a449caae8655caa652d73';
const techcrunch = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=d235c46b851a449caae8655caa652d73';
const newYorkTimes = 'https://newsapi.org/v2/top-headlines?sources=the-new-york-times&apiKey=d235c46b851a449caae8655caa652d73';
const mashable = 'https://newsapi.org/v2/top-headlines?sources=mashable&apiKey=d235c46b851a449caae8655caa652d73';
const ign = 'https://newsapi.org/v2/top-headlines?sources=ign&apiKey=d235c46b851a449caae8655caa652d73';
const espn = 'https://newsapi.org/v2/top-headlines?sources=espn&apiKey=d235c46b851a449caae8655caa652d73';


export default requestAPI = (news) => {
    switch(news) {
        case 'MASHABLE':
            return axios.get(mashable);
        case 'NATIONAL GEOGRAPH':
            return axios.get(nationalGeographic);
        case 'TECHCRUNCH':
            return axios.get(techcrunch);
        case 'THE NEW YORK TIMES':
            return axios.get(newYorkTimes);
        case 'IGN':
            return axios.get(ign);
        case 'ESPN':
            return axios.get(espn);
        default:
            return ''
    }
}