// List an item //
/* import * as createListing from "../../../../../src/scss/JS/index.mjs"; */
/* import { API_AUCTION_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";


const action = "/listings"; */ /*  ${id}` */
/* const method = "post";

export async function createListing(listingData) {
  const createListingURL = API_AUCTION_URL + action;

  const response = await authFetch(createListingURL, {
    method,
    body: JSON.stringify(listingData),
  });

  return await response.json();

  console.log(createListing);
} */

/// next try :

import { API_AUCTION_URL } from "../constants.mjs";

import { authFetch } from "../authFetch.mjs";

const action = "/listings";
const method = "post";

export async function createListing(listingData) {
  const createListingUrl = API_AUCTION_URL + action;

  const response = await authFetch(createListingUrl, {
    method,
    body: JSON.stringify(listingData),
  });

  return await response.json();
}
