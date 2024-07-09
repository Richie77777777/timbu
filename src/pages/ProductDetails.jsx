import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import products from '../product.json'

function ProductDetails() {
    
    const {id} = useParams()
  const obj = products.find(i=>i.id===parseInt(id))
    console.log(obj)



  return (
    <div>
        {obj&&<img src={obj.img} alt="" />}
    </div>
  )
}

export default ProductDetails