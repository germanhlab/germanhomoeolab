"use client"
import { Text } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'

const LeftNav2 = () => {
  return (
    <div className="max-sm:hidden paddings sidePage-container2 text-white">

    <div  className='font-bold paddingsSmall'>
      German Homoeo Lab 
    </div>

   
   <hr className="rounded "/>
     <div className='paddingsSmall'>Durgachak, Haldia, Upper Stair of HP Gas office, East Medinipur, Pin-721602</div>
    <hr className="rounded"/>
    

          <div className='paddingsSmall'>
          <div className='text-whitw'>
            Whatsapp & Call No.:
          </div>
          <div className='font-bold' onClick={() => { }} >
            <a href="tel:+919734555533">  +91-9734555533</a>
          </div>
          </div>
         
        
    <hr className="rounded"/>
  

    <div className='paddingsSmall'>
            365 Days Open
          </div>
    <hr className="rounded"/>
    

    <div className='paddingsSmall'>
           09:00 AM to 08:00 PM
          </div>
    <hr className="rounded"/>

    
    </div>
  )
}

export default LeftNav2