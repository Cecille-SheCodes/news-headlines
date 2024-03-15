function displayHaiku(response){
let userInstruction = document.querySelector(".keyword");
 new Typewriter(".searchedWord", {
    strings: `${userInstruction.value} by SheCodes AI`,
    autoStart: true,
    cursor: "",
    delay: 15,
  });
  
  let haikuBox = document.querySelector(".haiku-poem");
  haikuBox.innerHTML = response.data.answer
}

function generatePoem(event) {
  event.preventDefault();

  let userInstruction = document.querySelector(".keyword");
  let apiKey = "98c09939foc404ctfba2c9335a2bcf40";
  let context = "You are an expert poet who generates Haikus and follows the 5-7-5 rule for syllables. You generate 6 lines of the poem. You will follow this important format: generate 3 lines in basic HTML and then generate 1 break line and then generate the last 3 lines in basic HTML. "
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${userInstruction.value}&context=${context}&key=${apiKey}`;
  
  axios.get(apiURL).then(displayHaiku);
}

let searchForm = document.querySelector(".search-bar");
searchForm.addEventListener("submit", generatePoem);
