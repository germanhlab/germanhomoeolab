import Link from 'next/link';
import React from 'react'
import { FcSearch } from "react-icons/fc";

const NotFound = () => {
  return (
    <div className='text-black'>
          <br/>
       <br/>
        <FcSearch size={200} />
       <p>There's nothing to see here <Link href={'/'} className='text-blue-600 underline '>Go Back</Link></p>
       <br/>
       <br/>
       <br/>
       </div>
  )
}

export default NotFound