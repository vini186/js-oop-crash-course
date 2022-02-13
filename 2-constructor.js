//constructor
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.getSummary = function(){
        return `${this.title} was written by${this.author} in ${this.year}`;
    };
}

//instatiate on object
const book1 = new Book('book one', 'john deo','2016');
const book2 = new Book('book two','marry', '2019' );
console.log(book2);