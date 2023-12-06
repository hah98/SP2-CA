// old code:

import { register } from "../api/auth/register.mjs"; 

export function setRegisterFormListener() {
  const form = document.querySelector("#registerForm");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());
      console.log("it worked");
      

      // Send it to the API
      register(profile);
    });
  }
}