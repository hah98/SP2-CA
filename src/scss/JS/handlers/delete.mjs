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
      // Show confirmation dialog before deleting
      const confirmed = confirm(
        "Are you sure you want to delete this listing?"
      );
      if (!confirmed) return; // Exit if user cancels

      try {
        // Remove the listing from the API
        await removeListing(id);

        // Show success message to the user
        alert("Listing has been deleted successfully!");
      } catch (error) {
        console.error("Error deleting listing:", error);
        // Handle error if deletion fails
      } finally {
        // Redirect the user back to the main index page
        window.location.href = "/AuctionHouse/listings/index.html";
      }
    });
  }
}
