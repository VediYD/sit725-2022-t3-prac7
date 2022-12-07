import cardList from "./cardList.js";

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

  addCards(cardList.cardList);
  $(".modal").modal();
});