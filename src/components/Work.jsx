import React, { useState } from 'react'
import { motion, useMotionValueEvent, useScroll } from "framer-motion"

function Work() {
    const [ images,setImages]=useState([
        {url:"https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b41ceaa9425c61aaa0a1c5_YIR2021%20-%20mobile.png", top:"50%", left:"50%", isActive:false},
        {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png", top:"56%", left:"44%", isActive:false},
        {url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg24E3fH5YXLKiFOkDvQx0bc7DnSs4aYAZFw&usqp=CAU", top:"45%", left:"56%", isActive:false},
        {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png", top:"60%", left:"53%", isActive:false},
        {url:"https://assets.website-files.com/62fcbf467b1adcb80d4ce04d/63175ff404da6d788f076b76_Open%20Graph.png", top:"43%", left:"40%", isActive:false},
        {url:"https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b41cfab581d98facecc35d_YIR2022%20-%20mobile.png", top:"65%", left:"55%", isActive:false},
       ])

       const { scrollYProgress }= useScroll()
       

       scrollYProgress.on("change",(data)=>{
        function imagesShow(arr){
            setImages(prev => (
                prev.map((item,index)=>(
                    arr.indexOf(index)===-1?(
                        {...item,isActive:false}
                    ):(
                        {...item,isActive:true}
                    )
                ))
            ))
        }
        switch(Math.floor(data*100)){
            case 0:
                imagesShow([])
                break;
            case 1:
                imagesShow([0])
                break;
            case 2:
                imagesShow([0,1])
                break;
            case 3:
                imagesShow([0,1,2])
                break;
            case 4:
                imagesShow([0,1,2,3])
                break;
            case 5:
                imagesShow([0,1,2,3,4])
                break;
            case 6:
                imagesShow([0,1,2,3,4,5])
                break;
            case 7:
                imagesShow([0,1,2,3,4,5,6])
                break;
        }
       })


  return (
    <div className='w-full mt-10'>
        <div className='relative max-w-screen-xl mx-auto text-center'>
            <h1 className='text-[30vw] leading-none font-medium select-none tracking-tight'>Work.</h1>
            <div className='absolute top-0 w-full h-full '>
                {images.map((elem,index)=>(elem.isActive &&(<img key={index} className="absolute w-60 rounded-lg -translate-x-[50%} -translate-y-[50%]" src={elem.url} alt="" style={{top:elem.top,left:elem.left }}/>
                )))}
            </div>
        </div>
    </div> 
  )
}

export default Work