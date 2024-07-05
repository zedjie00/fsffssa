document.addEventListener('DOMContentLoaded'), function () {
    // Array of background images
    const backgroundImages = [
        './imagess/chewing-gum-bg.jpg',
        './imagess/mfal-bg.webp',
        './imagess/we-young-bg.jpeg',
        './imagess/go-bg.jpg',
        './imagess/we-go-up-bg.jpeg',
        './imagess/boom-bg.jpeg',
        './imagess/ridin-bg.jpg',
        './imagess/hot-sauce-bg.webp',
        './imagess/hello-future-bg.jpg',
        './imagess/glitch-mode-bg.jpg',
        './imagess/beatbox-bg.jpg',
        './imagess/candy-bg.jpg',
        './imagess/bfe-bg.webp',
        './imagess/broken-melodies-bg.jpg',
        './imagess/istj-bg.jfif',
        './imagess/poison-bg.png',
        './imagess/smoothie-bg.webp'
    ];
}

function changeBg(id, className) {

    if (id === 1 & className === 'mark') {
        content = `
            <div class="content mark">
                <img src="/banner/mfal banner.png" alt="" class="movie-title">
                <h4>
                    <span>2017</span><span><i>7+</i></span>
                    <span>3m 27s</span><span>NCT DREAM</span>
                </h4>
                <p>
                    <h3>Aug 24, 2017</h3>
                    <h5>NCT DREAM's 1st single “The First” has been released. 
                        Listen and download on iTunes & Apple Music, Spotify, and Google Play Music </h5>
                    <h6>NCT DREAM 엔시티 드림 '마지막 첫사랑 (My First and Last)' MV ℗ S.M.Entertainment</h6>
                </p>
                <div class="button">
                    <a href="#"><i class="fa fa-play" aria-hidden="true"></i> watch</a>
                    <a href="#"><i class="fa fa-plus" aria-hidden="true"></i> my list</a>
                </div>
            </div>
        `;
    }
    document.getElementById('content-container').innerHTML = content;
}

function toggleVideo() {
    var trailer = document.querySelector('.trailer');
    var teaserVideo = document.getElementById('teaserVideo');

    if (trailer.style.visibility === 'hidden' || trailer.style.visibility === '') {
        trailer.style.visibility = 'visible';
        trailer.style.opacity = '1';
        trailer.classList.add('active');
        teaserVideo.play(); // Autoplay teaser video
    } else {
        trailer.style.visibility = 'hidden';
        trailer.style.opacity = '0';
        trailer.classList.remove('active');
        teaserVideo.pause(); // Pause the teaser video
        teaserVideo.currentTime = 0; // Reset the video to the beginning
    }
}

// Array of carousel items with corresponding video details
const carouselItems = [
    { index: 0, className: 'jisung', videoSrc: "mvss/NCT DREAM 'Chewing Gum' MV.mp4", modalSrc: "mvss/NCT DREAM 'Chewing Gum' MV.mp4" },
    { index: 1, className: 'mark', videoSrc: "mvss/NCT DREAM 'Graduation' MV.mp4", modalSrc: "mvss/NCT DREAM 'Graduation' MV.mp4" },
    // Add more items as needed
];

// Function to initialize carousel click listeners
function initializeCarouselClickListeners() {
    const carouselItemsElements = document.querySelectorAll('.carousel-item');
    carouselItemsElements.forEach((item, index) => {
        item.addEventListener('click', () => {
            changeCarouselContent(carouselItems[index]);
        });
    });
}

// Function to change carousel content
function changeCarouselContent(item) {
    // Update teaser video source
    const teaserVideo = document.getElementById('teaserVideo');
    teaserVideo.src = item.videoSrc;

    // Update modal content
    const modalContent = document.getElementById('videoModal').getElementsByClassName('modal-content')[0];
    modalContent.innerHTML = `
        <span class="close" onclick="closeModal()">&times;</span>
        <video id="modalVideo" src="${item.modalSrc}" controls></video>
    `;
}

// Function to toggle teaser video visibility
function toggleVideo() {
    var trailer = document.querySelector('.trailer');
    var teaserVideo = document.getElementById('teaserVideo');

    if (trailer.style.visibility === 'hidden' || trailer.style.visibility === '') {
        trailer.style.visibility = 'visible';
        trailer.style.opacity = '1';
        trailer.classList.add('active');
        teaserVideo.play(); // Autoplay teaser video
    } else {
        trailer.style.visibility = 'hidden';
        trailer.style.opacity = '0';
        trailer.classList.remove('active');
        teaserVideo.pause(); // Pause the teaser video
        teaserVideo.currentTime = 0; // Reset the video to the beginning
    }
}

// Function to open modal with specific video
function openModal(title, src) {
    var modal = document.getElementById('videoModal');
    var modalVideo = modal.querySelector('#modalVideo');
    
    modalVideo.src = src;
    modal.style.display = 'block';
}

// Function to close modal and pause video
function closeModal() {
    var modal = document.getElementById('videoModal');
    modal.style.display = 'none';
    var modalVideo = modal.querySelector('#modalVideo');
    modalVideo.pause();
    modalVideo.currentTime = 0;
}

// Initialize carousel click listeners on page load
document.addEventListener('DOMContentLoaded', () => {
    initializeCarouselClickListeners();
});