const canvas = document.getElementById("screen");

interface personagem {
    image: HTMLImageElement;
    srcImage: string;
    cutX: number;
    cutY: number;
    widthCut: number;
    heightCut: number;
    WidthSprite: number;
    posX: number;
    posY: number;
    widthImage: number;
    heigthImage: number;
}


if (canvas instanceof HTMLCanvasElement) {
    const ctx = canvas.getContext('2d');
    

    const zelda: personagem = {
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
    }

    function creatPersonagem({image, srcImage, cutX, cutY, widthCut, heightCut, posX, posY, widthImage, heigthImage, ...personagem}: personagem) {
        image.src = srcImage;
        console.log(image.width )
        image.addEventListener('load', () => {
            // Image | XiniRecort | YiniRecort | WidthCut | HeightCut |  posX | posY | WidthImage | HeightImage 
            ctx?.drawImage(image, cutX, cutY, widthCut, heightCut, posX, posY, widthImage, heigthImage);
        })
        
    }

    creatPersonagem(zelda); 
}