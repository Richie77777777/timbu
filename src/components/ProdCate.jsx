import React from 'react'

function ProdCate() {
  return (
    <div className='hidden md:block w-[300px] px-8 '>
        <div>
            <h2 className=' font-bold text-xl text-green-900 font-serif mb-4'>Products By Category</h2>
            <ul className='space-y-5 text-lg'>
                <li className='text-brandbrown bg-brandteal/50 rounded-full'>Red Wine</li>
                <li className='text-orange-500 font-serif my-4'>White Wine</li>
                <li className='text-orange-500 font-serif my-4'>Rose Wine</li>
                <li className='text-orange-500 font-serif my-4'>Sparkilng Wine</li>
                <li className='text-orange-500 font-serif my-4'>Dessert Wine</li>
                <li className='text-orange-500 font-serif my-4'>Dessert Wine</li>
                <li className='text-orange-500 font-serif my-4'>Forfeited Wine</li>
                <li className='text-orange-500 font-serif my-4'>Natural and Organic Wine</li>
            </ul>
        </div>
        <div>
            <h2 className=' font-bold text-xl text-blue-700 font-serif my-4'>Brand By Category</h2>
            <ul className='space-y-5 text-lg'>
                <li className='text-red-900 font-serif my-4'>Robert Monday</li>
                <li className='text-red-900 font-serif my-4'>Hugei and Fils</li>
                <li className='text-red-900 font-serif my-4'>Beringer</li>
                <li className='text-red-900 font-serif my-4'>Veuve Clicquot</li>
                <li className='text-red-900 font-serif my-4'>Château Suduiraut</li>
                <li className='text-red-900 font-serif my-4'>Cantine Florio</li>
                <li className='text-red-900 font-serif my-4'>Frey Vineyards</li>
            </ul>
        </div>
        
    </div>
  )
}

export default ProdCate