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

// listItem.mjs

import { createListing } from "../api/listings/index.mjs";

export function setListFormListener() {
  const form = document.querySelector("#createListing");

  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      const form = event.target;
      const formData = new FormData(form);
      const listing = {
        title: formData.get("title"),
        description: formData.get("description"),
        endsAt: formData.get("endsAt"),
        tags: (formData.get("tags") || "").split(",").map((tag) => tag.trim()),
        media: formData.get("media")?.trim(),
      };
      // Send it to the API
      try {
        await createListing(listing);
        // Show success message
        showSuccessMessage("Listing created successfully!");
      } catch (error) {
        console.error("Error creating listing:", error);
        // Handle error or show error message
      }
    });
  }
}

function showSuccessMessage(message) {
  window.alert(message);

    // Redirecting to the main listing page
    window.location.href = "/index.html";
}
