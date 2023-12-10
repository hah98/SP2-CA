import { API_AUCTION_URL } from "../api/constants.mjs";

import { authFetch } from "../api/authFetch.mjs";

export async function getListing(id) {
  if (!id) {
    throw new Error("You need postID to GET");
  }
  const getListingUrl = `${API_AUCTION_URL}${action}/${id}`;

  const response = await authFetch(getListingUrl);

  return await response.json();
}
