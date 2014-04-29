var fs = require('fs');
var content = '';
var links = '';
var ignorelist = ['.git', 'readme.md', 'build.js', '.gitignore', '_template.md', 'singlepage.md'];

fs.readdirSync('.').filter(function(x){ return ignorelist.indexOf(x) === -1}).forEach(function(filename){
	if (fs.statSync(filename).isDirectory()){
		content += '## ' + trimTitle(filename) + '\n\n';
		links += '\n## ' + trimTitle(filename) + '\n\n';
		scanDirectory(filename);
	} else {
		appendFile(filename);
	}
});

function scanDirectory(directory){
	fs.readdirSync(directory).forEach(function(filename){
		appendFile(directory + '/' + filename);
	});
}

function appendFile(filename){
	console.log(filename);
	var fileContent = fs.readFileSync(filename).toString().trim();
	if (fileContent.length > 0){
		content += fileContent + '\n\n---\n\n';
		var splitFilename = filename.split('/');
		var title = splitFilename[splitFilename.length - 1].replace(".md","");
		links += ' * [' + trimTitle(title) + '](' + filename + ')\n';		
	}
}

function trimTitle(value){
	if (!isNaN(parseInt(value[0]))){
		value = value.substring(1);
	}
	return value.trim();
}

var template = fs.readFileSync('_template.md').toString();
fs.writeFileSync('singlepage.md', template.replace('<REPLACE>', content));
fs.writeFileSync('readme.md', template.replace('<REPLACE>', links));
