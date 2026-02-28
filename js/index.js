let popkeys = document.querySelectorAll(".item i"),
    popup = document.querySelector(".popup"),
    box = document.querySelector(".box"),
    popupImg = popup.querySelector("img"),
    closepop = popup.querySelector(".exit"),
    nextpop = popup.querySelector(".next"),
    prepop = popup.querySelector(".prev"),
    indicators = popup.querySelector("ul"),
    images = document.querySelectorAll("#Gallary img"),
    currentIndexImg,
    nextImg = images[currentIndexImg],
    nextSrc = nextImg?.getAttribute("src");


for (let i = 0; i < images.length; i++) {
    let indicator = document.createElement("li");
    indicator.textContent = i + 1;
    if (i != images.length - 1) {
        indicator.classList.add("me-lg-2", "me-1");
    }
    indicators.append(indicator);
}

popIndicator = Array.from(popup.querySelectorAll("ul li"));


popkeys.forEach(function (popkey) {
    popkey.addEventListener("click", function () {

        let currentImg = popkey.parentElement.previousElementSibling,
            currentSrc = currentImg.getAttribute("src");
        popupImg.setAttribute("src", currentSrc);

        currentIndexImg = currentImg.dataset.index;
        updateActive();
        togglePopUp();
    })
});

//* close popup
popup.addEventListener("click", togglePopUp);
closepop.addEventListener("click", togglePopUp);
box.addEventListener("click", function (e) {
    e.stopPropagation();
});

//* next image
nextpop.addEventListener("click", nextImage);

//* previous image
prepop.addEventListener("click", previousImage);

popIndicator.forEach(function (li) {
    li.addEventListener("click", function (e) {
        if (popIndicator.indexOf(li) == currentIndexImg) {
            box.classList.add("current_Key");
        }
        currentIndexImg = popIndicator.indexOf(li);
        updateImg();
        updateActive();
    })
})



let timeOut,
    keys = "";

document.addEventListener("keydown", function (event) {

    const key = event.key;

    if (key === "ArrowLeft") {
        previousImage();
        return;
    }else if (key === "ArrowRight") {
        nextImage();
        return;
    }else if (key === "Escape") {
        popup.classList.remove("active");
        return;
    }

    if (!Number.isInteger(+key)) return;

    keys += key;

    clearTimeout(timeOut);

    timeOut = setTimeout(() => {

        const number = +keys;

        if (number - 1 === currentIndexImg) {
            box.classList.add("current_Key");

        } else if (number > 0 && number <= popIndicator.length) {
            currentIndexImg = number - 1;
            updateImg();
            updateActive();

        } else {
            box.classList.add("invalid_Key");
        }

        keys = "";

    }, 500);
});

box.addEventListener("animationend", function () {
    box.classList.remove("invalid_Key");
    box.classList.remove("current_Key");
})



