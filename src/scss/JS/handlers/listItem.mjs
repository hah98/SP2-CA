/* import { createListing } from "../api/listings/index.mjs";

export function setListFormListener() {
  const form = document.querySelector("#createListing");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const form = event.target;
      const formData = new FormData(form);
      const listing = Object.fromEntries(formData.entries()); */

      /// tags form old code
     /*  post.tags = post.tags.split(",").map((tag) => tag.trim()); */
      /* console.log(profile); */

      // Send it to the API
    /*   createListing(listing);
    });
  }
} */

/// new try 06.12.2023

import { createListing } from "../api/listings/index.mjs";

export function setListFormListener() {
  const form = document.querySelector("#createListing");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const form = event.target;
      const formData = new FormData(form);
      const listing = Object.fromEntries(formData.entries());

      listing.tags = listing.tags.split(",").map((tag) => tag.trim());
      /* console.log(profile); */

      // Send it to the API
      createListing(listing);
    });
  }
}
