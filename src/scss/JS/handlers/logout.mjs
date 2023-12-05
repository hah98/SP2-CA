// Logout functionality

import * as storage from "../storage/index.mjs";

export function logout() {
  // clear token and user profile from localStorage
  storage.remove("token");
  storage.remove("profile");

  // Redirecting the user back to login page or main feed

  window.location.href = "/AuctionHouse/login/index.html";
}
