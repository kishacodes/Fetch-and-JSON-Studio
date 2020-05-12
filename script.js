// TODO: add code here
window.addEventListener("load", function () {
  const fetchPromise = fetch(
    "https://handlers.education.launchcode.org/static/astronauts.json"
  );
  fetchPromise.then(function (response) {
    const jsonPromise = response.json();
    jsonPromise.then(function (json) {
      console.log(json);
      const container = document.getElementById("container");
      for (let i = 0; i < json.length; i++) {
        container.innerHTML += `
        <div class="astronaut">
      <h3> ${json[i].firstName} ${json[i].lastName}</h3>
      <ul>
      <div class="bio">
      <li>Hours in Space: ${json[i].hoursInSpace}</li>
      <li>Active: ${json[i].active}</li>
      <li>Skills: ${json[i].skills}</li>
      </ul>
      <img class="avatar" src="${json[i].picture}"</img>
      `;
        i = (i + 1) % json.length;
      }
    });
  });
});
