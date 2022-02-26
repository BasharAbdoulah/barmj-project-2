// all varibles we need
let burgerIcon = document.querySelector(".is-visible-mobile");
let mainNav = document.querySelector(".main-nav");
let closeIcon = document.querySelector(".close-icon");
let find = document.querySelector(".find");

//
burgerIcon.addEventListener("click", () => {
  mainNav.classList.add("is-active");

  closeIcon.classList.add("is-active");
});

// remove active class from nav and close icon
closeIcon.addEventListener("click", () => {
  mainNav.classList.remove("is-active");
  closeIcon.classList.remove("is-active");
});
find.onclick = function () {
  window.scrollTo({
    top: 792,
    behavior: "smooth",
  });
};

// Pets informiton Array
let pets = [
  {
    id: 1,
    name: "twin",
    type: "cat",
    sex: "male",
    age: "older",
    location: "Dubai",
    img: "/images/pets/cat.jpeg",
  },
  {
    id: 2,
    name: "Sam",
    type: "cat",
    sex: "male",
    age: "young",
    location: "Dubai",
    img: "/images/pets/small cat.jpeg",
  },
  {
    id: 3,
    name: "JGef",
    type: "dog",
    sex: "male",
    age: "young",
    location: "Istanbul",
    img: "/images/pets/dog1.jpeg",
  },
  {
    id: 4,
    name: "Flapy",
    type: "bird",
    sex: "male",
    age: "young",
    location: "Istanbul",
    img: "/images/pets/bird.jpeg",
  },
  {
    id: 5,
    name: "Fero",
    type: "cat",
    sex: "male",
    age: "older",
    location: "Cairo",
    img: "/images/pets/cat.jpeg",
  },
  {
    id: 6,
    name: "Skopy",
    type: "cat",
    sex: "male",
    age: "young",
    location: "Istanbul",
    img: "/images/pets/small cat.jpeg",
  },
  {
    id: 7,
    name: "Soan",
    type: "dog",
    sex: "male",
    age: "young",
    location: "Baghdad",
    img: "/images/pets/dog1.jpeg",
  },
  {
    id: 8,
    name: "Sedo",
    type: "bird",
    sex: "male",
    age: "young",
    location: "Baghdad",
    img: "/images/pets/bird.jpeg",
  },
  {
    id: 8,
    name: "Sedo",
    type: "bird",
    sex: "male",
    age: "young",
    location: "Cairo",
    img: "/images/pets/bird.jpeg",
  },
  {
    id: 8,
    name: "Sedo",
    type: "bird",
    sex: "male",
    age: "young",
    location: "Cairo",
    img: "/images/pets/bird.jpeg",
  },
];

// Adopted info Array
let adoptedPets = [
  {
    img: "/images/pets/bird.jpeg",
    location: "Dubai",
    story:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit Sint temporibus excepturi aut cumque  explicabo praesentium",
  },
  {
    img: "/images/pets/bird2.jpeg",
    location: "Istanbul",
    story:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit Sint temporibus excepturi aut cumque  explicabo praesentium",
  },
  {
    img: "/images/pets/bird3.jpeg",
    location: "Cairo",
    story:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit Sint temporibus excepturi aut cumque  explicabo praesentium",
  },
  {
    img: "/images/pets/dog1.jpeg",
    location: "Baghdad",
    story:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit Sint temporibus excepturi aut cumque  explicabo praesentium",
  },
  {
    img: "/images/pets/hamster.jpeg",
    location: "Baghdad",
    story:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit Sint temporibus excepturi aut cumque  explicabo praesentium",
  },
  {
    img: "/images/pets/pupy.jpeg",
    location: "Cairo",
    story:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit Sint temporibus excepturi aut cumque  explicabo praesentium",
  },
  {
    img: "/images/pets/pupy2.jpeg",
    location: "Istanbul",
    story:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit Sint temporibus excepturi aut cumque  explicabo praesentium",
  },
  {
    img: "/images/pets/small cat.jpeg",
    location: "Dubai",
    story:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit Sint temporibus excepturi aut cumque  explicabo praesentium",
  },
  {
    img: "/images/pets/pupy.jpeg",
    location: "Cairo",
    story:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit Sint temporibus excepturi aut cumque  explicabo praesentium",
  },
  {
    img: "/images/pets/bird2.jpeg",
    location: "Istanbul",
    story:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit Sint temporibus excepturi aut cumque  explicabo praesentium",
  },
  {
    img: "/images/pets/bird.jpeg",
    location: "Dubai",
    story:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit Sint temporibus excepturi aut cumque  explicabo praesentium",
  },
];

