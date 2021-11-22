import css from "./style.css";

const body = document.querySelector('body');
const wind = document.querySelector('.container');
const paginator = document.querySelector('.paginator');
const pages = document.querySelector('.pages');
const big = document.querySelector('#big>img');
const bigButton = document.querySelector('#big');
paginator.addEventListener('click', pageButton);
wind.addEventListener('click', lens);
bigButton.addEventListener('click', closeLins);
const URL = 'https://jsonplaceholder.typicode.com/photos?_limit=100';
const onList = 9;
let pageNumber = 1;
let maxPage;
let pagesAlbom;

function getAlbom () {
    const albom = fetch(URL)
    .then(data => data.json())
    .catch(err=> console.log(err));
    return albom;
}
function splitAlbom (albom) {
    maxPage = Math.ceil(albom.length/onList);
    const pagesAlbom = {};
    for (let i=0;i<maxPage;i++) {
        pagesAlbom[i+1] = albom.slice(i*onList, (i+1)*onList);
    }
    return pagesAlbom;
}
function renderPaginator (pagesAlbom) {
    let keys = Object.keys(pagesAlbom);
    pages.innerHTML = keys.map(elem => `<button class="menu" data="${elem}">${elem}</button>`)
    .join('')
    
}
async function render(page) {
    if (!pagesAlbom){
        const photoBank = await getAlbom();
        pagesAlbom = splitAlbom(photoBank);
        renderPaginator(pagesAlbom);
        paintButton(1);
    }    
    const viewPage = pagesAlbom[page]?.map(elem => `<img src="${elem.thumbnailUrl}" alt="${elem.title}" data="${elem.url}">`)
    .join('');
    wind.innerHTML = viewPage;
}
function lens (e) {
    if (e.srcElement.localName !== 'img') return ;
    big.attributes.src.value = e.target.attributes.data.value;
    bigButton.classList.remove('none');
    body.classList.add('scroolhide');
    return ;
}
function closeLins () {
    bigButton.classList.add('none');
    body.classList.remove('scroolhide');
}
function pageButton(e) {
    if (e.srcElement.localName !== 'button') return ;
    const tempPage = Number(e.target.attributes.data.value);
    if (tempPage === -1 && pageNumber === 1) return ;
    if (tempPage === 0 && pageNumber === maxPage) return ;
    if (tempPage === -1 && pageNumber > 1) {
        pageNumber -= 1;
        paintButton(pageNumber);
    }
    if (tempPage === 0 && maxPage !== pageNumber) {
        pageNumber += 1;
        paintButton(pageNumber);}
    if (tempPage > 0) {
        pageNumber = tempPage;
        paintButton(pageNumber);
    }
    render(pageNumber);
}
function paintButton (pageNumber) {
    const arrButton = document.querySelectorAll('.menu');
        for (let elem of arrButton) {
            if (Number(elem.innerHTML) === pageNumber) {
                elem.classList.add('active');
            } else elem.classList.remove('active');
        }
}
render(pageNumber);