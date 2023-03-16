"use strict";
const canvas = document.getElementById("screen");
if (canvas instanceof HTMLCanvasElement) {
    const ctx = canvas.getContext('2d');
    let size = 50;
    const vel = 20;
    let x = 0;
    let y = 0;
    let directX = 0;
    let directY = 0;
    function renderScreen() {
        if (ctx instanceof CanvasRenderingContext2D && canvas instanceof HTMLCanvasElement) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let j = 0; j < 15; j += 5) {
                ctx.beginPath();
                ctx.fillStyle = `rgba(255, 255, 111, 0.2)`;
                ctx.arc(x + size, y + size, size, 0, 2 * Math.PI);
                ctx.fill();
            }
            x += directX;
            y += directY;
            if (x <= 0 && y <= 0) {
                directX = Math.random() * vel;
                directY = Math.random() * vel;
            }
            if (x <= 0) {
                directX = Math.random() * vel;
            }
            if (x + size * 2 >= canvas.width) {
                directX = -(Math.random() * vel);
                console.log(directX);
            }
            if (y <= 0) {
                directY = Math.random() * vel;
            }
            if (y + size * 2 >= canvas.height) {
                directY = -(Math.random() * vel);
            }
            requestAnimationFrame(renderScreen);
        }
    }
    renderScreen();
}
//# sourceMappingURL=script.js.map