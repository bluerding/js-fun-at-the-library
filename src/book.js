function createTitle(title) {
  return ("The " + title)
}
createTitle("Storm's Awakening")

createTitle("Dancing Sushi")
createTitle("Dragon in the Summer")
createTitle("Teenage Ghoul")

function buildMainCharacter(name, age, pronouns) {
  return {
    name: name,
    age: age,
    pronouns: pronouns
  }
}



module.exports = {
  createTitle,
  buildMainCharacter,
  // saveReview,
  // calculatePageCount,
  // writeBook,
  // editBook
}