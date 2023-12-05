import { API_AUCTION_URL } from "../constants.mjs";

import { authFetch } from "../authFetch.mjs";

const action = "/listings";
const method = "get";
/* const method = "delete"; */

export async function getListings() {
  const getListingsUrl = `${API_AUCTION_URL}${action}`;

  const response = await authFetch(getListingsUrl);

  return await response.json();
}

export async function getListing(id) {
  if (!id) {
    throw new Error("You need postID to GET");
  }
  const getListingUrl = `${API_AUCTION_URL}${action}/${id}`;

  const response = await authFetch(getListingUrl);

  return await response.json();
}


