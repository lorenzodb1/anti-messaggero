setTimeout(function () {
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", unlockArticle);
    } else {
        unlockArticle();
        closeVideoPopUp();
    }
}, 100);

function unlockArticle () {
    document.body.style.overflow = "scroll";
    let layoverElement = document.body.getElementsByClassName("modal");
    if (layoverElement.length > 0) {
        layoverElement[0].remove();
    } else {
        let paywallStripe = $('#paywall_strip');
        if (paywallStripe.length > 0) {
            paywallStripe[0].remove();
        } else {
            setTimeout(unlockArticle, 100);
        }
    }
}

function closeVideoPopUp () {
    let popUpVideo = $('.floatingVideo');
    setTimeout(function () {
        if (popUpVideo.length > 0) {
            popUpVideo[0].click();
        } else {
            closeVideoPopUp()
        }
    }, 100);
}
