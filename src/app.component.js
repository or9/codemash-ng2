window.app = (function (doc, app, undefined) {
	"use strict";

	app.AppComponent = ng.core.

		Component({
			selector: "my-app",
			templateUrl: "home/home.html"
		}).

		Class({
			constructor: function () {
				this.message = "Hi. Nice to meet you.";
				console.log("boom. constructed. Just like that.");
			}
		});

	return app;

}(
	document, 
	window.app || ( window.app = {} )
 ));
