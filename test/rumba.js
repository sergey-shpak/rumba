var expect = require('chai').expect;
var application = require('../lib/application');
var Rumba = require('../lib/rumba');

describe('Rumba.', function(){

    'use strict';

    it('should return application instance', function() {

        var app = Rumba();

        expect(application.isPrototypeOf(app), 'Is not an Application instance')
        .to.be.true;
    });

    it('should set application configuration', function() {

        var app = Rumba({option:true});

        expect(app.config, 'Application configuration is not set')
        .to.have.property('option').that.is.true;
    });
});
