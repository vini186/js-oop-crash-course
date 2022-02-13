class Book {
    constructor(title,author,year){
 this.title = title;
 this.author = author;
 this.year = year;

    }
    getSummary(){
        return `${this.title} was written by${this.author} in ${this.year}`;
    }

}

//magazine Subclass
class Magazine extends Book{
    constructor (title, author,year ,month){
    super(title,author,year);
    this.month = month;
}
}

//instantiate magazine
const mag1= new Magazine('mag one', 'john deo','2013','jan');
 console.log(mag1.getSummary());






