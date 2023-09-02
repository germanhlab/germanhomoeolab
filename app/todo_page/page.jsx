"use client"

import { AiOutlinePlus } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";
import { GoSignOut } from "react-icons/go";
const arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
import { useEffect,useState } from "react";
// import { useAuth } from "@firebase/auth_";
import { useRouter } from 'next/navigation';
import Loader from "@components/Loader";

import { collection,addDoc,getDoc,getDocs,where,query,deleteDoc,updateDoc,doc, } from "firebase/firestore";
import { auth, db } from "@firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";


const usePage = () => {
    const [user, loading] = useAuthState(auth);

    const [todoInput, setTodoInput] = useState("");
    const [todos,setTodos] = useState([]);

    // const {user, isLoading, signOut} = useAuth();



    //for router or Navigate
    const router = useRouter();

    useEffect(() => {
       
       
        if(!loading && !user){
            router.push("/login");
        }
        if(!!user){
            console.log(user.uid);
           getTodos();
        }
    },[user, loading]);

    // save todo to Database

    const addToDo = async ()=> {
        try {
            const docRef = await addDoc(collection(db, "todos"), {

                uid: user.uid,
                content: todoInput,
                completed: false,
              });
              console.log("Document written with ID: ", docRef.id);

              getTodos();
              setTodoInput("");
        } catch (error) {
            console.error("erroe Meaasage", error);
        }
    }

    // get data from database
    const getTodos = async () => {
        try {
            
            const q = query(collection(db, "todos"), where("uid", "==", user.uid));

                const querySnapshot = await getDocs(q);
                let data = []

                querySnapshot.forEach((doc) => {
                    data.push({...doc.data(), id: doc.id})
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                });
                setTodos(data);

        } catch (error) {
            console.error("erroe Meaasage", error);
        }
    }

    // Delete Doc  from database
    const deleteTodo = async (docID) => {
        try {
            await deleteDoc(doc(db,"todos",docID));
            getTodos();
        } catch (error) {
            console.error("erroe Meaasage", error);
        }
    }

    // Ckecked as done 
    const markAsCompletedHander = async (event, docID) => {

        try {
            const docRef = doc(db,"todos", docID);
            await updateDoc(docRef,{
                completed: event.target.checked
            });
            getTodos();

        } catch (error) {
            console.error(error);
        }
 }

    const onKeyUp = (event) => {
        if(event.key === "Enter" && todoInput.length >0){
            addToDo();
        }
    };

    return !user ?
    <Loader/>
     : (
        <main className="">
            <div key={""} className="bg-black text-white w-44 py-4 mt-10 rounded-lg transition-transform hover:bg-black/[0.8] active:scale-90 flex items-center justify-center gap-2 font-medium shadow-md fixed bottom-5 right-5 cursor-pointer"
                onClick={() => {}}>
               
                <GoSignOut size={18} />
                <span>Logout</span>
            </div>
            <div className="max-w-3xl mx-auto mt-10 p-8">
                <div className="bg-white -m-6 p-3 sticky top-0">
                    <div className="flex justify-center flex-col items-center">
                        <span className="text-7xl mb-10">📝</span>
                        <h1 className="text-5xl md:text-7xl font-bold">
                            ToooDooo's
                        </h1>
                    </div>
                    <div className="flex items-center gap-2 mt-10">
                        <input
                            placeholder={`👋 Hello name, What to do Today?`}
                            type="text"
                            className="font-semibold placeholder:text-gray-500 border-[2px] border-black h-[60px] grow shadow-sm rounded-md px-4 focus-visible:outline-yellow-400 text-lg transition-all duration-300"
                            autoFocus
                            value={todoInput}
                            onChange={(e) => setTodoInput(e.target.value)}
                            onKeyUp={onKeyUp}
                        />
                        <button className="w-[60px] h-[60px] rounded-md bg-black flex justify-center items-center cursor-pointer transition-all duration-300 hover:bg-black/[0.8]"
                        onClick={addToDo}
                        >
                            <AiOutlinePlus size={30} color="#fff" />
                        </button>
                    </div>
                </div>
                <div className="my-10">
                    {todos.length > 0 && todos.map((todo, index) => (
                        <div key={todo.id} className="flex items-center justify-between mt-4">
                            <div className="flex items-center gap-3">
                                <input
                                    id={`todo-${todo.id}`}
                                    type="checkbox"
                                    className="w-4 h-4 accent-green-400 rounded-lg"
                                    checked={todo.completed}
                                    onChange={(e) => markAsCompletedHander(e,todo.id)}
                                />
                                <label
                                    htmlFor={`todo-${todo.id}`}
                                    className={`font-medium ${todo.completed ? 'line-through' : ''}`}
                                >
                                    {todo.content}
                                </label>
                            </div>

                            <div className="flex items-center gap-3" onClick={() => deleteTodo(todo.id)}>
                                <MdDeleteForever
                                    size={24}
                                    className="text-red-400 hover:text-red-600 cursor-pointer"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}

export default usePage
