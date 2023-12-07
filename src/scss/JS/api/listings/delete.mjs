import { API_AUCTION_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "/listings";
const method = "delete";

export async function removeListing(id) {
  if (!id) {
    throw new Error("Deleting a listing requires listingID");
  }

  const removeListingURL = `${API_AUCTION_URL}${action}/${id}`;

  const response = await authFetch(removeListingURL, {
    method,
  });

  return await response.json();
}
