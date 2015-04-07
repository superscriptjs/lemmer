# Lemmer

This is a simple English lemmer library for Node.js using WordNet. 
This Library is sugar for on top of [validForms](https://github.com/morungos/wordnet#validformsword-callback).

You can learn more about Lemmatizing words [on WikiPedia](http://en.wikipedia.org/wiki/Lemmatisation);

    npm install lemmer

## Usage

    var Lemmer = require('lemmer');
    Lemmer.lemmatize('fought', function(err, word){
      console.log(word); // ['fight']
    });

    Lemmer.lemmatize(['went','and','bought], function(err, words){
      console.log(words); // ['go','and','buy']
    });

## Related
Fore more Node.js NLP check out;
* [WordNet](https://github.com/morungos/wordnet/)
* [Natural Node](https://github.com/NaturalNode/natural/) 

## License

[The MIT License (MIT)](LICENSE.md)

Copyright © 2015 Rob Ellis