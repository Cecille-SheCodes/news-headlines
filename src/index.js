function generateNews(event) {
  event.preventDefault();

  new Typewriter(".searchedWord", {
    strings: "!Latest News Update About The Searched Word!",
    autoStart: true,
    cursor: "",
    delay: 15,
  });
  
  let newsBox = document.querySelector(".news-headlines");
 
 
  newsBox.innerHTML =
    "<h3> Title of News1</h3>" +
    "<p> Text about the news</p>" +
    "<hr>" +
    "<h3> Title of News2</h3>" +
    "<p> Text about the news</p>" +
    "<hr>" +
    "<h3> Title of News3</h3>" +
    "<p> Text about the news</p>" +
    "<hr>";
}

let searchForm = document.querySelector(".search-bar");
searchForm.addEventListener("submit", generateNews);
