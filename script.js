let currentAudio = null;

function playSound(src) {
    // If a sound is already playing, stop it
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    // Create and play new audio
    currentAudio = new Audio(src);
    currentAudio.play();
}

document.getElementById("Sound1").addEventListener("click", function() {
    playSound("audio/1.mp3");
});

document.getElementById("Sound2").addEventListener("click", function() {
    playSound("audio/2.mp3");
});

document.getElementById("Sound3").addEventListener("click", function() {
    playSound("audio/3.mp3");
});
