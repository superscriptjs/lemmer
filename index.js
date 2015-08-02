var async = require("async");
var _ = require("underscore");

var WordNet = require("node-wordnet");
var wordnet = new WordNet({cache:true});

var _findForms = function(input, next) {
  var i, wordforms = [], word, _ref, reducer;

  reducer = function(list) {
    return _.reduce(list, function(memo, word){
      return (memo.length < word.length) ? memo : word;
    });
  };

  if (/^[a-z]/i.test(input)) {
    wordnet.validForms(input, function(results) {
      if (results && results.length !== 0) {
        for (i = 0; i < results.length; i++ ) {
          _ref = results[i].split('#');
          word = _ref[0];
          wordforms.push(word);
        }

        next(null, reducer(_.uniq(wordforms)));
      } else {
        next(null, [input]);
      }
    });
  } else {
    next(null, [input]);
  }
};

exports.lemmatize = function(input, cb) {
  var lookup;

  if(_.isString(input)) {
    lookup = [input]; // Assuming a single word.
  } else if (_.isArray(input)) {
    lookup = input;
  } else {
    lookup = [];
  }
  
  async.mapSeries(lookup, _findForms, function(err, res) {
    cb(null, _.flatten(res));
  });
};
