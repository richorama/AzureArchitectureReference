var fs = require('fs');
var content = '';
var links = '';
var ignorelist = ['.git', 'readme.md', 'build.js', '.gitignore', '_template.md', 'singlepage.md'];

fs.readdirSync('.').filter(function(x){ return ignorelist.indexOf(x) === -1}).forEach(function(filename){
	if (fs.statSync(filename).isDirectory()){
		content += '## ' + filename + '\n\n';
		links += '\n## ' + filename + '\n\n';
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
	var fileContent = fs.readFileSync(filename).toString();
	if (fileContent.trim().length > 0){
		content += fileContent + '\n\n';
		var splitFilename = filename.split('/');
		links += ' * [' + splitFilename[splitFilename.length - 1].replace(".md","") + '](' + filename + ')\n';		
	}
}

var template = fs.readFileSync('_template.md').toString();
fs.writeFileSync('singlepage.md', template.replace('<REPLACE>', content));
fs.writeFileSync('readme.md', template.replace('<REPLACE>', links));
