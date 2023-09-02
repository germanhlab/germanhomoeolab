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

    const sendToDB = async () => {
        console.log("Document written with ID: "," calling send todb");
        if(name != null && email != null && phone != null && msg != null && subject != null ){
            try {
                var id = v4();
                var uid = user.uid;
                var myTimestamp = Timestamp.fromDate(new Date());
    
                await setDoc(doc(db, "feedBack", id), {
                    id: id,
                    userId: uid,
                    name: name,
                    email: email,
                    phone: phone,
                    status: 'pending',
                    msg: msg,
                    subject: subject,
                    date: myTimestamp,
                    remarks: '',
                    completed: false,
                    approved: false,
                }).then(() =>{
                   // subject = '',

                    toast.success("Feedback Submitted Successfully!", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                        });
                });
                // console.log("Document written with ID: ", id);
                // toast("Feedback Submitted Successfully!")
                //   getTodos();
                //   setTodoInput("");
            } catch (error) {
                // console.error("error Meaasage", error);
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
        }else{
            // toast("Check all the fields or Please try again!")
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
        <div className=' w-full'>
            <div className='c-wrapperBlack w-full flex-center'>
                <p className="text-lg text-white paddings">
                    Book an Appointment
                </p>
            </div>

            <div className="w-full flex items-center justify-center lg:justify-start">
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
                    <div className="mt-10 pl-1 flex flex-col">
                        <label>Email</label>
                        <input
                            type="email"
                            className="font-medium border-b border-black p-4 outline-0 focus-within:border-blue-400"
                            required
                            onChange={(e)=> setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mt-10 pl-1 flex flex-col">
                        <label>Phone Number</label>
                        <input
                            type="phone"
                            className="font-medium border-b border-black p-4 outline-0 focus-within:border-blue-400"
                            required
                            onChange={(e)=> setPhone(e.target.value)}
                        />
                    </div>
                    <div className="mt-10 pl-1 flex flex-col">
                        <label>Subject</label>
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
                    onClick={sendToDB}>
                       Submit
                    </button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default LoginForm;





