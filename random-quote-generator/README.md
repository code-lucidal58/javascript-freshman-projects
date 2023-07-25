# random-quote-generator

Ref: https://freshman.tech/random-quote-machine/

This webpage fetched a quote from What Does Trump Think API, which generates a random quote,
and shows it. It has a loading animation to show the process of fetching. And, during the fetch process,
the "get quote" button is disabled. This webpage also gives an option to tweet the shown quote to Twitter.

## APIs used
* https://whatdoestrumpthink.com/api-docs/index.html
* https://tobiasahlin.com/spinkit/ For the loading animation

## JavaScript concepts learnt
* Promises, async functions and await
* Using `document.querySelector`
* Making a GET request and reading the response
* Enable/Disable buttons
* Add/remove classes to elements

## TODO
Personalise quotes using the API endpoint `GET v1/quotes/personalized?q=<YOURNAME>`
