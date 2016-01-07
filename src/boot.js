(function (doc, app, undefined) {
	"use strict";

	ng.platform.browser.bootstrap(app.AppComponent);

}(
	document, 
	window.app || ( window.app = {} )
));
