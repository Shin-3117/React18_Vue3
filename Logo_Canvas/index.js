const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = 700

const imageHeight = 112
const imageWidth = 112
const imageList = [
    './img_bank_logo/BNK.png',
    './img_bank_logo/citi.png',
    './img_bank_logo/DGB.png',
    './img_bank_logo/HaNa.svg',
    './img_bank_logo/IBK.svg',
    './img_bank_logo/JB.png',
    './img_bank_logo/KakaoBank.svg',
    './img_bank_logo/KB.svg',
    './img_bank_logo/KBank.svg',
    './img_bank_logo/KBD.png',
    './img_bank_logo/KE.png',
    './img_bank_logo/NH.svg',
    './img_bank_logo/SC.svg',
    './img_bank_logo/SH.jpg',
    './img_bank_logo/SH.png',
    './img_bank_logo/SinHan.svg',
    './img_bank_logo/toss.png',
]

class Logo{
    constructor(imageSrc,x,y, velocity){
        this.img = new Image();
        this.img.src = imageSrc;
        this.x = x
        this.y = y
        this.velocity = velocity
        
    }
    draw(){
        c.beginPath()
        // this.img.onload = function(){
        //     c.drawImage(this.img,this.x,this.y)
        // }
        c.drawImage(this.img, this.x, this.y, 
            imageWidth, imageHeight);
    }
    update(){
        this.draw()
        this.x += this.velocity.x
        this.y += this.velocity.y
    }
}


let logos = []
let frame = 0
const spawnLogo = () =>{
    if(frame%60===0){
        let y = canvas.height
        let x = Math.random() * (canvas.width -imageWidth)
        const velocity = {
            x: 0, y:-1
        }
        imageListIndex = Math.floor(Math.random()*imageList.length) 
        imageSrc = imageList[imageListIndex]
        logos.push(new Logo(imageSrc, x,y,velocity))
    }
}

let animationID
function animate(){
    animationID = requestAnimationFrame(animate)
    c.fillRect(0,0,canvas.width,canvas.height)

    frame +=1
    spawnLogo()
    logos.forEach((logo, index)=>{
        logo.update()
        // 화면을 벗어나면 제외
        if (logo.y + imageHeight < 0){
            setTimeout(() =>{
                logos.splice(index,1)
            }, 0)
        }
    })

    logos.forEach((logo,index)=>{
        logo.update()
    })
}

animate()