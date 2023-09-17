'use client';

import Link from "next/link";
import React from "react";
import { MdWindow } from "react-icons/md";
import { RiBillFill } from "react-icons/ri";
import {v4} from "uuid";
import Image from "next/image";

const Sidebar = () => {
 
 
  let categories = ['Male', 'Female', 'Others',]


  return (
    <div className=" w-[350px] h-[60vh] bg-white border shadow-sm rounded-xl py-5 relative xl:block hidden">
      <div className="flex items-center space-x-5">
        <div className="w-1 h-10 bg-[#ff9900]"></div>
        <div className="flex items-center space-x-1">
          <span className="text-3xl">
            <MdWindow />
          </span>

          <span className="uppercase text-2xl tracking-widest font-light">

            categories
          </span>
        </div>
      </div>
      <div className="px-[120px] py-4">
        {
          categories.map((category)=> (
            <Link className="flex" href={`/category/${category.toLocaleLowerCase()}`} key={v4()}>
               <Image
                src={`/${category.toLocaleLowerCase()}_icon.png`}
                alt='logo'
                width={20}
                height={20}
                className='object-contain py-2'
              />
              <button className="text-xl hover:text-[#ff9900] block py-2">{category}</button>
            </Link>
          ))
        }
      </div>
      {/* <div className="px-10">
        <Link href={"/orders"}>
          <button className="flex items-center text-2xl space-x-2 uppercase font-light hover:bg-[#ff990062] w-full py-3 px-5 rounded-xl">
            <span className="text-3xl"><RiBillFill /></span>
            <span>Orders</span>
          </button>
        </Link>
      </div> */}
    </div>
  );
};

export default Sidebar;
