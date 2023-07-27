# wikipedia-seach-app

Ref: https://freshman.tech/wikipedia-javascript/

This webpage takes a keyword as input and searches it in Wikipedia using their API.
It fetched 20 results only and displays it along with the article link and preview text.
It has a loader than shows up when the result-fetching process is going on, and 
alerts when no results are found or the process fails in between.

## APIs used
* https://www.mediawiki.org/wiki/API:Search Wikipedia Search API
* https://tobiasahlin.com/spinkit/ for Loading indicator

## JavaScript concepts learnt
* Forms with input fields
* AJAX request
* Callback function
* Inserting HTML using `insertAdjacentHTML`
* Show alert box

## TODO
* Take number of results to show in one page as input from user
* Implement pagination (i.e., show results beyond 20 items)
