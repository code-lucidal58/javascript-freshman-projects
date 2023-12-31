function afterLoad() {
    const form = document.querySelector('.js-search-form');
    form.addEventListener('submit', handleSubmit);

    async function searchWikipedia(searchQuery) {
        const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${searchQuery}`;
        const response = await fetch(endpoint, {mode: 'cors'});
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return await response.json();
    }

    function displayResults(results) {
        const searchResults = document.querySelector('.js-search-results');
        // Iterate over 'search' array in the response json
        results.query.search.forEach(result => {
            const url = `https://en.wikipedia.org/?curid=${result.pageid}`;
            searchResults.insertAdjacentHTML(
                'beforeend',
                `<div class="result-item">
                    <h3 class="result-title">
                    <a href="${url}" target="_blank" rel="noopener">${result.title}</a>
                    </h3>
                    <a href="${url}" class="result-link" target="_blank" rel="noopener">${url}</a>
                    <span class="result-snippet">${result.snippet}</span><br>
                    </div>`
            );
        });
    }

    async function handleSubmit(event) {
        // prevent page from reloading when form is submitted
        event.preventDefault();
        const inputValue = document.querySelector('.js-search-input').value;
        const searchQuery = inputValue.trim();

        const searchResults = document.querySelector('.js-search-results');
        searchResults.innerHTML = ''; // clear the previous result

        const spinner = document.querySelector('.js-spinner');
        spinner.classList.remove('hidden');
        try {
            const results = await searchWikipedia(searchQuery);
            // check the number of items received in the response
            if (results.query.searchInfo.totalhits === 0) {
                alert('No results found. Try different keywords');
            }
            displayResults(results);
        } catch (err) {
            console.log(err);
            alert('Failed to search wikipedia');
        } finally {
            spinner.classList.add('hidden');
        }
    }
}

window.onload = afterLoad;
