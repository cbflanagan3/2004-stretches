const { makeyourown } = require('./makeyourown');

describe('rating library function', () => {
  const library = [
    {
      title: 'The Brothers Karamazov',
      author: 'Fyodor Dostoevsky',
      rating: 5,
    },
    {
      title: 'A Tale for the Time Being',
      author: 'Ruth Ozeki',
      rating: 5,
    },
    {
      title: 'Recursion',
      author: 'Blake Crouch',
      rating: 4.3,
    }, 
    {
      title: 'Fates and Furies',
      author: 'Lauren Groff',
      rating: 3.7,

    },
    {
      title: 'Ready Player One',
      author: 'Ernest Cline',
      rating: 2.1,
    }
  ]
  it('uses Array.prototype.reduce to return the average rating of your library', () => {
    spyOn(Array.prototype, 'reduce').and.callThrough();
    makeyourown(library);
    expect(Array.prototype.reduce).toHaveBeenCalled();
  });
  it('returns an integer', () => {
    const libraryAverage = makeyourown(library);
    expect(Number.isInteger(libraryAverage)).toBe(true);
  });
  it('calculates the average correctly', () => {
    const libraryAverage = makeyourown(library);
    expect(libraryAverage).toBe(4);
  });
});
