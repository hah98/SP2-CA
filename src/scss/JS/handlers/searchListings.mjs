import { getListings } from "./viewAllListings.mjs";
import { renderListingTemplates } from "../templates/listings.mjs";

document.addEventListener("DOMContentLoaded", async () => {
    const listingsContainer = document.getElementById("listings");
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");
    const noListingsMessage = "<p>No listings match your search.</p>"; 
  
   
    await renderAllListings();
  
    // Adding event listener to the search button
    searchButton.addEventListener("click", async () => {
      const searchTerm = searchInput.value.trim().toLowerCase();
      if (searchTerm === "") {
        await renderAllListings();
      } else {
        // If search term is provided, filter listings by title
        const filteredListings = await filterListingsByTitle(searchTerm);
        if (filteredListings.length > 0) {
          // Remove the message if there are search results
          listingsContainer.innerHTML = ""; // Clear the container
          renderListingTemplates(filteredListings, listingsContainer);
        } else {
          // Display the message if there are no search results
          listingsContainer.innerHTML = noListingsMessage;
        }
      }
    });
  });
  
  async function renderAllListings() {
    const listings = await getListings();
    const listingsContainer = document.getElementById("listings");
    renderListingTemplates(listings, listingsContainer);
  }
  
  async function filterListingsByTitle(title) {
    const listings = await getListings();
    const filteredListings = listings.filter((listing) =>
      listing.title.toLowerCase().includes(title)
    );
   /*  console.log("Filtered listings:", filteredListings); */
    return filteredListings;
  }