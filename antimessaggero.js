setTimeout(function () {
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", unlockArticle);
    } else {
        unlockArticle();
    }
}, 10);

closeVideoPopUp();

function unlockArticle () {
    let layoverElement = document.body.getElementsByClassName("modal")[0];
    if (layoverElement.length !== 0) layoverElement.remove();
    document.body.style.overflow = "scroll";
}

function closeVideoPopUp () {
    let popUpVideo = $('.floatingVideo')[0];
    setTimeout(function () {
        if (!popUpVideo) {
            closeVideoPopUp()
        } else {
            popUpVideo.click();
        }
    }, 100);
}
