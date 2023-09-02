"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useAuth } from "@auth";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@firebase/firebase";
import { signOut } from "firebase/auth";
import Header from "./Header";
import Dropdown from "react-multilevel-dropdown";
import { useRouter } from "next/navigation";
// import { signIn, signOut, useSession, getProviders } from "next-auth/react";




const Nav2 = () => {
  // const { data: session } = useSession();
  const router = useRouter();

  const Logout = async () => {
    await signOut(auth);
  }
  const userLogedIn = true;
  //  const {authUser, isLoading, signOut} = useAuth();
  const [user, loading] = useAuthState(auth);
  //const router = useRouter();

  //   const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);


  //   useEffect(() => {
  //     (async () => {
  //       const res = await getProviders();
  //       setProviders(res);
  //     })();
  //   }, []);

  return (
    <nav className='max-sm:hidden flex-between w-full'>

      {/* Desktop Navigation */}
      <div className='w-full flex-start '>

        {/* Home */}
        <Dropdown
          title='Home'
          openOnHover={false}
          position="right"
          onClick={() => { router.push('/') }}
        ></Dropdown>
        <div className="verticalDivider" />

        {/* Ayurvedic Treatments We Offer */}
        <Dropdown
          title='Ayurvedic Treatments We Offer ↓'
          openOnHover={true}
          position="right"
        >
          <Dropdown.Item
            position='Arthritis'
            onClick={() => { router.push('/disease1') }} >
            Arthritis
          </Dropdown.Item>
          <Dropdown.Item
            position='Acidity '
            onClick={() => { router.push('/acidity') }} >
            Acidity
          </Dropdown.Item>

          <Dropdown.Item
            position='Addiction'
            onClick={() => { }} >
            Addiction
          </Dropdown.Item>

          <Dropdown.Item
            position='Asthma'
            onClick={() => { }}>
            Asthma
          </Dropdown.Item>

          <Dropdown.Item
            position='Cholesterol '
            onClick={() => { }}

          >
            Cholesterol
          </Dropdown.Item>
          <Dropdown.Item
            position='right'
            onClick={() => { }}

          >
            Diabetes
          </Dropdown.Item>
          <Dropdown.Item
            position='right'
            onClick={() => { }}

          >
            Liver disease
          </Dropdown.Item>

          <Dropdown.Item>
            Others
            <Dropdown.Submenu position="right">
              <Dropdown.Item>
                Subitem 1
              </Dropdown.Item>
              <Dropdown.Item>
                Subitem 2
              </Dropdown.Item>
              <Dropdown.Item>
                Subitem 3
              </Dropdown.Item>
            </Dropdown.Submenu>
          </Dropdown.Item>



        </Dropdown>

        {/* Book An Appointment */}
        <Dropdown
          title='Book An Appointment'
          openOnHover={false}
          position="right"
          onClick={() => { router.push('/book_an_appointment') }}
        ></Dropdown>

        {/* Why Choose Us */}
        <Dropdown
          title='Why Choose Us'
          openOnHover={false}
          position="right"
          onClick={() => { router.push('/why_choose_us') }}
        >
        </Dropdown>

        {/* Photo Gallery */}
        <Dropdown
          title='Photo Gallery'
          openOnHover={false}
          position="right"
          onClick={() => { router.push('/products') }}
        // onClick={() => {router.push('/disease')}}
        >
        </Dropdown>

        {/* About US */}
        <Dropdown
          title='About Us'
          openOnHover={false}
          position="right"
          onClick={() => { router.push('/about_us') }}
        ></Dropdown>

        {/* Contact Us */}
        <Dropdown
          title='Contact Us'
          openOnHover={false}
          position="right"
          onClick={() => { router.push('/contact_us') }}
        ></Dropdown>

        {/* My Account */}
        <Dropdown
          title='My Account'
          openOnHover={false}
          position="right"
          onClick={() => { router.push('/my_account') }}
        ></Dropdown>
        <br />
        <div className="verticalDivider" />

      </div>
    </nav>

  );
};

export default Nav2;