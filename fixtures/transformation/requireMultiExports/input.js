var MyModule = require("MyModule");

function out(todo) {
  return MyModule.something(todo);
}

module.exports.out = out;
module.exports.other = "Foo";
