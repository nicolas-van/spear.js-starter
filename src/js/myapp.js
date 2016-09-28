"use strict";

nunjucks.configure('views', { autoescape: true });

window.myapp = {};

myapp.Widget1 = class Widget1 extends widget.Widget {
    constructor() {
        super();
        this.el.innerHTML = nunjucks.render('widget1.html');
    }
}
