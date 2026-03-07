// create new quiz card
function createCard(question, answer) {
  return {
    id: Date.now() + Math.floor(Math.random() * 1000),
    question,
    answer,
    ranking: 0,
    showAnswer: false
  }
}
// add new card to this list
function addCard(cards, card) {
  return [...cards, card]
}

// change question and answer of a card
function editCard(cards, id, question, answer) {
  return cards.map(c => (c.id === id ? { ...c, question, answer } : c))
}

// remove a card from the list 
function deleteCard(cards, id) {
  return cards.filter(c => c.id !== id)
}

// show or hide the answer
function toggleAnswer(cards, id) {
  return cards.map(c => (c.id === id ? { ...c, showAnswer: !c.showAnswer } : c))
}

// change ranking based on rating
function rateCard(cards, id, rating) {
  const delta = rating === "gut" ? 1 : rating === "perfekt" ? 2 : null

  return cards.map(c => {
    if (c.id !== id) return c

// if rating is bad, reset ranking
    if (rating === "schlecht") return { ...c, ranking: 0 }
    if (delta === null) return c

    return { ...c, ranking: c.ranking + delta }
  })
}

// sort cards by ranking low to high
function sortByRanking(cards) {
  return [...cards].sort((a, b) => a.ranking - b.ranking)
}


// list of all cards
let cards = []

// create example cards 
const c1 = createCard("Was bedeutet HTML?", "HyperText Markup Language")
const c2 = createCard("Was bedeutet CSS?", "Cascading Style Sheets")
const c3 = createCard("Was ist JavaScript?", "Eine Programmiersprache für Webseiten")
const c4 = createCard("Was bedeutet CPU?", "Central Processing Unit")
const c5 = createCard("Was bedeutet RAM?", "Random Access Memory")
const c6 = createCard("Ist Malbolge eine einfache Programmiersprache?", "Nein, sie gilt als eine der schwersten Programmiersprachen")

// add cards to list 
cards = addCard(cards, c1)
cards = addCard(cards, c2)
cards = addCard(cards, c3)
cards = addCard(cards, c4)
cards = addCard(cards, c5)
cards = addCard(cards, c6)

// show answer of first card
cards = toggleAnswer(cards, c1.id)

// rate card
cards = rateCard(cards, c1.id, "gut")
cards = rateCard(cards, c2.id, "perfekt")
cards = rateCard(cards, c3.id, "schlecht")

// edit a card
cards = editCard(cards, c3.id, "Was ist JavaScript?", "Eine Sprache für interaktive Web-Apps")

// delete one card
cards = deleteCard(cards, c2.id)

// print sorted card
console.log(sortByRanking(cards))

export {
  createCard,
  addCard,
  editCard,
  deleteCard,
  toggleAnswer,
  rateCard,
  sortByRanking
}