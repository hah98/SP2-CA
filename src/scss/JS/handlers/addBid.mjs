/// Add bid file for handlers

// Add bid file for handlers

import { addBid } from "../api/listings/addBid.mjs";

export function setAddBidFormListener() {
  document.addEventListener("DOMContentLoaded", () => {
    const addBidButton = document.querySelector("#addBid");

    if (addBidButton) {
      addBidButton.addEventListener("click", async (event) => {
        event.preventDefault();

        // Extract the listing ID from the URL
        const urlParams = new URLSearchParams(window.location.search);
        const currentListingId = urlParams.get("id");

        try {
          // Send bid to the API
          await addBid(currentListingId);

          // Show success message
          alert("Bid added successfully!"); // Use alert for simplicity
        } catch (error) {
          console.error("Error adding bid:", error);
          // Handle error or show error message
        }
      });
    }
  });
}
