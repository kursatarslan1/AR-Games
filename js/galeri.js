

const zoomBtn = document.querySelectorAll('.zoom-text');
const allImages = document.querySelectorAll('.img-container');
const imageView = document.querySelector('.image-view');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const imageBox = document.querySelector('.image-box');

let currentImageIdx = 0;

imageView.addEventListener('click', function () {
    this.style.display = "none";
    imageBox.style.display = "none";
})


zoomBtn.forEach(function (btn, index) {
    btn.addEventListener('click', function () {
        imageView.style.display = "block";
        imageBox.style.display = "block";
        currentImageIdx = index + 1;
        currentImageDisplay(currentImageIdx);
        document.addEventListener('keydown', function (event) {
            if (event.key === "Escape") {
                imageBox.style.display = "none";
                imageView.style.display = "none";
            }
        });
    })
})

function currentImageDisplay(position) {
    imageBox.style.background = `url(images/img${currentImageIdx}.jpg) center/cover no-repeat`;
}

prevBtn.addEventListener('click', function () {
    currentImageIdx--;
    if (currentImageIdx === 0) {
        currentImageIdx = allImages.length;
    }
    currentImageDisplay(currentImageIdx);
})

nextBtn.addEventListener('click', function () {
    currentImageIdx++;
    if (currentImageIdx === 17) {
        currentImageIdx = 1;
    }
    currentImageDisplay(currentImageIdx);
})