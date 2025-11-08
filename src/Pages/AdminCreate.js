import React, { useState } from "react";

const AdminCreate = (props) => {
  const setFilterData = props.setFilterData;
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    price: "",
  });

  function changeHandler(e) {
    const { name, value, checked, type } = e.target;
    setFormData((prevFormData) => {
      return { ...prevFormData, [name]: type === "checkbox" ? checked : value };
    });
  }
  function addHandler(){
    setFilterData((prevData)=> [...prevData, {id: prevData.length + 1, title: formData.title, description: formData.description, image: formData.image, price: formData.price}])
  }
  return (
    <div>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        name="title"
        value={formData.title}
        onChange={changeHandler}
      />

      <label htmlFor="description">Description</label>
      <input
        type="text"
        id="description"
        name="description"
        value={formData.description}
        onChange={changeHandler}
      />

      <label htmlFor="image">Image</label>
      <input
        type="text"
        id="image"
        name="image"
        value={formData.image}
        onChange={changeHandler}
      />

      <label htmlFor="price">Price</label>
      <input
        type="text"
        id="price"
        name="price"
        value={formData.price}
        onChange={changeHandler}
      />

      <button onClick={addHandler} className="btn">Add</button>
    </div>
  );
};

export default AdminCreate;
