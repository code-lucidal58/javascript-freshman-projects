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

    const timeElapsed = document.getElementById('time-elapsed');
    const duration = document.getElementById('duration');

    function formatTime(timeInSeconds) {
        const result = new Date(timeInSeconds*1000).toISOString().substring(11,19);
        return {
            minutes: result.substring(3,5),
            seconds: result.substring(6,8),
        };
    }
    function initializeVideo(){
        const videoDuration = Math.round(video.duration);
        const time = formatTime(videoDuration);
        duration.innerText = `${time.minutes}:${time.seconds}`;
        duration.setAttribute('datetime',`${time.minutes}m ${time.seconds}s`);
    }
    video.addEventListener('loadeddata', initializeVideo);

    function updateTimeElapsed() {
        const  time = formatTime(Math.round(video.currentTime));
        timeElapsed.innerText = `${time.minutes}:${time.seconds}`;
        timeElapsed.setAttribute('datetime', `${time.minutes}m ${time.seconds}s`);
    }
    video.addEventListener('timeupdate', updateTimeElapsed);
}

window.onload = afterLoad;


