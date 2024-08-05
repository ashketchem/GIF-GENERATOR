const img = document.querySelector('img');
// This is the function that will be called when the user clicks on the image


/*fetch('https://api.giphy.com/v1/gifs/translate?api_key=qHqa6P5Q1605kjLVLHyE3sZYZP5w9LTM&s=dog', {mode:'cors'})
     .then(function(response) {
       return response.json()
     })
    .then(function(response) {
     img.src = response.data.images.original.url
    })
    .catch(e => {
      console.log(e)
    });*/


const gifGen = document.querySelector(".gif-gen");
const search = document.querySelector("#search");


async function gifGenerator() {
  
  const searchInput = search.value;
  const url = `https://api.giphy.com/v1/gifs/translate?api_key=qHqa6P5Q1605kjLVLHyE3sZYZP5w9LTM&s=${searchInput}`;
  const textOutput = document.querySelector(".text");
  textOutput.innerText = `Searching for ${searchInput}...`;
  
  try {   
   const gif = await fetch(url)

    if (!gif.ok) {
      throw new Error(`Network response was not ok: ${gif.statusText}`);
    } 

      const response = await gif.json();

    if (response.data.images.original.url === "") {
      textOutput.innerText = `No gif found for ${searchInput}`;
    } else if (Object.keys(response.data).length === 0) {
       console.log(`no gif found for ${searchInput}`);
      textOutput.innerText = `No gif found for ${searchInput}`;
    } else {
      img.src = response.data.images.original.url;
    console.log(`data featched successfully`, response);
  img.style.display = "block";
      textOutput.innerText = `Gif found for ${searchInput}`;
    }
    
  } catch (error) {
    console.log("there was an error while featching data: ", error);
  }
}

gifGen.addEventListener("click", gifGenerator);


