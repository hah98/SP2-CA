import { API_AUCTION_URL } from "../constants.mjs";

import { authFetch } from "../authFetch.mjs";

const action = "/auction/listings?_sort=created&sortOrder=desc";
/* "/listings?_bids=true&_seller=true&_tags=true&_active=true&sort=created&sortOrder=desc"; */

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
