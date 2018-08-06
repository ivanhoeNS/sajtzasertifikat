

var dd= document.getElementById('prvodugme');
var audioElement= document.getElementById("muzika1");

dd.addEventListener('click', togglePlay);

function togglePlay() {
    if (audioElement.paused) {
        audioElement.play();
    }
    else {
        audioElement.pause();
    }
};