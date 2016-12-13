// Rumba - node.js framework
// Copyright (C) 2016-2017 Sergey Shpak
// <sergey.shpak.web@gmail.com>

'use strict';

// Implements basic helper methods and utilities

module.exports = {

    // Utilities instance construction

    constructor: function Utils() { return this; },

    // Implements pure 'prototype' inheritance
    // Creates new Object instance, with current context ('this') as prototype
    // Assigns passed properties to the created object instance

    extend: function (props) {

        var object = Object.create(this || null);

        props && this.assign(object, props);

        return object;
    },

    // Extends current context ('this') with passed properties
    // Calls 'constructor' method of created instance with options
    // Returns constructor's result (if exists) or created object

    create: function (props /*, ...options */) {

        var object = this.extend(props);

        return object.hasOwnProperty('constructor') &&
        object.constructor.apply(object, Array.prototype.slice.call(arguments,1)) || object;
    },


    // Assigns passed properties to the target object
    // Returns the target object

    assign: function (target /*, ...properties */) {

        Array.prototype.slice.call(arguments, 1).forEach(function (source) {
            Object.keys(source).forEach(function (property) {
                target[property] = source[property];
            });
        });

        return target;
    }
};
