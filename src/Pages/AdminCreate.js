import React, { useState } from "react";
import { withRouter } from "react-router-dom";

const AdminCreate = (props) => {
  const setFilterData = props.setFilterData;
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    price: "",
  });

  function changeHandler(e) {
    const { name, value, type } = e.target;
    setFormData((prevFormData) => {
      return { ...prevFormData, [name]: type === "checkbox" ? e.target.checked : value };
    });
  }

  function addHandler() {
    setFilterData((prevData) => {
      const newId = prevData.length > 0 ? Math.max(...prevData.map((p) => p.id)) + 1 : 1;
      const newItem = {
        id: newId,
        title: formData.title,
        description: formData.description,
        image: formData.image,
        price: formData.price,
      };
      return [...prevData, newItem];
    });
    // Go back to admin list after adding
    props.history.push("/admin");
  }

  return (
    <div className="admin-create">
      <label htmlFor="title">Title</label>
      <input
        className="form-control"
        type="text"
        id="title"
        name="title"
        value={formData.title}
        onChange={changeHandler}
      />

      <label htmlFor="description">Description</label>
      <input
        className="form-control"
        type="text"
        id="description"
        name="description"
        value={formData.description}
        onChange={changeHandler}
      />

      <label htmlFor="image">Image</label>
      <input
        className="form-control"
        type="text"
        id="image"
        name="image"
        value={formData.image}
        onChange={changeHandler}
      />

      <label htmlFor="price">Price</label>
      <input
        className="form-control"
        type="text"
        id="price"
        name="price"
        value={formData.price}
        onChange={changeHandler}
      />

      <button className="btn add-btn" onClick={addHandler}>Add</button>
    </div>
  );
};

export default withRouter(AdminCreate);
