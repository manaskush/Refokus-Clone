import React from 'react'

function Footer() {
  return (
    <div className='w-full'>
    <div className='max-w-screen-xl mx-auto py-10 flex gap-32'>
        <div className='basis-1/2'>
            <h1 className='text-[11rem] font-semibold leading-none tracking-tight'>Refokus.</h1> 
        </div>
        <div className='basis-1/2 flex gap-4 '>
            <div className='basis-1/3'> 
                <h4 className='mb-10 text-zinc-500 capitalize'>Socials</h4>
                {["twitter","Instagram","LinkedIN","Facebook"].map((item,index)=> <a key={index} className='block mt-2 capitalize text-zinc-600 '>{item}</a>)}
            </div>
            <div className='basis-1/3'> 
                <h4 className='mb-10 text-zinc-500 capitalize'>Socials</h4>
                {["twitter","Instagram","LinkedIN","Facebook"].map((item,index)=> <a key={index} className='block mt-2 capitalize text-zinc-600 '>{item}</a>)}
            </div>
            <div className='basis-1/2'>
                <p className='text-right flex flex-col items-end'>Refokus crafts stunning, high-performance websites that captivate and convert, redefining the web one pixel at a time.</p>
                <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/6637ba0d8481b4339b1cda4f_Frame%2048097733.svg" alt="" className='mt-10 w-32'/>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Footer