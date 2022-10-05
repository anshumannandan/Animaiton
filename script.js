let sun = document.getElementsByClassName('sun')[0];

function changetime() {
    let bgclr = document.getElementsByTagName('body')[0];
    let bgimg = document.getElementsByClassName('background')[0];
    let slider = document.getElementsByClassName('slider')[0];

    if (document.getElementsByClassName('check')[0].checked) {
        bgclr.style.backgroundColor = "#c8e7ff";
        bgimg.src = "images/night.jpg";
        slider.style.backgroundColor = "#222e48";
        sun.src = "images/moon.png";
    }
    else {
        bgclr.style.backgroundColor = "#222e48";
        bgimg.src = "images/day.jpg"
        slider.style.backgroundColor = "#c8e7ff";
        sun.src = "images/sun.png"
    }
}
var rot = 0;
setInterval(animate, 50);
function animate() {
    rot += 1
    sun.style.transform = `rotate(${rot}deg)`;
    console.log('rotated')
}
