export interface IImage {
    thumbnailUrl:string;
    title:string;
    url:string;
}
export interface IAlbom {
    [key:string]:Array<IPage>;
}

export interface IPage {
    albumId:number
    id:number
    thumbnailUrl:string
    title:string
    url:string
}