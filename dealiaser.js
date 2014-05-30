function removeAlias(data, alias) {
    var aliasNameMatch = alias.match(/\.([a-z0-9]+)$/i),
        aliasName,
        callRegex;

    if(!aliasNameMatch) {
        return
    }

    aliasName = aliasNameMatch[1];

    //console.log('**'+alias+'***');
    //console.log(aliasName);

    callRegex = new RegExp('{call ' + aliasName + '\.(.*)}', 'g');

    data = data.replace(callRegex, function(all, g1){
        return '{call ' + alias + '.' + g1 + '}';
    });

    return data;
}

function transform (data) {
    var aliasRegex = /{alias (.*)( )*}( )*(\n)?/g,
        aliases = [];

    data = data.replace(aliasRegex, function(all, templateName){
        aliases.push(templateName);
        return '';
    });

    aliases.forEach(function(alias) {
       data = removeAlias(data, alias);
    });

    return data;
}

module.exports.transform = transform;