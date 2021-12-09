import axios from "axios";
export class Galery {
    constructor(container) {
        this.URL = 'https://dog.ceo/api/breed/hound/images/random/10'
        this.container = container;
        this.counter = 0;
        this.photos = ['../img/error.gif'];
        this.timer;
        this.controller = this.controller.bind(this);
        this.play = this.play.bind(this);
        this.stop = this.stop.bind(this);
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
        container.addEventListener('click', this.controller);
    }
    async getImages() {
        await axios.get(this.URL)
                   .then(request => this.photos  = request.data.message)
                   .catch(err => console.log(err));
        this.play();
    }
    play() {
        this.render(this.counter);
        (this.counter + 1 >= this.photos.length) ? this.counter = 0 : ++this.counter;
        this.timer = setTimeout(this.play, 4000);
    }
    stop() {
        clearTimeout(this.timer);
    }
    next() {
        (this.counter + 1 >= this.photos.length) ? this.counter = 0 : ++this.counter;
        this.render(this.counter);
    }
    prev() {
        (this.counter <= 0) ? this.counter = this.photos.length - 1 : --this.counter;
        this.render(this.counter);
    }
    controller(event) {
        const button = event.target;
        switch(true) {
            case (button.classList.contains('play')): this.play();
                break;
            case (button.classList.contains('stop')): this.stop();
                break;
            case (button.classList.contains('next')): this.next();
                break;
            case(button.classList.contains('prev')): this.prev();
                break;
            default: this.play();
        }
    }
    render(img) {
        const image = new Image();
        image.onload = () => {
            this.container.style.backgroundImage = `url(${this.photos[img]})`
        }
        image.onerror = () => {
            this.container.style.backgroundImage = "url('../img/error.gif')";
        }
        image.src = this.photos[img];
    }
}