import cardList from "./cardList.js";

const clickMe = () => {
  alert("Click!");
};

const submitForm = () => {
  let formData = {};
  formData.title = $("#title").val();
  formData.image = $("#image").val();
  formData.question = $("#question").val();
  formData.link = $("#link").val();
  formData.desciption = $("#description").val();

  console.log("Form Data Submitted: ", formData);
  addProjectToApp(formData);
};

const addProjectToApp = (project) => {
  $.ajax({
    url: "/api/projects",
    data: project,
    type: "POST",
    success: (result) => {
      alert(result.message);
      location.reload();
    },
  });
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

const getProjects = () => {
  $.get("/api/projects", (response) => {
    if (response.statusCode == 200) {
      addCards(response.data);
    }
  });
};

$(document).ready(function () {
  $(".materialboxed").materialbox();
  $("#formSubmit").click(() => {
    submitForm();
  });
  getProjects();
  $(".modal").modal();
});
