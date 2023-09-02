'use client'

import React, { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
// import { auth } from "../../firebase/firebase";
import {signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { useState } from "react";

import { useRouter } from "next/navigation";
import { useAuth } from "@auth";

import Link from "next/link";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { collection, addDoc, getDoc, getDocs, where, query, deleteDoc, updateDoc, doc, setDoc, Timestamp } from "firebase/firestore";
import { db } from "@firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@firebase/firebase";


const LoginForm = () => {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [user, loading] = useAuthState(auth);
    const {authUser, isLoading} = useAuth();

    const router = useRouter();


    useEffect(() => {
    
        if(user){

            console.log('sending to Home page 1 ');
          
            router.push("/");
            console.log('authUser',user);
        }
        // if(!authUser){
        //     console.log('sending to Home page 2');
        //     console.log("user", authUser);
        //     router.push("/register");
        // }
    },[user, loading]);


    const signinHandler = async () => {
        if(!email || !password) return;
        try {
        const user =  await signInWithEmailAndPassword(auth,email,password);
        router.push("/");
          console.log(user);
        } catch (error) {
            console.error('error login with Email', error)
        }

    }

    const registerDocToDb = async (userF) => {
        try {
            var uid = userF.uid;

            console.log("user ID:", uid);
            const docRef = doc(db, "users", uid);

            const docSnap = await getDoc(docRef);
    
            if (docSnap.exists()) {
            console.log("Document data:", docSnap.data);
            console.log("Document prasent!");
            router.push("/");

            } else {
                
                var myTimestamp = Timestamp.fromDate(new Date());
                console.log("phone number:",userF.phoneNumber);
    
                await setDoc(doc(db, "users", uid), {
                    userId: uid,
                    name: userF.displayName,
                    email: userF.email,
                    phone: '',
                    status: '',
                    profilePhoto: userF.photoURL,
                    registerDate: myTimestamp,
                    remarks: '',
                    location:'',
                    approved: true,
                }).then(() =>  router.push("/") );

               
                toast.success("Login Successfully!", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
    
            // docSnap.data() will be undefined in this case
            console.log("No such document!");
            }
        } catch (error) {
            console.log("error message:", error);
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
    }

       // for Google signup 
       const provider = new GoogleAuthProvider();

       const signInWithGoogle = async () => {
   
           const googleuser = (await signInWithPopup(auth,provider,)).user;
         //  .then(() => 
   ///call a method
                   registerDocToDb(googleuser)
         // );
           console.log(googleuser);
       }

    return  (
        <main className="flex lg:h-[100vh]">
            <div className="w-full lg:w-[60%] p-8 md:p-14 flex items-center justify-center lg:justify-start">
                <div className="p-8 w-[600px]">
                    <h1 className="text-6xl font-semibold">Login</h1>
                    <p className="mt-6 ml-1">
                        Don't have an account ?{" "}
                        <Link className="underline hover:text-blue-400 cursor-pointer" href={"/register"}>
                            Sign Up
                        </Link>
                    </p>

                    <div className="bg-black/[0.05] text-white w-full py-4 mt-10 rounded-full transition-transform hover:bg-black/[0.8] active:scale-90 flex justify-center items-center gap-4 cursor-pointer group"
                    onClick={signInWithGoogle}
                    >
                        <FcGoogle size={22} />
                        <span className="font-medium text-black group-hover:text-white">
                            Login with Google
                        </span>
                    </div>

                    <form  onSubmit={(e) => e.preventDefault()}>
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
                        <label>Password</label>
                        <input
                            type="password"
                            className="font-medium border-b border-black p-4 outline-0 focus-within:border-blue-400"
                            required
                            onChange={(e)=> setPassword(e.target.value)}
                        />
                    </div>
                    <button className="bg-black text-white w-44 py-4 mt-10 rounded-full transition-transform hover:bg-black/[0.8] active:scale-90"
                    onClick={signinHandler}>
                        Sign in
                    </button>
                    </form>
                </div>
            </div>
            <div
                className="w-[40%] bg-slate-400 bg-cover bg-right-top hidden lg:block"
                style={{
                    backgroundImage: "url('/login-banner.jpg')",
                }}
            ></div>
        </main>
    );
};

export default LoginForm;
