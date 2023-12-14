import { removeListing} from "../api/listings/index.mjs";
import { getListing } from "./index.mjs";


export async function setRemoveFormListener() {
  const form = document.querySelector("#removeListing");

  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  if (form) {
    const listing = await getListing(id);

    const button = form.querySelector("button");
    button.disabled = false;

    form.title.value = listing.title;
    form.description.value = listing.description;
    form.endsAt.value = listing.endsAt;
    form.tags.value = listing.tags.join(", "); 
    form.media.value = listing.media;

    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      // Ask for confirmation before deleting
      const isConfirmed = confirm("Are you sure you want to delete this listing?");
      if (!isConfirmed) {
        return;
      }

      // Delete the listing
      await removeListing(id);

      // Redirect to the main page or any other desired page after deletion
      window.location.href = "/index.html";
    });
  }
}