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
import React from "react";
import { Link } from "react-router-dom";

const AdminPanel = ({ filterData, setFilterData }) => {
  const deleteHandler = (id) => {
    setFilterData((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="container">
      <Link to="/admin/add" className="btn add-btn">
        Add product
      </Link>

      {/* each product row */}
      {filterData.map((item) => (
        <div key={item.id} className="col-12">
          <div>
            {/* this matches div.col-12>div>a */}
            <Link to={`/admin/products/${item.id}`}>
              {/* this matches :nth-child(4)>a>.row */}
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
  );
};

export default AdminPanel;

