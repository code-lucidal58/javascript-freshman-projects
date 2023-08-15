function afterLoad() {
    const video = document.getElementById('video');
    const videoControls = document.getElementById('video-controls');
    const videoWorks = !!document.createElement('video').canPlayType;
    if (videoWorks) {
        video.controls = false;
        videoControls.classList.remove('hidden');
    }

    const playButton = document.getElementById('play');
    function togglePlay(){
        if (video.paused || video.ended) {
            video.play();
        } else {
            video.pause();
        }
    }
    playButton.addEventListener('click', togglePlay);

    const playbackIcons = document.querySelectorAll('.playback-icons use');
    function updatePlayButton(){
        playbackIcons.forEach(icon => icon.classList.toggle('hidden'));
        if (video.paused) {
            playButton.setAttribute('data-title', 'Play (k)');
        } else {
            playButton.setAttribute('data-title', 'Pause (k)');
        }
    }
    video.addEventListener('play', updatePlayButton);
    video.addEventListener('pause', updatePlayButton);

}

window.onload = afterLoad;


