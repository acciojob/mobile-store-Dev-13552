import React, { useEffect, useState } from 'react'
import { data } from '../data/mobileData'
import { Link } from 'react-router-dom'
const ProductDetails = (props) => {
    const {id} = props.match.params
    const [item, setItem] = useState({})
    useEffect(()=>{
        console.log(id)
        console.log(data)
        setItem(data[id-1])
    }, [])
  return (
    <div>
      {
        
            <div className='card' key={item.id}>
                <div className='left'>
                    <img src={item.image}/>
                </div>
                <div className='right'>
                    <p>{item.title}</p>
                    <p>{item.description}</p>
                        <p>{item.price}</p>
                        <Link to = {`/`}>
                            <button className='btn'>Other Products</button>
                        </Link>
                </div>
            </div>
        
      }
    </div>
  )
}

export default ProductDetails
