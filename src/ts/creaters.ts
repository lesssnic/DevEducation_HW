import {TREE} from "./constants";
import {IImage, IPage} from "./types";

export function createButton(item:number):string {
    item++;
    return TREE.buttonTemplate.replace('{{elem}}', item.toString())
        .replace('{{elem}}', item.toString());
}
export function createImg(item:IImage):string {
    return TREE.imgTemplate.replace('{{elem.thumbnailUrl}}', item.thumbnailUrl)
        .replace('{{elem.title}}', item.title)
        .replace('{{elem.url}}', item.url);
}