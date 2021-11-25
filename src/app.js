import css from "./style.css";

const buttonTemplate = document.querySelector('#button-template').innerHTML;
const imgTemplate = document.querySelector('#img-template').innerHTML;
const body = document.querySelector('body');
const galery = document.querySelector('.container');
const paginator = document.querySelector('.paginator');
const pages = document.querySelector('.pages');
const big = document.querySelector('#big>img');
const bigButton = document.querySelector('#big');
const URL = 'https://jsonplaceholder.typicode.com/photos?_limit=100';
const onList = 9;
const pagesAlbom = {};
let pageNumber = 1;
let maxPage;
paginator.addEventListener('click', pageButton);
galery.addEventListener('click', lens);
bigButton.addEventListener('click', closeLins);
render(pageNumber);

function getAlbom() {
    return fetch(URL)
    .then(data => data.json())
    .catch(err=> console.log(err));
}
function splitAlbom(albom) {
    maxPage = Math.ceil(albom.length/onList);
    for (let i = 0;i < maxPage;i++) {
        pagesAlbom[i+1] = albom.slice(i*onList, (i+1)*onList);
    }
}
function renderPaginator(pagesAlbom) {
    const keys = Object.keys(pagesAlbom);
    pages.innerHTML = keys.map(createButton).join('');
}
async function render(page) {
    if (!Object.keys(pagesAlbom).length){
        const photoBank = await getAlbom();
        splitAlbom(photoBank);
        renderPaginator(pagesAlbom);
        paintButton(pageNumber);
    }    
    galery.innerHTML = pagesAlbom[page]?.map(createImg).join('');
}
function lens(e) {
    if (e.srcElement.localName !== 'img') return ;
    big.attributes.src.value = e.target.attributes.data.value;
    bigButton.classList.remove('none');
    body.classList.add('scroolhide');
    return ;
}
function closeLins() {
    bigButton.classList.add('none');
    body.classList.remove('scroolhide');
}
function pageButton(e) {
    if (e.srcElement.localName !== 'button') return ;
    const tempPage = Number(e.target.attributes.data.value);
    const ifArrow = (tempPage === -1 && pageNumber === 1) || (tempPage === 0 && pageNumber === maxPage);
    if (ifArrow) return ;
    if (tempPage === -1) pageNumber -= 1;
    if (tempPage === 0) pageNumber += 1;
    if (tempPage > 0) pageNumber = tempPage;
    paintButton(pageNumber);
    render(pageNumber);
}
function paintButton(pageNumber) {
    const arrButton = document.querySelectorAll('.menu');
        arrButton.forEach(button => 
                    (Number(button.innerHTML) === pageNumber) ?
                    button.classList.add('active') : 
                    button.classList.remove('active')
        );
}
function createButton(item) {
    return buttonTemplate.replace('{{elem}}', item)
                         .replace('{{elem}}', item);
}
function createImg(item) {
    return imgTemplate.replace('{{elem.thumbnailUrl}}', item.thumbnailUrl)
                      .replace('{{elem.title}}', item.title)
                      .replace('{{elem.url}}', item.url);
}