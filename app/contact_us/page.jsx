'use client'

import React, { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
//import {auth} from "../../firebase/firebase"
import {signInWithEmailAndname,GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { collection, addDoc, getDoc, getDocs, where, query, deleteDoc, updateDoc, doc, setDoc, Timestamp } from "firebase/firestore";
import { db } from "@firebase/firebase";
import { v4 } from "uuid";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@firebase/firebase";
import { useAuth } from "@auth";
import { useRouter } from "next/navigation";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

import Link from "next/link";



const LoginForm = () => {

    const [user, loading] = useAuthState(auth);

    const [email, setEmail] = useState(null);
    const [phone, setPhone] = useState(null);
    const [name, setName] = useState(null);
    const [subject, setSubject] = useState(null);
    const [msg, setMsg] = useState(null);
    const {authUser, isLoading} = useAuth();

    const router = useRouter();

    const bookingHandler = async () => {

        if (name != null || phone != null || subject != null || msg != null) {
            try {


                var data = {
                    service_id: 'service_0dv3jna',
                    template_id: 'template_f8c83qg',
                    user_id: '104KN49SMmGFepGCe',
                    template_params: {
                      'to_name': 'German Homoeo Lab',
                      'from_name': name,
                      'phone': phone,
                      'subject': subject,
                     'web_address': 'https://www.germanhomoeolab.in/',
                      'message': msg,
                    }
                  };
      
                //   setCanClick(false);
                  const res = await axios.post('https://api.emailjs.com/api/v1.0/email/send', data);
                  console.log('msg sent', '');
                  setName('');
                  setEmail('');
                //   setPhone(null);
                //   setAge(null);
                //   setDate(null);
                //   setMaritalStatus(true);

                
                  toast.success('Application Submitted Successfuly!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                  });

                //   router.push("/login");
                



                // var id = v4();
                // var uid = user.uid;
                // var myTimestamp = Timestamp.fromDate(new Date());

                // await setDoc(doc(db, "bookedAppointments", id), {
                //     id: id,
                //     userId: uid,
                //     name: name,
                //     email: email,
                //     phone: phone,
                //     age: age,
                //     maritalStatus: maritalStatus.toString(),
                //     gender: gender.toString(),
                //     disease: `${selected.name}`,
                //     status: 'pending',
                //     date: myTimestamp,
                //     prefdate: dateC,
                //     prefTime: valueTime,
                //     approvedTime: '',
                //     adminCallbackTime: '',
                //     remarks: '',
                //     completed: false,
                //     approved: false,

                // }).then(() => {
                //     // subject = '',

                //         toast.success("Appointment request Submitted Successfully!", {
                //             position: "top-right",
                //             autoClose: 5000,
                //             hideProgressBar: false,
                //             closeOnClick: true,
                //             pauseOnHover: true,
                //             draggable: true,
                //             progress: undefined,
                //             theme: "colored",
                //         });
                // });
                // console.log("Document written with ID: ", id);


                //   getTodos();
                //   setTodoInput("");
            } catch (error) {
                console.error("error Meaasage", error);
                toast.error("Somethong went wrong!", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }
        } else {
            toast.warning("Check all the fields or Please try again!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }

    }

    return  (
        <div className=' w-full '>
            <div className='c-wrapperBlack w-full flex-center'>
                <p className="text-lg text-white paddings">
                    We are for You!
                </p>
            </div>

            <div className="w-full flex-center items-center justify-center ">
                <div className="p-8 w-[600px]">
                    <h1 className="text-4xl font-semibold">Contact Us!</h1>

                    <form  onSubmit={(e) => e.preventDefault()}>
                    <div className="mt-10 pl-1 flex flex-col">
                        <label>Full Name *</label>
                        <input
                           
                            className="font-medium border-b border-black p-4 outline-0 focus-within:border-blue-400"
                            required
                            onChange={(e)=> setName(e.target.value)}
                        />
                    </div>
                    {/* <div className="mt-10 pl-1 flex flex-col">
                        <label>Email *</label>
                        <input
                            type="email"
                            className="font-medium border-b border-black p-4 outline-0 focus-within:border-blue-400"
                            required
                            onChange={(e)=> setEmail(e.target.value)}
                        />
                    </div> */}
                    <div className="mt-10 pl-1 flex flex-col">
                        <label>Phone Number *</label>
                        <input
                            type="phone"
                            className="font-medium border-b border-black p-4 outline-0 focus-within:border-blue-400"
                            required
                            onChange={(e)=> setPhone(e.target.value)}
                        />
                    </div>
                    <div className="mt-10 pl-1 flex flex-col">
                        <label>Subject *</label>
                        <input
                            
                            className="font-medium border-b border-black p-4 outline-0 focus-within:border-blue-400"
                            required
                            onChange={(e)=> setSubject(e.target.value)}
                        />
                    </div>

                    <div className="mt-10 pl-1 flex flex-col">
                        <label>Comment or Message *</label>
                        <input
                            
                            className="font-medium border-b border-black p-4 outline-0 focus-within:border-blue-400"
                            required
                            onChange={(e)=> setMsg(e.target.value)}
                        />
                    </div>
                    <button className="bg-black text-white w-44 py-4 mt-10 rounded-full transition-transform hover:bg-black/[0.8] active:scale-90"
                    onClick={bookingHandler}>
                       Submit
                    </button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default LoginForm;





