var quotes = ["Anyone who has never made a mistake has never tried anything new <br></br> -Albert Einstein",
"If you spend too much time thinking about a thing, you’ll never get it done <br></br> -Bruce Lee", 
"My general attitude to life is to enjoy every minute of every day. I never do anything with a feeling of, “Oh God, I’ve got to do this today <br></br> -Richard Branson", 
"If you’re walking down the right path and you’re willing to keep walking, eventually you’ll make progress <br></br> -Barack Obama",
"The way to get started is to quit talking and begin doing <br></br> -Walt Disney",
"Remembering you are going to die is the best way I know to avoid the trap of thinking you have something to lose. You are already naked. There’s no reason not to follow your heart <br></br> -Steve Jobs",
"Success is a lousy teacher. It seduces smart people into thinking they can’t lose <br></br> -Bill Gates",
"Glory lies in the attempt to reach one’s goal and not in reaching it <br></br> Mahtma Gandhi",
"Luck is only important in so far as getting the chance to sell yourself at the right moment. After that, you’ve got to have talent and know how to use it <br></br> -Frank Sinatra",
"The secret of getting ahead is getting started<br></br> -Mark Twain",
"You’ve gotta keep control of your time, and you can’t unless you say no. You can’t let people set your agenda in life <br></br> -Warren Buffet"]





window.onload = function newQuote(){
    var randNum = Math.floor(Math.random() * quotes.length) + 1;
    document.getElementById('quote').innerHTML = quotes[randNum]
}
