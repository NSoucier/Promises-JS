// PART 2 - Async/Await

let q2 = document.querySelector('#q2');
let q3 = document.querySelector('#q3');
const baseURL = 'http://numbersapi.com';

// Question 1: Makes request for number 3
async function question1() {
    let response = await axios.get(`${baseURL}/3?json`);
    console.log(response.data.text);
}
question1()

// Question 2: makes request for number 3, 6, 9 and puts on page
async function question2() {
    let response = await axios.get(`${baseURL}/3,6,9?json`);
    for (const data in response.data) {
        let fact = document.createElement('li');
        fact.innerText = response.data[data];
        q2.appendChild(fact);
    }
}
question2()

// Question 3: makes request for fave number 4 times and puts on page
async function question3() {
    for (let i=0; i<4; i++) {
        let response = await axios.get(`${baseURL}/3?json`);
            let fact = document.createElement('li');
            fact.innerText = response.data.text;
            q3.appendChild(fact);       
    };
}
question3()
