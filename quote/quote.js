var quotes = ["Anyone who has never made a mistake has never tried anything new <br></br> -Albert Einstein",
"If you spend too much time thinking about a thing, you’ll never get it done <br></br> -Bruce Lee", 
"My general attitude to life is to enjoy every minute of every day. I never do anything with a feeling of, “Oh God, I’ve got to do this today <br></br> -Richard Branson"]





window.onload = function newQuote(){
    var randNum = Math.floor(Math.random() * quotes.length) + 1;
    document.getElementById('quote').innerHTML = quotes[randNum]
}
