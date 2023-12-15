import { addBid } from "../api/listings/addBid.mjs";

export function listingTemplate(listingData) {
  const listing = document.createElement("div");
  listing.classList.add("listing");

  // Title
  const title = document.createElement("h2");
  title.innerText = listingData.title;
  listing.appendChild(title);
  title.classList.add("title");

  // Description
  const description = document.createElement("p");
  description.innerText = listingData.description;
  listing.appendChild(description);
  description.classList.add("description");

  // Media (Image)
  if (listingData.media && listingData.media.length > 0) {
    const img = document.createElement("img");
    img.src = listingData.media[0];
    img.classList.add("img-fluid");
    img.alt = `Image for this listing: ${listingData.title}`;
    listing.appendChild(img);
  }

  // Media (Images)
  if (listingData.media && listingData.media.length > 0) {
    const mediaContainer = document.createElement("div");
    listingData.media.forEach((mediaUrl) => {
      const img = document.createElement("img");
      img.src = mediaUrl;
      img.alt = `Image for this listing: ${listingData.title}`;
      img.classList.add("img-fluid");
      mediaContainer.appendChild(img);
    });
    listing.appendChild(mediaContainer);
  }

  // Tags
  if (listingData.tags && listingData.tags.length > 0) {
    const tags = document.createElement("div");
    tags.classList.add("tags");
    listingData.tags.forEach((tag) => {
      const tagElement = document.createElement("span");
      tagElement.innerText = tag;
      tags.appendChild(tagElement);
    });
    listing.appendChild(tags);
  }

  // Additional information
  const created = document.createElement("p");
  created.innerText = `Created: ${new Date(listingData.created).toLocaleString()}`;
  listing.appendChild(created);

  const updated = document.createElement("p");
  updated.innerText = `Updated: ${new Date(listingData.updated).toLocaleString()}`;
  listing.appendChild(updated);

  const endsAt = document.createElement("p");
  endsAt.innerText = `Ends At: ${new Date(listingData.endsAt).toLocaleString()}`;
  listing.appendChild(endsAt);

  // Bid Info
  const bidInfo = document.createElement("p");
  bidInfo.innerText = `Current Bid: ${listingData.currentBid || 0} credits`;
  listing.appendChild(bidInfo);

  // Bid Form
  const bidForm = document.createElement("form");
  bidForm.classList.add("bid-form");

  const bidInput = document.createElement("input");
  bidInput.type = "number";
  bidInput.name = "bidAmount";
  bidInput.placeholder = "Enter your bid amount";
  bidForm.appendChild(bidInput);

  const bidButton = document.createElement("button");
  bidButton.type = "button";
  bidButton.innerText = "Place Bid";
  bidButton.addEventListener("click", async () => {
    try {
      const bidAmount = bidInput.value;
      await addBid(listingData.id, bidAmount);
      alert("Bid placed successfully!");
      // Update the listing with the new bid information
      // You may need to fetch the updated listing data and re-render the template
    } catch (error) {
      console.error("Error placing bid:", error);
      // Handle error or show error message
    }
  });
  bidForm.appendChild(bidButton);

  listing.appendChild(bidForm);

  return listing;
}

// ListingRenderer.js
export function renderListingTemplate(listingDataList, parent) {
  if (Array.isArray(listingDataList)) {
    parent.append(...listingDataList.map(listingTemplate));
  } else {
    console.error('Listing data is not an array:', listingDataList);
  }
}