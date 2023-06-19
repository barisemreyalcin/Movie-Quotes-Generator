let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let movie = document.querySelector(".movie");

const quotesArr = [
    {
        quote: `"I'm gonna make him an offer he can't refuse."`,
        movie: "The Godfather"
    },
    {
        quote: `"May the Force be with you."`,
        movie: "Star Wars"
    },
    {
        quote: `"You talkin' to me?"`,
        movie: "Taxi Driver"
    },
    {
        quote: `"A census taker once tried to test me. I ate his liver with some fava beans and a nice Chianti."`,
        movie: "The Silence of the Lambs"
    },
    {
        quote: `"Mama always said life was like a box of chocolates. You never know what you're gonna get."`,
        movie: "Forrest Gump"
    },
    {
        quote: `"I see dead people."`,
        movie: "The Sixth Sense"
    },
    {
        quote: `"Keep your friends close, but your enemies closer."`,
        movie: "The Godfather Part II"
    },
    {
        quote: `"Of all the gin joints in all the towns in all the world, she walks into mine."`,
        movie: "Casablanca"
    },
    {
        quote: `"Why so serious?"`,
        movie: "The Dark Knight"
    },
    {
        quote: `"The first rule of Fight Club is: You do not talk about Fight Club."`,
        movie: "Fight Club"
    },
    {
        quote: `"Beneath this mask, there is more than just flesh, Mr. Creedy. Beneath this mask, there is an idea. And ideas are bulletproof."`,
        movie: "V for Vendetta"
    },
    {
        quote: `"With great power, comes great responsibility."`,
        movie: "Spider-Man"
    },
    {
        quote: `"If the people we love are stolen from us, the way to have them live on is to never stop loving them; buildings burn, people die, but real love is forever."`,
        movie: "The Crow"
    },
    {
        quote: `"I want to play a game."`,
        movie: "Saw"
    },
    {
        quote: `"Hope is a good thing, maybe the best of things, and no good thing ever dies."`,
        movie: "The Shawshank Redemption"
    },
];

btn.addEventListener("click", function(){
    
    let random = Math.floor(Math.random() * quotesArr.length);

    quote.innerText = quotesArr[random].quote;
    movie.innerText = quotesArr[random].movie;

})