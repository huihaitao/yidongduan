(function (doc, win) {
        var docEl = doc.documentElement,
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            recalc = function () {
                var clientWidth = docEl.clientWidth;
                // var clientHeight = docEl.clientHeight;
                if (!clientWidth) return;
                   docEl.style.fontSize = 100 * (clientWidth /375) + 'px';
                   // if (!clientHeight) return;
                   // docEl.style.fontSize = 100 * (clientHeight /960) + 'px';
            };

        if (!doc.addEventListener) return;
        win.addEventListener(resizeEvt, recalc, false);
        doc.addEventListener('DOMContentLoaded', recalc, false);
    })(document, window);
