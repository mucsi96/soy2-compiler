var commandLine = new (require('node-commandline').CommandLine)('soy2.js'),
    command,
    preprocessor = require('./preprocessor');

commandLine.addArgument('-map',{type: 'string', required: true});

var command = commandLine.parse.apply(this, process.argv);

if (!command['-map']) {
    console.log('Soy2 to Soy compiler');
    console.log('usage:');
    return console.log(commandLine.toString());
}

preprocessor.preprocess(command['-map']);


