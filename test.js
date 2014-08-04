var removeMapping = require('./index');
var SourceMapGenerator = require('source-map').SourceMapGenerator;
var test = require('tape');

test('test', function (t) {
	var inputGen = new SourceMapGenerator({ file: 'output.js '});
	inputGen.addMapping({ generated: { line: 1, column: 0 }, source: 'original.js', original: { line: 1, column: 0 }});
	inputGen.addMapping({ generated: { line: 1, column: 4 }, source: 'original.js', original: { line: 1, column: 4 }});
	inputGen.addMapping({ generated: { line: 2, column: 0 }, source: 'original.js', original: { line: 2, column: 0 }});
	inputGen.addMapping({ generated: { line: 3, column: 0 }, source: 'original.js', original: { line: 2, column: 0 }});
	inputGen.addMapping({ generated: { line: 4, column: 0 }, source: 'original.js', original: { line: 4, column: 0 }});
	inputGen.addMapping({ generated: { line: 4, column: 0 }, source: 'original2.js', original: { line: 4, column: 0 }});
	inputGen.addMapping({ generated: { line: 1, column: 0 }, source: 'removeMe.js', original: { line: 1, column: 0 }});
	inputGen.addMapping({ generated: { line: 1, column: 4 }, source: 'removeMe.js', original: { line: 1, column: 4 }});
	inputGen.addMapping({ generated: { line: 2, column: 0 }, source: 'removeMe.js', original: { line: 2, column: 0 }});
	inputGen.addMapping({ generated: { line: 3, column: 0 }, source: 'removeMe.js', original: { line: 2, column: 0 }});
	inputGen.addMapping({ generated: { line: 4, column: 0 }, source: 'removeMe.js', original: { line: 4, column: 0 }});

	var expectedGen = new SourceMapGenerator({ file: 'output.js '});
	expectedGen.addMapping({ generated: { line: 1, column: 0 }, source: 'original.js', original: { line: 1, column: 0 }});
	expectedGen.addMapping({ generated: { line: 1, column: 4 }, source: 'original.js', original: { line: 1, column: 4 }});
	expectedGen.addMapping({ generated: { line: 2, column: 0 }, source: 'original.js', original: { line: 2, column: 0 }});
	expectedGen.addMapping({ generated: { line: 3, column: 0 }, source: 'original.js', original: { line: 2, column: 0 }});
	expectedGen.addMapping({ generated: { line: 4, column: 0 }, source: 'original.js', original: { line: 4, column: 0 }});
	expectedGen.addMapping({ generated: { line: 4, column: 0 }, source: 'original2.js', original: { line: 4, column: 0 }});

	var inputMap = inputGen.toJSON();
	var expectedMap = expectedGen.toJSON();
	var outputMap = removeMapping('removeMe.js', inputMap);

	t.deepEqual(outputMap, expectedMap);
	t.end();
});
