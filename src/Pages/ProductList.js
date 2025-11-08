// import React from 'react'
// import {data} from '../data/mobileData'
// import { Link } from 'react-router-dom/cjs/react-router-dom.min'
// const Productlist = ({filterData, setFilterData}) => {

//   return (
//     <div className='cardContainer'>
//       {
//         filterData.map((item, index)=>(
//             <div className='card' key={item.id}>
//                 <div className='left'>
//                     <img src={item.image}/>
//                 </div>
//                 <div className='right'>
//                     <p>{item.title}</p>
//                     <div className='right-bottom'>
//                         <p>{item.price}</p>
//                         <Link to = {`/products/${item.id}`}>
//                             <button className='btn'>Buy</button>
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         ))
//       }
//     </div>
//   )
// }

// export default Productlist
import React from "react";
import { Link } from "react-router-dom";

const ProductList = ({ filterData }) => {
  return (
    <div className="product-list">
      {filterData.map((item) => (
        <div key={item.id} className="product-card">
          <Link to={`/products/${item.id}`} className="product-link">
            <h3>{item.title}</h3>
          </Link>
          <p>{item.description}</p>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
