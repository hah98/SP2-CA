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

/* import { createListing } from "../api/listings/index.mjs";

console.log("Hello");

export function setListFormListener() {
  const form = document.querySelector("#createListing");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const form = event.target;
      const formData = new FormData(form);
      const listing = Object.fromEntries(formData.entries());

      listing.tags = listing.tags.split(",").map((tag) => tag.trim()); */
/* console.log(profile);*/

// Send it to the API
/*  createListing(listing);
    });
  }
}
 */

import { createListing } from "../api/listings/index.mjs";

console.log("Hello");

export function setListFormListener() {
  const form = document.querySelector("#createListing");

  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      const form = event.target;
      const formData = new FormData(form);
      const listing = Object.fromEntries(formData.entries());

      // Convert tags to an array
      if (listing.tags) {
        listing.tags = listing.tags.split(",").map((tag) => tag.trim());
      }

      // Ensure media is a single string
      if (listing.media) {
        listing.media = listing.media;
      }

      // Set endsAt to the current timestamp (ISO format)
      const now = new Date();
      now.setFullYear(now.getFullYear() + 1); // Set endsAt to one year from now
      listing.endsAt = now.toISOString();

      // Send it to the API
      await createListing(listing);
    });
  }
}
