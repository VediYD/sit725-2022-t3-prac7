// function changeText() {
//   var textsArray = ["Text 1", "Text 2", "Text 3", "Text 4", "Text 5"];
//   var number = getRandomNumberBetween(0, textsArray.length - 1);
//   console.log("Index: ", number);
//   document.getElementById("heading").innerHTML = textsArray[number];
// }

// function getRandomNumberBetween(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

const cardList = [
  {
    title: "About Universes",
    image: "images/SpaceWhale3.jpg",
    question: "How was the universe created?",
    link: "https://www.sciencehistory.org/sites/default/files/styles/twitter_card/public/distillations_magazine/whaleinspace.jpg?itok=QlcFOC0T",
    desciption:
      "Everyone has choices; we all make choices, and when you choose, there are two or more options you are selecting from. The other option(s) create(s) a parallel universe as the Space Whale flew through space and time to re-ignite a new universe where you would eventually make that/those other choices.",
  },
  {
    title: "About SpaceWhales",
    image: "images/SpaceWhale4.jpg",
    question: "What are these creatures?",
    link: "https://www.laphamsquarterly.org/sites/default/files/images/roundtable/rt_main_space_whale.jpg",
    desciption:
      "The Space Whale is a magical creature of space, meaning that it can do whoever and whatever they want. The Space Whale can and cannot be viewed, as it is a two dimensional creature, and a three dimensional creature, and when it wants to, a fourth dimensional creature.",
  },
];

const clickMe = () => {
  alert("Click!");
};

const submitForm = () => {
  let formData = {};
  formData.first_name = $("#first_name").val();
  formData.last_name = $("#last_name").val();
  formData.password = $("#password").val();
  formData.email = $("#email").val();

  console.log("Form Data Submitted: ", formData);
};

const addCards = (items) => {
  items.forEach((item) => {
    let itemToAppend = `
    <div class="col s4 center-align">
      <div class="card blue-grey darken-1 medium">
        <div class="card-image wave-effects waves-block waves-light">
          <img class="activator" src="${item.image}" />
        </div>
        <div class="card-content white-text">
          <span class="card-title">${item.title}</span>
          <p>${item.question}</p>
        </div>
        <div class="card-action">
          <a
            target="_blank"
            href="https://inserttitlespacewhaledesires.weebly.com/"
            >SpaceWhales</a
          >
          <a
            target="_blank"
            href="${item.link}"
            >Image Source</a
          >
        </div>
        <div class="card-reveal">
          <span class="card-title grey-text text-darken-4"
            >Greetings<i class="material-icons right">close</i></span
          >
          <p class="card-text" style="color: black">
            ${item.desciption}
          </p>
        </div>
      </div>
    </div>
    `;
    $("#card-section").append(itemToAppend);
  });
};

$(document).ready(function () {
  $(".materialboxed").materialbox();

  // $("#clickMeButton").click(() => {
  //   clickMe();
  // });

  $("#formSubmit").click(() => {
    submitForm();
  });

  addCards(cardList);
  $(".modal").modal();
});
