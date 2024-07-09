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
            <h2 className=' font-bold text-xl text-brandbrown font-serif my-4'>Brand By Category</h2>
            <ul className='space-y-5 text-lg'>
                <li>Robert Monday</li>
                <li>Hugei and Fils</li>
                <li>Beringer</li>
                <li>Veuve Clicquot</li>
                <li>Château Suduiraut</li>
                <li>Cantine Florio</li>
                <li>Frey Vineyards</li>
            </ul>
        </div>
        
    </div>
  )
}

export default ProdCate