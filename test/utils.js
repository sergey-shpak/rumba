var expect = require('chai').expect;
var utils = require('../lib/utils');

describe('Utils.', function(){

	'use strict';

	it('should be an object(module)', function() {

		expect(utils,'Is not an object')
		.to.be.an('object');
	});

	describe('Constructor',function() {

		it('should be defined as function',function(){

			expect(utils,'Constructor is not defined')
			.to.have.property('constructor');
		});

		it('should have name property', function() {

			expect(utils.constructor,'Constructor\'s name is not \'Utils\'')
			.to.have.property('name','Utils');
		});
	});

	describe('Extend method', function() {

		it('should be defined',function() {

			expect(utils,'Is not defined')
			.to.have.property('extend').that.is.a('function');
		});

		it('should return new instance of Utils',function() {

			expect(utils, 'Is not an instance of Utils')
			.to.be.deep.equal(Object.getPrototypeOf(utils.extend({})));
		});

		it('should assign passed properties to new instance',function() {

			expect(utils.extend({prop:'value'}),'Properties are not assigned')
			.to.have.property('prop').that.is.equal('value');
		});
	});

	describe('Create method', function() {

		it('should be defined', function(){

			expect(utils,'Is not defined')
			.to.have.property('create').that.is.a('function');
		});

		it('should call passed \'constructor\' method', function(done){

			utils.create({constructor:function Name() {

				expect(arguments, 'constructor options are not passed')
				.to.have.property('length').that.is.equal(2);

				done();
			}}, 'option1', 'option2');
		});

		it('should return passed constructor\'s return value', function() {

			expect(utils.create({
				constructor:function Name() {return 'uniqReturnValue';}}
			), 'Does not return constructor value')
			.to.equal('uniqReturnValue');
		});

		it('should return new Instance of Utils if passed constructor method returns undefined', function() {

			expect(utils, 'Is not an instance of Utils')
			.to.be.deep.equal(Object.getPrototypeOf(utils.create({constructor:function Name() {
				return undefined;
			}})));
		});

		it('should return new instance of Utils if constructor method is not passed', function(){

			expect(utils, 'Is not instance of Utils')
			.to.be.deep.equal(Object.getPrototypeOf(utils.create({})));
		});
	});

	describe('Assign',function() {

		it('should be defined',function() {

			expect(utils,'Is not defined')
			.to.have.property('assign').that.is.a('function');
		});

		it('should return passed object with assigned passed properties',function() {

			var obj = {};
			expect(utils.assign(obj,{prop:'value'}), 'Properties are not assigned')
			.to.be.equal(obj).and.to.have.property('prop').that.is.equal('value');
		});
	});
});
