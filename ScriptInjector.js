(function(){

var scriptsToLoad = [
	{
		name: "underscore.js",
		url: "http://underscorejs.org/underscore-min.js",
		test: function () {
			return !! (window._ && window._.VERSION);
		}
	},
	{
		name: "jquery.js",
		url: "//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js”,
		test: function () {
			return !! (window.$ && window.$.fn && window.$.fn.jquery);
		}
	}
];

for (var i = 0; i < scriptsToLoad.length; i++) {
	var s = scriptsToLoad[i];

	var testFailed = (typeof s.test == "function" && ! s.test());

	if (window.console && window.console.debug) {
		window.console.debug(
			"Script Injector: %s - %s",
			s.name || s.url,
			testFailed ? "test failed, not injecting into DOM" : "test passed, injecting into DOM"
		);
	}

	if (! testFailed) {
		var el = document.createElement('script');
		el.src = scriptsToLoad[i].url;
		document.children[0].appendChild(el);
	}
}

})();
