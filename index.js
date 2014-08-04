var SourceMapConsumer = require('source-map').SourceMapConsumer;
var SourceMapGenerator = require('source-map').SourceMapGenerator;

function addMappingFromConsumer(generator, mapping) {
	generator.addMapping({
		generated: { line: mapping.generatedLine, column: mapping.generatedColumn },
		source: mapping.source,
		original: { line: mapping.originalLine, column: mapping.originalColumn },
		name: mapping.name
	});
}

function removeSource(sourceToRemove, map) {
	if (typeof map === 'string' || map instanceof String) {
		map = JSON.parse(map);
	}
	var consumer = new SourceMapConsumer(map);
	var generator = new SourceMapGenerator({ file: map.file, sourceRoot: map.sourceRoot });
	consumer.eachMapping(function (mapping) {
		if (mapping.source !== sourceToRemove)
			addMappingFromConsumer(generator, mapping);
	});
	return generator.toJSON();
}

module.exports = removeSource;
