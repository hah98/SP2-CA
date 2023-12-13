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
}



/// First try logout button 
/* document.addEventListener("DOMContentLoaded", () => {
  // Register the logout button click event
  document.getElementById("logoutButton").addEventListener("click", () => {
    listeners.logout();
  });
}); */


/// Sceond try logout button

document.addEventListener("DOMContentLoaded", () => {
  const logoutButton = document.getElementById("logoutButton");

  // Check if the user is logged in (profile stored in the localStorage)
  const isLoggedIn = localStorage.getItem("profile") !== null;

  if (isLoggedIn) {
    // User is logged in, show the logout button
    logoutButton.style.display = "block";
  } else {
    // User is not logged in, hide the logout button
    logoutButton.style.display = "none";
  }

  // Register the logout button click event
  logoutButton.addEventListener("click", () => {
    listeners.logout();
  });
});


/* async function oneListingTemplate() {
  const listing = await listingMethods.getListing();
  const container = document.querySelector("#listing");
  templates.renderListingTemplate(listing, container);
}

oneListingTemplate(); */


//// Second try oneListingTemplate


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



/* /* ALL LISTINGS */

async function allListingsTemplate() {
  const listings = await listingsMethods.getListings();
  const container = document.querySelector("#listings");
  templates.renderListingTemplates(listings, container);
}

allListingsTemplate();
