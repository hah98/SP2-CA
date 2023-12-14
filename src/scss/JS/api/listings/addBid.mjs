// This is the addBid file

// This is the addBid file

import { API_AUCTION_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "/listings";
const action1 = "/bids";
const method = "POST";

export async function addBid(listingId) {
  if (!listingId) {
    throw new Error("You need a listing ID to add a bid.");
  }

  const addBidListingURL = `${API_AUCTION_URL}${action}/${listingId}${action1}`;

  const response = await authFetch(addBidListingURL, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // Your bid data properties here
    }),
  });

  return await response.json();
}
