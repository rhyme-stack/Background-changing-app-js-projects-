var imgBox = document.querySelector(".img-box");
var imgWrap = document.querySelector(".img-wrap");
var originalImg = document.getElementById("original-img");
var line = document.getElementById("line");

function setImageWidth() {
    originalImg.style.width = imgBox.clientWidth + "px";
}

setImageWidth();
imgWrap.style.width = "50%";

imgBox.addEventListener("pointermove", function (e) {
    var bounds = imgBox.getBoundingClientRect();
    var boxWidth = Math.max(0, Math.min(e.clientX - bounds.left, bounds.width));
    imgWrap.style.width = boxWidth + "px";
    line.style.left = boxWidth + "px";
});

window.addEventListener("resize", setImageWidth);