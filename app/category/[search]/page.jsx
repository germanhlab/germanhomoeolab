"use client"

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { MdFilter } from "react-icons/md";
import { FcFilledFilter } from "react-icons/fc";
// import Card from "../../components/Card";
import { useRouter } from 'next/navigation';
import Loader from "@components/Loader";
import { useEffect, useState } from "react";
import { collection, addDoc, getDoc, getDocs, where, query, deleteDoc, updateDoc, doc, } from "firebase/firestore";
import { auth, db } from "@firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Sidebar from "@components/Sidebar";


// const getProducts = async () => {
//   const products = await fetch(
//     "https://www.screentechnicals.com/api/ecommerce/products",
//     { next: { revalidate: 10 } }
//   );
//   return products.json();
// };



const usePage = async ({ params }) => {
  const [user, loading] = useAuthState(auth);
  const { search } = params;
  const [products, setProducts] = useState([]);
  // const [productsCount, setProductsCount] = useState([]);



  useEffect(() => {
    getProducts();
  }, []);

  // get data from database
  const getProducts = async () => {
    try {

      const q = query(collection(db, "products"));

      const querySnapshot = await getDocs(q);
      let data = []

      querySnapshot.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id })
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
      });
      setProducts(data);

      // products.map((item) => {
      //   if (
      //     item.productName.toLowerCase().includes(search.toLowerCase()) ||
      //     item.categoryTag.toLowerCase().includes(search.toLowerCase())
      //   ) {
      //     return (setProductsCount(item.length));
      //   }
      // })

    } catch (error) {
      console.error("erroe Meaasage", error);
    }
  }


  // const products = await getProducts();

  return (

    <div className="w-full md:pl-1 py-10 flex">
      <Sidebar />
      {/* <div className="w-full h-[88vh] overflow-y-auto px-5">{children}</div> */}

      <div className="w-full about-section-row flex-between flex flex-col lg:flex-row md:px-10 gap-[5px] lg:gap-[10px]  ">
        <div className="w-full flex-between h-[8vh] bg-white border shadow-sm rounded-xl py-5 xl:block hidden">

          <div className="w-full about-section-row flex-between flex-row sm:px-5 md:px-10 gap-[5px] lg:gap-[10px] sm:paddingsSmall item-center">
            <div>Showing services</div>
            <div className="about-section-row item-center flex-row gap-[5px]">
              <FcFilledFilter />
              <div>
                filter
              </div>
            </div>
          </div>
        </div>
        <div className=" h-[88vh] overflow-y-auto flex justify-center items-start flex-wrap">

          {products.map((item) => {
            if (
              item.productName.toLowerCase().includes(search.toLowerCase()) ||
              item.categoryTag.toLowerCase().includes(search.toLowerCase())
            ) {
              return (

                <div className="paddings flex-between c-container" key={item.productId}>
                  <Link
                    href={`/products/${item.productId}`} key={item.productId}
                    className="box-container transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
                  >
                    <Image
                      className="paddings makeImageCircular image-container2"
                      width={300}
                      height={300}
                      src={item._imageUrls[0]}
                      alt={''}
                      object-fit="cover"
                      overflow="hidden"
                    //  fill={true}
                    />
                    <div className="p-4 text-black/[0.9]">
                      <h2 className="text-lg font-medium">{item.productName}</h2>
                      <div className="text-justify text-xs p" dangerouslySetInnerHTML={{ __html: item.highlightDetails }}>
                      </div>

                      <h4 className="text-blue-500 text-sm font-sm">{'learn more'}</h4>

                    </div>
                  </Link>
                </div>
              );
            }
            //  else {
            //   return (
            //     <Image
            //       className="paddings makeImageCircular image-container2"
            //         width={300}
            //          height={300}
            //          src={'/logo.png'}
            //          alt={''}
            //          object-fit= "cover"
            //          overflow= "hidden"
            //         //  fill={true}
            //      /> 
            //   )
            // }
          })}
        

        </div>
      </div>
    </div>

  );
};

export default usePage;
