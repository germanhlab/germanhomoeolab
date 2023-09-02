"use client"
import { Text } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'

const LeftNav2 = () => {
  return (
    <div className="max-sm:hidden paddings sidePage-container2 text-white">

    <div  className='font-bold paddingsSmall'>
      German Homoeo Lab, (Haldia)
    </div>

   
   <hr className="rounded "/>
     <div className='paddingsSmall'>Durgachak, ( 1st Floor of H.P Gas Building),F-11, Haldia, West Bengal 721602</div>
    <hr className="rounded"/>
    

          <div className='paddingsSmall'>
          <div className='text-whitw'>
            Whatsapp & Call No.:
          </div>
          <div className='font-bold' onClick={() => { }} >
            <a href="tel:+919775515533">  +91-9775515533</a>
          </div>
          </div>
         
        
    <hr className="rounded"/>
  

    <div className='paddingsSmall'>
            All 7 days open
          </div>
    <hr className="rounded"/>
    

    <div className='paddingsSmall'>
           MON-SAT 10 AM to 6 PM
          </div>
    <hr className="rounded"/>
    <div className='paddingsSmall'>
           Sunday 12 PM to 6 PM
          </div>

    
    </div>
  )
}

export default LeftNav2