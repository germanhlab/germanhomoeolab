"use client"
import React from 'react'
// import { register } from 'swiper/element/bundle';
// import { Virtual } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSwiper } from 'swiper/react';
import { useEffect, useState } from "react";
// import { useAuth } from "@firebase/auth_";
import { useRouter } from 'next/navigation';
import Loader from "@components/Loader";

import { collection, addDoc, getDoc, getDocs, where, query, deleteDoc, updateDoc, doc, } from "firebase/firestore";
import { auth, db } from "@firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Link from "next/link";
import Image from "next/image";
// Import Swiper styles
import 'swiper/css';

export default function Slider2() {
    // register Swiper custom elements
    // register();

    const swiper = useSwiper();
    const [user, loading] = useAuthState(auth);

    const [todoInput, setTodoInput] = useState("");
    const [todos, setTodos] = useState([]);
    //for router or Navigate
    const router = useRouter();

    useEffect(() => {


        if (!loading && !user) {
            router.push("/login");
        }
        if (!!user) {
            console.log(user.uid);
            getTodos();
        }
    }, [user, loading]);

    // get data from database
    const getTodos = async () => {
        try {

            const q = query(collection(db, "products"));

            const querySnapshot = await getDocs(q);
            let data = []

            querySnapshot.forEach((doc) => {
                data.push({ ...doc.data(), id: doc.id })
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
            });
            setTodos(data);

        } catch (error) {
            console.error("erroe Meaasage", error);
        }
    }

    return (

        <div className='sliderContainer'>
            {/* {todos.length > 0 && todos.map((todo, index) => (
                <div key={todo.productId} className="paddings flex-between c-container">
                    <Link
                        href={`/products/${todo.productId}`} key={todo.productId}
                        className="box-container transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
                    >
                        <Image
                            className="paddings makeImageCircular image-container2"
                            width={300}
                            height={300}
                            src={todo._imageUrls[0]}
                            alt={''}
                            object-fit="cover"
                            overflow="hidden"
                        //  fill={true}
                        />

                    </Link>
                </div>
            ))} */}

            <Swiper  spaceBetween={1} slidesPerView={1} >
                {todos.length > 0 && todos.map((todo, index) => (

                    <SwiperSlide key={todo} 
                    >
                
                        <Image
                            className=""
                             width={300}
                             height={300}
                            src={todo._imageUrls[0]}
                            alt={''}
                            object-fit="cover"
                            overflow="hidden"
                          //fill={true}
                        />
                    </SwiperSlide>

                ))}
                {/* {slides.map((slideContent, index) => (
                    <SwiperSlide key={slideContent} virtualIndex={index}>
                        {slideContent}
                    </SwiperSlide>
                ))} */}
            </Swiper>

            {/* <Swiper

                slidesPerView={1}
            //   onSlideChange={() => console.log('slide change')}
            //   onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide> <div className='sliderContainer'>Slide 1 </div></SwiperSlide>
                <SwiperSlide> <div className='sliderContainer'>Slide 2 </div></SwiperSlide>
                <SwiperSlide> <div className='sliderContainer'>Slide 3 </div></SwiperSlide>
                <SwiperSlide> <div className='sliderContainer'>Slide 4 </div></SwiperSlide>
            </Swiper> */}
            {/* <button onClick={() => swiper.slidePrev()}>Slide to the next slide</button>
   */}
        </div>



        // <div>page</div>
    )
}

