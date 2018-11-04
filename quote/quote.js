var quotes = [
    { text: "Anyone who has never made a mistake has never tried anything new.", author: "Albert Einstein" },
    { text: "If you spend too much time thinking about a thing, you’ll never get it done.", author: "Bruce Lee" }, 
    { text: "My general attitude to life is to enjoy every minute of every day. I never do anything with a feeling of, 'Oh God, I’ve got to do this today'.", author: "Richard Branson" }, 
    { text: "If you’re walking down the right path and you’re willing to keep walking, eventually you’ll make progress.", author: "Barack Obama" },
    { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { text: "Remembering you are going to die is the best way I know to avoid the trap of thinking you have something to lose. You are already naked. There’s no reason not to follow your heart.", author: "Steve Jobs" },
    { text: "Success is a lousy teacher. It seduces smart people into thinking they can’t lose.", author: "Bill Gates" },
    { text: "Glory lies in the attempt to reach one’s goal and not in reaching it.", author: "Mahtma Gandhi" },
    { text: "Luck is only important in so far as getting the chance to sell yourself at the right moment. After that, you’ve got to have talent and know how to use it.", author: "Frank Sinatra" },
    { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
    { text: "You’ve gotta keep control of your time, and you can’t unless you say no. You can’t let people set your agenda in life.", author: "Warren Buffet" },
    { text: "It is no good getting furious if you get stuck. What I do is keep thinking about the problem but work on something else.", author: "Steven Hawking" },
    { text: "Don’t count the days. Make the days count.", author: "Muhammad Ali" },
    { text: "You can, you should, and if you’re brave enough to start, you will.", author: "Steven King" },
    { text: "If you have to eat two frogs, eat the ugliest one first", author: "Brian Tracy" },
    { text: "Just do it!", author: "Shia LaBeouf" },
    { text: "Avoid extremes; forbear resenting injuries so much as you think they deserve.", author: "Benjamin Franklin" },
    { text: "All things will be produced in superior quantity and quality, and with greater ease, when each man works… without meddling with anything else.", author: "Plato" },
    { text: "It is well to be up before daybreak, for such habits contribute to health, wealth, and wisdom.", author: "Aristotle" },
    { text: "Tomorrow becomes never. No matter how small the task, take the first step now!", author: "Tim Ferris" },
    { text: "Never mistake motivation for action.", author: "Ernest Hemingway" },
    { text: "Art is the elimination of the unnecessary.", author: "Pablo Picasso" },
    { text: "In life, people tend to wait for good things to come to them. And by waiting, they miss out.", author: "Neil Strauss" },
    { text: "Big ideas come from the unconscious… But your unconscious has to be well informed, or your idea will be irrelevant. Stuff your conscious mind with information, then unhook your rational thought process.", author: "David Ogilvy" },
    { text: "People can be really smart or have skills that are directly applicable, but if they don’t really believe in it, then they are not going to really work hard.", author: "Mark Zuckerburg" },
    { text: "The only way you are going to have success is to have lots of failures first.", author: "Sergey Brin" },
    { text: "‘Worrying gets you nowhere. If you turn up worrying about how you’re going to perform, you’ve already lost.", author: "Usain Bolt" },
    { text: "Improved productivity means less human sweat, not more.", author: "Henry Ford" },
    { text: "Don’t ask. Act! Action will delineate and define you.", author: "Thomas Jefferson" },
]

window.onload = function newQuote() {
    let random = Math.floor(Math.random() * quotes.length)
    let quote = quotes[random]
    document.querySelector('#quote').innerHTML = quote.text
    document.querySelector('#author').innerHTML = `&mdash; ${quote.author}`
}
