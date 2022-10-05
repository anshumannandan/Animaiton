let sun = document.getElementsByClassName('sun')[0];
let clouds = document.getElementsByClassName('clouds');

function changetime() {
    let bgclr = document.getElementsByTagName('body')[0];
    let bgimg = document.getElementsByClassName('background')[0];
    let slider = document.getElementsByClassName('slider')[0];

    if (document.getElementsByClassName('check')[0].checked) {
        sunmoon('sun');
        bgclr.style.backgroundColor = "#c8e7ff";
        bgimg.style.backgroundImage = "url('images/night.jpg')";
        slider.style.backgroundColor = "#222e48";
        clouds[0].src = "images/nc1.png";
        clouds[1].src = "images/nc2.png";
        clouds[2].src = "images/nc3.png";
        clouds[3].src = "images/nc4.png";
    }
    else {
        sunmoon('moon')
        bgclr.style.backgroundColor = "#222e48";
        bgimg.style.backgroundImage = "url('images/day.jpg')";
        slider.style.backgroundColor = "#c8e7ff";
        clouds[0].src = "images/dc1.png";
        clouds[1].src = "images/dc2.png";
        clouds[2].src = "images/dc3.png";
        clouds[3].src = "images/dc4.png";
    }
}
let rot = 0;
function animate() {
    rot += 1
    sun.style.transform = `rotate(${rot}deg)`;
}

function sunmoon(bodyon) {
    // clearInterval(sunrot);
    // sun.style.transform="perspective(1000px) translateZ(-1000px)"
    // transform: perspective(1000px) ;
    // setInterval(animate, 50);
    if (bodyon == 'sun') {
        sun.src = "images/moon.png";
    }
    else {
        sun.src = "images/sun.png"
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
    else if (cm1 === 0) { dr1=false; }
}

let cm2 = 0
let dr2;
function movecloud2() {
    let cl2 = clouds[1];
    if (dr2) { cm2--; }
    else { cm2++; }
    cl2.style.marginLeft = cm2 + "px";
    if (cm2 === 680) { dr2 = true; }
    else if (cm2 === 0) { dr2=false; }
}

let cm3 = 0
let dr3;
function movecloud3() {
    let cl3 = clouds[2];
    if (dr3) { cm3++; }
    else { cm3--; }
    cl3.style.marginLeft = cm3 + "px";
    if (cm3 === -680) { dr3 = true; }
    else if (cm3 === 0) { dr3=false; }
}

let cm4 = 0
let dr4;
function movecloud4() {
    let cl4 = clouds[3];
    if (dr4) { cm4++; }
    else { cm4--; }
    cl4.style.marginLeft = cm4 + "px";
    if (cm4 === -1080) { dr4 = true; }
    else if (cm4 === 0) { dr4=false; }
}

sunrot = setInterval(animate, 50);
setInterval(movecloud1, 50);
setInterval(movecloud2, 30);
setInterval(movecloud3, 60);
setInterval(movecloud4, 40);

