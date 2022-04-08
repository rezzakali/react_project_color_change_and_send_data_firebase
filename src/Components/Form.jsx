import React, { useState } from "react";

function Form() {
  const [users, setUsers] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });
  let name, value;
  const getUsersData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUsers({ ...users, [name]: value });
  };

  const postDataToFirebase = async (e) => {
    e.preventDefault();
    const { name, email, phone, address, message } = users;
    if (name && email && phone && address && message) {
      const result = await fetch(
        "https://reactform-f6da5-default-rtdb.firebaseio.com/ReactFormData.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            phone,
            address,
            message,
          }),
        }
      );
      if (result) {
        alert("Data addedd successfully!");
        setUsers({
          name: "",
          email: "",
          phone: "",
          address: "",
          message: "",
        });
      }
    } else {
      alert("Data must be filled!");
    }
  };

  return (
    <div>
      <form method="POST" className="p-4 m-4 shadow-lg ">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            id="name"
            aria-describedby="helpId"
            value={users.name}
            onChange={getUsersData}
            placeholder="Enter your full name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            aria-describedby="helpId"
            value={users.email}
            onChange={getUsersData}
            placeholder="Enter a valid email address"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            type="phone"
            className="form-control"
            name="phone"
            id="phone"
            aria-describedby="helpId"
            value={users.phone}
            onChange={getUsersData}
            placeholder="Phone number"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <input
            type="address"
            className="form-control"
            name="address"
            id="address"
            aria-describedby="helpId"
            value={users.address}
            onChange={getUsersData}
            placeholder="Address"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <input
            type="textarea"
            className="form-control"
            name="message"
            id="message"
            aria-describedby="helpId"
            value={users.message}
            onChange={getUsersData}
            placeholder="Message"
          />
        </div>
        <button
          type="submit"
          className="btn btn-success"
          onClick={postDataToFirebase}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
