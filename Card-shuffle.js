let amount = 0;
let deckNumber = [];
let deck = [];

while (amount <  52) {
    deckNumber.push(amount);
    amount += 1
}

deckNumber.sort(() => Math.random() - 0.5);

let kind = [];
let number = [];

for (let i of deckNumber) {
    const kindValue = i % 4;
    if (kindValue === 0) {
        kind.push("♣");
    }
    else if (kindValue === 1) {
        kind.push("♦");
    }
    else if (kindValue === 2) {
        kind.push("♥")
    }
    else {
        kind.push("♠")
    }
}

for (let j of deckNumber) {
    let nrValue = j % 13;
    nrValue += 1;
    if (nrValue === 1) {
        number.push("A");
    } else if (nrValue === 11) {
        number.push("J");
    } else if (nrValue === 12) {
        number.push("Q");
    } else if (nrValue === 13) {
        number.push("K");
    } else {
        number.push(nrValue);
    }
}

deck = number.map((e, i) => e + kind[i]);

console.log(deck)