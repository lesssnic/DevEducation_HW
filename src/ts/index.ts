import '../css/style.css'
import '../css/loader.css'
import '../css/button.css'
import "core-js/stable";
import "regenerator-runtime/runtime";
const axios = require('axios');
import {constant, TREE} from "./constants";
import {renderLine} from "./diagram";
import {TAnswer, TCategory} from "./types";

const toggleLoader = ():void => {
    TREE.loader.classList.toggle('loader');
}

const getData = async(country:string, category:Array<string>, type:string):Promise<void> => {
    toggleLoader();
    const promises:Array<Promise<TAnswer>> = category.map(elem => {
        return axios.get(constant.LOCAL_URL+`/${country}/${type}`,
            { params: { app_id: constant.APP_ID, app_key: constant.APP_KEY, category: elem},
                headers: {"content-type": "application/json"}})
    })
    const result:Array<TAnswer> = await Promise.all(promises);
    renderLine(result, type);
    toggleLoader();
}

const getCategories = async():Promise<void> => {
    const category = await axios.get(constant.LOCAL_URL+'/ru/categories',
        { params: { app_id: constant.APP_ID, app_key: constant.APP_KEY},
            headers: {"content-type": "application/json"}})
    const {results} = category.data;
    createJobElements(results);
}

const createJobElements = (results:Array<TCategory>):void => {
    TREE.job.innerHTML = results.map(elem => TREE.option.replace('{{tag}}', elem.tag)
        .replace('{{label}}', elem.label)).join('');
}

const event = ():void => {
    const country:string = TREE.country.value;
    const jobSelected:Array<HTMLOptionElement> = Array.from(TREE.job.selectedOptions);
    const category:Array<string> = jobSelected.map(elem => elem.value);
    const type:string = TREE.type.value;
    getData(country, category, type);
}

getCategories();
getData('gb',['it-jobs'],'history');

TREE.doFilter.addEventListener('click', event);


