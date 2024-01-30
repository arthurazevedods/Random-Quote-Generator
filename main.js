const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const nextBtn = document.querySelector('.next');
const twitterBtn = document.querySelector('.twitter-share-button');

const getQuote = async () => {
    const res = await fetch('https://type.fit/api/quotes');
    const quotes = await res.json(); 
    const num = Math.floor(Math.random()*quotes.length);
    const item = quotes[num];
    const text = item.text;
    const authorName = item.author.split(',')[0];

    quote.innerText = text;

    author.innerText = authorName;
    twitterBtn.href = `https://twitter.com/intent/tweet?text=${text} - ${authorName}`
}   
nextBtn.addEventListener('click',getQuote)

getQuote()