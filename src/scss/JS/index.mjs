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

import { setRegisterFormListener } from "./handlers/register.mjs";
import { setLoginFormListener } from "./handlers/login.mjs";
/* import { setListFormListener } from "./handlers/listItem.mjs"; */
import { logout } from "./handlers/logout.mjs";
import * as listingMethods from "./handlers/viewAllListings.mjs";
import * as templates from "./templates/listings.mjs";
import { createListing } from "./api/listings/create.mjs";
import { updateListing } from "./api/listings/update.mjs";
import { removeListing } from "./api/listings/delete.mjs";

const path = location.pathname;

if (path === "/AuctionHouse/register/index.html") {
  setRegisterFormListener();
} else if (path === "/AuctionHouse/login/index.html") {
  setLoginFormListener();
} /* else if (path === "/AuctionHouse/listItem/index.html") {
  setListFormListener();
} */

document.addEventListener("DOMContentLoaded", () => {
  // Register the logout button click event
  document.getElementById("logoutButton").addEventListener("click", () => {
    logout();
  });
});

async function testTemplate() {
  const listings = await listingMethods.getListings();
  const listing = listings[5];
  const container = document.querySelector("#listings");
  templates.renderListingTemplates(listings, container);
}

testTemplate();

createListing({
  title: "Example",
  description: "Another Example Yippyyyy",
  endsAt: "2023-12-12T19:40:11.242Z",
  tags: ["example"],
  media: ["https://fastly.picsum.photos/id/124/3504/2336.jpg?hmac=B1Avp6or9Df8vpnN4kQsGNfD66j8hH3gLtootCoTw4M"],
}); 

/* updateListing();
removeListing();  */
