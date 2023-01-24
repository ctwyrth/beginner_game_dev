const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

// these set global properties for the drawing area
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;
const spriteWidth = 575;
const spriteHeight = 523;
let frameX = 0;
let frameY = 0;
let gameFrame = 0;
const staggerFrames = 5;

const playerImage = new Image();
playerImage.src = 'shadow_dog.png';

function animate() {
   ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
   // ctx.fillRect(50, 50, 100, 100);
   // ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
   ctx.drawImage(playerImage, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
   if (gameFrame % staggerFrames === 0) {
      if (frameX < 6) frameX++;
      else frameX = 0; 
   }
   requestAnimationFrame(animate);
};

animate();