window.addEventListener("DOMContentLoaded", () => {
  let cards = []

  cards.push(createCard("Was bedeutet HTML?", "HyperText Markup Language"))
  cards.push(createCard("Was bedeutet CSS?", "Cascading Style Sheets"))
  cards.push(createCard("Was ist JavaScript?", "Programmiersprache für Webseiten"))
  cards.push(createCard("Was bedeutet CPU?", "Central Processing Unit"))
  cards.push(createCard("Was bedeutet RAM?", "Random Access Memory"))
  cards.push(createCard("Ist Malbolge eine einfache Programmiersprache?", "Absolut nicht! Programming from hell."))

  function renderCards() {
    const container = document.getElementById("cards")
    container.innerHTML = ""

    cards = sortByRanking(cards)

    cards.forEach(card => {
      const div = document.createElement("div")
      div.className = "card"

      div.innerHTML = `
        <h3>${card.question}</h3>
        <p><small>Ranking: ${card.ranking}</small></p 

        ${card.showAnswer ? `<p>${card.answer}</p>` : ""}

        <button class="answerBtn" data-action="toggle" data-id="${card.id}">
          ${card.showAnswer ? "Antwort verstecken" : "Antwort anzeigen"}
        </button>

        <div class="actions">
          <button data-action="rate" data-id="${card.id}" data-rate="schlecht">schlecht</button>
          <button data-action="rate" data-id="${card.id}" data-rate="gut">gut</button>
          <button data-action="rate" data-id="${card.id}" data-rate="perfekt">perfekt</button>
        </div>

      
        <div class="actions">
          <button data-action="bearbeiten" data-id="${card.id}">bearbeiten</button>
          <button data-action="löschen" data-id="${card.id}">löschen</button>
        </div>
      `

      container.appendChild(div)
    })
  }

  const addBtn = document.getElementById("addBtn")
  if (addBtn) {
    addBtn.addEventListener("click", () => {
      const q = document.getElementById("qInput").value.trim()
      const a = document.getElementById("aInput").value.trim()

      if (!q || !a) {
        alert("Bitte Frage und Antwort eingeben.")
        return
      }

      cards = addCard(cards, createCard(q, a))

      document.getElementById("qInput").value = ""
      document.getElementById("aInput").value = ""

      renderCards()
    })
  }

  document.getElementById("cards").addEventListener("click", (e) => {
    const btn = e.target.closest("button")
    if (!btn) return

    const id = Number(btn.dataset.id)

    if (btn.dataset.action === "toggle") {
      cards = toggleAnswer(cards, id)
      renderCards()
      return
    }

    if (btn.dataset.action === "rate") {
      cards = rateCard(cards, id, btn.dataset.rate)
      renderCards()
      return
    }

    if (btn.dataset.action === "delete") {
      cards = deleteCard(cards, id)
      renderCards()
      return
    }

    if (btn.dataset.action === "edit") {
      const card = cards.find(c => c.id === id)
      if (!card) return

      const newQ = prompt("Neue Frage:", card.question)
      if (newQ === null) return

      const newA = prompt("Neue Antwort:", card.answer)
      if (newA === null) return

      cards = editCard(cards, id, newQ.trim(), newA.trim())
      renderCards()
      return
    }
  })

  renderCards()
})