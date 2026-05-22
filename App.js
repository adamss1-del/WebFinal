import { useState } from "react";

export default function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    course: "",
    mode: "",
    agree: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("https://your-backend-url/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    });

    const data = await res.json();
    alert(data.message);
  };

  return (
    <div className="container">
      <h2>Student Course Registration</h2>

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Full Name" onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required />

        <select name="course" onChange={handleChange} required>
          <option value="">Select Course</option>
          <option value="Web Dev">Web Development</option>
          <option value="AI">AI & Machine Learning</option>
          <option value="Cyber">Cybersecurity</option>
        </select>

        <div>
          <label>
            <input type="radio" name="mode" value="Online" onChange={handleChange} />
            Online
          </label>
          <label>
            <input type="radio" name="mode" value="Offline" onChange={handleChange} />
            Offline
          </label>
        </div>

        <label>
          <input type="checkbox" name="agree" onChange={handleChange} />
          Agree to terms
        </label>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}