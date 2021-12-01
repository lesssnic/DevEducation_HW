export class View {
    constructor () {
        this.taskAddInput = document.querySelector('#new_task_input');
        this.taskAddButton = document.querySelector('#new_task_button');
        this.tasksList = document.querySelector('#tasksList');
        this.loader = document.querySelector('.lds-dual-ring');
        this.taskTemplate = document.querySelector('#template-task').innerHTML;
    }
    render(storage) {
        this.tasksList.innerHTML = storage.reduce((acc, task) => {
            acc.push(this.taskTemplate
                .replace('{{task.completed}}', (task.completed) ? 'done' : 'do')
                .replace('{{task.id}}', task.id)
                .replace('{{task.title}}', task.title));
                return acc},[])
                .join(' ');
    }
    doneTask(e) {
            e.target.parentElement.classList.toggle('done');
    }
    removeTask(e) {
            e.target.parentElement.remove();
    }
    addTask(data) {
        const element = this.taskTemplate
                            .replace('{{task.completed}}', 'do')
                            .replace('{{task.id}}', data.id)
                            .replace('{{task.title}}', data.title);
        this.tasksList.innerHTML += element;
        this.taskAddInput.value = '';
    }
    getId(){
        return (Number(this.tasksList.lastChild.id) + 1);
    }
    getInputValue(e) {
        return e.target.parentElement.firstChild.value;
    }
    getTaskId(e) {
        return e.target.parentElement.attributes.taskId.value;
    }
    toggleLoader() {
        this.loader.classList.toggle('loader');
    }
}