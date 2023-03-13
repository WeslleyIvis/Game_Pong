const canvas = document.getElementById("screen");

class Canvas {
    screen ;
    ctx;
    constructor(screen: string = "screen") {
        this.screen = document.getElementById("screen");
        if(this.screen instanceof HTMLCanvasElement){
            this.ctx = this.screen.getContext('2d');
        }
    }
}
class Character extends Canvas {
    width: number;
    height: number;
    color: string;
    x: number;
    y: number;
    vel: number;
    movent: {
        left: boolean;
        right: boolean;
        up: boolean;
        down: boolean;
    };
    constructor(width:number = 20, height:number = 20, color:string = '#CCC', vel: number = 2) {
        super()
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
        }
        const a = true;
    }

    handleEvent() {
        this.write();
        window.addEventListener('keydown', ({key}) => {
            // if(key == "ArrowRight") {
            //     this.movent.right = true;
            // } else if(key == "ArrowLeft") {
            //     this.movent.left = true;
            // } 
            if(key == "ArrowUp") {
                this.movent.up = true;
            } else if(key == "ArrowDown") {
                this.movent.down = true;
            }
        })

        window.addEventListener('keyup', ({key}) => {
            // if(key == "ArrowRight") {
            //     this.movent.right = false;
            // } else if(key == "ArrowLeft") {
            //     this.movent.left = false;
            // } 

            if(key == "ArrowUp") {
                this.movent.up = false;
            } else if(key == "ArrowDown") {
                this.movent.down = false;
            }
        })    
        this.reenderUser();
    }

    write() {
        if(this.screen instanceof HTMLCanvasElement) {
            this.ctx?.clearRect(0, 0, this.screen.width, this.screen.height);
            this.ctx?.fillRect(this.x, this.y, this.width, this.height);
        }
    }

    reenderUser() {
        if(this.movent.up && this.y) this.y -= this.vel;
        if(this.movent.down && this.y <= (this.screen as HTMLCanvasElement).height - this.height) this.y += this.vel;
       // if(this.movent.left && this.x) this.x -= this.vel;
       // if(this.movent.right && this.x <= (this.screen as HTMLCanvasElement).width ) this.x += this.vel;

        this.write();
    }
}

class Elipse extends Canvas {
    area: number;
    color: string;
    x: number;
    y: number;
    direcX: number;
    direcY: number;
    vel: number;
    constructor(area: number = 50, vel: number = 20, color: string = "black") {
        super()
        this.area = area;
        this.color = color;
        this.x =(this.screen as HTMLCanvasElement).width / 2 - this.area
        this.y = (this.screen as HTMLCanvasElement).height / 2 - this.area;
        this.vel = vel;
        this.direcX = Math.floor(Math.random() * this.vel);
        this.direcY = Math.floor(Math.random() * this.vel);
    }

    write() {
        if (this.ctx instanceof CanvasRenderingContext2D) {
            this.ctx.beginPath();
            this.ctx.fillStyle = this.color;
            this.ctx.arc(this.x + this.area, this.y + this.area, this.area, 0, 2* Math.PI )
            this.ctx.fill();
        }
    }

    move() {
        this.write();
        this.x += this.direcX;
        this.y += this.direcY;

        if(this.x <= 0) this.direcX = Math.floor(Math.random() * this.vel)
        if(this.y <= 0) this.direcY = Math.floor(Math.random() * this.vel)
        if(this.y + this.area * 2 >= (this.screen as HTMLCanvasElement).height) this.direcY = Math.floor(-(Math.random() * this.vel));
        if(this.x + this.area * 2 >= (this.screen as HTMLCanvasElement).width) this.direcX = Math.floor(-(Math.random() * this.vel));
    }
}
class AnimationGame {
    play;
    elipse;
    constructor() {
        this.play = new Character(30, 200, "blue", 15)
        this.elipse = new Elipse();
    }   

    anima() {
        this.play.handleEvent();
        this.elipse.move();
        this.collision(this.play, this.elipse);

        requestAnimationFrame(this.anima.bind(this));        
    }

    collision(play: Character, ball: Elipse) {
        
    }
}

const control = new AnimationGame();
control.anima();