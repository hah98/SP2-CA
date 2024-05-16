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

      // Show confirmation dialog before updating
      const confirmed = confirm("Are you sure you want to update this listing?");
      if (!confirmed) return; // Exit if user cancels

      const formData = new FormData(form);
      const listingData = Object.fromEntries(formData.entries());
      listingData.id = id;

      listingData.tags = listingData.tags.split(",").map((tag) => tag.trim());

      try {
        // Send the updated listing data to the API
        await updateListing(listingData);
        
        // Show success message to the user
        alert("Listing has been updated successfully!");

        // Redirect the user back to the main index page
        window.location.href = "/AuctionHouse/listings/index.html";
      } catch (error) {
        console.error("Error updating listing:", error);
       
      }
    });
  }
}
