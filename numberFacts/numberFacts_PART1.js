// PART 1 - Promises
let q2 = document.querySelector('#q2');
let q3 = document.querySelector('#q3');
const baseURL = 'http://numbersapi.com';

// Question 1: Makes request for number 3
axios.get(`${baseURL}/3?json`).then(response => {
    console.log(response.data.text)
});

// Question 2: makes request for number 3, 6, 9 and puts on page
axios.get(`${baseURL}/3,6,9?json`).then(response => {
    for (const data in response.data) {
        let fact = document.createElement('li');
        fact.innerText = response.data[data];
        q2.appendChild(fact);
    }
});

// Question 3: makes request for fave number 4 times and puts on page
for (let i=0; i<4; i++) {
    axios.get(`${baseURL}/3?json`).then(response => {
        let fact = document.createElement('li');
        fact.innerText = response.data.text;
        q3.appendChild(fact);       
    });
};
