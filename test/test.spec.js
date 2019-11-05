const { expect } = require('chai');
// lib src code .. 
const PopulationTn = require('../index');
// all data source .. 
const data = require('../data/data.json');
// this data just for testing .. 
const Ariana_Data = require('../data/data-ariana.json');
const Ettadhamen_Data = require('../data/data-ettadhamen.json');




describe('PopulationTn Unit-Testing 🧼' , () => {

  it ('get all population data 👨‍👩‍👧‍👦 ..', () => {
    expect(PopulationTn.getPopulations()).to.equal(data);
  });

  it ('get specific gouvernorat data < by gouvernorat code > 🗺 ..', () => {
    let Ariana_Gouvernorat_Code = 12;
    expect(JSON.stringify(PopulationTn.getByCode_Gouvernorat(Ariana_Gouvernorat_Code))).to.equal(JSON.stringify(Ariana_Data));
  });

  it ('get specific municipalite data < by municipalite code > 🏰 ..', () => {
    let Ettadhamen_Municipalite_Code = 1216;
    expect(JSON.stringify(PopulationTn.getByCode_Municipalite(Ettadhamen_Municipalite_Code))).to.equal(JSON.stringify(Ettadhamen_Data));
  });

});
