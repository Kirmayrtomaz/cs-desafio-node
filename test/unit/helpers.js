import chai from 'chai';
import app from '../../index';
require('babel-polyfill');

global.app = app;
global.expect = chai.expect;

