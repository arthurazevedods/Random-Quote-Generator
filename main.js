const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const nextBtn = document.querySelector('.next');
const twitterBtn = document.querySelector('.twitter-share-button');
const copyBtn = document.querySelector('.copied');

const getQuote = async () => {
    /*
    const res = await fetch('https://type.fit/api/quotes');
    const quotes = await res.json(); 
    const num = Math.floor(Math.random()*quotes.length);
    const item = quotes[num];
    const text = item.text;
    const authorName = item.author.split(',')[0];
    */
    const res = await fetch('https://api.quotable.io/random');
    const random_quote = await res.json();
    quote.innerText = random_quote.content;
    author.innerText = random_quote.author;
    twitterBtn.href = `https://twitter.com/intent/tweet?text=${text} - ${authorName}`
};

nextBtn.addEventListener('click', getQuote);

copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(quote.innerText);
});

getQuote();