//Data about planets to be displayed

var planets = [
  {
    name: "Mercury",
    circumference: "2,500 km",
    distanceFromSun: "57,000,000 km",
    atmosphere: [],
  },
  {
    name: "Venus",
    circumference: "28,000 km",
    distanceFromSun: "108,000,000 km",
    atmosphere: ["Carbon Dioxide"],
  },
  {
    name: "Earth",
    circumference: "40,000 km",
    distanceFromSun: "150,000,000 km",
    atmosphere: ["Nitrogen", "Oxygen"],
  },
  {
    name: "Mars",
    circumference: "227,000,000km",
    distanceFromSun: "21,000km",
    atmosphere: ["Carbon Dioxide"],
  },
  {
    name: "Jupiter",
    circumference: "779,000,000km",
    distanceFromSun: "440,000km",
    atmosphere: ["Hydrogen", "Helium"],
  },
  {
    name: "Saturn",
    circumference: "1,430,000,000km",
    distanceFromSun: "365,000km",
    atmosphere: ["Hydrogen", "Helium"],
  },
  {
    name: "Uranus",
    circumference: "2,880,000,000km",
    distanceFromSun: "160,000km",
    atmosphere: ["Hydrogen", "Helium"],
  },
  {
    name: "Neptune",
    circumference: "4,500,000,000km",
    distanceFromSun: "154,000km",
    atmosphere: ["Hydrogen", "Helium"],
  },
];

//Add the data to the HTML page

function addPlanetToPage(planet) {
  //create a div for the planet with relevant classes
  const planetElement = document.createElement("div");
  planetElement.classList.add("planet");
  planetElement.classList.add("planet-" + planet.name);

  //add the planet name to planet div
  const planetName = document.createElement("p");
  planetName.classList.add("planet-name");
  planetName.textContent = planet.name;
  planetElement.appendChild(planetName);

  //add planet div to the page under parent div.planets
  const planetListElement = document.querySelector(".planets");
  planetListElement.appendChild(planetElement);

  //add other planet details (create p element, give class, add text content, add this info to the div created above)
  const planetCircumference = document.createElement("p");
  planetCircumference.classList.add("planet-circumference");
  planetCircumference.textContent = "Circumference: " + planet.circumference;
  planetElement.appendChild(planetCircumference);

  //add distance from sun (same steps as above)

  const planetDistance = document.createElement("p");
  planetDistance.classList.add("planet-distance");
  planetDistance.textContent =
    "Distance from the Sun: " + planet.distanceFromSun;
  planetElement.appendChild(planetDistance);

  //add atmosphere (create element, add class and add to element div are the same.)
  const planetAtmosphere = document.createElement("p");
  planetAtmosphere.classList.add("planet-atmosphere");
  //if statement for no atmosphere for data addition
  if (planet.atmosphere.length > 0) {
    planetAtmosphere.textContent =
      "Atmosphere: " + planet.atmosphere.join(", ");
  } else {
    planetAtmosphere.textContent = "No atmosphere";
  }
  planetElement.appendChild(planetAtmosphere);
}

planets.forEach(addPlanetToPage);

//initial search & button values, starts empty - needs to be first because things relate to it!
let searchValue = "";
let filterButtonValue = "";

//loop planets with function below
const showHidePlanets = () => {
  const planetElements = document.querySelectorAll(".planet");
  planetElements.forEach(showHidePlanet);
};

//everytime the text field changes, run this needs to be declared first because it gets called later!
const showHidePlanet = (planetElement) => {
  //if search set, if planet name includes search value - show, else hide.
  const planetName = planetElement
    .querySelector(".planet-name")
    .textContent.toLowerCase();
  const planetAtmosphere = planetElement
    .querySelector(".planet-atmosphere")
    .textContent.toLowerCase();
  console.log({ searchValue, filterButtonValue, planetName, planetAtmosphere });
  if (
    planetName.includes(searchValue) &&
    planetAtmosphere.includes(filterButtonValue)
  ) {
    planetElement.classList.remove("hide");
  } else {
    planetElement.classList.add("hide");
  }
};

//check search term, update searchValue variable
const updateSearchValue = () => {
  //trim() removes whitespace before/after, toLowerCase changes to lower case
  searchValue = searchInput.value.trim().toLowerCase();
  showHidePlanets();
};

//callback function for planetButtonClick
const updateClickedButtonState = (planetButtonElement) => {
  planetButtonElement.classList.remove("currently-selected-button");
};

//function event for button on click
const planetButtonClick = (event) => {
  let clickedButton = event.currentTarget;
  console.log(clickedButton);
  //callback to function that removes selected state from all buttons
  planetButtonElements.forEach(updateClickedButtonState);
  //set selected state for clicked button
  clickedButton.classList.add("currently-selected-button");
  //if ALL selected, remove filters else set filter button variable as clicked button in lowercase
  if (clickedButton.textContent === "All") {
    filterButtonValue = "";
  } else {
    filterButtonValue = clickedButton.textContent.toLowerCase();
  }
  showHidePlanets();
};

//listen to changes in search form, needs to be after updateSearchValue because it calls it!
const searchInput = document.querySelector(".search");
searchInput.addEventListener("input", updateSearchValue);

//listener for buttons
const addPlanetButtonsListener = (planetButtonsElement) => {
  planetButtonsElement.addEventListener("click", planetButtonClick);
};

//Group all the planet buttons by their class, loop through them and attach a listener to each
const planetButtonElements = document.querySelectorAll(".atmosphere-button");
planetButtonElements.forEach(addPlanetButtonsListener);
