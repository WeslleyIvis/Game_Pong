"use strict";
const canvas = document.getElementById("screen");
if (canvas instanceof HTMLCanvasElement) {
    const ctx = canvas.getContext('2d');
    const zelda = {
        image: new Image(),
        srcImage: './link.png',
        cutX: 0,
        cutY: 0,
        widthCut: 120,
        heightCut: 130,
        WidthSprite: 0,
        posX: 0,
        posY: 0,
        widthImage: 150,
        heigthImage: 150,
    };
    function creatPersonagem({ image, srcImage, cutX, cutY, widthCut, heightCut, posX, posY, widthImage, heigthImage, ...personagem }) {
        image.src = srcImage;
        console.log(image.width);
        image.addEventListener('load', () => {
            ctx?.drawImage(image, cutX, cutY, widthCut, heightCut, posX, posY, widthImage, heigthImage);
        });
    }
    creatPersonagem(zelda);
}
//# sourceMappingURL=script.js.map