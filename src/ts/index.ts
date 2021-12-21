import '../css/style.css'
import "core-js/stable";
import "regenerator-runtime/runtime";
import {TREE} from "./constants";
import {URL} from "./url";
import {createButton, createImg} from "./creaters";
import {IAlbom, IPage} from "./types";
import {closeLins,lens} from "./big_image"

const onList:number = 9;
const pagesAlbom: IAlbom = {};
let pageNumber:number = 1;
let maxPage:number;
TREE.paginator.addEventListener('click', pageButton);
TREE.galery.addEventListener('click', lens);
TREE.bigButton.addEventListener('click', closeLins);
render(pageNumber);

function getAlbom():Promise<Array<IPage>> {
    return fetch(URL)
        .then(data => data.json())
        .catch(err=> console.log(err));
}
function splitAlbom(albom):void {
    maxPage = Math.ceil(albom.length/onList);
    for (let i = 0;i < maxPage;i++) {
        pagesAlbom[i+1] = albom.slice(i*onList, (i+1)*onList);
    }
}
function renderPaginator(pagesAlbom:IAlbom):void {
    const keys = Object.keys(pagesAlbom);
    TREE.pages.innerHTML = keys.map(createButton).join('');
}
async function render(page:number):Promise<void> {
    if (!Object.keys(pagesAlbom).length){
        const photoBank = await getAlbom();
        splitAlbom(photoBank);
        renderPaginator(pagesAlbom);
        paintButton(pageNumber);
    }
    TREE.galery.innerHTML = pagesAlbom[page]?.map(createImg).join('');
}

function pageButton(e):void {
    console.log(e);
    if (e.target.localName !== 'button') return ;
    const tempPage = Number(e.target.attributes.data.value);
    const ifArrow = (tempPage === -1 && pageNumber === 1) || (tempPage === 0 && pageNumber === maxPage);
    if (ifArrow) return ;
    if (tempPage === -1) pageNumber -= 1;
    if (tempPage === 0) pageNumber += 1;
    if (tempPage > 0) pageNumber = tempPage;
    paintButton(pageNumber);
    render(pageNumber);
}
function paintButton(pageNumber:number):void {
    const arrButton = document.querySelectorAll('.menu');
    arrButton.forEach(button => (Number(button.innerHTML) === pageNumber) ?
        button.classList.add('active') :
        button.classList.remove('active')
    );
}
