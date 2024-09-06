document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab");
    const tabContents = document.querySelectorAll(".tab-content");
    const addImageButton = document.querySelector(".add-image-btn");
    const gallery = document.querySelector(".gallery");

    tabs.forEach(tab => {
        tab.addEventListener("click", function () {
            tabs.forEach(tab => tab.classList.remove("active"));
            tabContents.forEach(content => content.classList.remove("active"));
            this.classList.add("active");
            const target = this.getAttribute("data-tab");
            document.getElementById(target).classList.add("active");
        });
    });
    addImageButton.addEventListener("click", function () {
        const newImage = document.createElement("img");
        newImage.src = "./assets/782.jpg";
        newImage.alt = "Gallery Image";
        gallery.appendChild(newImage);
    });
});


// WORKING OF ARROW TO MOVE THE IMAGES IN GALLERY

const scrollLeftBtn = document.querySelector('.left-arrow');
const scrollRightBtn = document.querySelector('.right-arrow');
const imageRow = document.querySelector('.gallery');

scrollLeftBtn.addEventListener('click', () => {
    imageRow.scrollBy({
        left: -240,
        behavior: 'smooth'
    });
});

scrollRightBtn.addEventListener('click', () => {
    imageRow.scrollBy({
        left: 240,
        behavior: 'smooth'
    });
});
