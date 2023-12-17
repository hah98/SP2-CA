import { API_AUCTION_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";


const action = "/profiles"; 

export async function getBids(name) {
  const getBidsUrl = `${API_AUCTION_URL}${action}/${name}/bids`;
  const response = await authFetch(getBidsUrl);
  const data = await response.json();
  return data.bids;
}