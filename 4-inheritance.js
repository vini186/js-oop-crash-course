//constructor
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}


//getSummary
Book.prototype.getSummary = function(){
    return `${this.title} was written by ${this.author} in ${this.year}`;
};

//magazine constructor
function magazine(title, author, year, month) {
 Book.call(this, title,author,year);
 this.month = month;
}

//inherit prototype
magazine.prototype = Object.create(Book.prototype);
  

//instantiate magazine Object
const mag1 = new magazine('mag one','john deo', '1992', 'sep');

//use magazine consructor
magazine.prototype.constructor = magazine;

console.log(mag1);

