const canvas = document.getElementById("screen");


if (canvas instanceof  HTMLCanvasElement) {
    const ctx = canvas?.getContext('2d');
    let cir = 0;

        function writeCanvas() {        
            if(ctx instanceof CanvasRenderingContext2D && canvas instanceof HTMLCanvasElement) {
                for(let x = 0 ; x < 1; x++) {
                    ctx?.beginPath();
                    ctx.fillStyle = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.5)`;
                    ctx.arc(Math.random() * canvas.width , Math.random() * canvas.height, Math.random() * 100, (Math.PI/180)* 0, (Math.PI/180) * 360, true);
                    ctx.fill();        
                }    
                
                ctx?.beginPath();
                ctx.fillStyle = `rgba(111, 111, 111, 0.8)`;
                ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width /3, 0, (Math.PI/180)* cir);
                ctx.fill()

                if (cir > 360) cir = 0;
                cir++
                requestAnimationFrame(writeCanvas);
            }
        }

    writeCanvas()

}