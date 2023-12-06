import { API_AUCTION_URL } from "../constants.mjs";
import * as storage from "../../storage/index.mjs";
/* import * as headers from "../authFetch.mjs"; */

const action = "/auth/login";
const method = "post";

export async function login(profile) {
  const loginUrl = API_AUCTION_URL + action;
  const body = JSON.stringify(profile);

  try {
    const response = await fetch(loginUrl, {
      headers: {
        "content-type": "application/json",
      },
      method,
      body,
    });

    if (response.ok) {
      const { accessToken, ...user } = await response.json();

      storage.save("token", accessToken);
      storage.save("profile", user);

      // Redirecting to the main listing page
      window.location.href = "/index.html";
    } else {
      // Authentication failure (Error message)
      alert("Authentication failed. Please check your credentials.");
    }
  } catch (error) {
    // Handle network errors
    console.error("Error during login:", error);
    alert("Network error. Please try again later.");
  }
}
