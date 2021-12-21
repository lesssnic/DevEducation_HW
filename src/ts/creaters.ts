import {TREE} from "./constants";
import {IImage} from "./types";

export function createButton(item:string):string {
    return TREE.buttonTemplate.replace('{{elem}}', item)
        .replace('{{elem}}', item);
}
export function createImg(item:IImage):string {
    return TREE.imgTemplate.replace('{{elem.thumbnailUrl}}', item.thumbnailUrl)
        .replace('{{elem.title}}', item.title)
        .replace('{{elem.url}}', item.url);
}