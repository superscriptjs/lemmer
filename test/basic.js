var mocha = require("mocha");
var should  = require("should");

var Lem = require('../');

describe('Lemma Interface', function(){
  
  it("should lemma a single word", function(done) {
    Lem.lemmatize('fought', function(err, res) {
      res.should.eql(['fight']);
      res.should.have.length === 1;
      done();
    });
  });

  it("should lemma an array", function(done) {
    Lem.lemmatize(['i', 'went','to','the','store','and','fought','two','guys'], function(err, res) {
      res.should.eql(['i', 'go','to','the','store','and','fight','two','guy']);
      res.should.have.length === 9;
      done();
    });
  });

  it("undef", function(done) {
    Lem.lemmatize('__something__', function(err, res) {
      res.should.eql(['__something__']);
      done();
    });
  });

});
