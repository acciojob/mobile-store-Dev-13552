import React, { useState } from "react";

const AdminUpdate = (props) => {
  const { id } = props.match.params;
  const filterData = props.filterData;
  const setFilterData = props.setFilterData;
  const [formData, setFormData] = useState({
    title: filterData[id - 1].title,
    description: filterData[id - 1].description,
    image: filterData[id - 1].image,
    price: filterData[id - 1].price,
  });

  function changeHandler(e) {
    const { name, value, checked, type } = e.target;
    setFormData((prevFormData) => {
      return { ...prevFormData, [name]: type === "checkbox" ? checked : value };
    });
  }
  function deleteHandler() {
    console.log("inside handler");
    setFilterData((prevItem) =>
      prevItem.filter((item) => item.id !== Number(id))
    );
    console.log(filterData);
  }
  function saveHandler() {
    setFilterData((prevData) =>
      prevData.map((item) =>
        item.id === Number(id)
          ? {
              ...item,
              title: formData.title,
              description: formData.description,
              image: formData.image,
              price: formData.price,
            }
          : item
      )
    );

    // Optionally navigate back to admin panel
    props.history.push("/admin");
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

      <button onClick={deleteHandler}>Delete</button>
      <button onClick={saveHandler}>Save</button>
    </div>
  );
};

export default AdminUpdate;
