// import React, { useState } from 'react'
// import { data } from '../data/mobileData'
// import { Link } from 'react-router-dom'
// const AdminPanel = ({filterData, setFilterData}) => {
    
//     function clickHandler(){
//         // setFilterData((prevItem)=> ([...prevItem, ]))
//     }
//   return (
//     <div className='adminContainer'>
//       <button onClick={clickHandler}><Link to="/admin/add">Add product</Link></button>
//       <div className='adminContainer'>
//         {
//         filterData.map((item)=>(
//             <div key={item.id} className='adminCard'>
//                 <Link className = 'btn' to = {`/admin/products/${item.id}`}>{item.title}</Link>
//             </div>
//         ))
//       }
//       </div>
//     </div>
//   )
// }

// export default AdminPanel
// import React from "react";
// import { Link } from "react-router-dom";

// const AdminPanel = ({ filterData, setFilterData }) => {
//   function clickHandler() {
//     // navigate to add page
//     // this component doesn't have router props if rendered via render; using Link below instead is simpler
//   }

//   return (
//     <div className="adminContainer">
//       <Link to="/admin/add" className="btn add-btn">Add product</Link>

//       <div className="adminList">
//         {filterData.map((item) => (
//           <div key={item.id} className="adminCard">
//             {/* Product link for editing/viewing in admin */}
//             <Link className="product-link" to={`/admin/products/${item.id}`}>
//               {item.title}
//             </Link>

//             {/* Optional delete button per item if desired on this list too:
//                 <button className="btn delete-btn" onClick={() => {
//                   setFilterData(prev => prev.filter(p => p.id !== item.id))
//                 }}>Delete</button>
//             */}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AdminPanel;
import React from "react";
import { Link } from "react-router-dom";

const AdminPanel = ({ filterData, setFilterData }) => {
  function deleteHandler(id) {
    setFilterData((prevData) => prevData.filter((item) => item.id !== id));
  }

  return (
    <div className="adminContainer">
      <Link to="/admin/add" className="btn add-btn">Add product</Link>

      <div className="container">
        {filterData.map((item) => (
          <div key={item.id} className="col-12">
            <div>
              <Link to={`/admin/products/${item.id}`}>
                <div className="row">
                  <div className="col-6">{item.title}</div>
                  <div className="col-6">{item.price}</div>
                </div>
              </Link>
            </div>

            <button
              className="btn delete-btn float-right"
              onClick={() => deleteHandler(item.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
