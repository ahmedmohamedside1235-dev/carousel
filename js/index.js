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

//* create indicators
for (let i = 0; i < images.length; i++) {
    let newEle = document.createElement("li");
    newEle.textContent = i + 1;
    if (i != images.length - 1) {
        newEle.classList.add("me-lg-2","me-1");
    }
    indicators.append(newEle);
}

//* select li after decleration
let indicatLi = popup.querySelectorAll("ul li");

popkeys.forEach(function (popkey) {
    popkey.addEventListener("click", function () {

        let currentImg = popkey.parentElement.previousElementSibling,
            currrentSrc = currentImg.getAttribute("src");
        popupImg.setAttribute("src", currrentSrc);

        // *update current index for image
        currentIndexImg = currentImg.dataset.index;
        updateActive();
        togglePopUp();
    });
})

// * for next popup
nextpop.addEventListener("click", nextImage);

// * for previous popup
prepop.addEventListener("click", preImg);

//* close popup
popup.addEventListener("click", togglePopUp);
closepop.addEventListener("click", togglePopUp);
box.addEventListener("click", function (e) { e.stopPropagation() });

//* change popup from indicators
indicatLi.forEach(function (li) {
    li.addEventListener("click", () => {

        if ((li.textContent - 1) == currentIndexImg)
            box.classList.add("current_Key");

        currentIndexImg = li.textContent - 1;
        updateImg();
        updateActive();

    })
})

//* event on keyboard
document.addEventListener("keydown", function (event) {
    if (event.key == "ArrowLeft")
        preImg();

    else if (event.key == "ArrowRight")
        nextImage();

    else if (event.key == "Escape")
        popup.classList.remove("active");

    else if ((+(event.key) - 1) == currentIndexImg)
        box.classList.add("current_Key");

    else if (Number.isInteger(+(event.key)) && +(event.key) > 0 && +(event.key) <= indicatLi.length) {
        currentIndexImg = event.key - 1;
        updateImg();
        updateActive();
    }
    else
        box.classList.add("invalid_Key");
})

//* after end animation
box.addEventListener("animationend", function () {
    box.classList.remove("invalid_Key");
    box.classList.remove("current_Key");
})


