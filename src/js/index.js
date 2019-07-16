import "../style/index.scss";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 */
function render(variables = {}) {
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  let name = `${variables.name}`;
  if (variables.name == null) cover = "<h1>Default</h1>";

  let lastname = `${variables.lastname}`;
  if (variables.lastname == null) cover = "<h1>Default</h1>";

  //twitter
  let twitter = `${variables.twitter}`;
  if (variables.twitter == null)
    twitter =
    '<li><a href="https://twitter.com/alesanchezr"><i class="fa fa-twitter"></i></a></li>';

  //instagram
  let instagram = `${variables.instagram}"`;
  if (variables.instagram == null)
    instagram =
    '<li><a href="https://instagram.com/alesanchezr"><i class="fa fa-instagram"></i></a></li>';

  //linkedin
  let linkedin = `${variables.linkedin}`;
  if (variables.linkedin == null)
    linkedin =
    '<li><a href="https://linkedin.com/alesanchezr"><i class="fa fa-instagram"></i></a></li>';

  // github

  let github = `${variables.github}"`;
  if (variables.github == null)
    github =
    '<li><a href="https://github.com/alesanchezr"><i class="fa fa-github"></i></a></li>';

  // sm position

  let socialMediaPosition = "left";

  switch (variables.socialMediaPosition) {
    default:
      socialMediaPosition = "right";
      break;
    case "left":
      socialMediaPosition = "left";
      break;
    case "right":
      socialMediaPosition = "right";
      break;
  }

  // role

  let role = "Web Developer";

  switch (variables.role) {
    default:
      role = "Web Developer";
      break;
    case "Web Developer":
      role = "Web Developer";
      break;
    case "Floor Planner":
      role = "Floor Planner";
      break;

    case "Technical Writer":
      role = "Technical Writer";
      break;
  }

  // city

  let city = "Munich";

  switch (variables.city) {
    default:
      role = "Miami";
      break;
    case "Miami":
      role = "Miami";
      break;
    case "Munich":
      role = "Munich";
      break;

    case "Caracas":
      role = "Caracas";
      break;

    case "Toronto":
      role = "Toronto";
      break;
  }

  // country

  let country = "Venezuela";

  switch (variables.country) {
    default:
      country = "Venezuela";
      break;
    case "Germany":
      country = "Germany";
      break;
    case "USA":
      country = "USA";
      break;

    case "Canada":
      country = "Canada";
      break;
  }

  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>${variables.name} ${variables.lastname}</h1>
          <h2>${variables.role}</h2>
          <h3>${variables.city} ${variables.country}</h3>
          <ul class="position-${variables.socialMediaPosition}">
            <li><a href="https://twitter.com/${
              variables.twitter
            }"><i class="fa fa-twitter"></i></a></li>
            <li><a href="https://github.com/${
              variables.github
            }"><i class="fa fa-github"></i></a></li>
            <li><a href="https://twitter.com/${
              variables.twitter
            }"><i class="fa fa-twitter"></i></a></li>
            <li><a href="https://linkedin.com/${
              variables.linkedin
            }"><i class="fa fa-linkedin"></i></a></li>
          </ul>
        </div>
    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function () {
  window.variables = {
    // if includeCover is true the algorithm should
    includeCover: true,
    // this is the url of the image that will used as background for the profile cover
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    // this is the url for the profile avatar
    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg",
    // social media bar position (left or right)
    socialMediaPosition: "left",
    // social media usernames
    twitter: null,
    github: "alesanchezr",
    linkedin: null,
    instagram: null,
    name: null,
    lastname: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables);
  document.querySelectorAll(".picker").forEach(function (elm) {
    elm.addEventListener("change", function (e) {
      const attribute = e.target.getAttribute("for");
      let values = {};
      values[attribute] =
        this.value == "" ?
        null :
        this.value == "true" ?
        true :
        this.value == "false" ?
        false :
        this.value;
      render(Object.assign(window.variables, values));
    });
  });
};