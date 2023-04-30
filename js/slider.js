var video1 = document.getElementById('video1');
var video2 = document.getElementById('video2');
var video3 = document.getElementById('video3');
var video4 = document.getElementById('video4');
var video5 = document.getElementById('video5');

video1.onended = function (){
    video2.play();
    video1.style.opacity = 0;
    video2.style.opacity = 1;
}

video2.onended = function () {
    video3.play();
    video2.style.opacity = 0;
    video3.style.opacity = 1;
}

video3.onended = function () {
    video4.play();
    video3.style.opacity = 0;
    video4.style.opacity = 1;
}

video4.onended = function () {
    video5.play();
    video4.style.opacity = 0;
    video5.style.opacity = 1;
}

video5.onended = function () {
    video2.play();
    video5.style.opacity = 0;
    video2.style.opacity = 1;
}



