

async function fetchData() {
  const amount = document.getElementById('amountInput').value;
  const haveCurrency = document.getElementById('haveCurrency').value;
  const wantCurrency = document.getElementById('wantCurrency').value;
  const conversion = document.getElementById('conversion');

  const url = `https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency?have=${haveCurrency}&want=${wantCurrency}&amount=${amount}`;

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'e5c9e3f599msh82abb8dcb57d623p1c7051jsn5b44c30a3556',
      'X-RapidAPI-Host': 'currency-converter-by-api-ninjas.p.rapidapi.com'
    }
  };

  conversion.textContent = 'Loading...'

  try {
    //use the api
    const response = await fetch(url, options);

    if (!response.ok && haveCurrency && wantCurrency) {
      conversion.textContent = 'Please enter an amount!'
    } else if (!response.ok && !haveCurrency && !wantCurrency && amount) {
      conversion.textContent = 'Please choose your currency!'
    } else if (!response.ok && !haveCurrency && !wantCurrency && !amount) {
      conversion.textContent = 'Cannot leave blank!'
    } else {
      const data = await response.json();
      conversion.textContent = `${data.new_amount} ${wantCurrency.toUpperCase()}`;
    }
  } catch (error) {
    console.log('ERROR', error);
  }
}

function resetData() {
  document.getElementById('amountInput').value = '';
  document.getElementById('conversion').textContent = 'Cleared!';
  document.getElementById('haveCurrency').value = "";
  document.getElementById('wantCurrency').value = "";

}














//dropdown menu for currency, prompt for amount


// const url = 'https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency? have=USD&want=  wantCurrency &amount=`100`';


//  const wantCurrency = dropdown(input)

// converterConverter(haveCurrency, wantCurrency) {

//some code


//}