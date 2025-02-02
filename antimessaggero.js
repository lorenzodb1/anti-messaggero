setTimeout(function () {
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", main);
    } else {
        main()
    }
}, 100);

function main () {
    removePaywall();
    unlockArticle();
    closeVideoPopUp();
    removeBlurFilter();
    removeExcessSpacing();
    uncoverBodyText();
    removeStickyPromo();
}

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
            }
            else {
                unlockArticle();
            }
            let paywallWrapper = $('#paywall_wrapper');
            if (paywallWrapper.length > 0) {
                paywallWrapper[0].remove();
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

function uncoverBodyText () {
    let elem = document.body.getElementsByClassName("body-text")[0];
    setTimeout(function () {
        if (elem.style.length === 3) {
            elem.style = null
        } else {
            uncoverBodyText();
        }
    }, 100);
}

function removeStickyPromo () {
    let stickyPromo = $('#mp_strip_sticky');
    setTimeout(function () {
        if (stickyPromo.length > 0) {
            stickyPromo[0].remove();
        } else {
            removeStickyPromo();
        }
    }, 100);
}
