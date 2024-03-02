const quotesDataBase = [
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        quote: "In the midst of difficulty lies opportunity.",
        author: "Theodore Roosevelt"
    },
    {
        quote: "Believe you can, and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },
    {
        quote: "The best way to predict the future is to create it.",
        author: "Peter Drucker"
    },
    {
        quote: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson"
    },
    {
        quote: "The only limit to our realization of tomorrow will be our doubts of today.",
        author: "Franklin D.Roosevelt"
    },
    {
        quote: "Strive not to be a success, but rather to be of value.",
        author: "Albert Einstein"
    },
    {
        quote: "Success is walking from failure to failure with no loss of enthusiasm.",
        author: "Winston Churchill"
    },
]

const copy= document. getElementById("copy")
const rotate= document. getElementById("rotate")
const quote= document. getElementById("quote")
const author= document. getElementById("author")
 
console.log(quote)

// rotate.addEventListener("click", () => {
//     quote.innerText= quotesDataBase[0].quote;
//     author.innerText= quotesDataBase[0].author;
// }
// )

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

rotate.addEventListener("click", ()=>
{ 
    const randomNumber = getRandomInt(7)
    quote.innerText= quotesDataBase[randomNumber].quote;
    author.innerText= quotesDataBase[randomNumber].author;
}    
)
