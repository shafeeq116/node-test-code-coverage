var calc = function() {
    //
}

calc.prototype.add = function(a, b) {
    return a + b;
}

calc.prototype.sub = function(a, b) {
    return a - b;
}

module.exports = new calc();