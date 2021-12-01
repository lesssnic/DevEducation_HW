export class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.actionTask = this.actionTask.bind(this);
        this.addTask = this.addTask.bind(this);
        this.view.tasksList.addEventListener('click', this.actionTask);
        this.view.taskAddButton.addEventListener('click', this.addTask);
        this.view.taskAddInput.addEventListener('keyup', this.addTask);
    }
    async addTask(e) {
        if (e.keyCode !== 13 && e.type !== 'click') return ;
        this.view.toggleLoader();
        await this.model.addTask(this.view.getInputValue(e));
        if (this.model.ifSuccess()) this.view.addTask(this.model.answer.data);
        this.view.toggleLoader();
    }
    async actionTask(e) {
        if(e.target.className === 'doneButton') {
            this.view.toggleLoader();
            await this.model.doneTask(this.view.getTaskId(e));
            if (this.model.ifSuccess()) this.view.doneTask(e);
            this.view.toggleLoader();
        }
        if(e.target.className === 'removeButton') {
            this.view.toggleLoader();
            await this.model.removeTask(this.view.getTaskId(e));
            if (this.model.ifSuccess()) this.view.removeTask(e);
            this.view.toggleLoader();
        }
    }
    async loadStorage() {
        this.view.toggleLoader();
        await this.model.getStorage();
        this.view.render(this.model.storage);
        this.view.toggleLoader();
    }
}

