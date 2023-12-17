/* Code for all posts  */
export function listingTemplateB(listingData) {
  const listing = document.createElement("div");
  listing.classList.add("listings");
  listing.classList.add("listing-card");

  // Title
  const title = document.createElement("h2");
  title.innerText = listingData.title;
  listing.appendChild(title);
  title.classList.add("title");

  // Media (Image)
  if (listingData.media && listingData.media.length > 0) {
    const img = document.createElement("img");
    img.src = listingData.media[0];
    img.classList.add("img-fluid");
    img.alt = `Image for this listing: ${listingData.title}`;

    // Navigate to the listing page on image click
    title.addEventListener("click", () => {
      navigateToListingPage(listingData.id);
    });

    // Set cursor style for title
    title.style.cursor = "pointer";

    img.addEventListener("click", () => {
      navigateToListingPage(listingData.id);
    });

    // Set cursor style for image
    img.style.cursor = "pointer";

    listing.appendChild(title);
    listing.appendChild(img);
  }

  return listing;
}

// Function to navigate to the listing page
function navigateToListingPage(listingId) {
  console.log("Listing ID:", listingId);
  window.location.href = `/AuctionHouse/viewingItem/index.html?id=${listingId}`;
}

export function renderListingTemplates(listingDataList, parent) {
  if (!parent) {
    // Return without logging an error
    return;
  }

  // Filter so only listings with images and title apear
  const filteredListings = listingDataList.filter((listing) => {
    return listing.media && listing.media.length > 0 && listing.title;
  });

  parent.append(...filteredListings.map(listingTemplateB));
}
