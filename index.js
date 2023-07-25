function afterLoad(){
    const newQuoteButton = document.querySelector('#js-new-quote');
    newQuoteButton.addEventListener('click', getQuote);
    const endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';
    async function getQuote(){
        try {
            const response = await fetch(endpoint);
            if (!response.ok){
                throw Error(response.statusText);
            }
            const json = await response.json();
            console.log(json.message);
        } catch (err){
            console.log(err);
            alert('Failed to fetch new quote');
        }
    }

    function displayQuote(quote){
        const quoteText = document.querySelector('#js-quote-text');
        quoteText.textContent = quote;
    }
}

window.onload = afterLoad;


