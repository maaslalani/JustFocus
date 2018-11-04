var quotes = [
    { text: "Anyone who has never made a mistake has never tried anything new", author: "Albert Einstein" },
    { text: "If you spend too much time thinking about a thing, you’ll never get it done", author: "Bruce Lee" }, 
    { text: "My general attitude to life is to enjoy every minute of every day. I never do anything with a feeling of, 'Oh God, I’ve got to do this today'", author: "Richard Branson" }, 
    { text: "If you’re walking down the right path and you’re willing to keep walking, eventually you’ll make progress", author: "Barack Obama" },
    { text: "The way to get started is to quit talking and begin doing", author: "Walt Disney" },
    { text: "Remembering you are going to die is the best way I know to avoid the trap of thinking you have something to lose. You are already naked. There’s no reason not to follow your heart", author: "Steve Jobs" },
    { text: "Success is a lousy teacher. It seduces smart people into thinking they can’t lose", author: "Bill Gates" },
    { text: "Glory lies in the attempt to reach one’s goal and not in reaching it", author: "Mahtma Gandhi" },
    { text: "Luck is only important in so far as getting the chance to sell yourself at the right moment. After that, you’ve got to have talent and know how to use it", author: "Frank Sinatra" },
    { text: "The secret of getting ahead is getting started", author: "Mark Twain" },
    { text: "You’ve gotta keep control of your time, and you can’t unless you say no. You can’t let people set your agenda in life", author: "Warren Buffet" }
]

window.onload = function newQuote() {
    let random = Math.floor(Math.random() * quotes.length)
    let quote = quotes[random]
    document.querySelector('#quote').innerHTML = quote.text
    document.querySelector('#author').innerHTML = `&mdash; ${quote.author}`
}
