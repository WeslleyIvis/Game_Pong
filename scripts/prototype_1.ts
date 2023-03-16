
const tela = document.getElementById('screen');

interface Game {
    [id: string] : {x: number, y: number};
 }
 
 let game: Game = {
     user1: {x: 0, y: 0},
 }
 
 
 if (tela instanceof HTMLCanvasElement) {
     const context = tela?.getContext('2d');
 
     let x: number = 0;
     let y: number = 0;
     let countX: number = 0;
     let countY: number = 0;
     let tx= 100;
     let ty = 100;
     let anima;
     let toggle: boolean = false;
     function renderScreen() {
         if (context instanceof CanvasRenderingContext2D) { 
             context.clearRect(0,0, context.canvas.width, context.canvas.height);
 
             context.fillStyle = "lightblue";
             context.fillRect(x, y, tx, ty);
            
             context.lineWidth = 3;
             context.strokeStyle = "green";
             context.strokeRect(x, y, tx, ty);
            
            x += countX;
            y += countY;

            if (x <= 0 && y <= 0) {
                countX = 1;
                countY = 0;
            }
            
            if (x + tx + 3 >= context.canvas.width && y <= 0) {
                countX = 0;
                countY = 1;
            }

            if (y + ty + 3 > context.canvas.height) {
                countX = -1;
                countY = 0;
            }

            if (y + ty + 3 >= context.canvas.height && x == 0) {
                countX = 0;
                countY = -1;
            }


            
                 
             anima = requestAnimationFrame(renderScreen); 
         }
     }
     renderScreen();
 
 }
 
 

