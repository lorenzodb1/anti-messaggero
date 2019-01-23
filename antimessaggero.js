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
}
