/* 
- Definiera en array för färger: ['Hjärter', 'Ruter', 'Klöver', 'Spader']
- Definiera en array för namn: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Knekt', 'Dam', 'Kung', 'Ess']
- Skapa en tom array för din kortlek.

- För varje färg i färger-arrayen:
  - För varje namn i namn-arrayen:
    - Skapa ett kortobjekt med färg, namn och värde. Värdet kan vara indexet för namnet + 2 för siffror (eftersom array-index börjar på 0 och korten börjar på 2), 
        och en specifik siffra för knekt (11), dam (12), kung (13), och ess (1 eller 14).
    - Lägg till kortobjektet i kortleks-arrayen.

*/

class Card {
    constructor(cardType, cardName, cardValue) {
        this.cardType = cardType
        this.cardName = cardName
        this.cardValue = cardValue
    }
}

class Deck {
    constructor() {
        this.deck = []
        const cardTypes = ["Diamonds", "Hearts", "Spades", "Clubs",]
        const cardName = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"]
        const cardValue = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

        for (let cardType of cardTypes) {
            for (let i = 0; i < cardName.length; i++) {
                this.deck.push(new Card(cardType, cardName[i], cardValue[i]))
            }
        }
    }
    shuffle() {
        for (let i = this.deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]]
        }
    }

    deal() {
        return this.deck.pop()
    }
}

const deck = new Deck();
deck.shuffle();
console.log("Blandad kortlek:", deck.deck)

class Player {
    constructor(name) {
        this.name = name
        this.hand = []
        this.handValue = 0
    }

    receive(card) {
        this.hand.push(card)
        this.handValue += card.cardValue
    }
}

const slim = new Player("Slim")
const luke = new Player("Luke")

for (let i = 0; i < 5; i++) {
    slim.receive(deck.deal())
    luke.receive(deck.deal())
}

console.log("Spelare 1:", slim)
console.log("Spelare 2:", luke)
console.log("Kortlek efter utdelning:", deck.deck.length)

class Discard {
    constructor() {
        this.deck = []
    }

    receive(card) {
        this.deck.push(card)
    }
}

const discardPile = new Discard();

for (let i = 0; i < 2; i++) {
  discardPile.receive(slim.hand.shift())
  discardPile.receive(luke.hand.shift())

  slim.receive(deck.deal())
  luke.receive(deck.deal())
}

console.log("Kortlek efter omgång:", deck.deck.length)
console.log("Spelare 1 efter omgång:", slim)
console.log("Spelare 2 efter omgång:", luke)

slim.hand.forEach(card => discardPile.receive(card))
luke.hand.forEach(card => discardPile.receive(card))
slim.hand = []
luke.hand = []
slim.handValue = 0
luke.handValue = 0

discardPile.deck.forEach(card => deck.deck.push(card))
discardPile.deck = []

deck.shuffle()

console.log("Kortlek efter återställning och blandning:", deck.deck.length)
