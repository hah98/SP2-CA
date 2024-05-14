import { updateListing } from "../api/listings/index.mjs";
import { getListing } from "./index.mjs";

export async function setUpdateFormListener() {
  const form = document.querySelector("#updateListing");

  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  if (form) {
    const listing = await getListing(id);

    const button = form.querySelector("button");
    button.disabled = true;

    form.title.value = listing.title;
    form.description.value = listing.description; 
    form.endsAt.value = listing.endsAt; 
    form.tags.value = listing.tags;
    /* form.media.value = listing.media; */

    button.disabled = false;

    form.addEventListener("submit", async (event) => {
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
