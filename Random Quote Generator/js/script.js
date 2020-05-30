/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

/**
 *  The variable quotes is used to store five obejects.
 */
var quotes = 
[ 
  {
    quote: 'The only reason for time is so that everything doesn’t happen at once.',
    source: 'Albert Einstein',
    citation: 'Article',
    year: 1940
  },
  {
    quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.',
    source: 'Nelson Mandela',
    citation: 'Book',
    year: 1960
  },
  {
    quote: 'The way to get started is to quit talking and begin doing.',
    source: 'walt Disney',
    citation: 'Wiki',
    year: 1940
  },
  {
    quote: 'Life is what happens when youre busy making other plans.',
    source: 'John Lennon',
    citation: 'Article',
    year: 1960
  },
  {
    quote: 'If life were predictable it would cease to be life, and be without flavor.',
    source: 'Eleanor Roosevelt',
    citation: 'Newspaper',
    year: 1940
  }
];

/***
 * `getRandomQuote` function
 *  
 * The variable randomNumber is assigned with a ramdomly generated number, then is returned an object from the quotes array.
***/

function getRandomQuote()
{
  let randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}
/***
 * `printQuote` function
 * 
 *  The variable randomQ is assigned getRandomQuote() function, which has the value of a random object.
 *  The variable string is assigned the variable randomQ with values to create a string.
 *  The first if statement is used to find the citation property in the randomQ then is added to the string.
 *  The second if statement is used to find the year property in the randomQ then is added to the string.
 *  The document.getElementById writes the information from the string variable to the div with the quote-box id.
***/

function printQuote()
{
  let randomQ = getRandomQuote();
  let string = "<p class='quote'> " + randomQ.quote + "</p>";
  string += "<p class='source'> " + randomQ.source;

  if('citation' in randomQ)
  {
    string += "<span class='citation'> " + randomQ.citation + "</span>";
  }

  if('year' in randomQ)
  {
    string += "<span class='year'> " + randomQ.year + "</span>";
  }
  document.getElementById('quote-box').innerHTML = string;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);