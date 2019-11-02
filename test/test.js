let data = require('../data/data.json');
const _ = require('lodash');
var  {getByCode_Municipalite} = require('../index');

const assert = require('chai').assert;
var expect = require('chai').expect;
var should = require('chai').should();



it('should return one elment if Code_Municipalite i true  ', function(){
    var gov = getByCode_Municipalite(1111)
});
