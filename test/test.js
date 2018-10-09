const jsonld = require('jsonld');
const jsonld_request = require('jsonld-request');

//$ jsonld import doc.txt
jsonld_request('doc.txt', { type: 'text' }, function(err, res, data) {
	if(err) { throw err; }

	jsonld.fromRDF(data.toString(), {}, function(err, json) {
		if(err) { throw err; }
		console.log('Imported: ', JSON.stringify(json, null, 2));
	});
});

jsonld_request('doc.json', function(err, res, input) {
	if(err) { throw err; }

	// $ jsonld frame -f frame.json doc.json
	jsonld_request('frame.json', function(err, res, frame) {
		if(err) { throw err; }

		jsonld.frame(input, frame, function(err, framed) {
			if(err) { throw err; }
			console.log('Framed: ', JSON.stringify(framed, null, 2));
		});
	});
	
	// $ jsonld compact -c context.json doc.json
	jsonld_request('context.json', function(err, res, context) {
		if(err) { throw err; }

		jsonld.compact(input, context, function(err, compacted) {
			if(err) { throw err; }
			console.log('Compact: ', JSON.stringify(compacted, null, 2));
		});
	});
});
