
//* to add Active for popup
function togglePopUp() {
    popup.classList.toggle("active");
    popup.focus();
}
//* add active for li
function updateActive() {
    let update = popup.querySelector("ul li.active") ?? undefined;
    update?.classList.remove("active");
    popIndicator[currentIndexImg].classList.add("active");
}

//* update current image
function updateImg() {
    nextImg = images[currentIndexImg];
    nextSrc = nextImg?.getAttribute("src");
    popupImg?.setAttribute("src", nextSrc);
}

//* previous image
function previousImage() {
    currentIndexImg = (--currentIndexImg < 0) ? images.length - 1 : currentIndexImg;
    updateImg();
    updateActive();
}
//* next image
function nextImage() {
    currentIndexImg = ++currentIndexImg % images.length;
    updateImg();
    updateActive();
}
