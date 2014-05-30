var parser = require('blaster-command'),
    commands,
    preprocessor = require('./preprocessor');

parser.add('s', 'source', '', 'Source file');

commands = parser.parse();
//console.log( commands );

if (!commands.source) {
    console.log('Soy2 to Soy compiler');
    console.log('usage:');
    return parser.showHelp();
}

preprocessor.preprocess(commands.source);


