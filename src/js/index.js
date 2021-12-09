import "/css/style.css";
import {Galery} from "./app.js";

const container = document.querySelector('.container');

const galery = new Galery(container);
galery.getImages();
