// Rumba - node.js framework
// Copyright (C) 2016-2017 Sergey Shpak
// <sergey.shpak.web@gmail.com>

'use strict';

var config = require('./config');
var application = require('./application');

// Returns Rumba instance (application)

module.exports = function Rumba(options) {

    // Application instance construction

    return application.create({

        // Extends Config instance with passed options

        constructor: function (cfg) {

            this.config = config.extend(cfg || {});

            return this;
        }

    }, options);
};
