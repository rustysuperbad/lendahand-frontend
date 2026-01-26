const signupBtn = document.getElementById("signupBtn");

signupBtn.addEventListener("click", async () => {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const city = document.getElementById("city").value;

  if (!name || !email || !password || !city) {
    alert("Please fill all fields");
    return;
  }

  console.log("Signing up:", email);

  const { data, error } = await supabaseClient.auth.signUp({
    email,
    password,
    options: {
      data: {
        name,
        city,
        role: "volunteer"
      }
    }
  });

  if (error) {
    console.error(error);
    alert(error.message);
  } else {
    alert("Account created! Check your email.");
  }
});


