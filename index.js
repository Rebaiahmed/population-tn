let array = require("./data/data.json");
const _ = require("lodash");

const getByCode_Gouvernorat = (code) => {
    if(Number(code) && code >=0 && !isNaN(code))
    if(array.filter(gov => gov.Code_Gouvernorat ==code).length>0)
       return array.filter(gov => gov.Code_Gouvernorat ==code);
    else 
        return "Governorate not found with this code ";   
    else {throw  "Parameter is not a number!"}
};


const getByCode_Municipalite = (code) => {
  if(Number(code) && code >=0 && !isNaN(code))
  return _.find(array, (obj)=> { return obj.Code_Municipalite == code ? obj : null})  
  else {throw  "Parameter is not a number!"}
};



const getPopulations = () => {
  return array;
};

module.exports = {
  getPopulations,getByCode_Gouvernorat,getByCode_Municipalite
};