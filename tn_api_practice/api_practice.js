//Get a joke and call update with value of joke.
const getJoke = async () => {
  const url = "https://icanhazdadjoke.com/";
  try {
    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
        "User-Agent":
          "My Library (https://github.com/Jo_Pickering/technative_codecademy",
      },
    });
    if (response.ok) {
      const jsonResponse = await response.json();
      const myJoke = jsonResponse.joke;
      updateJoke(myJoke);
    }
  } catch (error) {
    console.log(error);
  }
};

//update the joke
function updateJoke(myJoke) {
  //remove current
  const jokeElement = document.querySelector(".joke");
  while (jokeElement.firstChild) {
    jokeElement.removeChild(jokeElement.firstChild);
  }
  //add new
  const pElement = document.createElement("p");
  pElement.textContent = myJoke;
  jokeElement.appendChild(pElement);
}

//listen for button clicks
const updateButton = document.querySelector(".update");
updateButton.addEventListener("click", getJoke);

//also update location on page load
getJoke();
