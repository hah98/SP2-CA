import { API_AUCTION_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "/listings";
const method = "POST";

export async function addBid(listingId, bidAmount) {
  const parsedBidAmount = parseFloat(bidAmount);

  if (!listingId || isNaN(parsedBidAmount)) {
    throw new Error("Listing ID and a valid numeric bid amount are required.");
  }

  const addBidListingURL = `${API_AUCTION_URL}${action}/${listingId}/bids`;

  const response = await authFetch(addBidListingURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      amount: parsedBidAmount, 
      
    }),
  });

  return await response.json();
}