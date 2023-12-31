/// Add bid file for handlers

import { addBid } from "../api/listings/addBid.mjs";

export function setAddBidFormListener() {
  const addBidButton = document.querySelector("#addBid");

  if (addBidButton) {
    addBidButton.addEventListener("click", async (event) => {
      event.preventDefault();

      const listingId = currentListingId;

      // Send bid to the API
      try {
        await addBid(listingId);
        // Show success message
        showSuccessMessage("Bid added successfully!");

        // Redirect to the main HTML page after a successful bid
        window.location.href = "/index.html";
      } catch (error) {
        console.error("Error adding bid:", error);
      }
    });
  }
}
