import { updateProfile, getProfile } from "../api/profiles/index.mjs";
import { getBids } from "../api/profiles/index.mjs";
import { getCredits } from "../api/profiles/index.mjs";

import { load } from "../storage/index.mjs";

export async function setUpdateProfileFormListener() {
  const form = document.querySelector("#updateProfile");
  const avatarPreview = document.getElementById("avatarPreview");
  const namePreview = document.getElementById("namePreview");

  if (form && avatarPreview && namePreview) {
    const { name, email } = load("profile");

    form.name.value = name;
    form.email.value = email;

    const button = form.querySelector("button");
    button.disabled = true;

    const profile = await getProfile(name);

    form.avatar.value = profile.avatar;

    // Fetch and set values for credits and bids
    const credits = await getCredits(name);
    const bids = await getBids(name);

    form.credits.value = credits;
    form.bids.value = bids !== undefined ? bids : 0;
    

    // Update the avatarPreview src
    avatarPreview.src = profile.avatar;
    namePreview.innerHTML = profile.name;

    button.disabled = false;

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());

      profile.name = name;
      profile.email = email;
      // Send it to the API
      updateProfile(profile);
    });
  }
}
