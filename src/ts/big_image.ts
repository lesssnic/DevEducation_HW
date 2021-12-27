import {TREE} from "./constants";

export function lens(e):void {
    if (e.target.localName !== 'img') return ;
    TREE.big.src = e.target.attributes.data.value;
    TREE.bigButton.classList.remove('none');
    TREE.body.classList.add('scroolhide');
    return ;
}
export function closeLins():void {
    TREE.bigButton.classList.add('none');
    TREE.body.classList.remove('scroolhide');
}