'use client'

import React,{useState,useEffect} from "react";
import { FcGoogle } from "react-icons/fc";
// import {auth} from "../../firebase/firebase"
import {createUserWithEmailAndPassword,updateProfile,GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { collection, addDoc, getDoc, getDocs, where, query, deleteDoc, updateDoc, doc, setDoc, Timestamp } from "firebase/firestore";
import { db } from "@firebase/firebase";
import { useAuth } from "@auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@firebase/firebase";
import { useRouter } from "next/navigation";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Link from "next/link";


const RegisterForm =  () => {

    const [username, setUsername] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const {authUser, isLoading, setAuthUser} = useAuth();
    const [user, loading] = useAuthState(auth);

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
    //     if(!isLoading && authUser){

    //         router.push("/");
    //     }
    // },[authUser, isLoading]);


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

    const signupHandler = async () => {
        if(!email || !password || !username) return;

        try {
           const { user } = await createUserWithEmailAndPassword(auth,email,password);

        //    var id = v4();
                var uid = user.uid;
                var myTimestamp = Timestamp.fromDate(new Date());
    
                await setDoc(doc(db, "users", uid), {
                    userId: uid,
                    name: username,
                    email: email,
                    phone: '',
                    status: '',
                    profilePhoto:  "https://firebasestorage.googleapis.com/v0/b/german-homoeo-lab-web.appspot.com/o/avater%2Fguest.png?alt=media&token=105a2a2f-34d4-4cbe-8436-a185b870cf35",
                    registerDate: myTimestamp,
                    remarks: '',
                    location:'',
                    areaPin: [],
                    approved: true,
                })
        
            await updateProfile(auth.currentUser,
                {displayName : username,
                photoURL: "https://firebasestorage.googleapis.com/v0/b/german-homoeo-lab-web.appspot.com/o/avater%2Fguest.png?alt=media&token=105a2a2f-34d4-4cbe-8436-a185b870cf35",
                })
            
                // setAuthUser({
                //     uid: user.uid,
                //     email: user.email,
                //     username: username,
                // });

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
            
        } catch (error) {
            console.log('error login with Email', error)
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
                <div className="p-8 sm:w-[80%] lg:w-[600px]">
                    <h1 className="text-6xl font-semibold">Sign Up</h1>
                    <p className="mt-6 ml-1">
                        Already have an account ?{" "}
                        <Link className="underline hover:text-blue-400 cursor-pointer" href={"/login_page"}>
                            Login
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


                    <form onSubmit={(e) => e.preventDefault()}>
                    <div className="mt-10 pl-1 flex flex-col">
                        <label>Name</label>
                        <input
                            type="text"
                            className="font-medium border-b border-black p-4 outline-0 focus-within:border-blue-400"
                            required
                            onChange={(e)=> setUsername(e.target.value)}
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
                        <label>Password</label>
                        <input
                            type="password"
                            className="font-medium border-b border-black p-4 outline-0 focus-within:border-blue-400"
                            required
                            onChange={(e)=> setPassword(e.target.value)}
                        />
                    </div>
                    
                   
                    <button className="bg-black text-white w-44 py-4 mt-10 rounded-full transition-transform hover:bg-black/[0.8] active:scale-90"
                    onClick={signupHandler}
                    >
                        Sign Up
                    </button>

                    <div className="paddings">

                    </div>
                    <div className="paddings">
                        
                    </div>
                    
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

export default RegisterForm;
