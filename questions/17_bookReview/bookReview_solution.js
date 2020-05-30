class BookReview {
    constructor(title, author) {
        this.title = title;
        this.auhtor = author;
        this.notes = {};
        this.rating = 0;
    }

    addNotes(pg, note) {
        if (this.notes[pg]) {
            this.notes[pg] = this.notes[pg] + ' ' + note;
        } else {
        this.notes[pg] = note;
        }
    }
    addRating(num) {
        if (num < 0 || num > 5) {
            throw new Error ('invalid rating') 
        }
        else {
            this.rating = num;
        }
    }
}