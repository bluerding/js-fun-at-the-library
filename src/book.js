function createTitle(title) {
  return ("The " + title)
}

function buildMainCharacter(name, age, pronouns) {
  return {
    name: name,
    age: age,
    pronouns: pronouns
  }
}

function saveReview(newReview, existingReview) {
  if(existingReview.indexOf(newReview) === -1){
    existingReview.push(newReview)
  }
}

function calculatePageCount(title){
  return(title.length * 20)
}

function writeBook(title, mainCharacter, genre) {
  return book = {
    title: title,
    genre: genre,
    mainCharacter: mainCharacter,
    pageCount: calculatePageCount(title)
  }
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  // editBook
}