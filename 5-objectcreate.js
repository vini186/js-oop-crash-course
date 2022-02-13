//Object Of Protos
const bookProtos = {
    getSummary: function(){
        return `${this.title} was written by${this.author} in ${this.year}`;
    },
    getAge: function() {
        const years = new Date().getFullYear()-this.year;
        return `${this.title} is ${years} years old`;
 
    }
};
  //create object
//   const book1 = Object.create(bookProtos);
//   book1.title = 'book one';
//   book1.author = 'john deo';
//   book1.year = '2013';
const book1 = Object.create(bookProtos, {
    title: {value:'book one'},
    author:{value: 'johndeo'},
    year: {value : '1992'}
});
  console.log(book1);

