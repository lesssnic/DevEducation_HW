export interface ITitle {
    "title"?: string;
    "user"?: string;
}
export interface IObject {
    [key:string]: number
}
export interface ISet {
    add: (data:any)=> number;
    remove:(data:any)=> boolean;
    has:(data:any)=> boolean;
}
