let q2 = document.querySelector('#q2');
let q3 = document.querySelector('#q3');
const baseURL = 'http://numbersapi.com';

// Question 1: Makes request for number 3
$.getJSON(`${baseURL}/3?json`).then(response => {
    console.log(response)
});

// Question 2: makes request for number 3, 6, 9
$.getJSON(`${baseURL}/3,6,9?json`).then(response => {
    for (const data in response) {
        let fact = document.createElement('li');
        fact.innerText = response[data];
        q2.appendChild(fact);
    }
});

// Question 3
for (let i=0; i<4; i++) {
    $.getJSON(`${baseURL}/3?json`).then(response => {
        let fact = document.createElement('li');
        fact.innerText = response.text;
        q3.appendChild(fact);       
    });
};
