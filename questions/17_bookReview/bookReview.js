class BookReview {
    constructor (title, author) {
    this.title = title;
    this.author = author;
    this.rating = 0;
    

    }

    noteReview () {
        const addNotes = (page, note) => {

        }
    }

    addRating(num) {
        if (num > 5 || num < 0) {
            throw new Error ('Error');
        } else {
            this.rating = num; 
        }


    }
}
module.exports = { BookReview };
