import React from 'react'

function DishDetails() {
  return (
    <div className='h-620 w-2/3 border-white border-8 shadow-lg rounded-md flex flex-row p-4'>

    <div>
        <h2 className='text-2xl my-4'>Chicken Steak</h2>
        <p>Chicken Steak Recipe With Pan Roasted Vegetables & Potato Mash is a delicious meal in itself. The chicken is marinated in a lovely marinade that is bursting with flavours that include fresh parsley , lemon, garlic and mixed herbs. All of which add to the yummilicious taste of the chicken. </p>

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

        <button className='h-6 w-32'>View all Ingredients</button>


    </div>

    <img src="/chickensteak.png" alt="chicken steak" className='' width={512} height={512}/>

      </div>
  )
}

export default DishDetails
