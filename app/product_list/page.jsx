"use client";

import { v4 } from "uuid";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
// import { useAuth } from "@auth";

import { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon , funnel} from '@heroicons/react/20/solid'

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@firebase/firebase";
import { signOut } from "firebase/auth";
import { AiFillFilter, AiOutlineDown, AiOutlinePlus } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";
import { GoSignOut } from "react-icons/go";
// import { useAuth } from "@firebase/auth_";
import { useRouter } from 'next/navigation';
import Loader from "@components/Loader";

import { collection, addDoc, getDoc, getDocs, where, query, deleteDoc, updateDoc, doc, setDoc } from "firebase/firestore";
import { db } from "@firebase/firebase";

import { AiFillEdit, AiOutlineSearch } from "react-icons/ai";
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';

import moment from 'moment/moment';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

import { Calendar } from 'react-date-range';
import { Radio, Row, Text } from "@nextui-org/react";
import { Dropdown } from "@nextui-org/react";


const people = [
    { id: 1, name: 'Male', unavailable: false },
    { id: 2, name: 'Female', unavailable: false },
    { id: 3, name: 'Child', unavailable: false },
]

const usePage = () => {

    const userLogedIn = true;
    //  const {authUser, isLoading, signOut} = useAuth();
    const [user, loading] = useAuthState(auth);

    //   const [providers, setProviders] = useState(null);
    const [toggleDropdown, setToggleDropdown] = useState(false);

    const [gender, setGender] = useState('Male');
    const [maritalStatus, setMaritalStatus] = React.useState('Married');
    var [disease, setDisease] = useState('');



    const [valueTime, onChangeTime] = useState('10:00');
    const [dateC, setDate] = useState();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [age, setAge] = useState();
    const [phone, setPhone] = useState();

    const [selectedPerson, setSelectedPerson] = useState(people[0])
    const [selected, setSelected] = useState(people[0])
    const test = () => {

        console.log(selectedPerson);
        console.log(selectedPerson.name);
    }



    // console.log(dateC);

    const router = useRouter();

    useEffect(() => {


        if (!loading && !user) {
            router.push("/login");
        }
        if (!!user) {
            console.log(user.uid);
            //    getTodos();
        }
    }, [user, loading]);


    const bookingHandler = async () => {
        try {

            var id = v4();
            var uid = user.uid;

            console.log(disease, setDisease);

            await setDoc(doc(db, "bookedAppointments", id), {
                id: id,
                userId: uid,
                name: name,
                email: email,
                phone: phone,
                age: age,
                maritalStatus: maritalStatus.toString(),
                gender: gender.toString(),
                disease: '',
                status: 'pending',
                date: dateC,
                prefTime: valueTime,
                remarks: '',
                completed: false,
                approved: false,

            });
            console.log("Document written with ID: ", id);


            //   getTodos();
            //   setTodoInput("");
        } catch (error) {
            console.error("error Meaasage", error);
        }
    }


    const Logout = async () => {

        await signOut(auth);
    }


    return (
        <div className=' innerWidth80'>
            <div className='c-wrapperBlack w-full flex-center'>
                <p className="text-lg text-white paddings">
                    Treatements List
                </p>
            </div>
            {/* <br /> */}

            <div className="appointmentContainer2 ">
                <div class="w-full paddings">



                    <Row class="w-full flex-between paddings">
                        <Text> Showing - 9 Result(s) found</Text>

                        <div className=" flex-between w-90">
                            <Text> Sort:   </Text>
                            <br/>


                            <div className=" drop-container">
                                <Listbox value={selected} onChange={setSelected}>
                                    <div className="relative mt-1">
                                        <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                            <span className="block truncate">{selected.name}</span>
                                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                <ChevronUpDownIcon
                                                    className="h-5 w-5 text-gray-400"
                                                    aria-hidden="true"
                                                />
                                            </span>
                                        </Listbox.Button>
                                        <Transition
                                            as={Fragment}
                                            leave="transition ease-in duration-100"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                        >
                                            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                {people.map((person, personIdx) => (
                                                    <Listbox.Option
                                                        key={personIdx}
                                                        className={({ active }) =>
                                                            `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                                            }`
                                                        }
                                                        value={person}
                                                    >
                                                        {({ selected }) => (
                                                            <>
                                                                <span
                                                                    className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                                        }`}
                                                                >
                                                                    {person.name}
                                                                </span>
                                                                {selected ? (
                                                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                    </span>
                                                                ) : null}
                                                            </>
                                                        )}
                                                    </Listbox.Option>
                                                ))}
                                            </Listbox.Options>
                                        </Transition>
                                    </div>
                                </Listbox>
                            </div>
                        </div>




                    </Row>

                </div>



                <div className="flex flex-col lg:flex-row md:px-10 gap-[5px] lg:gap-[10px] ">

                    <div class=" col30per ">
                        <div className="flex-between">

                        <Text> Filter </Text>
                        <funnel/>
                        <AiFillFilter/>
                        </div>
                       
                        <div>
                            <Listbox value={selected} onChange={setSelected}>
                                <div className="relative mt-1">
                                    <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                        <span className="block truncate">{selected.name}</span>
                                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                            <ChevronUpDownIcon
                                                className="h-5 w-5 text-gray-400"
                                                aria-hidden="true"
                                            />
                                        </span>
                                    </Listbox.Button>
                                    <Transition
                                        as={Fragment}
                                        leave="transition ease-in duration-100"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                            {people.map((person, personIdx) => (
                                                <Listbox.Option
                                                    key={personIdx}
                                                    className={({ active }) =>
                                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                                        }`
                                                    }
                                                    value={person}
                                                >
                                                    {({ selected }) => (
                                                        <>
                                                            <span
                                                                className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                                    }`}
                                                            >
                                                                {person.name}
                                                            </span>
                                                            {selected ? (
                                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                </span>
                                                            ) : null}
                                                        </>
                                                    )}
                                                </Listbox.Option>
                                            ))}
                                        </Listbox.Options>
                                    </Transition>
                                </div>
                            </Listbox>
                        </div>







                        {/* <div className="fixed top-16 w-72">
      
    </div> */}

















                    </div>
                    <div className='c-wrapper col70per ' color='white'>

                        <div className="flex-between c-container">
                            <Link
                                href={`/disease1`}
                                className=" box-container transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer">

                                <Image
                                    className="paddings makeImageCircular "
                                    width={300}
                                    height={300}
                                    src={'/arthritis.jpg'}
                                    alt={''}
                                />
                                <div className="p-4 text-black/[0.9] text-justify">
                                    <h2 className="text-lg font-medium">{'Arthritis'}</h2>
                                    <h4 className="text-xs">{'Arthritis is a term used to describe inflammation of the joints.'}</h4>
                                    <h4 className="text-blue-500 text-sm font-sm">{'learn more'}</h4>



                                </div>
                            </Link>
                            <Link
                                href={`/acidity`}
                                className="box-container transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
                            >

                                <Image
                                    className="paddings makeImageCircular img-container"
                                    width={300}
                                    height={300}
                                    src={'/Acidity2.jpg'}
                                    alt={''}
                                />
                                <div className="p-4 text-black/[0.9]">
                                    <h2 className="text-lg font-medium">{'Acidity '}</h2>
                                    <h4 className="text-xs">{'Acidity refers to a condition characterized by an excess ...'}</h4>

                                    <div className="flex items-center text-black/[0.5]">
                                        <h4 className="text-blue-500 text-sm font-sm">{'learn more'}</h4>
                                    </div>
                                    {/* <div className="flex items-center text-black/[0.5]">
                    <p className="mr-2 text-lg font-semibold">
                        &#8377;{'100'}
                    </p>

                    
                        <>
                        <p className="text-base  font-medium line-through">
                                &#8377;{'Rs. 4000'}
                            </p>
                            <p className="ml-auto text-base font-medium text-green-500">
                               20
                                % off
                            </p>
                        </>
                   
                </div> */}

                                </div>
                            </Link>

                            <Link
                                href={`/disease3`}
                                className=" box-container transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
                            >

                                <Image
                                    className="paddings makeImageCircular"
                                    width={300}
                                    height={300}
                                    src={'/bs1.jpg'}
                                    alt={''}
                                />
                                <div className="p-4 text-black/[0.9]">
                                    <h2 className="text-lg font-medium">{'Addiction'}</h2>
                                    <h4 className="text-xs">{'Addiction is when someone gets hooked on something ...'}</h4>

                                    <div className="flex items-center text-black/[0.5]">
                                        <h4 className="text-blue-500 text-sm font-sm">{'learn more'}</h4>
                                    </div>

                                </div>
                            </Link>


                        </div>
                        <br />
                        <div className="flex-between c-container">
                            <Link
                                href={`/disease4`}
                                className="box-container transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer">

                                <Image
                                    className="paddings makeImageCircular"
                                    width={300}
                                    height={300}
                                    src={'/bs1.jpg'}
                                    alt={''}
                                />
                                <div className="p-4 text-black/[0.9]">
                                    <h2 className="text-lg font-medium">{'Asthma'}</h2>
                                    <h4 className="text-xs">{'Asthma is a long term condition affecting children and aged one.'}</h4>

                                    <div className="flex items-center text-black/[0.5]">
                                        <h4 className="text-blue-500 text-sm font-sm">{'learn more'}</h4>
                                    </div>
                                    {/* <div className="flex items-center text-black/[0.5]">
                    <p className="mr-2 text-lg font-semibold">
                        &#8377;{'100'}
                    </p>
                        <>
                        <p className="text-base  font-medium line-through">
                                &#8377;{'Rs. 4000'}
                            </p>
                            <p className="ml-auto text-base font-medium text-green-500">
                               20
                                % off
                            </p>
                        </>
                </div> */}

                                </div>
                            </Link>
                            <Link
                                href={`/disease5`}
                                className="box-container transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
                            >

                                <Image
                                    className="paddings makeImageCircular"
                                    width={300}
                                    height={300}
                                    src={'/bs2.jpg'}
                                    alt={''}
                                />
                                <div className="p-4 text-black/[0.9]">
                                    <h2 className="text-lg font-medium">{'Cholesterol'}</h2>
                                    <h4 className="text-xs">{'Cholesterol is a waxy substance made by the liver and present in certain foods.'}</h4>

                                    <div className="flex items-center text-black/[0.5]">
                                        <h4 className="text-blue-500 text-sm font-sm">{'learn more'}</h4>
                                    </div>

                                </div>
                            </Link>

                            <Link
                                href={`/disease6`}
                                className="box-container transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
                            >

                                <Image
                                    className="paddings makeImageCircular"
                                    width={300}
                                    height={300}
                                    src={'/bs1.jpg'}
                                    alt={''}
                                />
                                <div className="p-4 text-black/[0.9] text-justify">
                                    <h2 className="text-lg font-medium">{'Liver disease'}</h2>
                                    <h4 className="text-xs ">{'Which can be caused by infections, inherited conditions, obesity and misuse of alcohol.'}</h4>

                                    <div className="flex items-center text-black/[0.5]">
                                        <h4 className="text-blue-500 text-sm font-sm">{'learn more'}</h4>
                                    </div>

                                </div>
                            </Link>


                        </div>
                        <br />
                        <div className="flex-between c-container">
                            <Link
                                href={`/disease7`}
                                className="box-container transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer">

                                <Image
                                    className="paddings makeImageCircular"
                                    width={300}
                                    height={300}
                                    src={'/bs1.jpg'}
                                    alt={''}
                                />
                                <div className="p-4 text-black/[0.9]">
                                    <h2 className="text-lg font-medium">{'Diabetes'}</h2>
                                    <h4 className="text-xs">{' Diabetes is a chronic medical condition that occurs when the body...'}</h4>

                                    <div className="flex items-center text-black/[0.5]">
                                        <h4 className="text-blue-500 text-sm font-sm">{'learn more'}</h4>
                                    </div>

                                </div>
                            </Link>
                            <Link
                                href={`/disease1`}
                                className="box-container transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
                            >

                                <Image
                                    className="paddings makeImageCircular"
                                    width={300}
                                    height={300}
                                    src={'/bs2.jpg'}
                                    alt={''}
                                />
                                <div className="p-4 text-black/[0.9]">
                                    <h2 className="text-lg font-medium">{'Arthritis'}</h2>
                                    <h4 className="text-xs">{'Arthritis is a term used to describe inflammation of the joints.'}</h4>

                                    <div className="flex items-center text-black/[0.5]">
                                        <h4 className="text-blue-500 text-sm font-sm">{'learn more'}</h4>
                                    </div>

                                </div>
                            </Link>

                            <Link
                                href={`/disease1`}
                                className="box-container transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
                            >

                                <Image
                                    className="paddings makeImageCircular"
                                    width={300}
                                    height={300}
                                    src={'/bs1.jpg'}
                                    alt={''}
                                />
                                <div className="p-4 text-black/[0.9]">
                                    <h2 className="text-lg font-medium">{'Arthritis'}</h2>
                                    <h4 className="text-xs">{'Arthritis is a term used to describe inflammation of the joints.'}</h4>

                                    <div className="flex items-center text-black/[0.5]">
                                        <h4 className="text-blue-500 text-sm font-sm">{'learn more'}</h4>
                                    </div>

                                </div>
                            </Link>


                        </div>
                        <br />
                        {/* <div className=" innerwidth flex-end">
        <button className='text-blue-500 text-sm'>
                    <a href="">View More  </a>
        </button>
        </div> */}


                    </div>


                    {/* <div class="about-section-col">

                     

                    </div> */}



                    {/* Calender */}





                </div>
            </div>
        </div>



    )
}

export default usePage