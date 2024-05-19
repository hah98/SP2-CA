import { addBid } from "../api/listings/addBid.mjs";
import { getProfile } from "../api/profiles/read.mjs";

export function listingTemplate(listingData) {
  const listing = document.createElement("div");
  listing.classList.add("listing");
  listing.classList.add("listing-listing");

  // Title
  const title = document.createElement("h1");
  const maxLength = 10;
  const truncatedTitle =
    listingData.title.length > maxLength
      ? listingData.title.substring(0, maxLength) + "..."
      : listingData.title;
  title.innerText = truncatedTitle;
  listing.appendChild(title);
  title.classList.add("title-1");

  // Description
  const description = document.createElement("p");
  const maxDescriptionLength = 10; // Set the maximum length of the description
  const truncatedDescription =
    listingData.description.length > maxDescriptionLength
      ? listingData.description.substring(0, maxDescriptionLength) + "..."
      : listingData.description; // Truncate description if it exceeds the maximum length
  description.innerText = truncatedDescription; // Set the truncated description
  listing.appendChild(description);
  description.classList.add("description-1");

  // Media (Image)
  if (listingData.media && listingData.media.length > 0) {
    const img = document.createElement("img");
    img.src = listingData.media[0];
    img.classList.add("img-fluid-1");
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
      img.classList.add("img-fluid-2");
      mediaContainer.appendChild(img);
    });
    listing.appendChild(mediaContainer);
  }

  // Tags
  if (listingData.tags && listingData.tags.length > 0) {
    const tags = document.createElement("div");
    tags.innerText = `Tags: `;
    tags.classList.add("tags");
    listingData.tags.forEach((tag) => {
      const tagElement = document.createElement("span");
      tagElement.innerText = tag;
      tags.appendChild(tagElement);
    });
    listing.appendChild(tags);
  }


  // ID
  const idParagraph = document.createElement("p");
  idParagraph.innerText = `ID: ${listingData.id}`;
  idParagraph.classList.add("id-listing");
  listing.appendChild(idParagraph);

 

  // Additional information
  const created = document.createElement("p");
  created.innerText = `Created: ${new Date(
    listingData.created
  ).toLocaleString()}`;
  created.classList.add("created-1");
  listing.appendChild(created);

  const updated = document.createElement("p");
  updated.innerText = `Updated: ${new Date(
    listingData.updated
  ).toLocaleString()}`;
  updated.classList.add("updated-1");
  listing.appendChild(updated);

  const endsAt = document.createElement("p");
  endsAt.innerText = `Ends At: ${new Date(
    listingData.endsAt
  ).toLocaleString()}`;
  endsAt.classList.add("endsAt-1");
  listing.appendChild(endsAt);

  // Bid Info
  const bidInfo = document.createElement("p");
  const currentBidAmount =
    listingData._count && listingData._count.bids > 0
      ? listingData._count.bids
      : 0;
  bidInfo.innerText = `Bid: ${currentBidAmount}`;
  bidInfo.classList.add("bidInfo-1");
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
 bidButton.classList.add("bidButton-1");
 bidButton.addEventListener("click", async () => {
   try {
     const bidAmount = bidInput.value;

     // Check if the bid amount is too low
     if (parseFloat(bidAmount) <= parseFloat(currentBidAmount)) {
       alert(
         "Your bid must be higher than the current bid. Please enter a higher amount."
       );
       return;
     }

     await addBid(listingData.id, bidAmount);
     alert("Bid placed successfully!");
   } catch (error) {
    alert("Bid was unsuccessful!");
     console.error("Error placing bid:", error);
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
    console.error("Listing data is not an array:", listingDataList);
  }
}
