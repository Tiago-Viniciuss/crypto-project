function openMenu() {
    let menu = document.getElementById('menu');
    let menuComplement = document.getElementById('menuComplement');

    menu.classList.toggle('active');
    menuComplement.classList.toggle('active');

};

function showPopup() {
    let menu = document.getElementById('menu');
    let popup1 = document.getElementById('popup1');
    let popup2 = document.getElementById('popup2');
    let popup3 = document.getElementById('popup3');

    popup1.classList.toggle('show')
    popup2.classList.toggle('show')
    popup3.classList.toggle('show')

    
    
};


function closePopup1() {
    let popup1 = document.getElementById('popup1');

    popup1.classList.remove('show')
};

function closePopup2() {
    let popup2 = document.getElementById('popup2');

    popup2.classList.remove('show')
};

function closePopup3() {
    let popup3 = document.getElementById('popup3');

    popup3.classList.remove('show')
};

function showAnswer() {
    let question1 = document.getElementById('question1');

    question1.classList.toggle('answer');
}

function showAnswer2() {
    let question2 = document.getElementById('question2');

    question2.classList.toggle('answer');
}

function showAnswer3() {
    let question3 = document.getElementById('question3');

    question3.classList.toggle('answer');
}


var baseUrl = "https://api.coinranking.com/v2/coins";
var proxyUrl = "https://cors-anywhere.herokuapp.com/";
var apiKey = "coinranking6dad2fc1e431ec2173e4d059f2a9ab8500a56968b4d15fa9";

var apiUrl = `${proxyUrl}${baseUrl}`;
console.log(apiUrl);

fetch(`${proxyUrl}${baseUrl}`, { 
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-My-Custom-Header': `${apiKey}`,
      'Access-Control-Allow-Origin': "*"
    }
})
  .then((response) => {
    if (response.ok) {
      response.json().then((json) => {
        console.log(json.data);
        let coinsData = json.data.coins;

        if (coinsData.length > 0) {
          var cryptoCoin = "";
        }
        //For Loop Starts
        coinsData.forEach((coin) => {
          cryptoCoin += "<tr>";
          
          cryptoCoin += `<td> ${coin.name}</td>`;
          cryptoCoin += `<td> $${Math.round(coin.price)} Billion</td>`;
          cryptoCoin += `<td> ${coin.symbol}</td>`;"<tr>";
        });
        //For Loop Ends
        document.getElementById("data").innerHTML = cryptoCoin;
      });
    }
  })
  .catch((error) => {
    console.log(error);
  });