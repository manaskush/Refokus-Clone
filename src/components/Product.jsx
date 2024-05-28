import React from 'react'
import Button from './Button'

function Product({val,mover,count}) {
  return (
    <div className='w-full py-20 text-white h-[23rem] '>
        <div onMouseEnter={()=>{mover(count)}}className='flex items-center justify-between max-w-screen-xl mx-auto'>
            <h1 className='text-6xl font-medium capitalize'>{val.title}</h1>
            <div className='dets w-1/3'>
              <p className='mb-10'>{val.descrption}</p>
              <div className='flex items-center gap-10'>
              {val.live && <Button/>}
              {val.case && <Button title="Case Study"/>}
              </div> 
            </div>
        </div>
    </div>
  )
}
 
export default Product 