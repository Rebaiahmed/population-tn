let array = require("./data/data.json");

const randomNum = () => {
  return Math.floor(Math.random() * array.length);
};




const getByCode_Gouvernorat = (code) => {
    if(Number(code) && code >=0 && !isNaN(code))
    if(array.filter(gov => gov.Code_Gouvernorat ==code).length>0)
       return array.filter(gov => gov.Code_Gouvernorat ==code);
    else 
        return "Governorate not found with this code ";   
    else {throw  "Parameter is not a number!"}
};



const getAll = () => {
  return array;
};

module.exports = {
    getAll,getByCode_Gouvernorat
};