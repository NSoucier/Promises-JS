
const baseURL = 'https://deckofcardsapi.com/api/deck/';


// Question 1: Makes request for a card
$.getJSON(`${baseURL}/new/shuffle/`).then(response => {
    const deckID = response.deck_id;
    return $.getJSON(`${baseURL}/${deckID}/draw/?count=1`)
}).then(card => {
    console.log(`q1: ${card.cards[0].value} of ${card.cards[0].suit}`)
});

// Question 2: Get two cards 
$.getJSON(`${baseURL}/new/shuffle/`).then(response => {
    return $.getJSON(`${baseURL}/${response.deck_id}/draw/?count=1`)
}).then(card => {
    console.log('q2 card1:', `${card.cards[0].value} of ${card.cards[0].suit}`)
    return $.getJSON(`${baseURL}/${card.deck_id}/draw/?count=1`)
}).then(card2 => {
    console.log('q2 card2:', `${card2.cards[0].value} of ${card2.cards[0].suit}`)
});

// Question 3: 
$('button').hide();
$('button').on('click', showCard);
var deckID

$.getJSON(`${baseURL}/new/shuffle/`).then(response => {
    deckID = response.deck_id;
    $('button').show();
});

function showCard() {
    $.getJSON(`${baseURL}/${deckID}/draw/?count=1`).then(card => {
        if (card.remaining === 0) {$('button').hide()};
        console.log(card.remaining)
        $('#deck').append(`<img src="${card.cards[0].image}" id="${card.remaining}" alt="${card.cards[0].value} of ${card.cards[0].suit}">`);
        //     transform: translate(-50%, -50%) rotate(-0.25turn);
        $(`#${card.remaining}`).css('transform', `translate(-${Math.random()*50+40}%, -50%) rotate(${Math.random()}turn)`)
});
}