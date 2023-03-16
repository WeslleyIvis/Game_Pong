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
    control;
    movent;
    constructor(x, y, width = 20, height = 20, color = '#CCC', vel = 2, control = ["ArrowUp", "ArrowDown"]) {
        super();
        this.width = width;
        this.height = height;
        this.color = color;
        this.x = this.screen.width * x / 100;
        this.y = y;
        this.vel = vel;
        this.movent = {
            left: false,
            right: false,
            up: false,
            down: false,
        };
        this.control = {
            up: control[0],
            down: control[1]
        };
    }
    handleEvent() {
        this.write();
        window.addEventListener('keydown', ({ key }) => {
            if (key == this.control.up) {
                this.movent.up = true;
            }
            else if (key == this.control.down) {
                this.movent.down = true;
            }
        });
        window.addEventListener('keyup', ({ key }) => {
            if (key == this.control.up) {
                this.movent.up = false;
            }
            else if (key == this.control.down) {
                this.movent.down = false;
            }
        });
        this.reenderUser();
    }
    write() {
        this.ctx?.fillRect(this.x, this.y, this.width, this.height);
    }
    reenderUser() {
        if (this.movent.up && this.y >= 0)
            this.y -= this.vel;
        if (this.movent.down && this.y <= this.screen.height - this.height)
            this.y += this.vel;
        this.write();
    }
    robotIA(direct) {
        this.y = direct;
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
    time;
    incVel;
    aux;
    constructor(area = 50, vel = 20, color = "black", intervalIncrease = false, increaseVel = 5, time = 5000) {
        super();
        this.area = area;
        this.color = color;
        this.x = this.screen.width / 2 - this.area;
        this.y = this.screen.height / 2 - this.area;
        this.vel = vel;
        this.time = time;
        this.incVel = increaseVel;
        this.direcX = Math.floor(Math.random() * this.vel);
        this.direcY = Math.floor(Math.random() * this.vel);
        this.aux = intervalIncrease;
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
        if (this.aux) {
            this.increaseVel();
        }
        this.x += this.direcX;
        this.y += this.direcY;
        if (this.x <= 0) {
            this.direcX = Math.floor((Math.random() * this.vel) + this.vel / 2);
        }
        if (this.y <= 0) {
            this.direcY = Math.floor((Math.random() * this.vel) + this.vel / 2);
        }
        if (this.y + this.area * 2 >= this.screen.height) {
            this.direcY = Math.floor(-((Math.random() * this.vel) + this.vel / 2));
        }
        if (this.x + this.area * 2 >= this.screen.width) {
            this.direcX = Math.floor(-((Math.random() * this.vel) + this.vel / 2));
        }
    }
    increaseVel() {
        const increase = setInterval(() => {
            this.vel += this.incVel;
        }, this.time);
        this.aux = false;
    }
}
class ControllerGame {
    play;
    robot;
    elipse;
    constructor() {
        this.play = new Character(10, 350, 30, 200, "blue", 15);
        this.elipse = new Elipse(30, 15, undefined, false);
        this.robot = new Character(90, 350, 30, 200, "blue", 15);
    }
    reenderScreen() {
        this.play.ctx?.clearRect(0, 0, this.play.screen.width, this.play.screen.height);
        this.play.handleEvent();
        this.robot.robotIA(this.elipse.y - this.elipse.area);
        this.elipse.move();
        this.collision(this.play, this.elipse);
        this.collision(this.robot, this.elipse, true);
        requestAnimationFrame(this.reenderScreen.bind(this));
    }
    collision(play, enemy, campRight = false) {
        if (campRight) {
            if (play.x < enemy.x + enemy.area * 2 && play.width + play.x > enemy.x && play.y < enemy.y && play.y + play.height > enemy.y) {
                enemy.direcX *= -1;
            }
        }
        else {
            if (play.x < enemy.x && play.width + play.x > enemy.x && play.y < enemy.y + enemy.area && play.y + play.height > enemy.y) {
                enemy.direcX = -enemy.direcX;
            }
        }
    }
}
const control = new ControllerGame();
control.reenderScreen();
//# sourceMappingURL=script.js.map