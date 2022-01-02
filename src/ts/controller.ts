export class Controller {
    view;
    constructor(view) {
        this.view = view;
        this.view.tasksList.addEventListener('click', this.removeTask);
        this.view.tasksList.addEventListener('dragstart', this.onDragStart);
        this.view.tasksList.addEventListener('dragover', this.onDragOver);
        this.view.tasksList.addEventListener('dragleave', this.onDragLeave);
        this.view.tasksList.addEventListener('drop', this.onDrop);
        this.view.taskAddButton.addEventListener('click', this.addTask);
        this.view.taskAddInput.addEventListener('keyup', this.addTask);
    }
    onDragStart = (event: DragEvent):void => {
        const elem = event.target as HTMLElement;
        elem.id = 'drag';
        event.dataTransfer.setData('text/plain', elem.id);
    }
    onDragOver = (event: DragEvent):void => {
        event.preventDefault();
        this.view.onDragOver(event);
    }
    onDragLeave = (event: DragEvent):void => {
        this.view.onDragLeave(event);
    }
    onDrop = (event: DragEvent):void => {
        const id = event.dataTransfer.getData('text/plain');
        const draggableElement = this.view.getDraggableElement(id);
        const dropzone = event.target as HTMLElement;
        dropzone.appendChild(draggableElement as HTMLElement);
        event.dataTransfer.clearData();
        draggableElement.id = '';
        this.view.onDragLeave(event.target);

    }
    addTask = (event: KeyboardEvent ):void => {
        const data = this.view.getInputValue();
        if (event.keyCode !== 13 && event.type !== 'click') return ;
        if (!data) return ;
        this.view.addTask(data);
    }
    removeTask = (event: MouseEvent):void => {
        const elem  = event.target as HTMLButtonElement;
        if(elem.className === 'removeButton') {
            this.view.removeTask(event);
        }
    }
}

