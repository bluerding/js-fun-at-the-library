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
  
function listTitles(){
  
}
   
module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  // searchShelf
};