/* Code for one Listing */

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
    img.src = listingData.media[0]; // Assuming media is an array, use the first element
    img.classList.add("img-fluid"); 
    img.alt = `Image for this listing: ${listingData.title}`;
    listing.appendChild(img);
  }

  /// 

  // Media (Images)
if (listingData.media && listingData.media.length > 0) {
  const mediaContainer = document.createElement("div");

  // For when I want to show the rest of the images in the listing
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

  return listing;
}

/* export function renderListingTemplate(listingDataList, parent) {
  parent.append(...listingDataList.map(listingTemplate));
} */

export function renderListingTemplate(listingDataList, parent) {
  if (Array.isArray(listingDataList)) {
    parent.append(...listingDataList.map(listingTemplate));
  } else {
    console.error('Listing data is not an array:', listingDataList);
  }
}