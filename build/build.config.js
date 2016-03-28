({
	  name:"main"
	, baseUrl: "../src/js"
	, mainConfigFile: "../src/js/3rd/require-config.js"
	, out: "../src/js/main-optimized.min.js"
	, generateSourceMaps: true
	, preserveLicenseComments: false
	, optimize: "uglify2"
})