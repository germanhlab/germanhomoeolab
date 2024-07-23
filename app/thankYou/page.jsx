import Link from 'next/link'
import React from 'react'
import { GoCheck } from 'react-icons/go'

const page = () => {
    return (
      <div className='w-full   position-relative'>


      <div className="bg-white pt-50">


        <div className='flex-center'>
        
            <img className=' ' width="285" src="/logo.png" alt="Logo" />

          
        </div>

        <div className='mt-80 flex-center'>
          <GoCheck className='text-success text-6xl' />

        </div>

        <div className='mt-20 text-success text-5xl'>
          Thank You
        </div>

        <div className='mt-10 text-black text-xl'>
          Our career counselor will contact you shortly.
        </div>

        <div className='flex-center'>
          <Link className='flex-center' to={'/'}>
          <div className=' mt-20 w-[120px]'>
            <div className='bg-danger text-white rcorners3 text-center' >
              Visit Website
            </div>
          </div>
          </Link>
         
        </div>

        <div className='box'>
          

        <div className='flex-center'>

        <div className='mt-10 text-black text-3xl '>
       ` If you would like immediate assistance, give us a call:`
        </div>
          
        </div>


        <div className='flex-center'>
        <div className='mt-10 text-danger text-2xl'>
        (+91) - 9007971107
        </div>

        </div>


        <div className='flex-center'>
        <Link className='flex-center' to={'https://api.whatsapp.com/send/?phone=919007971107&text&type=phone_number&app_absent=0'}>
        <div className='mt-15 w-[160px] text-center flex-center'>
        
        <div className='px-2 w-[35px] text-center flex-center'>
        <img
           className="makeImageCircular"
           width={60}
           height={60}
           src={'/Wapp.PNG'}
           alt={''}
         />
        </div>
          <div className='  text-danger text-sm'>
        Click to Whatsapp
        </div>
         </div>
          </Link>
        
        {/* <Link to={'https://api.whatsapp.com/send/?phone=919007971107&text&type=phone_number&app_absent=0'}>
         
          <div className='flex-center '>
            <div className=' flex-end'>
            <div className='w-[60px] text-center'>
        
        <img
           className="makeImageCircular"
           width={60}
           height={60}
           src={'/Wapp.PNG'}
           alt={''}
         />
         </div>
            </div>

      
          <div className='mt-10 flex-start  text-danger text-2xl'>
        Click to Whatsapp
        </div>
         </div>
         
        </Link> */}
       

        </div>

        </div>
        <br/>
        



        {/* <div className="h-[350px] flex-center opacity-100 " style={{
          backgroundImage: url(./Thankyou.png), backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat', backgroundSize: 'cover', 
        }}>

          <div className='bg-white h-[100%] w-[100%] opacity-80 '>

          </div>


        </div> */}
      </div>



    </div>

    )
}

export default page