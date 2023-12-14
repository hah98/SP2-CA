import { API_AUCTION_URL } from "../constants.mjs";

import { authFetch } from "../authFetch.mjs";

const action = "/profiles";


export async function getProfile(name) {
  if (!name) {
    throw new Error("GET requires a name");
  }
  const getProfileUrl = `${API_AUCTION_URL}${action}/${name}`;

  const response = await authFetch(getProfileUrl);

  return await response.json();
}

