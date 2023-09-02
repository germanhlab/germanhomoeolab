"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
// import { useAuth } from "@auth";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@firebase/firebase";
import { signOut } from "firebase/auth";
import { AiOutlinePlus } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";
import { GoSignOut } from "react-icons/go";
// import { useAuth } from "@firebase/auth_";
import { useRouter } from 'next/navigation';
import Loader from "@components/Loader";

import { collection, addDoc, getDoc, getDocs, where, query, deleteDoc, updateDoc, doc, } from "firebase/firestore";
import { db } from "@firebase/firebase";

import { AiFillEdit, AiOutlineSearch } from "react-icons/ai";
import Collapsible from 'react-collapsible';

const usePage = () => {

    // var coll = document.getElementsByClassName("collapsible");
    // var i;

    // for (i = 0; i < coll.length; i++) {
    //     coll[i].addEventListener("click", function () {
    //         this.classList.toggle("active");
    //         var content = this.nextElementSibling;
    //         if (content.style.display === "block") {
    //             content.style.display = "none";
    //         } else {
    //             content.style.display = "block";
    //         }
    //     });
    // }
    const [user, loading] = useAuthState(auth);

    const [todoInput, setTodoInput] = useState("");
    const [todos, setTodos] = useState([]);


    const router = useRouter();

    useEffect(() => {


        if (!loading && !user) {
            router.push("/login_page");
        }
        if (!!user) {
            console.log(user.uid);
            getTodos();
        }
    }, [user, loading]);

    // get data from database
    const getTodos = async () => {
        try {

            const q = query(collection(db, "bookedAppointments"), where("userId", "==", user.uid));

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


    const Logout = async () => {

        await signOut(auth);
    }
    const userLogedIn = true;

    const [toggleDropdown, setToggleDropdown] = useState(false);

    return (
        <div className=' innerWidth80'>
            <div className='c-wrapperBlack w-full flex-center'>
                <p className="text-lg text-white paddings">
                    Profile
                </p>
            </div>
            <br />

            <div>
                <div className=" flex-center flex-col lg:flex-row md:px-10 gap-[5px] lg:gap-[10px]  ">
                    <div className="flex-center">
                        {user ?
                            (<Image
                                src={user?.photoURL}
                                width={150}
                                height={150}
                                alt="logo image"
                                priority={true}
                                className="lg:w-[150px] w-[150px] relative bottom-1 rounded-full "
                            />
                            )
                            :
                            <Image
                                src={'/guest.png'}
                                width={150}
                                height={150}
                                alt="logo image"
                                priority={true}
                                className="lg:w-[150px] w-[150px] relative bottom-1 rounded-full"
                            />}
                    </div>
                    <div >
                        <div className="flex-center">
                            {user ?
                                <div className="text-lg font-bold mb-1">
                                    {`Hello, ${user?.displayName}`}
                                </div>
                                :
                                <div className="text-lg font-semibold mb-5">
                                    USER
                                </div>
                            }
                        </div>
                        <div>
                            {user ?
                                <div className="text-sm font-semibold mb-1">
                                    {` ${user?.email}`}
                                </div>
                                :
                                <div className="text-lg font-semibold mb-5">
                                    exemple@gmail.com
                                </div>
                            }
                        </div>
                        <div className="flex-center">
                            <AiFillEdit />
                            {user ?
                                <button type='button' onClick={() => { }} className='text-sm text-red-500'>
                                    Edit Profile
                                </button>
                                :
                                <Link href='' className='black_btn paddingsSmall'>

                                </Link>
                            }
                        </div>
                    </div>
                </div>


                {/* <div className="flex-center">
          {user ?
            <button type='button' onClick={Logout} className='text-sm text-red-500'>
              Log Out
            </button>
            :
            <Link href='/login_page' className='black_btn paddingsSmall'>
              Login
            </Link>
          }
        </div> */}

            </div>
            <br />
            <div class="border"></div>

            <br />

            <div className="below2nd-container paddings flex-between">

                <h3 className="text-lg font-lg font-bold text-black"> Appointments</h3>

                <Link href={''}>

                    <h2 className="text-sm font-medium text-blue-500">{'view all >'}</h2>
                </Link>
            </div>

            <div className="appointmentContainer">
                {/* <br />
                <button type="button" class="collapsible">Open Collapsible</button>
                <div class="content">
                    <p>Lorem ipsum...</p>
                </div> */}

                <div className="">
                    <div key={""} className="bg-black text-white w-44 py-4 mt-10 rounded-lg transition-transform hover:bg-black/[0.8] active:scale-90 flex items-center justify-center gap-2 font-medium shadow-md fixed bottom-5 right-5 cursor-pointer"
                        onClick={() => { }}>

                        <GoSignOut size={18} />
                        <span>Logout</span>
                    </div>
                    <div className="w-full">

                        <div className="w-full">
                            {todos.length > 0 && todos.map((todo, index) => 
                            

                            (
                                <div className="w-full">
                                    <Collapsible trigger={
                                <div key={todo.id} className="below2nd-container paddings flex-between">
                                    <div className="flex flex-between gap-3">
                                        {/* <input
                                            id={`todo-${todo.id}`}
                                            type="checkbox"
                                            className="w-4 h-4 accent-green-400 rounded-lg"
                                            checked={todo.approved}
                                            onChange={(e) => markAsCompletedHander(e, todo.id)}
                                        /> */}
                                        <div>
                                        <label
                                            htmlFor={`todo-${todo.id}`}
                                            className={`font-medium ${todo.completed ? 'line-through' : ''}`}
                                        >
                                            {`${index +1}.  `}
                                        </label>

                                        <label
                                            htmlFor={`todo-${todo.id}`}
                                            className={`font-medium`}
                                        >
                                            {`${todo.disease} `}
                                        </label>
                                        </div>
                                       
                                    
                                       
                                    </div>

                                    <div className="">
                                    <label
                                            htmlFor={`todo-${todo.id}`}
                                            className={`font-sm text-black-300`}
                                        >
                                            {'Consultation Date: '}
                                            
                                        </label>
                                        <label
                                            htmlFor={`todo-${todo.id}`}
                                            className={`font-medium`}
                                        >
                                            {/* {`${new Date(todo.date)}`} */}
                                            {` ${todo.date.toDate().toString()}   `} 
                                        </label>

                                        <label
                                            htmlFor={`todo-${todo.id}`}
                                            className={`font-medium`}
                                        >
                                            {`${todo.prefTime}    `}
                                        </label>

                                        <label
                                            htmlFor={`todo-${todo.id}`}
                                            className={`font-sm text-black-45` }
                                        >
                                            {'Status: '}
                                            
                                        </label>

                                        <label
                                            htmlFor={`todo-${todo.id}`}
                                            className={`font-medium  ${todo.approved ? 'text-green-500' : ''}`}
                                        >
                                            {todo.status}
                                        </label>
                                        </div>

                                    {/* <div className="flex items-center gap-3" onClick={() => {}}>
                                        <MdDeleteForever
                                            size={24}
                                            className="text-red-400 hover:text-red-600 cursor-pointer"
                                        />
                                    </div> */}
                                </div>}>

                                <div key={todo.id} className="below2nd-container paddings flex-between">
                                    <div className="flex flex-between gap-3">
                                        <div>
                                        <label
                                            htmlFor={`todo-${todo.id}`}
                                            className={`font-medium`}
                                        >
                                            {`Patient Name: `}
                                        </label>

                                        <label
                                            htmlFor={`todo-${todo.id}`}
                                            className={`font-medium`}
                                        >
                                            {`${todo.name}, `}
                                        </label>
                                        
                                        <label
                                            htmlFor={`todo-${todo.id}`}
                                            className={`font-medium`}
                                        >
                                            {`${todo.age}y, `}
                                        </label>

                                        <label
                                            htmlFor={`todo-${todo.id}`}
                                            className={`font-medium`}
                                        >
                                            {`${todo.gender}, `}
                                        </label>
                                        <br />
                                        <label
                                            htmlFor={`todo-${todo.id}`}
                                            className={`font-medium`}
                                        >
                                            {`Disease Name: `}
                                        </label>

                                        <label
                                            htmlFor={`todo-${todo.id}`}
                                            className={`font-medium`}
                                        >
                                            {`${todo.disease} `}
                                        </label>

                                        <br />
                                        <label
                                            htmlFor={`todo-${todo.id}`}
                                            className={`font-medium`}
                                        >
                                            {`Phone: `}
                                        </label>

                                        <label
                                            htmlFor={`todo-${todo.id}`}
                                            className={`font-medium`}
                                        >
                                            {`${todo.phone} `}
                                        </label>
                                        </div>
                                       
                                    </div>
                                    <br />

                                    <div className="">
                                    <label
                                            htmlFor={`todo-${todo.id}`}
                                            className={`font-sm text-black-300`}
                                        >
                                            {'Consultation Date: '}
                                            
                                        </label>
                                        <label
                                            htmlFor={`todo-${todo.id}`}
                                            className={`font-medium`}
                                        >
                                            {` ${todo.date}   `}
                                        </label>
                                        <br />

                                        <label
                                            htmlFor={`todo-${todo.id}`}
                                            className={`font-medium`}
                                        >
                                            {`Estimate Time: `}
                                        </label>

                                        <label
                                            htmlFor={`todo-${todo.id}`}
                                            className={`font-medium`}
                                        >
                                            {`${todo.prefTime}    `}
                                        </label>
                                        <br />

                                        <label
                                            htmlFor={`todo-${todo.id}`}
                                            className={`font-sm text-black-45` }
                                        >
                                            {'Status: '}
                                            
                                        </label>

                                        <label
                                            htmlFor={`todo-${todo.id}`}
                                            className={`font-medium  ${todo.approved ? 'text-green-500' : ''}`}
                                        >
                                            {todo.status}
                                        </label>
                                        </div>

                                    {/* <div className="flex items-center gap-3" onClick={() => {}}>
                                        <MdDeleteForever
                                            size={24}
                                            className="text-red-400 hover:text-red-600 cursor-pointer"
                                        />
                                    </div> */}
                                </div>
                                       
                                    </Collapsible>
                                    <div class="border"></div>
                                </div>

                            ))}
                        </div>
                    </div>
                   
                </div>


            </div>


        </div>



    )
}

export default usePage