'use client'

import React, { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { auth } from "../../firebase/firebase";
import {signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { useState } from "react";

import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
//import { auth } from "@firebase/firebase";
import { useAuth } from "@auth";

import Link from "next/link";



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

    // useEffect(() => {
    //     console.log('authUser',authUser);
    //     if(authUser){

    //         console.log('sending to Home page 1 ');
          
    //         router.push("/");
    //         console.log('authUser',authUser);
    //     }
    //     // if(!authUser){
    //     //     console.log('sending to Home page 2');
    //     //     console.log("user", authUser);
    //     //     router.push("/register");
    //     // }
    // },[authUser, isLoading]);

    const signinHandler = async () => {
        if(!email || !password) return;
        try {
        const user =  await signInWithEmailAndPassword(auth,email,password)
          console.log(user);
        } catch (error) {
            console.error('error login with Email', error)
        }

    }

    // for Google signup 
    const provider = new GoogleAuthProvider();

    const signInWithGoogle = async () => {

        const googleuser = await signInWithPopup(auth,provider,)
        console.log(googleuser);
    }

    return  (
        <main className="flex">
            <div className="w-full lg:w-[60%] p-8 md:p-14 flex items-center justify-center lg:justify-start">
                <div className="p-8 sm:w-[80%] lg:w-[600px]">
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
