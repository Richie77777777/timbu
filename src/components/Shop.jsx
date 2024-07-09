import React from 'react';
import ProdCate from './ProdCate';
import ProdGrid from './ProdGrid';

function Shop() {
  return (
    <div className='flex'>
        <ProdCate/>
        <ProdGrid/>
    </div>
  )
}

export default Shop