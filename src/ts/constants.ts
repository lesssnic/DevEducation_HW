import {TColor} from "./types";
export const constant = {
    APP_KEY: <string> '701825862e8c14e7fb1176d68090de32',
    APP_ID: <string> 'afdee635',
    URL: <string> 'https://api.adzuna.com/v1/api/jobs',
    LOCAL_URL: <string>'http://localhost:3001/v1/api/jobs'
}
export const TREE = {
    ctx: <HTMLElement> document.querySelector('#myChart'),
    job: <HTMLSelectElement> document.querySelector('#job-select'),
    country: <HTMLSelectElement> document.querySelector('#country-select'),
    type: <HTMLSelectElement> document.querySelector('#type-select'),
    doFilter: <HTMLButtonElement> document.querySelector('#do-filter'),
    loader: <HTMLElement> document.querySelector('.lds-dual-ring'),
    option: <string> document.querySelector('#option').innerHTML
}
export const color: TColor = {
    backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'],
    borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
    ]
}
