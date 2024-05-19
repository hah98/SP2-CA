import { API_AUCTION_URL } from "../constants.mjs";

const action = "/auth/register";
const method = "post";

export async function register(profile) {
  const registerUrl = API_AUCTION_URL + action;
  const body = JSON.stringify(profile);

  try {
    const response = await fetch(registerUrl, {
      headers: {
        "content-type": "application/json",
      },
      method,
      body,
    });

    if (!response.ok) {
      throw new Error("Registration failed. Please try again.");
    }

    // Display success message
    alert("Profile created successfully!");

    // Redirect to login page
    window.location.href = "/AuctionHouse/login";
  } catch (error) {
    console.error("Error registering profile:", error);
    alert("Registration failed. Please try again.");
  }
}

