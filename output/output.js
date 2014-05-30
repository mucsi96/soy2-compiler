// This file was automatically generated from sample1.soy.
// Please don't edit this file by hand.

if (typeof examples == 'undefined') { var examples = {}; }
if (typeof examples.simplenamespace == 'undefined') { examples.simplenamespace = {}; }


examples.simplenamespace.helloworld = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('Hello World!');
  hello.bello.elobelo(null, output);
  meg.egy.alias.run(null, output);
  return opt_sb ? '' : output.toString();
};
