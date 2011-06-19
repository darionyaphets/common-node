var ByteArray = require('binary').ByteArray;

exports.app = function(request) {
  var n = 1024, b;
  for (var i = 1; i <= 50; i++)
    b = new ByteArray(n);
  return {
    status: 200,
    headers: {"Content-Type": "text/plain"},
    body: [b]
  };
}

if (require.main === module) {
  require("ringo/httpserver").main(module.id);
}

