import React, { useState } from 'react'
import { data } from '../data/mobileData'
import { Link } from 'react-router-dom'
const AdminPanel = ({filterData, setFilterData}) => {
    
    function clickHandler(){
        // setFilterData((prevItem)=> ([...prevItem, ]))
    }
  return (
    <div className='adminContainer'>
      <button onClick={clickHandler}><Link to="/admin/add">Add product</Link></button>
      <div className='adminContainer'>
        {
        filterData.map((item)=>(
            <div key={item.id} className='adminCard'>
                <Link to = {`/admin/products/${item.id}`}>{item.title}</Link>
            </div>
        ))
      }
      </div>
    </div>
  )
}

export default AdminPanel
