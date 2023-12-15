/// Link the functions from other pages here

/* import * as listeners from "./handlers/index.mjs"; */

// first try
/* import * as constants from "./api/constants.mjs";

console.log(constants.API_AUCTION_URL);
console.log("Yes");
 */

// trying out loggin method

/* import * as listeners from "./handlers/index.mjs"; */

/* import * as templates from "./templates/index.mjs";
import * as postMethods from "./api/posts/index.mjs"; */

/* if (path === "/AuctionHouse/index.html") {
  listeners.setRegisterFormListener();
} else if (path === "/index.html") {
  listeners.setLoginFormListener();
} */ /* else if (path === "/profile/post/create/index.html") {
  listeners.setCreateFormListener();
} else if (path === "/profile/post/edit/index.html") {
  listeners.setUpdateFormListener();
} else if (path === "/profile/edit/index.html") {
  listeners.setUpdateProfileFormListener();
} */

// testing function //
/* async function testTemplate() {
  const posts = await postMethods.getPosts();
  const post = posts[5]; 
  const container = document.querySelector("#posts");
  templates.renderPostTemplates(posts, container);
}

testTemplate(); */

/* import { setRegisterFormListener } from "./handlers/index.mjs";
import { setLoginFormListener } from "./handlers/index.mjs";
import { setListFormListener } from "./handlers/index.mjs";
import { setUpdateFormListener } from "./handlers/index.mjs"
import { logout } from "./handlers/index.mjs"; */
import * as listeners from "./handlers/index.mjs";
import * as listingsMethods from "./handlers/index.mjs";
import * as listingMethods from "./handlers/index.mjs";
/* import * as listingsMethods from "./templates/index.mjs"; */
import * as templates from "./templates/index.mjs";



/* import {
  createListing,
  updateListing,
  removeListing,
} from "./api/listings/index.mjs"; */

const path = location.pathname;

if (path === "/AuctionHouse/register/index.html") {
  listeners.setRegisterFormListener();
} else if (path === "/AuctionHouse/login/index.html") {
  listeners.setLoginFormListener();
} else if (path === "/AuctionHouse/listItem/index.html") {
  listeners.setListFormListener();
} else if (path === "/AuctionHouse/viewingItem/edit.html") {
  listeners.setUpdateFormListener();
} else if (path === "/AuctionHouse/profile/edit.html") {
  listeners.setUpdateProfileFormListener();
} else if (path === "/AuctionHouse/delete/index.html") {
  listeners.setRemoveFormListener();
} else if (path === "/AuctionHouse/viewingItem/index.html") {
  listeners.setAddBidFormListener();
}



document.addEventListener("DOMContentLoaded", () => {
  const logoutButton = document.getElementById("logoutButton");
  const userDropdown = document.getElementById("userDropdown");
  const avatarImage = document.getElementById("headerAvatar");
  const headerCredit = document.getElementById("headerCredit");
  const headerName = document.getElementById("headerName");
  const loginLink = document.getElementById("loginLink");
  const signUpLink = document.getElementById("signUpLink");

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
    loginLink.style.display = "none";
    signUpLink.style.display = "none";
  } else {
    // User is not logged in, hide the logout button and profile details
    logoutButton.style.display = "none";
    avatarImage.style.display = "none";
    headerCredit.style.display = "none";
    headerName.style.display = "none";

    // Hide the entire dropdown bar
    userDropdown.style.display = "none";

    // Show the login and sign-up links
    loginLink.style.display = "block";
    signUpLink.style.display = "block";
  }

  // User clicks logout button
  logoutButton.addEventListener("click", () => {
    listeners.logout();
  });
});


async function oneListingTemplate() {
  // Extract the id from the URL query string
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");

  if (!id) {
    console.error("Listing ID is missing in the URL");
    return;
  }

  try {
    // Fetch the listing data using the id
    const listing = await listingMethods.getListing(id);

    // Render the listing template
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
