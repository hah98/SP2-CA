import { API_AUCTION_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "/listings";

export async function getListing(id) {
  if (!id) {
    throw new Error("You need postID to GET");
  }
  const getListingUrl = `${API_AUCTION_URL}${action}/${id}`;
 
  const response = await authFetch(getListingUrl);
  const listingData = await response.json();

  return listingData;
}