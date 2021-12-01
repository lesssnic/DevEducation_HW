import axios from "axios";

export class Model {
    constructor (storageURL) {
        this.storageURL = storageURL;
        this.storage = [];
        this.answer = {};
    }
    addTask(value) {
        return axios.post(`${this.storageURL}/posts`, {title: value})
                            .then(request => this.answer = request)
                            .catch(err => console.log(err));
    }
    doneTask(id) {
        return axios.put(`${this.storageURL}/posts/${id}`, {id: id})
                            .then(request => this.answer = request)
                            .catch(err => console.log(err));
    }
    removeTask(id) {
        return axios.delete(`${this.storageURL}/posts/${id}`, {id: id})
                            .then(request => this.answer = request)
                            .catch(err => console.log(err));
    }
    async getStorage() {
        this.storage = await axios(`${this.storageURL}/todos?_limit=10`)
                            .then(data => data = data.data)
                            .catch(err=> console.log(err));
        return this.storage;
    }
    ifSuccess() {
        return (this.answer.status < 400);
    }
}
