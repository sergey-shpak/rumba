var expect = require('chai').expect;
var utils = require('../lib/utils');
var config = require('../lib/config');

describe('Config.', function(){

    'use strict';

    it('should be an object(module)', function() {

        expect(config,'Is not an object')
        .to.be.an('object');
    });

    it('should be extended from Utils', function() {

        expect(utils, 'Is not an instance of Utils')
        .to.be.deep.equal(Object.getPrototypeOf(config));
    });

    ['docs']
    .forEach(function(key) {it('should have ' + key + ' property', function() {
        expect(config, key + ' property is not defined')
        .to.have.property(key);
    });});
});
