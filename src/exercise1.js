const moment = require("moment");

const sortProduct = input => {
  return product = input.reduce((acc, item) => {
    var day = moment(item.dateAdded);
    if(day.year() > 2000){
      if(!acc[item.name]){
          acc[item.name] = []
      }
      var object = {
        monthOfYear: day.month(), name: item.name, quantity: item.quantity, year: day.year()
      };
      acc[item.name].push(object);
    }
    return acc;
  }, {});
};

module.exports = {
  title: "Exercise 1",
  run: sortProduct
};
