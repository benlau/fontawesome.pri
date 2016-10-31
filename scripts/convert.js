// Convert _variables.scss to QML property
// https://raw.githubusercontent.com/FortAwesome/Font-Awesome/master/scss/_variables.scss
var fs = require('fs');

if (process.argv.length <= 2) {
    console.log("node convert.js _variables.scss");
    return;
}

var file = process.argv[2];

var contents = fs.readFileSync(file, 'utf8').toString();
var lines = contents.split("\n");

var icons = []

function toUpperFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function toLowerFirstLetter(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
}

lines.forEach(function(line) {
    var rx = /^\$fa-var-([a-zA-Z][a-zA-Z0-9-]+): *\"([a-zA-Z0-9\\/_.]+)\"/;

    var match = rx.exec(line);
    if (match != null) {
        icons.push([ match[1] , match[2]]);
    }
});

var reservedWords = ["try", "print"]

icons = icons.map(function(icon) {
    var name = icon[0];
    var value = icon[1];

    name = toLowerFirstLetter(name.split("-").map(toUpperFirstLetter).join(""));
    value = value.replace("\\", "\\u");

    if (reservedWords.indexOf(name) >= 0) {
        name = name + "Icon";
    }

    return "    property string " + name + " : \"" + value + "\"";
});

console.log(icons.join("\n"));
