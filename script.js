function changetime() {
    let bgclr = document.getElementsByTagName('body')[0];
    let bgimg = document.getElementsByClassName('background')[0];
    let slider = document.getElementsByClassName('slider')[0];

    if (document.getElementsByClassName('check')[0].checked) {
        bgclr.style.backgroundColor = "#c8e7ff";
        bgimg.src = "images/night.jpg";
        slider.style.backgroundColor = "#222e48";
    }
    else {
        bgclr.style.backgroundColor = "#222e48";
        bgimg.src = "images/day.jpg"
        slider.style.backgroundColor = "#c8e7ff";
    }
}