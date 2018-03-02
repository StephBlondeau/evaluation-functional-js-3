const moment = require("moment");

const sortProduct = input => {
  return product = input.reduce(acc, item => {
    var day = moment(item.dateAdded);
    if(day.year() > 2000){
      var object = {
        name: item.name, year: day.year(), monthOfYear: day.monthOfYear(), quantity: item.quantity
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
