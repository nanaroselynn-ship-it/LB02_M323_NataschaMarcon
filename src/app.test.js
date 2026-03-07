import {
  createCard,
  addCard,
  toggleAnswer,
  rateCard,
  editCard,
  deleteCard
} from "../src/app.js";

describe("Card App Funktionen", () => {
  let testCards;

  beforeEach(() => {
    testCards = [];
  });

  test("sollte eine Karte korrekt erstellen", () => {
    const card = createCard("Frage", "Antwort");
    expect(card.question).toBe("Frage");
    expect(card.answer).toBe("Antwort");
  });

  test("sollte eine Karte hinzufügen", () => {
    const card = createCard("Frage", "Antwort");
    const updatedCards = addCard(testCards, card);
    expect(updatedCards.length).toBe(1);
  });

  test("sollte die Antwort umschalten (toggle)", () => {
    const card = createCard("Frage", "Antwort");
    const list = addCard(testCards, card);
    const updatedCards = toggleAnswer(list, card.id);
    expect(updatedCards[0].showAnswer).toBe(true);
  });

  test("sollte die Bewertung (Rating) setzen", () => {
    const card = createCard("Frage", "Antwort");
    const list = addCard(testCards, card);
    const updatedCards = rateCard(list, card.id, "gut");
    expect(updatedCards[0].ranking).toBe(1);
  });

  test("sollte eine Karte bearbeiten", () => {
    const card = createCard("Frage", "Antwort");
    const list = addCard(testCards, card);
    const updatedCards = editCard(list, card.id, "Neu", "Neu");
    expect(updatedCards[0].question).toBe("Neu");
  });

  test("sollte eine Karte löschen", () => {
    const card = createCard("Frage", "Antwort");
    const list = addCard(testCards, card);
    const updatedCards = deleteCard(list, card.id);
    expect(updatedCards.length).toBe(0);
  });
});
