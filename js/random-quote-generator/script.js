const quoteText = document.querySelector(".quote");
const quoteBtn = document.querySelector("button");
const authorName = document.querySelector(".author .name");
const soundBtn = document.querySelector(".sound");
const copyBtn = document.querySelector(".copy");
const twitterBtn = document.querySelector(".twitter");

// Random Quote function
function randomQuote() {
  quoteBtn.classList.add("loading");
  quoteBtn.innerText = "Loading Quote...";
  //Fetching a random quote from an external API
  fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      quoteText.innerText = result.content;
      authorName.innerText = result.author;
      quoteBtn.innerText = "New Quote";
      quoteBtn.classList.remove("loading");
    });
}

soundBtn.addEventListener("click", () => {
  // Adding a web speech API - SpeechSynthesisUtterance
  let utterance = new SpeechSynthesisUtterance(
    `${quoteText.innerText} by ${authorName.innerText}`
  );
  speechSynthesis.speak(utterance); // speak is a method of speechSynthesis
});

copyBtn.addEventListener("click", () => {
  //writeText() property writes the specified text string to the system clipboard.
  navigator.clipboard.writeText(quoteText.innerText);
});

twitterBtn.addEventListener("click", () => {
  let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
  window.open(tweetUrl, "_blank"); // Opens a new twitter tab with the quote
});

quoteBtn.addEventListener("click", randomQuote);
