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

/* import { API_AUCTION_URL } from "../constants.mjs";

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

 */

/// next try 07/12/2023

import { API_AUCTION_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "/listings";
const method = "post";

export async function createListing(listingData) {
  const createListingURL = API_AUCTION_URL + action;

  const response = await authFetch(createListingURL, {
    method,
    body: JSON.stringify(listingData),
  });

  const listing = await response.json();
  console.log(listing);
}

console.log("Hello 2");




/* import { API_AUCTION_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "/listings";
const method = "POST";

export async function createListing(listingData) {
  const createListingURL = API_AUCTION_URL + action;

  try {
    const response = await authFetch(createListingURL, {
      method,
      body: JSON.stringify(listingData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error response:", errorData);
    } else {
      const listing = await response.json();
      console.log(listing);
    }
  } catch (error) {
    console.error("Error during request:", error);
  }
}
 */
