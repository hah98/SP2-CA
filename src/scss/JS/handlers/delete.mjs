import { removeListing } from "../api/listings/delete.mjs";
import { getListing } from "./index.mjs";

export async function setRemoveFormListener() {
  const form = document.querySelector("#removeListing");

  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  if (form) {
    const listing = await getListing(id);

    if (!listing) {
      console.error("Listing data not found");
      return;
    }

    form.title.value = listing.title;
    form.description.value = listing.description;
    form.tags.value = listing.tags.join(", ");
    form.media.value = listing.media;

    const button = form.querySelector("button");
    button.addEventListener("click", async () => {
      if (confirm("Are you sure you want to delete this listing?")) {
        try {
          await removeListing(id);
          window.location.href = "/index.html"; // Redirect after successful deletion
        } catch (error) {
          console.error("Error deleting listing:", error);
          // Handle error if deletion fails
        }
      }
    });
  }
}
