let books = [
    {
        title: "Harry Potter and the Philosopher's Stone",
        pages: 320,
        authors: ["J.K. Rowling"],
        genres: ["Fantasy", "Adventure"]
    },
    {
        title: "1984",
        pages: 328,
        authors: ["George Orwell"],
        genres: ["Dystopia", "Political fiction"]
    },
    {
        title: "The Little Prince",
        pages: 96,
        authors: ["Antoine de Saint-Exupéry"],
        genres: ["Fairy tale", "Philosophy"]
    },
    {
        title: "The Lord of the Rings: The Fellowship of the Ring",
        pages: 423,
        authors: ["J.R.R. Tolkien"],
        genres: ["Fantasy", "Epic", "Adventure"]
    },
    {
        title: "Roadside Picnic",
        pages: 224,
        authors: ["Arkady Strugatsky", "Boris Strugatsky"],
        genres: ["Science fiction", "Adventure", "Drama"]
    }
];

// let biggestBook = books[0];
// for (let book of books){
//     if (book.pages > biggestBook.pages){
//         biggestBook = book;
//     }
// }
// console.log(biggestBook);

// let maxgenres = 0;
// for (let book of books){
//     if (book.genres.length > maxgenres){
//         maxgenres = book.genres.length;
//     }
// }
// for (let book of books) {
//     if (book.genres.length === maxgenres) {
//         console.log(book);
//     }
// }

// let maxlength = 0;
// for (let book of books) {
//     if (book.title.length > maxlength) {
//         maxlength = book.title.length;
//     }
// }
// for (let book of books) {
//     if (book.title.length === maxlength) {
//         console.log(book);
//     }
// }

// for (let book of books) {
//     if(book.authors.length === 2){
//         console.log(book);
//     }
// }
for (let book of books) {
    if(book.authors.length === 1){
        console.log(book);
    }   
}
