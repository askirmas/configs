"use strict";
// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************
Object.defineProperty(exports, "__esModule", { value: true });
// Import commands.js using ES2015 syntax:
require("@4tw/cypress-drag-drop");
require("@cypress/code-coverage/support");
require("cypress-plugin-snapshots/commands");
require("./drag-n-drop");
require("./input");
require("./visit");
chai.config.truncateThreshold = 0;
// Alternatively you can use CommonJS syntax:
// require('./commands')