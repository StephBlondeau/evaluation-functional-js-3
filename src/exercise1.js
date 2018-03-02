const moment = require("moment");

const sortProduct = input => {
  // Parcourt de l'input avec reduce
  var product = [];
   product = input.reduce(acc, item => {
     var day = moment(item.dateAdded);
     if(day.year() > 2000){
       acc.push(item);
       return acc;
     }else{
       return acc;
     }
   },[])
};

module.exports = {
  title: "Exercise 1",
  run: sortProduct
};