let searchBtn = document.querySelector("#search-btn");
let searchInput = document.querySelector("#search-input");
//
searchBtn.addEventListener("click", (e) => {
  adoptedPetFunction();
  e.preventDefault();
  document.querySelector(".widgets").innerHTML = "";
  // set values function
  pets.forEach((pet) => {
    if (searchInput.value === pet.location) {
      let mainDiv = document.createElement("div");
      let widgetImage = document.createElement("div");
      let petImg = document.createElement("img");
      mainDiv.className = "widget";
      widgetImage.className = "widget__image";
      widgetImage.appendChild(petImg);

      // create widget desc...
      let widgetDesc = document.createElement("div");
      let nameElement = document.createElement("h4");
      let sexElement = document.createElement("p");
      let ageElement = document.createElement("p");
      let locationElement = document.createElement("p");
      let typeElement = document.createElement("h6");

      // put classes at elements
      widgetDesc.className = "widget__desc";
      nameElement.className = "pet-name";
      sexElement.className = "pet-sex";
      ageElement.className = "pet-age";
      locationElement.className = "pet-location";
      typeElement.className = "pet-type";

      // apeend elements in desc div
      widgetDesc.appendChild(nameElement);
      widgetDesc.appendChild(typeElement);
      widgetDesc.appendChild(sexElement);
      widgetDesc.appendChild(ageElement);
      widgetDesc.appendChild(locationElement);

      //append desc and image element in main div
      mainDiv.appendChild(widgetImage);
      mainDiv.appendChild(widgetDesc);
      document.querySelector(".is-searchResults").appendChild(mainDiv);

      // Set values
      nameElement.innerHTML = pet.name;
      sexElement.innerHTML = pet.sex;
      ageElement.innerHTML = pet.age;
      locationElement.innerHTML = pet.location;
      petImg.src = pet.img;
      typeElement.innerHTML = pet.type;
    } else {
      console.log("not");
    }
  });
});

let adoptedCardContainer = document.querySelector(".adopted-cards");

function adoptedPetFunction() {
  // Empty the cards container
  adoptedCardContainer.innerHTML = "";

  // loop on the adopted animals stores
  adoptedPets.forEach((adopted) => {
    if (searchInput.value === adopted.location) {
      let card = document.createElement("div");
      let aLocation = document.createElement("div");
      let adoptedInfo = document.createElement("div");
      let adoptedImg = document.createElement("div");
      let img = document.createElement("img");
      let adoptedStory = document.createElement("p");

      // Set classes to the elements
      card.className = "card";
      adoptedInfo.className = "adopted-info";
      adoptedImg.className = "adopted-img";
      adoptedStory.className = "adopted-story";
      aLocation.className = "adopted-location";

      // Append elements in parents
      adoptedImg.appendChild(img);
      adoptedInfo.appendChild(adoptedImg);
      adoptedInfo.appendChild(adoptedStory);
      card.appendChild(aLocation);
      card.appendChild(adoptedInfo);

      // Set values for elements
      adoptedStory.innerHTML = adopted.story;
      img.src = adopted.img;
      aLocation.innerHTML = `In: ${adopted.location}`;
      adoptedCardContainer.appendChild(card);
    }
  });
}
