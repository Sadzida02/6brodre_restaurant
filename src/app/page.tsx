import React from 'react'
import DishDetails from './components/DishDetails'
import MoreRecipes from './components/MoreRecipes'

function page() {
  return (
    <div className='w-full h-928'>
      <h1 className="text-44 font-extrabold p-5 font-arima" >6 brodre restaurant</h1>
      <div className='flex flex-col mx-24'>
        <DishDetails></DishDetails>
        <MoreRecipes></MoreRecipes>
      </div>

    </div>
  )
}

export default page
