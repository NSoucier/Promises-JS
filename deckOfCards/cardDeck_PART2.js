// PART 2 - Async/Await

const baseURL = 'https://deckofcardsapi.com/api/deck/';


// Question 1: Makes request for a card
async function question1() {
    let data = await axios.get(`${baseURL}/new/shuffle/`);
    let card = await axios.get(`${baseURL}/${data.data.deck_id}/draw/?count=1`);
    console.log(`q1: ${card.data.cards[0].value} of ${card.data.cards[0].suit}`);
}
question1();
    

// Question 2: Get two cards 
async function question2() {
    let data = await axios.get(`${baseURL}/new/shuffle/`);
    let card1 = await axios.get(`${baseURL}/${data.data.deck_id}/draw/?count=1`)
    console.log('q2 card1:', `${card1.data.cards[0].value} of ${card1.data.cards[0].suit}`)
    let card2 = await axios.get(`${baseURL}/${data.data.deck_id}/draw/?count=1`)
    console.log('q2 card2:', `${card2.data.cards[0].value} of ${card2.data.cards[0].suit}`)
}
question2()

// Question 3: 
$('button').hide();
$('button').on('click', showCard);
var deckID;

async function shuffle() {
    let response = await axios.get(`${baseURL}/new/shuffle/`)
    $('button').show();
    deckID = response.data.deck_id;
}

shuffle()

async function showCard() {
    let card = await axios.get(`${baseURL}/${deckID}/draw/?count=1`)
    if (card.data.remaining === 0) {$('button').hide()};
    $('#deck').append(`<img src="${card.data.cards[0].image}" id="${card.data.remaining}" alt="${card.data.cards[0].value} of ${card.data.cards[0].suit}">`);
    //     transform: translate(-50%, -50%) rotate(-0.25turn);
    $(`#${card.data.remaining}`).css('transform', `translate(-${Math.random()*50+40}%, -50%) rotate(${Math.random()}turn)`)
}