const card = createCard("Frage", "Antwort")
console.assert(card.question === "Frage", "createCard Frage falsch")
console.assert(card.answer === "Antwort", "createCard Antwort falsch")

let testCards = []


testCards = addCard(testCards, card)
console.assert(testCards.length === 1, "addCard funktioniert nicht")


testCards = toggleAnswer(testCards, card.id)
console.assert(testCards[0].showAnswer === true, "toggleAnswer funktioniert nicht")

testCards = rateCard(testCards, card.id, "gut")
console.assert(testCards[0].ranking === 1, "rateCard gut falsch")

testCards = editCard(testCards, card.id, "Neu", "Neu")
console.assert(testCards[0].question === "Neu", "editCard funktioniert nicht")

testCards = deleteCard(testCards, card.id)
console.assert(testCards.length === 0, "deleteCard funktioniert nicht")

console.log("FUNKTIONIERT HELLELUJAH!")