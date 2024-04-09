//Data about planets to be displayed

var planets = [
  {
    name: "Mercury",
    circumference: "2,500 km",
    distanceFromSun: "57,000,000 km",
  },
  {
    name: "Venus",
    circumference: "28,000 km",
    distanceFromSun: "108,000,000 km",
  },
  {
    name: "Earth",
    circumference: "40,000 km",
    distanceFromSun: "150,000,000 km",
  },
  {
    name: "Mars",
    circumference: "227,000,000km",
    distanceFromSun: "21,000km",
  },
  {
    name: "Jupiter",
    circumference: "779,000,000km",
    distanceFromSun: "440,000km",
  },
  {
    name: "Saturn",
    circumference: "1,430,000,000km",
    distanceFromSun: "365,000km",
  },
  {
    name: "Uranus",
    circumference: "2,880,000,000km",
    distanceFromSun: "160,000km",
  },
  {
    name: "Neptune",
    circumference: "4,500,000,000km",
    distanceFromSun: "154,000km",
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
}

planets.forEach(addPlanetToPage);
