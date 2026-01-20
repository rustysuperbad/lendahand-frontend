import { supabase } from "../supabase.js";

const form = document.getElementById("volunteer-form");
const message = document.getElementById("message");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const city = document.getElementById("city").value;
  const age = document.getElementById("age").value;

  message.textContent = "Creating account...";

  const { data, error } = await supabase.auth.signUp({
    email,
    password
  });

  if (error) {
    message.textContent = error.message;
    return;
  }

  const user = data.user;

  await supabase.from("profiles").insert({
    id: user.id,
    full_name: name,
    role: "volunteer",
    city: city,
    approved: true
  });

  message.textContent = "Account created! You can now log in.";
});
