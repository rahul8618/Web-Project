const popup = document.getElementById('video-popup');
const popupVideo = document.getElementById('popup-video');
const closeBtn = document.querySelector('.close-btn');

// Hover play functionality
document.querySelectorAll('.hover-video').forEach(video => {
    // Play video on hover
    video.addEventListener('mouseover', () => {
        video.play();
    });

    // Pause and reset video, reload to show poster on hover out
    video.addEventListener('mouseout', () => {
        video.pause();
        video.currentTime = 0; // Reset the video
        video.load(); // Reload the video to display the poster
    });

    // Click to open popup
    video.addEventListener('click', () => {
        const videoSrc = video.querySelector('source').src;
        popupVideo.querySelector('source').src = videoSrc;
        popupVideo.load();
        popupVideo.play();
        popup.style.display = 'flex';
    });
});

// Close popup functionality
closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
    popupVideo.pause();
    popupVideo.currentTime = 0; // Reset the video
});

// Close the popup if the user clicks outside the content
popup.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.style.display = 'none';
        popupVideo.pause();
        popupVideo.currentTime = 0; // Reset the video
    }
});
// Hero section video mute/unmute functionality
const heroSection = document.querySelector('.hero');
const heroVideo = document.querySelector('.background-video');
let isMuted = true;

// Add click event listener to toggle mute/unmute
heroSection.addEventListener('click', () => {
    isMuted = !isMuted;
    heroVideo.muted = isMuted;

    if (isMuted) {
        console.log('Video muted');
    } else {
        console.log('Video unmuted');
    }
});
