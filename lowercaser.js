function transform (data) {
    var namespaceRegex = /{namespace (.*)}/g,
        aliasRegex = /{alias (.*)}/g,
        templateRegex = /{template (.*)}/g,
        callRegex = /{call (.*)}/g;

    data = data.replace(namespaceRegex, function(all, templateName){
        return '{namespace '+templateName.toLowerCase()+'}';
    });

    data = data.replace(aliasRegex, function(all, templateName){
        return '{alias '+templateName.toLowerCase()+'}';
    });

    data = data.replace(templateRegex, function(all, templateName){
        return '{template '+templateName.toLowerCase()+'}';
    });

    data = data.replace(callRegex, function(all, templateName){
        return '{call '+templateName.toLowerCase()+'}';
    });
    return data;
}


module.exports.transform = transform;