export function listingTemplateA(listingData) {
  return `<div class=""listing>${listingData.title}</div>`;
}

export function listingTemplateB(listingData) {
  const listing = document.createElement("div");
  listing.classList.add("listing");
  listing.innerText = listingData.title;

  if (listingData.media) {
    const img = document.createElement("img");
    img.src = listingData.media;
    img.alt = ` Image for this listing:  ${listingData.title}`;
    listing.append(img);
  }

  return listing;
}

export function renderlistingTemplate(listingData, parent) {
  /*  parent.innerHTML += postTemplateA(postData); */

  parent.append(listingTemplateB(listingData));
}

export function renderListingTemplates(listingDataList, parent) {
  parent.append(...listingDataList.map(listingTemplateB));
}
