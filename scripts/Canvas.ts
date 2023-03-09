export default class Canvas {
    canvas
    ctx
    animation
    constructor(screen: string) {
        this.canvas = document.getElementById(screen) ;        
        this.ctx = (this.canvas as HTMLCanvasElement).getContext('2d');
        this.animation = 0;
        if (this.ctx) this.renderScreen(this.ctx);
    }

    renderScreen(context2D: CanvasRenderingContext2D ) {
        let anima ;
        let x: number = 0;
        let y: number = 0;
        let toggle: boolean = false

        context2D.fillStyle = "#CCC";
        context2D.fillRect(x, y, 100, 100);

        if (x > 400 && y > 400) {
            toggle = !toggle;
        } else if (x < 0 && y < 0) toggle = !toggle;
    
        if (toggle) {
            x--
            y--
        } else {
            x++
            y++
        }
    }

 }