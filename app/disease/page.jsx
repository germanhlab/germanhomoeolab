"use client"


import ProductDetailsCarousel from '@components/ProductDetailsCarousel';
import Wrapper from '@components/Wrapper'
import Calander from '@components/calendar';
import Image from 'next/image';
import { Container } from 'postcss'
import React, { useEffect, useState } from 'react'
import { IoMdHeartEmpty } from "react-icons/io";
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';

import moment from 'moment/moment';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

import { Calendar } from 'react-date-range';
import { useAuth } from '@auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/navigation';
import { auth } from '@firebase/firebase';
import { collection, addDoc, getDoc, getDocs, where, query, deleteDoc, updateDoc, doc, setDoc } from "firebase/firestore";
import { db } from "@firebase/firebase";


const useDisease = () => {
  const [user, loading] = useAuthState(auth);
  const { authUser, isLoading } = useAuth();

  const router = useRouter();



  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {

    if (!loading && !user) {
      router.push("/login");
    }
    if (!!user) {
      console.log(user.uid);
      getTodos();
    }
  }, [user, loading]);


  const bookingHandler = async () => {

    console.log('authUser', user);
    if (!user) {

      console.log('sending to Home page 1 ');

      router.push("/login_page");
      console.log('authUser', user);
    }
    if (!dateC || !valueTime) return;
    try {

    } catch (error) {
      console.error('error login with Email', error)
    }
  }

  // get data from database
  const getTodos = async () => {
    try {

      const q = query(collection(db, "products"), where("productId", "==", "d5241dcf-8619-4729-9387-67fc3bfd7cf6"));

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


  // const [date, setEmail] = useState(null);
  // const [password, setPassword] = useState(null);
  // const [user, loading] = useAuthState(auth);

  const [valueTime, onChangeTime] = useState('10:00');
  const [dateC, setDate] = useState();
  console.log(dateC);

  return (
    <div className="w-full md:py-20">
      {/* <ToastContainer /> */}
      <Wrapper>
      {todos.length > 0 && todos.map((todo, index) => (

                <div key={todo.id} >
                
                <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/* left column start */}
          <div className="w-full md:w-auto flex-[1] max-w-[300px] lg:max-w-full mx-auto lg:mx-0">
        
           <ProductDetailsCarousel images={todo._imageUrls} />
        
            {/* <ProductDetailsCarousel images={[
              { url: "/arthritis.jpg", id: '1',name: 'hello' },
              { url: "/arthritis1.jpg", id: '2', name: 'hello' },
              { url: "/arthritis2.jpg", id: '3', name: 'hello' },
              { url: "/arthritis3.jpg", id: '4', name: 'hello' },
            ]} /> */}

            {/* <ProductDetailsCarousel images={p.image.data} /> */}
            {/* <span>Left Product Images</span> */}
            {/* <div className='max-w-[2520px]
                            mx-auto
                            xl:px-20 
                            md:px-10
                            sm:px-2
                            px-4'>
Hi
            </div> */}

            {/* <div className='flex-between image-container'>
            <Image
             className="paddings "
                width={800}
                height={800}
                src={'/bs1.jpg'}
                alt={''}
            />
    
            </div> */}


          </div>
          {/* left column end */}

          {/* right column start */}
          <div className="flex-[1] py-1">
           

<div  className="text-justify" dangerouslySetInnerHTML={{__html: todo.productDescription}}> 
</div> 

            <div className="text-lg font-bold mb-5">
              For more queries and Treatment
            </div>
            <button
              className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
              onClick={() => {

              }}
            >
              Book an Appointment
            </button>

            <div className="text-md flex-center font-sm text-black/[0.99] cursor-pointer">
              Or
            </div>

            {/* Call Us now */}
            <button
              className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
              onClick={() => {

              }}
            >
              Call Us Now!
            </button>

          </div>
          {/* right column end */}
        </div>
                   
                </div>
              ))} 

        

        {/* <RelatedProducts products={products} /> */}
      </Wrapper>
    </div>
  )
}

export default useDisease