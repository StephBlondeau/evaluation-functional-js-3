const countSequence = (sequence, input) => {
  var compte = 0;
  if(sequence == "" || input == "")
  {
    return compte;
  }else{
      var newMot = input.split(sequence);
      var compte = newMot.length - 1;
      return compte;
  }
};

// const countSequence = (fx) => {
//   return sequence => {
//     return  input => {
//       var compte = 0;
//       if(sequence == "" || input == "")
//       {
//         return compte;
//       }else{
//           var newMot = input.split(sequence);
//           var compte = newMot.length - 1;
//           return compte;
//       }
//     }
//   }
// }

module.exports = {
  title: "Exercise 4",
  run: countSequence
};
