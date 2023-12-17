import { API_AUCTION_URL } from "../constants.mjs";

const action = "/auth/register";
const method = "post";

export async function register(profile) {
  const registerUrl = API_AUCTION_URL + action;
  const body = JSON.stringify(profile);

  const response = await fetch(registerUrl, {
    headers: {
      "content-type": "application/json",
    },
    method,
    body: JSON.stringify(profile),
  });

  const result = await response.json();
  return result;
}


