import '../css/style.css'
import "core-js/stable";
import "regenerator-runtime/runtime";
const axios = require('axios');

import {View} from "./view";
import {Controller} from "./controller";

const viewTodo = new View ('.todo');
const viewProgress = new View ('.in-progress');
const viewDone = new View ('.done');
const controllerTodo = new Controller(viewTodo);
const controllerProgress = new Controller(viewProgress);
const controllerDone = new Controller(viewDone);


