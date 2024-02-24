 'use client'

import React, { useState,useEffect } from 'react';
// import Warper from './Warper';
import Popup from 'reactjs-popup';
import { useTimer } from 'react-timer-hook';
//
import { v4 } from "uuid";
import Link from "next/link";
import Image from "next/image";

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

import { collection, addDoc, getDoc, getDocs, where, query, deleteDoc, updateDoc, doc, setDoc, Timestamp } from "firebase/firestore";
import { db } from "@firebase/firebase";

import { AiFillEdit, AiOutlineSearch } from "react-icons/ai";
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';

import moment from 'moment/moment';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

import { Calendar } from 'react-date-range';
import { Radio } from "@nextui-org/react";
import { Dropdown } from "@nextui-org/react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Fragment } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const PopupGfg = ({ expiryTimestamp }) => {
   
        const {
          totalSeconds,
          seconds,
          minutes,
          hours,
          days,
          isRunning,
          start,
          pause,
          resume,
          restart,
        } = useTimer({ expiryTimestamp,onExpire: () => {
            console.warn('onExpire called');
            setOpen(true)
        } });
      
    const [open, setOpen] = useState(false);

    useEffect(() => {
        start
      if (open) {
        setOpen(true);
      }
    }, [open]);



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


    const people = [
        { id: 1, name: 'Arthritis' },
        { id: 2, name: 'Acidity' },
        { id: 3, name: 'Addiction' },
        { id: 4, name: 'Asthma' },
        { id: 5, name: 'Cholesterol'},
        { id: 6, name: 'liver disease'},
        { id: 7, name: 'Diabetes'},
    ]

    const [selected, setSelected] = useState(people[0])
    const [query1, setQuery1] = useState('')

    const filteredPeople =
        query1 === ''
            ? people
            : people.filter((person) => {
                return person.name.toLowerCase().includes(query1.toLowerCase())
            })



 
  const closeModal = () => setOpen(false);
  return (
    <div className=' w-[400px]'>
      {/* <button type="button" className="button" onClick={() => setOpen(o => !o)}>
        Controlled Popup
      </button> */}
      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <div className="modal">
          <a className="close text-lg" onClick={closeModal}>
            &times;
          </a>
          <div className='c-wrapperBlack w-full flex-center'>
                <p className="text-medium text-white paddings">
                    Book an Appointment
                </p>
            </div>
            {/* <br /> */}

            <div className="appointmentContainer2 ">
                {/* <br />
                <button type="button" class="collapsible">Open Collapsible</button>
                <div class="content">
                    <p>Lorem ipsum...</p>
                </div> */}

                <div className="flex flex-col lg:flex-row md:px-10 gap-[5px] lg:gap-[5px] ">

                    {/* Forms input */}
                    <div class="about-section-col">

                        <form onSubmit={(e) => e.preventDefault()}>
                            {/* Name Input */}
                            <div className="mt-1 p-1 flex flex-col">
                                <label>Full Name *</label>
                                <input
                                    // value={valueTime}
                                    type="text"
                                    className="font-sm border-b border-black p-1 outline-0 focus-within:border-blue-400"
                                    required
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>

                            {/* Phone */}
                            <div className="mt-1 p-1 flex flex-col">
                                <label>Phone*</label>
                                <input
                                    // value={valueTime}
                                    type="phone"
                                    className="font-sm border-b border-black p-1 outline-0 focus-within:border-blue-400"
                                    required
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>

                         

                            {/* Age */}
                            <div className="mt-1 p-1 flex flex-col">
                                <label>Age*</label>
                                <input
                                    // value={valueTime}
                                    type="text"
                                    className="font-sm border-b border-black p-1 outline-0 focus-within:border-blue-400"
                                    required
                                    onChange={(e) => setAge(e.target.value)}
                                />
                            </div>

                            <div className="mt-1 p-1 flex flex-col">
                                <label>Date*</label>
                                <input
                                    value={dateC}
                                    type="text"
                                    className="font-sm border-b border-black p-1 outline-0 focus-within:border-blue-400"
                                    required
                                    onChange={(e) => setDate(e.target.value)}
                                />
                            </div>
                           
                            <div className="mt-1 p-1 flex flex-col text-sm">
                                <label>Gender*</label>
                                <Radio.Group orientation="horizontal" value={gender} onChange={setGender}>
                                    <Radio value="Male" color="primary" isSquared>
                                        Male
                                    </Radio>
                                    <Radio value="Female" color="secondary" isSquared>
                                        Female
                                    </Radio>
                                    <Radio value="Others" color="success" isSquared>
                                        Others
                                    </Radio>
                                </Radio.Group>
                            </div>

                           
                            <div className="mt-1 p-1 flex flex-col">
                                <label>Treatment for*</label>
                                <Combobox value={selected} onChange={setSelected}>
                                    <div className="relative mt-1">
                                        <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                                            <Combobox.Input
                                                className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                                                displayValue={(person) => person.name}
                                                onChange={(event) => setQuery1(event.target.value)}
                                            />
                                            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                                                <ChevronUpDownIcon
                                                    className="h-5 w-5 text-gray-400"
                                                    aria-hidden="true"
                                                />
                                            </Combobox.Button>
                                        </div>
                                        <Transition
                                            as={Fragment}
                                            leave="transition ease-in duration-100"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                            afterLeave={() => setQuery1('')}
                                        >
                                            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                {filteredPeople.length === 0 && query !== '' ? (
                                                    <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                                                        Nothing found.
                                                    </div>
                                                ) : (
                                                    filteredPeople.map((person) => (
                                                        <Combobox.Option
                                                            key={person.id}
                                                            className={({ active }) =>
                                                                `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-teal-600 text-white' : 'text-gray-900'
                                                                }`
                                                            }
                                                            value={person}
                                                        >
                                                            {({ selected, active }) => (
                                                                <>
                                                                    <span
                                                                        className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                                            }`}
                                                                    >
                                                                        {person.name}
                                                                    </span>
                                                                    {selected ? (
                                                                        <span
                                                                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-teal-600'
                                                                                }`}
                                                                        >
                                                                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                        </span>
                                                                    ) : null}
                                                                </>
                                                            )}
                                                        </Combobox.Option>
                                                    ))
                                                )}
                                            </Combobox.Options>
                                        </Transition>
                                    </div>
                                </Combobox>
                            </div>




                            <br />
                            <button
                                className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
                                // onClick =>(){}
                            >
                                Confirm Appointment!
                            </button>


                        </form>

                    </div>




                </div>
            </div>
        </div>
      </Popup>
    </div>
  );
 
}


export default PopupGfg