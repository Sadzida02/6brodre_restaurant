import React from 'react'
import DishDetails from './components/DishDetails'

function page() {
  return (
    <div className='w-full h-928'>
      <h1 className="text-44 font-extrabold p-5 font-arima" >6 brodre restaurant</h1>
      <div className='flex justify-center'>
        <DishDetails></DishDetails>
      </div>

    </div>
  )
}

export default page
