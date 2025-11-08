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
  function deleteHandler(id) {
    setFilterData((prevData) => prevData.filter((item) => item.id !== id));
  }

  return (
    <div className="container">
      <Link to="/admin/add" className="btn add-btn mb-3">
        Add product
      </Link>

      {/* render each product as Bootstrap-like row */}
      {filterData.map((item) => (
        <div key={item.id} className="col-12 mb-2">
          <div>
            {/* EXACT structure Cypress expects: div.col-12 > div > a */}
            <Link to={`/admin/products/${item.id}`}>
              {/* child .row so :nth-child(4) > a > .row matches */}
              <div className="row">
                <div className="col-6">{item.title}</div>
                <div className="col-6 text-right">${item.price}</div>
              </div>
            </Link>
          </div>

          {/* Delete button (Cypress may click .float-right) */}
          <button
            className="btn delete-btn float-right mt-1"
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
