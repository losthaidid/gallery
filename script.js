
const images = [
    "haidid1.jpg",
    "haidid2.jpg",
    "haidid3.jpg",
    "haidid4.jpg",
    "haidid5.jpg"
];

let currentIndex = 0;

const currentImage = document.getElementById("current-image");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function updateImage() {
    currentImage.src = images[currentIndex];
    currentImage.alt = `Image ${currentIndex + 1}`;
}

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
});

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
});
