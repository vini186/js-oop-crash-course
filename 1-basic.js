// const s1='hello';
// console.log(typeof s1);

// const s2 = new String ('hello');
// console.log(typeof s2);

// console.log(window);
// alert(1);
// console.log(navigator.appVersion);
//object literal
const book1 = {
    title: 'book one',
    author: 'john deo',
    year: '2013',
    getSummary: function(){
        return `${this.title} was written by${this.author} in ${this.year}`;
    }
};
// console.log(book1.getSummary());
const book2 = {
    title: 'book two',
    author: 'john deo',
    year: '2016',
    getSummary: function(){
        return `${this.title} was written by${this.author} in ${this.year}`;
    }
};

// console.log(book2.getSummary());
// console.log(Object.values(book2));
// console.log(Object.keys(book2));
