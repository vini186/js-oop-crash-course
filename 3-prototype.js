//constructor
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}


//getSummary
Book.prototype.getSummary = function(){
    return `${this.title} was written by${this.author} in ${this.year}`;
};

//get Age
Book.prototype.getAge = function() {
    const years = new Date().getFullYear()-this.year;
    return `${this.title} is ${years} years old`;
}
 // revise / change year
 Book.prototype.revise = function(newYear){
     this.year= newYear;
     this.revised = true;
 }



//instatiate on object
const book1 = new Book('book one', 'john deo','2016');
const book2 = new Book('book two','marry', '2019' );
console.log(book2);
book2.revise('2018');
console.log(book2);