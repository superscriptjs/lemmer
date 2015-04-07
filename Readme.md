# Lemmer

This is a simple English lemmer library for Node.js using WordNet. 
This Library is sugar for on top of [validForms](https://github.com/morungos/wordnet#validformsword-callback).

    npm install lemmer

## Usage

    var Lemmer = require('lemmer');
    Lemmer.lemmatize('fought', function(err, word){
      console.log(word); // ['fight']
    });

## Related
Fore more Node.js NLP check out;

* [Natural Node](https://github.com/NaturalNode/natural/) 

## License

[The MIT License (MIT)](LICENSE.md)

Copyright © 2015 Rob Ellis