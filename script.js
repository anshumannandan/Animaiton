let sun = document.getElementsByClassName('sun')[0];
let clouds = document.getElementsByClassName('clouds');
let bgimg = document.getElementsByClassName('background')[0];

function changetime() {
    let bgclr = document.getElementsByTagName('body')[0];
    let slider = document.getElementsByClassName('slider')[0];

    if (document.getElementsByClassName('check')[0].checked) {
        revolve('sun')
        bgclr.style.backgroundColor = "#c8e7ff";
        bgimg.style.backgroundImage = "url('images/night.jpg')";
        slider.style.backgroundColor = "#222e48";
        clouds[0].src = "images/nc1.png";
        clouds[1].src = "images/nc2.png";
        clouds[2].src = "images/nc3.png";
        clouds[3].src = "images/nc4.png";
    }
    else {
        revolve('moon')
        bgclr.style.backgroundColor = "#222e48";
        bgimg.style.backgroundImage = "url('images/day.jpg')";
        slider.style.backgroundColor = "#c8e7ff";
        clouds[0].src = "images/dc1.png";
        clouds[1].src = "images/dc2.png";
        clouds[2].src = "images/dc3.png";
        clouds[3].src = "images/dc4.png";
    }
}
revolve('moon')
setInterval(animate, 50);
let rot = 0;
function animate() {
    rot += 1
    sun.style.transform = `rotate(${rot}deg)`;
    moon.style.transform = `rotate(${rot}deg)`;
}
let x = 0;
let wx = 900;
let y = 0;
let wy = 500;
let change = 0;
function revolve(body) {
    clr = setInterval(revolvebody, 10);
    function revolvebody() {
        change += 0.01;
        x = 700 + Math.cos(change) * wx;
        y = 600 + Math.sin(change) * wy;
        sun.style.left = x + "px";
        sun.style.top = y + "px";
        console.log(x, y)
        if (490 < x && x < 500 && 110 < y && y < 120) {
            x+=10
            y+=10
            clearInterval(clr)
        }
        if (1550 < x && x < 1560 && 440 < y && y < 450){
            if (body == 'moon') {
                sun.src = "images/sun.png"
            }
            else {
                sun.src = "images/moon.png"
            }
        }
    }

}


let cm1 = 0;
let dr1;
function movecloud1() {
    let cl1 = clouds[0];
    if (dr1) { cm1--; }
    else { cm1++; }
    cl1.style.marginLeft = cm1 + "px";
    if (cm1 === 980) { dr1 = true; }
    else if (cm1 === 0) { dr1 = false; }
}

let cm2 = 0
let dr2;
function movecloud2() {
    let cl2 = clouds[1];
    if (dr2) { cm2--; }
    else { cm2++; }
    cl2.style.marginLeft = cm2 + "px";
    if (cm2 === 680) { dr2 = true; }
    else if (cm2 === 0) { dr2 = false; }
}

let cm3 = 0
let dr3;
function movecloud3() {
    let cl3 = clouds[2];
    if (dr3) { cm3++; }
    else { cm3--; }
    cl3.style.marginLeft = cm3 + "px";
    if (cm3 === -680) { dr3 = true; }
    else if (cm3 === 0) { dr3 = false; }
}

let cm4 = 0
let dr4;
function movecloud4() {
    let cl4 = clouds[3];
    if (dr4) { cm4++; }
    else { cm4--; }
    cl4.style.marginLeft = cm4 + "px";
    if (cm4 === -1080) { dr4 = true; }
    else if (cm4 === 0) { dr4 = false; }
}

setInterval(movecloud1, 50);
setInterval(movecloud2, 30);
setInterval(movecloud3, 60);
setInterval(movecloud4, 40);
