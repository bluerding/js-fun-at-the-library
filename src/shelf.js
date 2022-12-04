function shelfBook(book, shelf) {
  if (shelf.length >= 3){
    return shelf.length
  } else {
    shelf.unshift(book)
  } 
}

function unshelfBook(book, shelf) {
  for (i = 0; i < shelf.length; i++) 
  if (shelf[i].title === book) {
    shelf.splice(i, 1)
      return shelf
  }
}
// I want to access the value of the key 'title' within each object of the given shelf
function listTitles(shelf){
  var bookTitles = []
  for (i = 0; i < shelf.length; i++) {
    bookTitles.push(shelf[i].title)
 
  }
  return bookTitles.join(', ')
}



   
module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  //searchShelf
};