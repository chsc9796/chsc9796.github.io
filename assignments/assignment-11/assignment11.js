//document.addEventListener('load', getQuote);

const quoteButton = document.querySelector('.new-quote');

quoteButton.addEventListener('click', getQuote);

const endpoint = 'https://official-joke-api.appspot.com/random_joke';

async function getQuote() {
    //console.log('test click worked');
    // let text = await fetch(endpoint);
    // let response = await text.text();

    // let json_response = JSON.parse(response);
    // //console.log(json_response);
    // console.log(json_response['message']);
    // //.then(text => text.text());
    // //console.log(text['message']);

    // displayQuote(json_response['message']);

    fetch(endpoint)
    .then(response => response.json())
    .then(data => displayQuote(data.punchline));
    
}

function displayQuote(x, y) {
    //const quoteBox = document.querySelector('#js-quote-test');
    //console.log('display quote working');
    //const textMessage = document.createTextNode(x);

    //quoteBox.appendChild(textMessage);

    document.getElementById('js-quote-text').textContent = x;
}

getQuote();

let counter = 1;
rotate.onclick = function(){
    if(counter == 0){
        document.getElementById("rotate").src = "./img/me.png";
        counter++;

    } else if(counter == 1){
        document.getElementById("rotate").src = "./img/meoffice.jpg";
        counter++;

    } else if(counter == 2){
        document.getElementById("rotate").src = "./img/snowZoom.jpg";
        counter = 0;

    }
    
};