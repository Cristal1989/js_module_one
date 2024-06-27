// ========================== this =================

//Петя бежит быстро, потому что Петя пытается поймать поезд
const petya = {
  username: 'Petya',
  showName() {
    console.log(petya.username);
  },
};

console.log(petya.showName()); //"Petya"

// Петя бежит быстро, потому что он (this) пытается поймать поезд

const petya = {
  username: 'Petya',
  showName() {
    console.log(this.username);
  },
};
console.log(petya.showName()); //"Petya"

// ===================================

const bookShelf = {
  author: ['Stiven King', 'Boris Akunin'],
  getAuthor() {
    return this.author;
  },
  addAuthor(newAuthor) {
    this.author.push(newAuthor);
  },
};

console.log(bookShelf.getAuthor()); //[ 'Stiven King', 'Boris Akunin' ]
bookShelf.addAuthor('Doncova');
console.log(bookShelf.getAuthor()); //[ 'Stiven King', 'Boris Akunin', 'Doncova' ]
