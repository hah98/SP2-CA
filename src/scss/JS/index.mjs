import * as listeners from "./handlers/index.mjs";
import * as listingsMethods from "./handlers/index.mjs";
import * as listingMethods from "./handlers/index.mjs";
/* import { setupSearchFunctionality } from "./handlers/index.mjs"; */

import * as templates from "./templates/index.mjs";

const path = location.pathname;

if (path.includes("register")) {
  listeners.setRegisterFormListener();
} else if (path.includes("login")) {
  listeners.setLoginFormListener();
} else if (path.includes("listItem")) {
  listeners.setListFormListener();
} else if (path.includes("viewingItem")) {
  listeners.setUpdateFormListener();
} else if (path.includes("edit")) {
  listeners.setUpdateProfileFormListener();
} else if (path.includes("delete")) {
  listeners.setRemoveFormListener();
} else if (path.includes("viewingItem")) {
  listeners.setAddBidFormListener();
} else if (path.includes("/" && "listings")) {
  listeners.setupSearchFunctionality();
} 


/* else if (path.includes("edit")) {
  listeners.setgetProfileListingsFormListener();
  console.log("hello");
} */

document.addEventListener("DOMContentLoaded", () => {
  const logoutButton = document.getElementById("logoutButton");
  const userDropdown = document.getElementById("userDropdown");
  const avatarImage = document.getElementById("headerAvatar");
  const headerCredit = document.getElementById("headerCredit");
  const headerName = document.getElementById("headerName");
  const loginLink = document.getElementById("loginLink");
  const signUpLink = document.getElementById("signUpLink");

  // Check if the loginLink exists in the DOM
  if (loginLink) {
    // Check if the user is logged in (profile stored in the localStorage)
    const isLoggedIn = localStorage.getItem("profile") !== null;

    if (isLoggedIn) {
      // User is logged in, show the logout button and profile details
      logoutButton.style.display = "block";

      // Set the avatar and credits in the header
      const profile = JSON.parse(localStorage.getItem("profile"));
      if (profile && profile.avatar && profile.credits && profile.name) {
        avatarImage.src = profile.avatar;
        headerCredit.innerHTML = "Credits: " + profile.credits;
        headerName.innerHTML = "Welcome " + profile.name;
      }

      // Show the entire dropdown bar
      userDropdown.style.display = "block";

      // Hide the login and sign-up links
      if (loginLink) loginLink.style.display = "none";
      if (signUpLink) signUpLink.style.display = "none";

      /* kom tilbake hit hibo */
    } else {
      // User is not logged in, hide the logout button and profile details
      logoutButton.style.display = "none";
      avatarImage.style.display = "none";
      headerCredit.style.display = "none";
      headerName.style.display = "none";
      createPost1.style.display = "none";

      // Hide the entire dropdown bar when the user is not logged in
      userDropdown.style.display = "none";

      // Show the login and sign-up links
      if (loginLink) loginLink.style.display = "block";
      if (signUpLink) signUpLink.style.display = "block";
    }

    // User clicks logout button
    logoutButton.addEventListener("click", () => {
      listeners.logout();
    });
  }
});

async function oneListingTemplate() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");

  if (!id) {
    console.error("Listing ID is missing in the URL");
    return;
  }

  try {
    const listing = await listingMethods.getListing(id);

    const container = document.querySelector("#listing");
    templates.renderListingTemplate([listing], container);
  } catch (error) {
    console.error("Error fetching or rendering listing:", error);
  }
}

oneListingTemplate();

async function allListingsTemplate() {
  const listings = await listingsMethods.getListings();
  const container = document.querySelector("#listings");
  templates.renderListingTemplates(listings, container);
}

allListingsTemplate();

/* listeners.setupSearchFunctionality(); */
