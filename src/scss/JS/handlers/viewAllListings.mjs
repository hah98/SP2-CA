/* hsijdbjksdnskl */
import { API_AUCTION_URL } from "../api/constants.mjs";

import { authFetch } from "../api/authFetch.mjs";

/*  const action = "/listings"; */ 
 const action = "/listings?_bids=true&_seller=true&_tags=true&_active=true&sort=created&sortOrder=desc"
export async function getListings() {
  const getListingsUrl = `${API_AUCTION_URL}${action}`;

  const response = await authFetch(getListingsUrl);

  return await response.json();
}



