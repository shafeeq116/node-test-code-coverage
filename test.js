var calc = require('./src/myApp.js');
var expect = require('chai').expect;

describe('My App Testing', function () {
  it('Testing add function', function () {
    var result = calc.add(10, 5);
    expect(result).to.equal(15);
  });

  it('Testing substract function', function () {
    var result = calc.sub(10, 5);
    expect(result).to.equal(5);
  });
});