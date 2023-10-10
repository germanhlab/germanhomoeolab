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
import ImageSlider from '@components/ProductISlider/ImageSlider';
import './ImageSlider.css';

const usePage = ({ params }) => {
  const { id } = params;

  const [user, loading] = useAuthState(auth);
  const { authUser, isLoading } = useAuth();
  const [loadingF, setLoading] = useState(true);

  const router = useRouter();



  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [imgPrefIndex, setImgPrefIndex] = useState(0);


  const [wordData,setWordData]=useState('')
  const [val,setVal] = useState(0);
  // const handleClick=(index)=>{
  //   console.log(index)
  //   setVal(index)
  //   const wordSlider=imgs[index];
  //   setWordData(wordSlider)
  // }

  useEffect(() => {

    if (loadingF) {
      getTodos();
    }
  }, [ loadingF]);

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

      const q = query(collection(db, "products"), where("productId", "==", id));

      const querySnapshot = await getDocs(q);
      let data = []

      querySnapshot.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id })
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
      });
      setTodos(data);
      setLoading(false);

    } catch (error) {
      console.error("erroe Meaasage", error);
    }
  }

  

  // const [date, setEmail] = useState(null);
  // const [password, setPassword] = useState(null);
  // const [user, loading] = useAuthState(auth);

  // const [valueTime, onChangeTime] = useState('10:00');
  // const [dateC, setDate] = useState();
  // console.log(dateC);

  return (
    <div className="w-full md:py-20">
      {/* <ToastContainer /> */}
      <Wrapper>
      {todos.length > 0 && todos.map((todo, index) => (

                <div key={todo.id} >
                
                <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/* left column start */}
          <div className="w-full md:w-auto flex-[1] max-w-[300px] lg:max-w-full mx-auto lg:mx-0">
        
           {/* <ProductDetailsCarousel images={todo._imageUrls} /> */}

           <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
      
      <img src={todo._imageUrls[imgPrefIndex]} height="300" width="500" /> 
      <div className='flex_row'>
        {todo._imageUrls.map((data,i)=>
        <div className="thumbnail" key={i} >
          <img className={imgPrefIndex==i?"clicked":""} src={data} onClick={()=> setImgPrefIndex(i)} height="60" width="100" />
        </div>
        )}
      </div>
    </div>
           {/* Uncomment bellow code final */}
           {/* <ImageSlider imgs={todo._imageUrls} imgIndex={imgPrefIndex}/> */}
        
            {/* <ProductDetailsCarousel images={[
              { url: "/arthritis.jpg", id: '1',name: 'hello' },
              { url: "/arthritis1.jpg", id: '2', name: 'hello' },
              { url: "/arthritis2.jpg", id: '3', name: 'hello' },
              { url: "/arthritis3.jpg", id: '4', name: 'hello' },
            ]} /> */}

           
            {/* <span>Left Product Images</span> */}

          </div>
          {/* left column end */}

          {/* right column start */}
          {/* <div className="flex-[1] py-1">
         
          <img className={""} src={todo._imageUrls[0]} onClick={()=> setImgPrefIndex(3)} height="60" width="100" />
<div  className="text-justify" dangerouslySetInnerHTML={{__html: todo.productDescription}}> 
</div> 

            <div className="text-lg font-bold mb-5">
              For more queries and Treatment
            </div>
            <button
              className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
              onClick={() => {
                router.push(`/book_an_appointment`)
              }}
            >
              Book an Appointment
            </button>

            <button
              className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
              onClick={() => {
                router.push(`/book_an_appointment`)
              }}
            >
              Book an Appointment
            </button>
            <button
              className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
              onClick={() => {
                setImgPrefIndex(1);
              }}
            >
              1
            </button>
            <button
              className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
              onClick={() => {
                setImgPrefIndex(2);
              }}
            >
              2
            </button>

            <button
              className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
              onClick={() => {
                setImgPrefIndex(3);
              }}
            >
             3
            </button>

            <div className="text-md flex-center font-sm text-black/[0.99] cursor-pointer">
              Or
            </div>

           
            <div
              className="w-full item-center flex-center py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
              
            >
             <a href="tel:+919734555533"> Call Us!</a>
            </div>

          </div> */}
          {/* right column end */}

           {/* right column start */}
           <div className="flex-[1] py-3">
            {/* <Scrollbar> */}
            {/* PRODUCT TITLE */}
            <div className="text-[34px] font-semibold mb-2 leading-tight">
              {/* {p.name} */}
              Arthritis
            </div>


            {/* PRODUCT SUBTITLE */}
            <div className="text-sm text-justify font-semibold mb-1">
              {/* {p.subtitle} */}
              Arthritis is a term used to describe inflammation of the joints. It is a chronic condition that can affect people of all ages, but it is more common among older adults. There are many different types of arthritis, but the most common ones include osteoarthritis and rheumatoid arthritis.
            </div>
            <br />

            {/* PRODUCT PRICE */}
            <div className="flex items-center">
              <p className="mr-2 text-sm text-black text-justify">
                {/* MRP : &#8377; 100 */}
                {/* {p.price} */}
                <span className='flex-start gap-[5px]'>
                <img className={"makeImageCircular"} src={todo._imageUrls[0]} onClick={()=> setImgPrefIndex(0)} height="30" width="30" />

1.Pain in the joints, ankle, back, fingers, hands, muscles, neck, wrist, vertribrae. It may make movement difficult and improve with gentle exercise.

                </span>
                <span className='flex-start gap-[5px]'>
                <img className={"makeImageCircular"} src={todo._imageUrls[1]} onClick={()=> setImgPrefIndex(1)} height="30" width="30" />

                2.Swelling and inflammation around the joints. The affected joints may appear red, warm, and tender to the touch.
                </span>
                <span className='flex-start gap-[5px]'>
                {/* <Image
                      className="paddings makeImageCircular image-container-text-side"
                      width={30}
                      height={30}
                      src={todo._imageUrls[3]}
                      alt={''}
                      object-fit="cover"
                      overflow="hidden"
                    //  fill=
                    {true}
                    /> */}
                     <img className={"makeImageCircular"} src={todo._imageUrls[2]} onClick={()=> setImgPrefIndex(2)} height="30" width="30" />

                3.Difficulty moving the affected joint through its full range of motion. It may feel like the joint is "locked" or has a reduced range of movement.
</span>
              </p>


              {/* {p.original_price && (
                        <>
                            <p className="text-base  font-medium line-through">
                                &#8377;{p.original_price}
                            </p>
                            <p className="ml-auto text-base font-medium text-green-500">
                                {getDiscountedPricePercentage(
                                    p.original_price,
                                    p.price
                                )}
                                % off
                            </p>
                        </>
                    )} */}
            </div>
            <br />

            <div className="flex items-center">
              <p className="mr-2 text-sm text-justify font-semibold">
                {/* {p.name} */}
                আর্থরাইটিস হল জয়েন্টের একটি প্রদাহ । এটি একটি চিরস্থায়ী অবস্থা যা সমস্ত বয়সের মানুষদের প্রভাবিত করতে পারে, কিন্তু সবচেয়ে বেশি প্রায় পূর্ববয়সী ব্যক্তিদেরকে প্রভাবিত করে। এখানে অনেক ধরণের আর্থরাইটিস রয়েছে, কিন্তু সবচেয়ে সাধারণ দুটি হল অস্টিওআর্থ্রাইটিস এবং রিউমাটয়েড আর্থরাইটিস।
              </p>
            </div>
            <br />

            <div className="flex items-center">
              <p className="mr-2 text-sm text-justify ">
                {/* {p.name} */}
                <span className='flex-start gap-[5px]'>
                <img className={"makeImageCircular"} src={todo._imageUrls[0]} onClick={()=> setImgPrefIndex(0)} height="30" width="30" />

                1. পা পায়ে, পিঠে, আঙুলে, হাতে, মাংসপেশিতে, ঘাড়ে, কবজিএবং মেরুদণ্ডে  ব্যথা।
                </span>
                <span className='flex-start gap-[5px]'>
                <img className={"makeImageCircular"} src={todo._imageUrls[1]} onClick={()=> setImgPrefIndex(1)} height="30" width="30" />

                2.জয়েন্টগুলির চারপাশে ফোলাভাব এবং প্রদাহ। আক্রান্ত
                </span>
                <span className='flex-start gap-[5px]'>
                <img className={"makeImageCircular"} src={todo._imageUrls[2]} onClick={()=> setImgPrefIndex(2)} height="30" width="30" />

                3.জয়েন্টগুলো স্পর্শে লাল, উষ্ণ এবং কোমল দেখাতে পারে
                আক্রান্ত জয়েন্টকে তার পূর্ণ পরিসরের গতির মাধ্যমে সরাতে অসুবিধা। এটি মনে হতে পারে যে জয়েন্টটি "লকড" বা চলাচলের একটি কম পরিসর রয়েছে
                </span>
              </p>
            </div>
            <br />

            <div className="flex items-center">
              <p className="mr-2 text-sm text-justify font-semibold">
                {/* {p.name} */}
                आर्थराइटिस एक शब्द है जिसका उपयोग जोड़ों के संचार की सूजन को वर्णित करने के लिए किया जाता है। यह एक दीर्घकालिक स्थिति है जो सभी आयुवर्ग के लोगों को प्रभावित कर सकती है, लेकिन यह अधिकांशतः वृद्धावस्था में आम होती है। अर्थराइटिस के कई विभिन्न प्रकार होते हैं, लेकिन सबसे सामान्य रूप से ओस्टियोआर्थ्राइटिस और रेहुमाटॉइड आर्थराइटिस शामिल होते हैं।
              </p>
            </div>
            <br />

            <div className="flex items-center">
              <p className="mr-2 text-sm text-black text-justify">
                {/* {p.name} */}
                <span className='flex-start gap-[5px]'>
                <img className={"makeImageCircular"} src={todo._imageUrls[0]} onClick={()=> setImgPrefIndex(0)} height="30" width="30" />

                1. जोड़ों, टखनों, पीठ, उंगलियों, हाथों, मांसपेशियों, गर्दन, कलाई, वर्ट्रिब्रे में दर्द। यह आंदोलन को कठिन बना सकता है और कोमल व्यायाम से सुधार कर सकता है।
                </span>
                <span className='flex-start gap-[5px]'>
                <img className={"makeImageCircular"} src={todo._imageUrls[1]} onClick={()=> setImgPrefIndex(1)} height="30" width="30" />
                
                2. जोड़ों के आसपास सूजन और जलन। प्रभावित जोड़ स्पर्श करने पर लाल, गर्म और कोमल दिखाई दे सकते हैं
                </span>
                <span className='flex-start gap-[5px]'>
                <img className={"makeImageCircular"} src={todo._imageUrls[2]} onClick={()=> setImgPrefIndex(2)} height="30" width="30" />

                3. प्रभावित जोड़ को गति की पूरी श्रृंखला के माध्यम से हिलाने में कठिनाई। ऐसा महसूस हो सकता है कि जोड़ "लॉक" है या इसमें गति की सीमा कम है
                    </span>
              </p>
            </div>
            <br />

            {/* PRODUCT SIZE RANGE START */}
            {/* <div className="mb-10">
              {/* HEADING START */}
            {/* <div className="flex justify-between mb-2">
          
                <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                  Select Guide
                </div>
              </div> */}
            {/* HEADING END */}


            {/* PRODUCT SIZE RANGE END */}

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










            {/* <Calander /> */}
            {/* <div className="flex flex-col lg:flex-row md:px-1 gap-[5px] lg:gap-[10px]">
            <div className="text-md font-sm text-black/[0.99] cursor-pointer">
            Date : 
          </div>
                <div className="text-[24px] font-semibold mb-2 leading-tight">
                                {dateC}
                            </div>
                            <div className="text-md font-sm text-black/[0.99] cursor-pointer">
           Time : 
          </div>
                <TimePicker onChange={onChangeTime} value={valueTime} />
            </div> */}

            {/* <button
        className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
        onClick={() => {

        }}
      >
        Confirm Appointment!
      </button> */}

<br/>

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

export default usePage