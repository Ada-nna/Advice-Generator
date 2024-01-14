const dice = document.querySelector('#fa-dice-five');

dice.addEventListener('click', () => {

    adviceAPI()
});

const adviceAPI = async () => {
    const slipId = document.querySelector('#slipId');
    const bodyText = document.querySelector('#bodyText');

    const data = await fetch ("https://api.adviceslip.com/advice");
    const response = await data.json();

    // console.log(response);
    slipId.innerHTML = `ADVICE #${response.slip.id}`
    bodyText.innerHTML = `"${response.slip.advice}"`

};