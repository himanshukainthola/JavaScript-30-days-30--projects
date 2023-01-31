/* Get our element*/
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressbar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButton = player.querySelector('[data-skip]');
const ranges = player.querySelector('player__slider');
/* Build our funtion*/

function togglePlay( ) {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}

function updateButton() {
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
}

function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
    video[this.name] = this.value;
}


/* add enent listener*/
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton); 
video.addEventListener('pause', updateButton); 

toggle.addEventListener('click', togglePlay);
skipButton.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));