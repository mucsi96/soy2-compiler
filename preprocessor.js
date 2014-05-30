var fs = require('fs'),
    lowercaser = require('./lowercaser'),
    dealiaser = require('./dealiaser'),
    commenter = require('./commenter');

function changeExtension(file, newExtension) {
    var regex = /\.[a-z0-9]+$/i;
    return file.replace(regex, newExtension);
}

function preprocess (file, done) {
    var newFileName = changeExtension(file, '.soy');

    if (file === newFileName) {
        console.log('*.soy file specified. Exiting...');
        if(done) {
            done ();
        }
        return;
    }

    try{
        fs.unlinkSync(newFileName);
    } catch (e) {

    }

    fs.readFile(file, 'utf8', function (err,data) {
        if (err) {
            return console.log(err);
        }

        data = commenter.transform(data);
        data = lowercaser.transform(data);
        data = dealiaser.transform(data);

        fs.writeFile(newFileName, data, 'utf8', function (err) {
            if (err) return console.log(err);
            if (done) {
                done();
            }
        });
    });
}


module.exports.preprocess = preprocess;