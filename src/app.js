function createCard(question, answer) {
  return {
    id: Date.now() + Math.floor(Math.random() * 1000),
    question,
    answer,
    ranking: 0,
    showAnswer: false
  }
}

function addCard(cards, card) {
  return [...cards, card]
}

function editCard(cards, id, question, answer) {
  return cards.map(c => (c.id === id ? { ...c, question, answer } : c))
}

function deleteCard(cards, id) {
  return cards.filter(c => c.id !== id)
}

function toggleAnswer(cards, id) {
  return cards.map(c => (c.id === id ? { ...c, showAnswer: !c.showAnswer } : c))
}

function rateCard(cards, id, rating) {
  const delta = rating === "gut :) " ? 1 : rating === "perfekt wooow :D " ? 2 : null

  return cards.map(c => {
    if (c.id !== id) return c

    if (rating === "katastrophe Antwort :( ") return { ...c, ranking: 0 }
    if (delta === null) return c

    return { ...c, ranking: c.ranking + delta }
  })
}

function sortByRanking(cards) {
  return [...cards].sort((a, b) => a.ranking - b.ranking)
}



let cards = []


const c1 = createCard("Was bedeutet HTML?", "HyperText Markup Language")
const c2 = createCard("Was bedeutet CSS?", "Cascading Style Sheets")
const c3 = createCard("Was ist JavaScript?", "Eine Programmiersprache für Webseiten")
const c4 = createCard("Was bedeutet CPU?", "Central Processing Unit")
const c5 = createCard("Was bedeutet RAM?", "Random Access Memory")
const c6 = createCard("Ist Malbolge eine einfache Programmiersprache?", "Nein, sie gilt als eine der schwersten Programmiersprachen")


cards = addCard(cards, c1)
cards = addCard(cards, c2)
cards = addCard(cards, c3)
cards = addCard(cards, c4)
cards = addCard(cards, c5)
cards = addCard(cards, c6)

cards = toggleAnswer(cards, c1.id)


cards = rateCard(cards, c1.id, "pgut :)")
cards = rateCard(cards, c2.id, "perfekt wooow :D ")
cards = rateCard(cards, c3.id, "katastrophe Antwort :( ")


cards = editCard(cards, c3.id, "Was ist JavaScript?", "Eine Sprache für interaktive Web-Apps")


cards = deleteCard(cards, c2.id)


console.log(sortByRanking(cards))