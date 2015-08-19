
(function() {
"use strict";

nunjucks.configure('views', { autoescape: true });

window.myapp = {};

myapp.Widget1 = widget.Widget.$extend({
    render: function() {
        return nunjucks.render('widget1.html');
    },
});
    
})();
