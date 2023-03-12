const canvas = document.getElementById("screen");

interface personagem {
    image: HTMLImageElement;
    srcImage: string;
    sx: number;
    sy: number;
    swidth: number;
    sheight: number;
    sprit: number;
    xSprites: number;
    ySprites: number;
    roadMapSprit: number[][][];
    x: number;
    y: number;
    width: number;
    height: number;
}

if (canvas instanceof HTMLCanvasElement) {
    const ctx = canvas.getContext('2d');
    
    const zelda: personagem = {
        image: new Image(),
        srcImage: './link.png',
        sx: 0,
        sy: 0,
        swidth: 0,
        sheight: 0,
        sprit: 1,
        xSprites: 10,
        ySprites: 8,
        roadMapSprit: [],
        x: 0,
        y: 0,
        width: 150,
        height: 150, 
    }

    function mapSprit({...sprit}: personagem) {
        sprit.image.src = sprit.srcImage;
        sprit.image.addEventListener('load', () => {           
            for(let y = 0; y < sprit.ySprites; y++) {
                sprit.roadMapSprit.push([]);
                for(let x = 0; x < sprit.xSprites; x++) {
                    sprit.roadMapSprit[y][x] = [sprit.image.width / sprit.xSprites * x];
                    sprit.roadMapSprit[y][x].push((sprit.image.height / sprit.ySprites) * y)
                }
            }
        })
        return sprit.roadMapSprit
    }

    mapSprit(zelda);
    let x = 0;
    
    
    function creatPersonagem({srcImage, sx, sy, swidth, sheight, x, y, width, height, ...personagem}: personagem) {
        personagem.image.src = srcImage;     
        personagem.image.addEventListener('load', () => {           
            swidth = personagem.image.width / personagem.xSprites;
            sheight = personagem.image.height / personagem.ySprites;      
            personagem.sprit = sheight * 0;

            // Image | XiniRecort | YiniRecort | swidth | sheight |  x | y | width | HeightImage 
            ctx?.drawImage(personagem.image, personagem.roadMapSprit[4][0][0], personagem.roadMapSprit[4][0][1], swidth, sheight, x, y, width, height);
        })  


    }
    creatPersonagem(zelda); 
    
    
  
}