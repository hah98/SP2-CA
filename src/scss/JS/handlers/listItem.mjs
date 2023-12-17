import { createListing } from "../api/listings/index.mjs";

export function setListFormListener() {
  const form = document.querySelector("#createListing");

  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      const form = event.target;
      const formData = new FormData(form);
      const listing = {
        title: formData.get("title"),
        description: formData.get("description"),
        endsAt: formData.get("endsAt"),
        tags: (formData.get("tags") || "").split(",").map((tag) => tag.trim()),
        media: formData.get("media")?.trim(),
      };
      // Send it to the API
      try {
        await createListing(listing);

        showSuccessMessage("Listing created successfully!");
      } catch (error) {
        console.error("Error creating listing:", error);
      }
    });
  }
}

function showSuccessMessage(message) {
  window.alert(message);

  // Redirecting to the main listing page
  window.location.href = "/index.html";
}
