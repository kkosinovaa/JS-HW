let suits = ['spade', 'diamond', 'heart', 'clubs'];
let values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

let deck = [];

for (let suit of suits) {
    for (let value of values) {
        let color
        if (suit === 'spade' || suit === 'clubs') {
            color = 'black';
        }else if (suit === 'heart' || suit === 'diamond') {
            color = 'red';
        }
        deck.push({
            cardSuit: suit,
            cardValue: value,
            color: color
        });
    }
}

console.log(deck);

let grouped = deck.reduce((acc, card) => {
    switch (card.cardSuit) {
        case 'spade':
            acc.spades.push(card);
            break;
        case 'diamond':
            acc.diamonds.push(card);
            break;
        case 'heart':
            acc.hearts.push(card);
            break;
        case 'clubs':
            acc.clubs.push(card);
            break;
    }
    return acc;
}, { spades: [], diamonds: [], hearts: [], clubs: [] });

console.log(grouped);