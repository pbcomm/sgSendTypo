/*!
 * @file sg.sendTypo.js
 * @version 1.0.0
 * @author Paul.Bronshteyn
 * @comment Built by a geek loaded on caffeine ...
 */
;(function(win, doc) {
    var
        getSelection = function() {
            var selection = '';

            if (win.getSelection) {
                selection = win.getSelection();
            } else if (doc.getSelection) {
                selection = doc.getSelection();
            } else if (doc.selection) {
                selection = doc.selection.createRange().text;
            }

            return selection;
        },

        sendTypo = function(str) {
            var event = doc.createEvent('CustomEvent');
            event.initCustomEvent('sgSendTypo', true, true, { typo: String(str) });
            doc.body.dispatchEvent(event);
        },

        onKeyDown = function(e) {
            if (e.ctrlKey && e.which === 13) {
                getSelection() && sendTypo(getSelection());
            }
        };

    if (doc.addEventListener) {
        doc.addEventListener('keydown', onKeyDown, false);
    } else if (doc.attachEvent)  {
        doc.attachEvent('keydown', onKeyDown);
    }
}(window, document));