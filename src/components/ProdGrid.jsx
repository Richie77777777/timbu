import React from 'react'
import products from '../product.json'
import ProdCard from './ProdCard'

function ProdGrid() {
  return (
    <div>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
                {
                    products.map((product, index)=>(
                        <ProdCard key={index} {...product}/>
                    ))
                }
        </div>
    </div>
  )
}

export default ProdGrid