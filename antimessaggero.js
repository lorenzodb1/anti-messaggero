setTimeout(function () {
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", unlockArticle);
    } else {
        removePaywall();
        unlockArticle();
        closeVideoPopUp();
        removeBlurFilter();
        removeExcessSpacing()
    }
}, 100);

function removePaywall () {
    setTimeout(function () {
        document.body.style.overflow = "scroll";
        let paywallElement = $('#datawall');
        if (paywallElement.length > 0) {
            paywallElement[0].remove();
            window.scrollTo(0, 0);
        } else {
            removePaywall();
        }
    }, 100);
}

function unlockArticle () {
    setTimeout(function () {
        document.body.style.overflow = "scroll";
        let layoverElement = document.body.getElementsByClassName("modal");
        if (layoverElement.length > 0) {
            layoverElement[0].remove();
            let correlatiElem = $('#correlati');
            if (correlatiElem.length > 0) {
                correlatiElem[0].style.display = "none";
            }
        } else {
            let paywallStripe = $('#paywall_strip');
            if (paywallStripe.length > 0) {
                paywallStripe[0].remove();
            } else {
                unlockArticle();
            }
        }
    }, 100);
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

function removeBlurFilter () {
    $('.wrapper .contenuto .body-text > :not(.adv_banner)').css("filter", "unset")
}

function removeExcessSpacing () {
    let elems = document.body.getElementsByClassName("inread_adv");
    if (elems.length > 0) {
        for (let elem of elems) {
            elem.parentNode.removeChild(elem)
        }
    }
}
