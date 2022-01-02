export class View {
    taskAddInput;
    taskAddButton;
    tasksList;
    taskTemplate;
    constructor (type: string) {
        this.taskAddInput = <HTMLInputElement> document.querySelector(`${type} .new_task_input`);
        this.taskAddButton = <HTMLButtonElement> document.querySelector(`${type} .new_task_button`);
        this.tasksList = <HTMLElement> document.querySelector(`${type} .tasksList`);
        this.taskTemplate = <string> document.querySelector('#template-task').innerHTML;
    }
    getDraggableElement = (id:string): HTMLElement => {
        return document.getElementById(`${id}`);
    }
    removeTask = (event: MouseEvent):void => {
        const elem = event.target as HTMLButtonElement;
        elem.parentElement.remove();
    }
    addTask = (value:string):void => {
        const element = this.taskTemplate
            .replace('{{task.title}}', value);
        this.tasksList.innerHTML += element;
        this.taskAddInput.value = '';
    }
    getInputValue = ():string => {
        return this.taskAddInput.value;
    }
    onDragOver = (event:DragEvent):void => {
        const elem = event.target as HTMLElement;
        elem.classList.add('drag-over');
    }
    onDragLeave = (event):void => {
        const elem = event.target as HTMLElement;
        elem.classList.remove('drag-over');
    }
}
