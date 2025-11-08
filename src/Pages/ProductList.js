import React from 'react'
import {data} from '../data/mobileData'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
const Productlist = ({filterData, setFilterData}) => {

  return (
    <div className='cardContainer'>
      {
        filterData.map((item, index)=>(
            <div className='card' key={item.id}>
                <div className='left'>
                    <img src={item.image}/>
                </div>
                <div className='right'>
                    <p>{item.title}</p>
                    <div className='right-bottom'>
                        <p>{item.price}</p>
                        <Link to = {`/products/${item.id}`}>
                            <button>Buy</button>
                        </Link>
                    </div>
                </div>
            </div>
        ))
      }
    </div>
  )
}

export default Productlist
