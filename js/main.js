// import * as allData from '../data/list.js';
// import { data} from '../data/list.js';

import { renderUsersList } from "./users.js";


const url = 'https://tropikalis.github.io/fetch-pro';

const sourceCSS = '/css/main.css';
fetch(url + sourceCSS)
    .then(res => res.text())
    .then(css => {
        const headDOM = document.querySelector('head');
        if (headDOM) {
            headDOM.insertAdjacentHTML('beforeend', `<style>${css}</style>`);
        }   
    });

const sourceUsers = '/data/users2.json';
 fetch(url + sourceUsers)
     .then(res => res.json())
     .then(renderUsersList)
     .catch(console.error)
     .finally(() => {
        console.log('GRAND FINAL !!!');
     });

// console.log('START');

// const res = await fetch(url + sourceUsers);
// const data = await res.json();
// renderUsersList(data);

// console.log('END');






