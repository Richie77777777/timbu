import React from 'react'

function ProdCate() {
  return (
    <div className='hidden md:block w-[300px] px-8 '>
        <div>
            <h2 className=' font-bold text-xl text-brandbrown font-serif mb-4'>Products By Category</h2>
            <ul className='space-y-5 text-lg'>
                <li className='text-brandbrown bg-brandteal/50 rounded-full'>Red Wine</li>
                <li>White Wine</li>
                <li>Rose Wine</li>
                <li>Sparkilng Wine</li>
                <li>Dessert Wine</li>
                <li>Forfeited Wine</li>
                <li>Natural and Organic Wine</li>
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