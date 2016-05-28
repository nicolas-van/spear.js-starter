"use strict";

nunjucks.configure('views', { autoescape: true });

window.myapp = {};

myapp.Widget1 = class Widget1 extends widget.Widget {
    render() {
        return nunjucks.render('widget1.html');
    }
};
