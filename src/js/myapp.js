
(function() {
"use strict";

nunjucks.configure('views', { autoescape: true });

window.myapp = {};

myapp.Widget1 = spear.Widget.$extend({
    render: function() {
        return nunjucks.render('widget1.html');
    },
});
    
})();
