let canvas = document.createElement('canvas');
document.body.appendChild(canvas); // adds the canvas to the body element
ctx = canvas.getContext('2d');

canvas.width = 600;
canvas.height = 800;
img_1 = new Image();
img_2 = new Image();
img_3 = new Image();
img_4 = new Image();
img_1.crossOrigin = "anonymous";
img_2.crossOrigin = "anonymous";
img_3.crossOrigin = "anonymous";
img_4.crossOrigin = "anonymous";

function drawImages() {
    img_1.onload = function () {
        ctx.drawImage(img_1, 0, 0, 300, 200);
    };
    img_2.onload = function () {
        ctx.drawImage(img_2, 0, 300, 300, 200)
    }
    img_3.onload = function () {
        ctx.drawImage(img_3, 0, 400, 300, 200)
    }
    img_4.onload = function () {
        ctx.drawImage(img_4, 300, 400, 300, 320)
    }

}

img_1.src = 'https://source.unsplash.com/collection/1127163/';
img_2.src = 'https://source.unsplash.com/collection/1127163/';
img_3.src = 'https://source.unsplash.com/collection/1127163/';
img_4.src = 'https://source.unsplash.com/collection/1127163/';
drawImages();