import React, { useState } from "react";

export const FormDemo = () => {
  const [formData, SetFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [submitted, SetSubmitted] = useState(false);

  const handleChange = (e) => {
    SetFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    SetSubmitted(true);
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "40px",
      }}
    >
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Enter your username"
          value={formData.username}
          onChange={handleChange}
          required
        />

        <br />
        <br />

        <input
          type="email"
          name="email"
          placeholder="Enter your maid id"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <button type="submit">submit</button>
      </form>

      {submitted && (
        <div style={{marginTop:"20px",color:"#00ff00"}}>
            <h3>Form submitted successfully</h3>
            <p><b>username:</b>{formData.username}</p>
            <p><b>email:</b>{formData.email}</p>
        </div>
      )}
    </div>
  );
};
