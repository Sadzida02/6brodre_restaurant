import React from 'react'

function MoreRecipes() {
  return (
    <div>
        <h2 className='text-2xl my-4'>More recipes</h2>

        <div className='grid grid-cols-6 mb-8'>
            <div className='h-362 w-142 flex flex-col items-center border-4 rounded-lg border-white p-2 font-medium shadow-md'>
                <img src="/dish1.png"  className="w-24 h-24" alt="" />
                <p className='text-sm font-medium'>Beef Steak</p>
                <p className="text-13 text-lightGray">30 min cooktime</p>
            </div>
            <div className='h-362 w-142 flex flex-col items-center border-4 rounded-lg border-white p-2 font-medium shadow-md'>
                <img src="/dish2.png"  className="w-24 h-24" alt="" />
                <p className='text-sm font-medium'>Egg Salad</p>
                <p className="text-13 text-lightGray">10 min cooktime</p>
            </div>
            <div className='h-362 w-142 flex flex-col items-center border-4 rounded-lg border-white p-2 font-medium shadow-md'>
                <img src="/dish3.png"  className="w-24 h-24" alt="" />
                <p className='text-sm font-medium'>Ceaser Salad</p>
                <p className="text-13 text-lightGray">10 min cooktime</p>
            </div>
            <div className='h-362 w-142 flex flex-col items-center border-4 rounded-lg border-white p-2 font-medium shadow-md'>
                <img src="/dish4.png"  className="w-24 h-24" alt="" />
                <p className='text-sm font-medium'>Spaghetti</p>
                <p className="text-13 text-lightGray">20 min cooktime</p>
            </div>
            <div className='h-362 w-142 flex flex-col items-center border-4 rounded-lg border-white p-2 font-medium shadow-md'>
                <img src="/dish5.png"  className="w-24 h-24" alt="" />
                <p className='text-sm font-medium'>Crab Claws</p>
                <p className="text-13 text-lightGray">20 min cooktime</p>
            </div>
            <div className='h-362 w-142 flex flex-col items-center border-4 rounded-lg border-white p-2 font-medium shadow-md'>
                <img src="/dish6.png"  className="w-24 h-24" alt="" />
                <p className='text-sm font-medium'>Grilled Salmon</p>
                <p className="text-13 text-lightGray">20 min cooktime</p>
            </div>
        </div>
      
    </div>
  )
}

export default MoreRecipes
