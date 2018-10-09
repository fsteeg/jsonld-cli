jsonld-cli
==========

[![Dependency Status](https://img.shields.io/david/digitalbazaar/jsonld-cli.svg)](https://david-dm.org/digitalbazaar/jsonld-cli)

Introduction
------------

This module provides a command line tool `jsonld` to manipulate [JSON-LD][]
data. It is written in JavaScript for [node.js][] and uses the [jsonld.js][]
and [jsonld-request][]. Inputs can be from stdin, URLs, or files.

## Requirements

* [node.js][]
* [npm][]

## Installation

Go to the checked out git repository location:

    cd jsonld-cli

Install your local version:

    sudo npm install -g

If local install fails, try uninstalling any previous version:

    sudo npm uninstall -g jsonld-cli

Or install latest release from the npm repository:

    sudo npm install -g jsonld-cli --unsafe-perm

## Usage

The `jsonld` command line tool can be used to:

 * Import N-Quads to JSON-LD
 * Transform JSON-LD to compact, expanded, normalized, or flattened form
 * Transform RDFa to JSON-LD
 * Normalize JSON-LD/RDFa Datasets to N-Quads

All inputs can be given as a local file name, a URL, or standard in (`-`).

To show tool options, a list of commands, or command options:

    jsonld --help
    jsonld COMMAND --help

To import from N-Quads:

    jsonld import test/doc.txt

To frame a document using a JSON-LD frame:

    jsonld frame -f test/frame.json test/doc.json

To compact a document using a JSON-LD context:

    jsonld compact -c test/context.json test/doc.json

To normalize as N-Quads:

    jsonld normalize -q test/doc.json

The N-Quads can then be processed via SHA-256, or similar algorithm, to get a deterministic hash of the contents of the Dataset.

Commercial Support
------------------

Commercial support for this library is available upon request from
[Digital Bazaar][]: support@digitalbazaar.com

[Digital Bazaar]: http://digitalbazaar.com/
[JSON-LD]: http://json-ld.org/
[RDFa]: http://www.w3.org/TR/rdfa-core/
[json-ld.org]: https://github.com/json-ld/json-ld.org
[jsonld-request]: https://github.com/digitalbazaar/jsonld-request
[jsonld.js]: https://github.com/digitalbazaar/jsonld.js
[node.js]: https://nodejs.org/
[npm]: https://npmjs.org/
