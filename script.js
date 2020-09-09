var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

var slideIndexoff = 1;
showSlidesoff(slideIndexoff);

// Next/previous controls
function plusSlidesoff(n) {
    showSlidesoff(slideIndexoff += n);
}

// Thumbnail image controls
function currentSlideoff(n) {
    showSlidesoff(slideIndexoff = n);
}

function showSlidesoff(n) {
    var i;
    var slides = document.getElementsByClassName("mySlidesoff");
    if (n > slides.length) { slideIndexoff = 1 }
    if (n < 1) { slideIndexoff = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndexoff - 1].style.display = "grid";
    var circles = document.getElementsByClassName("circle");
    for (i = 0; i < circles.length; i++) {
        circles[i].style.backgroundColor = "transparent";
    }
    circles[slideIndexoff - 1].style.backgroundColor = "#777";
}