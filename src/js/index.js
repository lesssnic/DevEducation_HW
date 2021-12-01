import "/css/style.css"
import axios from "axios";
import {Model} from "./model.js";
import {View} from "./view.js";
import {Controller} from "./controller";

const view = new View ();
const model = new Model('https://jsonplaceholder.typicode.com');
const controller = new Controller(model, view);
controller.loadStorage();
