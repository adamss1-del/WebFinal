document.getElementById("form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const mode = document.querySelector('input[name="mode"]:checked').value;

  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    course: document.getElementById("course").value,
    mode: mode,
    agree: document.getElementById("agree").checked
  };

  const res = await fetch("https://webfinal-emq5.onrender.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  const result = await res.json();
  alert(result.message);
});
