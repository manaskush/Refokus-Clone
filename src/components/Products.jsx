import React, { useState } from 'react'
import Product from './Product'
import { motion } from 'framer-motion'



function Products() {
    var products=[
      {title:"arqitel",descrption:"With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",live:true,case:false},
      {title:"TTR",descrption:"We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",live:true,case:false},
      {title:"YIR 2022",descrption:"Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",live:true,case:true},
      {title:"Yahoo!",descrption:"We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",live:true,case:false},
      {title:"Godavri",descrption:"Enhanced Godavri's website with a modern design, improved navigation, and optimized performance for better user engagement.",live:true,case:true},
      {title:"RudraTech.",descrption:"Upgraded Rudra Tech's website by integrating advanced functionalities, improving load times, and enhancing overall user experience.",live:true,case:false},
    ]

    const [pos,setPos]=useState(0)
    const mover=(val)=>{
      setPos(val*23)
    }

  return (
    <div className='mt-32 relative'>
        {products.map((val,index)=><Product mover={mover} count={index} key={index} val={val} />
        )}
    <div className='absolute top-0 w-full h-full pointer-events-none '>
      <motion.div initial={{y:pos,x:"-50%"}}
      animate={{y:pos+`rem`}}
      transition={{ease:[0.76,0, 0.24,1],duration:.5}}
      className='overflow-hidden window -translate-x-[50%] absolute w-[32rem] h-[23rem] bg-white left-[45%] '>
       <motion.div transition={{ease:[0.76,0, 0.24,1],duration:.6}} animate={{y: -pos+`rem`}}className=' w-full h-full bg-white  '><div className='text-9xl text-sky-300 items-center p-[25%] pt-[24%] pl-[35%]'>Do</div>
       </motion.div>
       <motion.div transition={{ease:[0.76,0, 0.24,1],duration:.6}} animate={{y: -pos+`rem`}}className=' w-full h-full bg-sky-300  '><div className='text-9xl text-white items-center p-[30%] pt-[24%]'>You</div>
       </motion.div>
       <motion.div transition={{ease:[0.76,0, 0.24,1],duration:.6}} animate={{y: -pos+`rem`}}className=' w-full h-full bg-sky-400'><div className='text-9xl text-white items-center p-[35%] pt-[24%] pl-[30%]'>Like</div>
       </motion.div>
       <motion.div transition={{ease:[0.76,0, 0.24,1],duration:.6}} animate={{y: -pos+`rem`}}className=' w-full h-full bg-sky-500  '><div className='text-9xl text-white items-center p-[35%] pt-[22%] pl-[30%]'>The</div>
       </motion.div>
       <motion.div transition={{ease:[0.76,0, 0.24,1],duration:.6}} animate={{y: -pos+`rem`}}className=' w-full h-full bg-sky-600  '><div className='text-9xl text-white items-center p-[14%] pt-[24%] pl-[10%]'>Website</div>
       </motion.div>
       <motion.div transition={{ease:[0.76,0, 0.24,1],duration:.6}} animate={{y: -pos+`rem`}}className=' w-full h-full bg-sky-700  '><div className='text-9xl text-white items-center p-[15%] pt-[22%] pl-[25%]'>  ????  </div>
       </motion.div>
      </motion.div>
    </div>
    </div>
  )
}


export default Products