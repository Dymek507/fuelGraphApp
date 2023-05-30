import React from 'react'

const TopCards = () => {
  return (
    <div className='grid gap-4 p-4 lg:grid-cols-5'>
      <div className='flex justify-between w-full p-4 bg-white border rounded-lg lg:col-span-2 cols-span-1'>
        <div className='flex flex-col w-full pb-4'>
          <p className='text-2xl font-bold'>$5.463</p>
          <p className='text-gray-600'>Daily</p>
        </div>
      </div>
      <div className='flex justify-between w-full p-4 bg-white border rounded-lg lg:col-span-2 cols-span-1'>
        <div className='flex flex-col w-full pb-4'>
          <p className='text-2xl font-bold'>$5.463</p>
          <p className='text-gray-600'>Daily</p>
        </div>
      </div>

      <div className='flex justify-between w-full p-4 bg-white border rounded-lg '>
        <div className='flex flex-col w-full pb-4'>
          <p>$5.463</p>
        </div>
      </div>

    </div >
  )
}

export default TopCards 