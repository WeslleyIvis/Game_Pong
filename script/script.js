"use strict";
const canvas = document.getElementById("screen");
class Canvas {
    screen;
    ctx;
    constructor(screen = "screen") {
        this.screen = document.getElementById("screen");
        if (this.screen instanceof HTMLCanvasElement) {
            this.ctx = this.screen.getContext('2d');
        }
    }
}
const canva = new Canvas("screen");
class Character extends Canvas {
    width;
    height;
    color;
    x;
    y;
    vel;
    movent;
    constructor(width = 20, height = 20, color = '#CCC', vel = 2) {
        super();
        this.width = width;
        this.height = height;
        this.color = color;
        this.x = 0;
        this.y = 0;
        this.vel = vel;
        this.movent = {
            left: false,
            right: false,
            up: false,
            down: false,
        };
        const a = true;
    }
    handleEvent() {
        this.write();
        window.addEventListener('keydown', ({ key }) => {
            console.log(key);
            if (key == "ArrowRight") {
                this.movent.right = true;
            }
            else if (key == "ArrowLeft") {
                this.movent.left = true;
            }
            if (key == "ArrowUp") {
                this.movent.up = true;
            }
            else if (key == "ArrowDown") {
                this.movent.down = true;
            }
        });
        window.addEventListener('keyup', ({ key }) => {
            if (key == "ArrowRight") {
                this.movent.right = false;
            }
            else if (key == "ArrowLeft") {
                this.movent.left = false;
            }
            if (key == "ArrowUp") {
                this.movent.up = false;
            }
            else if (key == "ArrowDown") {
                this.movent.down = false;
            }
        });
        this.reenderUser();
    }
    write() {
        if (this.screen instanceof HTMLCanvasElement) {
            this.ctx?.clearRect(0, 0, this.screen.width, this.screen.height);
            this.ctx?.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    reenderUser() {
        if (this.movent.up)
            this.y -= this.vel;
        if (this.movent.down)
            this.y += this.vel;
        if (this.movent.left)
            this.x -= this.vel;
        if (this.movent.right)
            this.x += this.vel;
        requestAnimationFrame(this.reenderUser.bind(this));
        this.write();
    }
}
const play = new Character(30, 100, "green", 15);
play.handleEvent();
//# sourceMappingURL=script.js.map