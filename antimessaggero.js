setTimeout(function () {
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", unlockArticle);
    } else {
        unlockArticle();
    }
}, 1000);

function unlockArticle() {
    let layoverElement = document.body.getElementsByClassName("modal");
    if (layoverElement.length !== 0) layoverElement[0].remove();
    document.body.style.overflow = "scroll";
    let videoPlayerElement = document.body.getElementsByClassName("floatingVideo");
    if (videoPlayerElement.length !== 0) videoPlayerElement[0].remove();
}
