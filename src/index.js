function displayNews(response){

 new Typewriter(".searchedWord", {
    strings: "!Latest News Update!",
    autoStart: true,
    cursor: "",
    delay: 15,
  });
  
  let newsBox = document.querySelector(".news-headlines");
  let html = ""; // Create an empty string to store the generated HTML

  for (let i = 1; i <= 10; i++) {
    html += "<h3>" + response.data.articles[i].title + "</h3>" +
    "<p>" + response.data.articles[i].description + "</p>" +
    '<a href="' + response.data.articles[i].url + '" target="_blank">More</a>' +
    "<hr>";
  }

  newsBox.innerHTML = html; // Update the newsBox with the generated HTML
}

function generateNews(event) {
  event.preventDefault();

  let userInstruction=document.querySelector(".keyword")
  let apiKey = "7321c362fd5f43b9933eee0ceed59ee3";
  let apiURL = `https://newsapi.org/v2/everything?q=${userInstruction.value}&language=en&sortBy=popularity&apiKey=${apiKey}`;
  axios.get(apiURL).then(displayNews);
}

let searchForm = document.querySelector(".search-bar");
searchForm.addEventListener("submit", generateNews);
