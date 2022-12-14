let sun = document.getElementsByClassName('sun')[0];
let clouds = document.getElementsByClassName('clouds');
let bgimg = document.getElementsByClassName('background')[0];

function changetime() {
    let bgclr = document.getElementsByTagName('body')[0];
    let slider = document.getElementsByClassName('slider')[0];

    if (document.getElementsByClassName('check')[0].checked) {
        revolve('sun', 'n');
        bgclr.style.backgroundColor = "#c8e7ff";
        bgimg.style.backgroundImage = "url('images/night.jpg')";
        slider.style.backgroundColor = "#222e48";
        clouds[0].style.backgroundImage = "url('images/nc1.png')";
        clouds[1].style.backgroundImage = "url('images/nc2.png')";
        clouds[2].style.backgroundImage = "url('images/nc3.png')";
        clouds[3].style.backgroundImage = "url('images/nc4.png')";
    }
    else {
        revolve('moon', 'n');
        bgclr.style.backgroundColor = "#222e48";
        bgimg.style.backgroundImage = "url('images/day.jpg')";
        slider.style.backgroundColor = "#c8e7ff";
        clouds[0].style.backgroundImage = "url('images/dc1.png')";
        clouds[1].style.backgroundImage = "url('images/dc2.png')";
        clouds[2].style.backgroundImage = "url('images/dc3.png')";
        clouds[3].style.backgroundImage = "url('images/dc4.png')";
    }
}
revolve('moon', 'f');
setInterval(animate, 50);
let rot = 0;
function animate() {
    rot += 1;
    sun.style.transform = `rotate(${rot}deg)`;
}
let x = 0;
let wx = 900;
let y = 0;
let wy = 500;
let change = 0;
function revolve(body, s) {
    if (s == 'n') {
        clr = setInterval(revolvebody, 10);
    }
    else {
        clr = setInterval(revolvebody, 1);
    }
    function revolvebody() {
        change += 0.01;
        x = 700 + Math.cos(change) * wx;
        y = 600 + Math.sin(change) * wy;
        sun.style.left = x + "px";
        sun.style.top = y + "px";
        if (490 < x && x < 499 && 110 < y && y < 120) {
            clearInterval(clr);
        }
        else if (1550 < x && x < 1560 && 440 < y && y < 450) {
            if (body == 'moon') {
                sun.src = "images/sun.png";
            }
            else {
                sun.src = "images/moon.png";
            }
            clearInterval(clr);
            revolve(body, 'f');
        }
        else if (-190 < x && x < -187 && 510 < y && y < 520) {
            clearInterval(clr);
            revolve(body, 'n');
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

let cm2 = 0;
let dr2;
function movecloud2() {
    let cl2 = clouds[1];
    if (dr2) { cm2--; }
    else { cm2++; }
    cl2.style.marginLeft = cm2 + "px";
    if (cm2 === 680) { dr2 = true; }
    else if (cm2 === 0) { dr2 = false; }
}

let cm3 = 0;
let dr3;
function movecloud3() {
    let cl3 = clouds[2];
    if (dr3) { cm3++; }
    else { cm3--; }
    cl3.style.marginLeft = cm3 + "px";
    if (cm3 === -680) { dr3 = true; }
    else if (cm3 === 0) { dr3 = false; }
}

let cm4 = 0;
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

let ca1=-250;
function movecar1(){
    let car1=document.getElementsByClassName('car1')[0];
    ca1++;
    car1.style.marginLeft = ca1 + "px";
    if (ca1==1750){
        ca1=-250;
    }
}
let ca2=1550;
function movecar2(){
    let car2=document.getElementsByClassName('car2')[0];
    ca2--;
    car2.style.left = ca2 + "px";
    if (ca2==-250){
        ca2=1550;
    }
}

setInterval(movecar1, 10);
setInterval(movecar2, 9);

let ap=-250;
function mapl(){
    let apn=document.getElementsByClassName('aeroplane')[0];
    ap++;
    apn.style.marginLeft = ap + "px";
    if (ap==1750){
        ap=-250;
    }
}

setInterval(mapl, 15);
