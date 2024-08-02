import React from 'react'

function DishDetails() {
  return (
    <div className='h-620 w-2/3 border-white border-8 shadow-lg rounded-3xl flex flex-row p-4 sm:grid-col'>

    <div>
        <h2 className='text-2xl my-4'>Chicken Steak</h2>
        <p className='font-normal text-13'>Chicken Steak Recipe With Pan Roasted Vegetables & Potato Mash is a delicious meal in itself. The chicken is marinated in a lovely marinade that is bursting with flavours that include fresh parsley , lemon, garlic and mixed herbs. All of which add to the yummilicious taste of the chicken. </p>

        <h3 className='text-lightGray my-4 text-xl'>Ingredients</h3>

        <div className='grid grid-cols-2 gap-4'>

            <div className='flex items-center'>
                <div className='w-50 h-10 border-2 rounded-md border-white p-1 flex justify-center shadow-md'>
                    <img src="/chicken.png"/>
                </div>
                <div className='ml-4 font-medium'>
                    <p className=' text-10'>Chicken</p>
                    <p className='text-lightGray text-8'>1 Chicken Breast Piece</p>
                </div>                
            </div>

            <div className='flex items-center'>
                <div className='w-50 h-10 border-2 rounded-md border-white p-1 flex justify-center shadow-md'>
                    <img src="/olive oil.png"/>
                </div>
                <div className='ml-4 font-medium'>
                    <p className=' text-10'>Olive Oil</p>
                    <p className='text-lightGray text-8'>1 Tbsp</p>
                </div>                
            </div>

            <div className='flex items-center'>
                <div className='w-50 h-10 border-2 rounded-md border-white p-1 flex justify-center shadow-md'>
                    <img src="/honey.png"/>
                </div>
                <div className='ml-4 font-medium'>
                    <p className=' text-10'>Honey</p>
                    <p className='text-lightGray text-8'>1 Tbsp</p>
                </div>                
            </div>

            <div className='flex items-center'>
                <div className='w-50 h-10 border-2 rounded-md border-white p-1 flex justify-center shadow-md'>
                    <img src="/egg.png"/>
                </div>
                <div className='ml-4 font-medium'>
                    <p className=' text-10'>Eggs</p>
                    <p className='text-lightGray text-8'>2 Pieces</p>
                </div>                
            </div>
        </div>

        <button className='h-6 w-32 bg-teal text-white text-center text-8 rounded-md mt-5'>View all Ingredients</button>

        <h3 className='text-lightGray my-4 text-xl'>Nutritional Values</h3>

        <div className='grid grid-cols-4 gap-1'>
            <div className='w-70 h-20 border-2 rounded-lg border-white p-2 flex flex-col font-medium items-center shadow-md'>
                <p className='text-black text-xl'>350</p>
                <p className='text-black text-13'>calories</p>
                <p className='text-lightGray text-13'>kcal</p>
            </div>
            <div className='w-70 h-20 border-2 rounded-lg border-white p-2 flex flex-col font-medium items-center shadow-md'>
                <p className='text-black text-xl'>15</p>
                <p className='text-black text-13'>Proteins</p>
                <p className='text-lightGray text-13'>g</p>
            </div>
            <div className='w-70 h-20 border-2 rounded-lg border-white p-2 flex flex-col font-medium items-center shadow-md'>
                <p className='text-black text-xl'>25</p>
                <p className='text-black text-13'>Fats</p>
                <p className='text-lightGray text-13'>g</p>
            </div>
            <div className='w-70 h-20 border-2 rounded-lg border-white p-2 flex flex-col font-medium items-center shadow-md'>
                <p className='text-black text-xl'>90</p>
                <p className='text-black text-13'>Carbs</p>
                <p className='text-lightGray text-13'>g</p>
            </div>           
        </div>

        <div className='flex mt-5 mb-8'>
            <button className='h-6 w-32 bg-teal text-white text-8 text-center rounded-md'>Recipe</button>
            <button className='h-6 w-32 bg-white border-teal border-2 text-center text-teal text-8 rounded-md ml-3'>Add to Favorites</button>
        </div>

    </div>

    <img src="/chickensteak.png" alt="chicken steak" className='' width={512} height={512}/>

      </div>
  )
}

export default DishDetails
