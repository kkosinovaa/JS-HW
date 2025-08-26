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

let findSpadeAce = deck.find(card => card.cardSuit === 'spade' && card.cardValue === 'ace');
console.log(findSpadeAce, ' - піковий туз');

let sixes = deck.filter(card => card.cardValue === '6');
console.log(sixes, ' - всі шістки');

let reds = deck.filter(card=>card.color === 'red');
console.log(reds, ' - червоні');

let diamonds = deck.filter(card=>card.cardSuit === 'diamond');
console.log(diamonds, ' - бубнові');

let clubs9plus = deck.filter(card=>card.cardSuit === 'clubs' && (card.cardValue === '9' || card.cardValue === '10'
|| card.cardValue === 'jack' || card.cardValue === 'queen' || card.cardValue === 'king'));
console.log(clubs9plus, 'трефи більше 9');

