/// Add bid file for handlers

import { addBid } from "../api/listings/addBid.mjs";

export function setAddBidFormListener() {
    const addBidButton = document.querySelector("#addBid");
  
    if (addBidButton) {
      addBidButton.addEventListener("click", async (event) => {
        event.preventDefault();
  
        // Replace "currentListingId" with the variable where you store the listing ID
        const listingId = currentListingId;
  
        // Send bid to the API
        try {
          await addBid(listingId);
          // Show success message
          showSuccessMessage("Bid added successfully!");
        } catch (error) {
          console.error("Error adding bid:", error);
          // Handle error or show error message
        }
      });
    }
  }
  

  