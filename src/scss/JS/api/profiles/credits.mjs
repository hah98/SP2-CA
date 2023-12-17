import { API_AUCTION_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "/profiles"; 

export async function getCredits(name) {
  const getCreditsUrl = `${API_AUCTION_URL}${action}/${name}/credits`;
  const response = await authFetch(getCreditsUrl);
  const data = await response.json();
  return data.credits;
}