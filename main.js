let canvas = document.createElement('canvas');
document.body.appendChild(canvas); // adds the canvas to the body element
ctx = canvas.getContext('2d');
canvas.width = 900;
canvas.height = 600;
img_1 = new Image();
img_2 = new Image();
img_3 = new Image();
img_4 = new Image();
img_1.crossOrigin = "anonymous";
img_2.crossOrigin = "anonymous";
img_3.crossOrigin = "anonymous";
img_4.crossOrigin = "anonymous";
img_1.src = 'https://source.unsplash.com/collection/827807/';
img_2.src = 'https://source.unsplash.com/collection/1120118/';
img_3.src = 'https://source.unsplash.com/collection/2411320/';
img_4.src = 'https://source.unsplash.com/collection/1665483/';

function drawImages() {
    img_1.onload = function () {
        ctx.drawImage(img_1, 0, 0, 450, 300);
    };

    img_2.onload = function () {
        ctx.drawImage(img_2, 450, 0, 450, 300)
    };
    img_3.onload = function () {
        ctx.drawImage(img_3, 450, 300, 450, 300)
    };
    img_4.onload = function () {
        ctx.drawImage(img_4, 0, 300, 450, 300)
    }

}

drawImages();
xhr = new XMLHttpRequest();
xhr.open("GET", "https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&lang=ru&format=text", true);
xhr.onreadystatechange = function () {
    if (xhr.status === 200) {
        let resp = xhr.responseText;
        console.log(resp);
        ctx.font = 'Bold 14px Arial';
        ctx.fillStyle = "rgba(0,0,0,0.3)";
        ctx.fillRect(0, 0, 900, 600);
        ctx.fillStyle = "white";
        ctx.TextAlight = "center";
        let words = xhr.responseText.split(" ");
        let countword = words.length;
        let maxWigth = 400;
        let marginLeft = 8;
        let marginTop = 90;
        let lineHeight = 20;
        let line = "";
        for (let n = 0; n < countword; n++) {
            let testLine = line + words[n] + " ";
            let testWidth = ctx.measureText(testLine).width;
            if (testWidth > maxWigth) {
                ctx.fillText(line, marginLeft, marginTop);
                line = words[n] + " ";
                marginTop += lineHeight;

            } else {
                line = testLine;
            }
        }
        ctx.fillText(line, marginLeft, marginTop)
    }
};
xhr.send();

let link = document.createElement('a');
link.innerHTML = 'download image';
link.addEventListener('click', function () {
    link.href = canvas.toDataURL();
    link.download = "mypainting.png";
}, false);
document.body.appendChild(link);



