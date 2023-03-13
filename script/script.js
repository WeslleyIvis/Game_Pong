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
        this.x = 100;
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
            if (key == "ArrowUp") {
                this.movent.up = true;
            }
            else if (key == "ArrowDown") {
                this.movent.down = true;
            }
        });
        window.addEventListener('keyup', ({ key }) => {
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
        if (this.movent.up && this.y)
            this.y -= this.vel;
        if (this.movent.down && this.y <= this.screen.height - this.height)
            this.y += this.vel;
        this.write();
    }
}
class Elipse extends Canvas {
    area;
    color;
    x;
    y;
    direcX;
    direcY;
    vel;
    constructor(area = 50, vel = 20, color = "black") {
        super();
        this.area = area;
        this.color = color;
        this.x = this.screen.width / 2 - this.area;
        this.y = this.screen.height / 2 - this.area;
        this.vel = vel;
        this.direcX = Math.floor(Math.random() * this.vel);
        this.direcY = Math.floor(Math.random() * this.vel);
    }
    write() {
        if (this.ctx instanceof CanvasRenderingContext2D) {
            this.ctx.beginPath();
            this.ctx.fillStyle = this.color;
            this.ctx.arc(this.x + this.area, this.y + this.area, this.area, 0, 2 * Math.PI);
            this.ctx.fill();
        }
    }
    move() {
        this.write();
        this.x += this.direcX;
        this.y += this.direcY;
        if (this.x <= 0)
            this.direcX = Math.floor(Math.random() * this.vel);
        if (this.y <= 0)
            this.direcY = Math.floor(Math.random() * this.vel);
        if (this.y + this.area * 2 >= this.screen.height)
            this.direcY = Math.floor(-(Math.random() * this.vel));
        if (this.x + this.area * 2 >= this.screen.width)
            this.direcX = Math.floor(-(Math.random() * this.vel));
    }
}
class AnimationGame {
    play;
    elipse;
    constructor() {
        this.play = new Character(30, 200, "blue", 15);
        this.elipse = new Elipse();
    }
    anima() {
        this.play.handleEvent();
        this.elipse.move();
        this.collision(this.play, this.elipse);
        requestAnimationFrame(this.anima.bind(this));
    }
    collision(play, ball) {
    }
}
const control = new AnimationGame();
control.anima();
//# sourceMappingURL=script.js.map