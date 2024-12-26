// Get document elements
let carousel = document.getElementById('carousel');
let imgList = carousel.querySelectorAll('li');
let listContainer = document.getElementById('list');
let leftArrow = document.getElementById('left');
let rightArrow = document.getElementById('right');


// Extract coordinates
let caroCoords = carousel.getBoundingClientRect();
let leftArrCoords = leftArrow.getBoundingClientRect();
let rightArrCoords = rightArrow.getBoundingClientRect();
let listContCoords = listContainer.getBoundingClientRect();


// Controller
let countPerSlide = 4;


// Set Carousel container's full width
let totalWidth = 0;
for(let item of imgList) {
    item.style.width = (caroCoords.width/countPerSlide) - ((carousel.clientLeft * 2) / countPerSlide) + 'px';
    let itemCoords = item.getBoundingClientRect();
    totalWidth += itemCoords.width;
}

listContainer.style.width = totalWidth + 'px';


// Place left and right arrow in carousel
leftArrow.style.top = rightArrow.style.top = (carousel.clientHeight / 2) - (leftArrCoords.height / 2) + 'px';
rightArrow.style.left = carousel.clientWidth - rightArrCoords.width + 'px';


// Add life to the slider
let totalScrollable = listContainer.clientWidth - listContCoords.width;
let scrolledWidth = 0;

rightArrow.addEventListener('click', function() {
    if((totalScrollable + scrolledWidth) >= listContCoords.width) {
        scrolledWidth = scrolledWidth - listContCoords.width;
        listContainer.style.marginLeft = scrolledWidth + 'px';
    } else {
        scrolledWidth = scrolledWidth - (totalScrollable + scrolledWidth);
        listContainer.style.marginLeft = scrolledWidth + 'px';
    }
});

leftArrow.addEventListener('click', function() {
    if(scrolledWidth <= -listContCoords.width) {
        scrolledWidth = scrolledWidth + listContCoords.width;
        listContainer.style.marginLeft = scrolledWidth + 'px';
    } else {
        scrolledWidth = scrolledWidth - scrolledWidth;
        listContainer.style.marginLeft = scrolledWidth + 'px';
    }
});