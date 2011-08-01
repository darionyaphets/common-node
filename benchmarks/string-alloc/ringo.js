var ByteArray = require('binary').ByteArray;

var n = 1024;
var b = new ByteArray(n);
for( var i = 0; i < n; i++)
	b[i] = 100;

exports.app = function(request) {
	for( var i = 1; i <= 50; i++)
		b.decodeToString("ascii");
	var response = {
		status: 200,
		headers: {
			"Content-Type": "text/plain"
		},
		body: [b]
	};
	return response;
};

if(require.main === module) {
	require("ringo/httpserver").main(module.id);
}
