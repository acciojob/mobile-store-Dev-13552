// import React, { useState } from "react";

// const AdminUpdate = (props) => {
//   const { id } = props.match.params;
//   const filterData = props.filterData;
//   const setFilterData = props.setFilterData;
//   const [formData, setFormData] = useState({
//     title: filterData[id - 1].title,
//     description: filterData[id - 1].description,
//     image: filterData[id - 1].image,
//     price: filterData[id - 1].price,
//   });

//   function changeHandler(e) {
//     const { name, value, checked, type } = e.target;
//     setFormData((prevFormData) => {
//       return { ...prevFormData, [name]: type === "checkbox" ? checked : value };
//     });
//   }
//   function deleteHandler() {
//     console.log("inside handler");
//     setFilterData((prevItem) =>
//       prevItem.filter((item) => item.id !== Number(id))
//     );
//     console.log(filterData);
//   }
//   function saveHandler() {
//     setFilterData((prevData) =>
//       prevData.map((item) =>
//         item.id === Number(id)
//           ? {
//               ...item,
//               title: formData.title,
//               description: formData.description,
//               image: formData.image,
//               price: formData.price,
//             }
//           : item
//       )
//     );

//     // Optionally navigate back to admin panel
//     props.history.push("/admin");
//   }

//   return (
//     <div>
//       <label htmlFor="title">Title</label>
//       <input
//         type="text"
//         id="title"
//         name="title"
//         value={formData.title}
//         onChange={changeHandler}
//       />

//       <label htmlFor="description">Description</label>
//       <input
//         type="text"
//         id="description"
//         name="description"
//         value={formData.description}
//         onChange={changeHandler}
//       />

//       <label htmlFor="image">Image</label>
//       <input
//         type="text"
//         id="image"
//         name="image"
//         value={formData.image}
//         onChange={changeHandler}
//       />

//       <label htmlFor="price">Price</label>
//       <input
//         type="text"
//         id="price"
//         name="price"
//         value={formData.price}
//         onChange={changeHandler}
//       />

//       <button onClick={deleteHandler} className="btn">Delete</button>
//       <button onClick={saveHandler} className="btn">Save</button>
//     </div>
//   );
// };

// export default AdminUpdate;
import React, { useState } from "react";
import { withRouter } from "react-router-dom";

const AdminUpdate = (props) => {
  const id = Number(props.match.params.id);
  const filterData = props.filterData || [];
  const setFilterData = props.setFilterData;

  // find current item safely
  const current = filterData.find((p) => p.id === id) || {
    title: "",
    description: "",
    image: "",
    price: "",
  };

  const [formData, setFormData] = useState({
    title: current.title,
    description: current.description,
    image: current.image,
    price: current.price,
  });

  function changeHandler(e) {
    const { name, value, type } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? e.target.checked : value,
    }));
  }

  function deleteHandler() {
    setFilterData((prevItem) => prevItem.filter((item) => item.id !== id));
    props.history.push("/admin");
  }

  function saveHandler() {
    setFilterData((prevData) =>
      prevData.map((item) =>
        item.id === id
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
    props.history.push("/admin");
  }

  return (
    <div className="admin-update">
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

      <div style={{ marginTop: 12 }}>
        <button className="btn delete-btn float-right" onClick={deleteHandler}>
          Delete
        </button>
        <button className="btn save-btn float-right" onClick={saveHandler}>
          Save
        </button>
      </div>
    </div>
  );
};

export default withRouter(AdminUpdate);
