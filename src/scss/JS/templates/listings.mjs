/* Code for all posts  */

export function listingTemplateB(listingData) {
  const listing = document.createElement("div");
  listing.classList.add("listings");

  // Title
  const title = document.createElement("h2");
  title.innerText = listingData.title;
  listing.appendChild(title);
  title.classList.add("title");

  // Media (Image)

  if (listingData.media && listingData.media.length > 0) {
    const img = document.createElement("img");
    img.src = listingData.media[0]; // Assuming media is an array, use the first element
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

  ///

  // Media (Images)
  if (listingData.media && listingData.media.length > 0) {
    const mediaContainer = document.createElement("div");

    // For when I want to show the rest of the images in the listing
    /* listingData.media.forEach((mediaUrl) => {
    const img = document.createElement("img");
    img.src = mediaUrl;
    img.alt = `Image for this listing: ${listingData.title}`;
    img.classList.add("img-fluid"); 
    mediaContainer.appendChild(img);
  }); */

    /// Try

    ///

    listing.appendChild(mediaContainer);
  }

  return listing;
}

// Function to navigate to the listing page
function navigateToListingPage(listingId) {
  console.log("Listing ID:", listingId);
  window.location.href = `/AuctionHouse/viewingItem/index.html?id=${listingId}`;
}

export function renderListingTemplates(listingDataList, parent) {
  parent.append(...listingDataList.map(listingTemplateB));
}
