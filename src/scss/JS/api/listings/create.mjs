import { API_AUCTION_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "/listings";
const method = "POST";

export async function createListing(listingData) {
  const createListingURL = API_AUCTION_URL + action;

  const mediaArray = listingData.media ? [listingData.media] : [];

  const response = await authFetch(createListingURL, {
    method,
    body: JSON.stringify({
      ...listingData,
      media: mediaArray,
    }),
  });

  const createdListing = await response.json();
  console.log("Created Listing:", createdListing);

  return createdListing;
}
