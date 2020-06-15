// Make your own stretch
// try to solve for a challenging problem
// write at minium three test specs
// Jest documentation: https://github.com/sapegin/jest-cheat-sheet
// submit the stretch with solution code and test specs passing

const makeyourown = (library) => {
  return Math.round(
    library.reduce((average, book) => {
      return average + book.rating}, 0) / library.length
     

    )
  
  // console.log('make your own stretch!');
};

module.exports = { makeyourown };
