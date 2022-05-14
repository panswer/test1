const play_list = ['Videos/hero-video.mp4', 'Videos/review-1.mp4'];

const video = document.getElementById('video');

document
    .getElementById('is_run')
    .addEventListener('change', e => {
        const run = e.target.checked;

        if (run) {
            video.play();
        } else {
            video.pause();
        }
    });

video.addEventListener('ended', e => {
    const currentVideo = video.currentSrc;
    const currentIndex = play_list.findIndex(name => new RegExp(name, 'ig').test(currentVideo));

    const next = (currentIndex + 1) < play_list.length ? currentIndex + 1 : 0;
    video.src = play_list[next];
    video.load();
    video.play();
});