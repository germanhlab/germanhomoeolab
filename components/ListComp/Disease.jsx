"use client"

import { AiOutlinePlus } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";
import { GoSignOut } from "react-icons/go";
const arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
import { useEffect, useState } from "react";
// import { useAuth } from "@firebase/auth_";
import { useRouter } from 'next/navigation';
import Loader from "@components/Loader";

import { collection, addDoc, getDoc, getDocs, where, query, deleteDoc, updateDoc, doc, } from "firebase/firestore";
import { auth, db } from "@firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Link from "next/link";
import Image from "next/image";
import Sidebar from "@components/Sidebar";
import Loading from "@app/products/loading";


const Disease = () => {
    const [user, loading] = useAuthState(auth);

    const [todoInput, setTodoInput] = useState("");
    const [todos, setTodos] = useState([]);

    const [loadingF, setLoading] = useState(true);


    // const {user, isLoading, signOut} = useAuth();



    //for router or Navigate
    const router = useRouter();

    useEffect(() => {


        // if (!loading && !user) {
        //     router.push("/login");
        // }
        // if (!!user) {
        //     console.log(user.uid);
        //     getTodos();
        // }
       // getTodos();
    }); //, [user, loading]);

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
            setLoading(false);

        } catch (error) {
            console.error("erroe Meaasage", error);
        }
    }

    getTodos();

    return (loadingF ?
        <Loading/>
         :
        
       ( <div className="w-full md:pl-1 py-0 flex">

        <div className="disease-section flex justify-center items-center flex-wrap">
            
            {todos.length > 0 && todos.map((todo, index) => (
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
                        <div className="p-4 text-black/[0.9]">
                            <h2 className="text-lg font-medium">{todo.productName}</h2>
                            <div className="text-justify text-xs p" dangerouslySetInnerHTML={{ __html: todo.highlightDetails }}>
                            </div>
                            {/* <p className="text-xs p">{todo.productDescription}</p> */}

                            <h4 className="text-blue-500 text-sm font-sm">{'learn more'}</h4>

                        </div>
                    </Link>
                </div>
            ))}
        </div>
    </div>)

         

        );
}

export default Disease
