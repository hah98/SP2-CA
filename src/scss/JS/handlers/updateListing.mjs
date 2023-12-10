import { updateListing } from "../api/listings/index.mjs";

export function setUpdateFormListener() {
  const form = document.querySelector("#updateListing");

  const url = new URL(Location.href);
  const id = url.searchParams.get("id");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const form = event.target;
      const formData = new FormData(form);
      const listing = Object.fromEntries(formData.entries());
      listing.id = id;

      listing.tags = listing.tags.split(",").map((tag) => tag.trim());
      /* console.log(profile); */

      // Send it to the API
      updateListing(listing);
    });
  }
}
