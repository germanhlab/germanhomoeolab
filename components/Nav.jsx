"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useAuth } from "@auth";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@firebase/firebase";
import { signOut } from "firebase/auth";
import Header from "./Header";
import { AiOutlineSearch } from "react-icons/ai";
import { Dropdown, Avatar, Text, Grid, User } from "@nextui-org/react";
import { AiOutlineMenu } from "react-icons/ai";
import Marquee from "react-fast-marquee";
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';

// import { signIn, signOut, useSession, getProviders } from "next-auth/react";


const Nav = () => {
  // const { data: session } = useSession();


  const Logout = async () => {

    await signOut(auth);
  }
  const userLogedIn = true;
  //  const {authUser, isLoading, signOut} = useAuth();
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  //   const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const searching = (e) => {
    e.preventDefault();
    if (searchTerm !== "") {
      router.push(`/category/${searchTerm}`);
    }
  };

  const onKeyUp = (event) => {
    if (event.key === "Enter" && searchTerm !== "") {
      searching
    }
  };


  //   useEffect(() => {
  //     (async () => {
  //       const res = await getProviders();
  //       setProviders(res);
  //     })();
  //   }, []);

  return (
    <nav className='w-full mb-2 pt-3 c-Nav sticky'>

      <div className=' max-sm:hidden sticky top-0 flex-between w-full mb-2 pt-3 c-Nav text-black'>
        <div className=" flex flex-col lg:flex-row md:px-7 gap-[5px] lg:gap-[10px] ">
          <div className="logo-container">
            <Link href='/' className='flex gap-2 flex-center'>
              <Image
                src='/logo.png'
                alt='logo'
                width={200}
                height={100}
                className='object-contain'
              />


              {/* <div className="max-sm:hidden">
                <p className='text-red-500 text-lg font-bold'>German Homoeo Lab</p>

                <text>Haldia</text>
              </div> */}

            </Link>
          </div>
        </div>

        <div className="w-full gap-[10px] paddingsSmall nav-blue-container flex-start">

          <div className=" lg:block">

            <form className="flex text-white" onSubmit={searching}>
              <input
                type="text"
                //  className=" border rounded-l-xl py-2 px-4 outline-none text-black focus:border-[#ff9900]"
                //className="bg-[#0693e3] border-[#f9f9f9] rounded-l-l py-2 px-4 outline-none text-white focus:border-[#ff9900]"
                style={{ border: "2px solid white" }}
                className="bg-[#0693e3] py-2 px-4 outline-none text-white focus:border-[#ff9900]"

                //  className="search-text-desktop bg[#ff9900]"
                placeholder="Search Here"

                onChange={(e) => {
                  setSearchTerm(e.target.value);
                }}
                value={searchTerm}
                onKeyUp={onKeyUp}
              />
              <button className="text-3xl px-2 rounded-r-xl">
                <AiOutlineSearch />
              </button>
            </form>
          </div>

          <div className="gap-[5px]">

          </div>

          <div className="max-sm:hidden flex-between ">
            <div className="paddingsSmall"></div>
            <div className="vl"></div>
            <div className="white-text "><Link href={'/'} className=''>
                     Home
                    </Link></div>
            <div className="vl"></div>
            <div className="white-text fo"><Link href={'/products'} className=''>
                      Treatement List
                    </Link></div>
            <div className="vl"></div>
            <div className="white-text fo"><Link href={'/gallery'} className=''>
                      Gallery
            </Link></div>
            <div className="vl"></div>
            <div className="white-text "><Link href='/why_choose_us' className=''>
                      Why Choose Us?
                    </Link></div>
            <div className="vl"></div>
            <div className="white-text "> <Link href='/about_us' className=''>
                      About Us
                    </Link></div>
            <div className="vl"></div>
            <div className="white-text ">  <Link href='/contact_us' className=''>
                      Contact Us
                    </Link></div>
            <div className="vl"></div>
            <div className="white-text "> <Link href='/my_account' className=''>
                      My Account
                    </Link></div>
          </div>
        </div>



      </div>

      {/* Mobile Navigation */}
      <div className='sticky top-0 sm:hidden nav-blue-container text-white flex-between'>
        <div className='nav-mobile-container flex-between gap-[5px] lg:gap-[10px]'>

          <Grid.Container justify="flex-start" gap={2}>
            <Grid>
              <Dropdown placement="bottom-left">
                <Dropdown.Trigger>
                  {/* {user ?
                    (
                      <Avatar
                      bordered= {false}
                        size="lg"
                        as="button"
                        color="default"
                        src="/memuIcon.png"
                      />
                    )

                    :
                    <Avatar
                  bordered= {false}
                      size="lg"
                      as="button"
                      color="secondary"
                      src="/guest.png"
                    />
                  } */}
                  <Avatar
                    b
                    bordered={false}
                    size="lg"
                    as="button"
                    src="/memuIcon.png"
                  />

                </Dropdown.Trigger>
                <Dropdown.Menu color="secondary" aria-label="Avatar Actions">
                  <Dropdown.Item key="profile" css={{ height: "$18" }}>
                   
                    {user ?
                      <div className="text-sm font-semibold mb-1">
                         <Text b color="inherit" css={{ d: "flex" }}>
                      Signed in as
                    </Text>
                        {`Hello, ${user?.displayName}`}
                      </div>
                      :
                      <div className="text-lg font-semibold mb-5">
                        Hello, Guest
                      </div>
                    }
                  </Dropdown.Item>
                  <Dropdown.Item key="home" withDivider>

                    <Link href='/' className=''>
                      Home
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item key="treatement">

                    <Link href={'/products'} className=''>
                      Treatement We Offer
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item key="gallery">

                  <Link href={'/gallery'} className=''>
                    Gallery
                  </Link>
                  </Dropdown.Item>
                  <Dropdown.Item key="appointment" onClick={() => { router.push('/book_an_appointment') }}>

                    <Link href='/book_an_appointment' className=''>
                      Book an Appointment
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item key="why_choose_us">

                    <Link href='/why_choose_us' className=''>
                      Why Choose Us
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item key="photo_gallery">

                    <Link href='' className=''>
                      Photo Gallery
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item key="about_us">
                    <Link href='/about_us' className=''>
                      About Us
                    </Link>

                  </Dropdown.Item>
                  <Dropdown.Item key="contact_us">

                    <Link href='/contact_us' className=''>
                      Contact Us
                    </Link>
                  </Dropdown.Item>

                  <Dropdown.Item key="my_account" withDivider>
                    <Link href='/my_account' className=''>
                      My Account
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item key="help_and_feedback" withDivider>
                  <Link href='/contact_us' className=''>
                  Help & Feedback
                    </Link>
              
                  </Dropdown.Item>
                  <Dropdown.Item key="logout" color="error" withDivider>
                    {user ? 
                      <button type='button' onClick={Logout} className='text-sm text-red-500'>
                      Log Out
                    </button> :  <Link href={'/login_page'}>
                Login
              </Link>
                    }
                    
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Grid>
          </Grid.Container>
          <div className="font-bold text-white text-learge">
          <Link href={'/'}>
                Menu
              </Link>
          </div>
        </div>
        <div className=" lg:block padding-left-5px">
          <form className="flex" onSubmit={searching}>
            <input
              type="text"
              // className="bg-[#0693e3] border-[#f9f9f9] rounded-l-xl py-2 px-4 outline-none text-black focus:border-[#ff9900]"
              className="search-text-mob"
              placeholder="Search Here"
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
              value={searchTerm}
              onKeyUp={onKeyUp}
            />
            <button className="text-3xl px-2 rounded-r-xl">
              <AiOutlineSearch />
            </button>
          </form>
        </div>
      </div>
      <div className="sm:hidden flex flex-col lg:flex-row md:px-7 gap-[5px] lg:gap-[10px] flex-center ">
        <div className="logo-container">
          <Link href='/' className='flex gap-2 flex-center'>
            <Image
              src='/logo.png'
              alt='logo'
              width={150}
              height={100}
              className='object-contain'
            />

            {/* <div className="">
              <p className='text-red-500 text-lg font-bold'>German Homoeo Lab</p>

              <text>Haldia</text>
            </div> */}

          </Link>
        </div>
      </div>
      <div className=" flex-end paddingsSmall py-2 px-4">
        <div className="max-sm:hidden bg-[#FF0000]">
          <div className="text-white paddingsSmall"><Link href='/book_an_appointment' className=''>
                      Book an Appointment
                    </Link></div>
        </div>

        <div className="flex-start black-text">
          <div className=" pr-3">
          <a href="tel:+919775515533">
          <Image
              src={'/call.png'}
              width={30}
              height={30}
              alt="logo image"
              priority={true}
            // className="lg:w-[66px] w-[35px] relative bottom-1 rounded-full "
            />
            </a>
            
          </div>
          <a href="tel:+919734555533">Call Now!</a>
      
        </div>
        <div className="vl-2"></div>
        <div className="flex-start black-text">
          <div className=" pr-3">
          <Link href="https://maps.app.goo.gl/SsyqApNuegvp211T6">
            <Image
              src={'/location.png'}
              width={30}
              height={30}
              alt="logo image"
              priority={true}
            // className="lg:w-[66px] w-[35px] relative bottom-1 rounded-full "
            />
            </Link>
          </div>
          <Link href="https://maps.app.goo.gl/SsyqApNuegvp211T6"> Our Clinic</Link>
        </div>
        <div className="vl-2 max-sm:hidden"></div>
        <div className="flex-start black-text max-sm:hidden">
          {user ? <Popup trigger=
            {<div className="flex-between">
               
                   <button className="red_btn"> 
                   <Image
                    src={'/logout_icon.png'}
                    width={15}
                    height={25}
                    alt="login image"
                    priority={true}

                  // className="lg:w-[66px] w-[35px] relative bottom-1 rounded-full "
                  />
                  Logout </button>
            </div>}
            modal nested className="w-[30%]">
            {
              close => (
                // <div className="cd-popup w-[40%] h-[50%] flex flex-center item-center p-8" role="alert">
                //   <div className="cd-popup-container w-[40%] h-[50%] flex flex-center item-center p-8">
                //     <p>Are you sure you want to delete this element?</p>
                //     <ul className="cd-buttons">
                //       <div>
                //         <button onClick=
                //           {() => close()}>
                //           Stay
                //         </button>
                //       </div>
                //       <li><a href="#0">No</a></li>
                //     </ul>
                //     <a href="#0" className="cd-popup-close img-replace">Close</a>
                //   </div>
               // </div>
               <>
               <div className='about-section-col flex-center item-center p-3 text-learge'>
               Sure to Logout ?
           </div>
                <div className='about-section-col flex-center item-center p-3'>
                   
                    <br/>
                
                    <div className="about-section-row">
                        <button onClick=
                            {() => close()}className="paddingsSmall">
                                Stay
                        </button>
                        <div className="p-3"></div>
                        <button onClick=
                            {() => Logout()} className="red_btn paddingsSmall ">
                                Logout
                        </button>
                    </div>
                </div>
                </>
              )
            }
          </Popup> :
            <div>
              <div className=" pr-3" >
                <Link href={'/login_page'}>
                  <Image
                    src={'/login_icon.png'}
                    width={25}
                    height={25}
                    alt="login image"
                    priority={true}

                  // className="lg:w-[66px] w-[35px] relative bottom-1 rounded-full "
                  />
                </Link>

              </div>
              <Link href={'/login_page'}>
                Login
              </Link>
            </div>
          }

        </div>

      </div>

      <div className='marquee'>
        <Marquee className="color: #2A349A; font-size: 14px; font-family: 'Open Sans', sans-serif; background-color: #ffe293; height: 25px; padding-top: 3px; vertical-align: middle;">

          <Text>
            German Homoeo Lab has no other online payment methods and will never ask to share OTPs over the phone. Be aware, be safe from online fraud activities. For any queries, call: +919734555533                          .
          </Text>
          <br />
        </Marquee>
      </div>


      {/* <div className='c-call-location w-full sm:hidden'>
        <div className='flex-start item-center w-full mb-2 pl-50 text-black'>

          <div className=" pr-3">
            <Image
              src={'/call.png'}
              width={30}
              height={30}
              alt="logo image"
              priority={true}
            // className="lg:w-[66px] w-[35px] relative bottom-1 rounded-full "
            />
          </div>
          <div>
            <Text>
              Whatsapp & Call No.:
            </Text>
            <div className='text-blue-500 font-bold' >
              <a href="tel:+919775515533">   +91-9775515533</a>
            </div>
          </div>
        </div>
        <div className='flex-start item-center w-full mb-2 text-white'>

          <div className=" pr-3">
            <Image
              src={'/location.png'}
              width={30}
              height={30}
              alt="logo image"
              priority={true}
            // className="lg:w-[66px] w-[35px] relative bottom-1 rounded-full "
            />
          </div>
          <div>
            <Link href='https://goo.gl/maps/eXcxSdZMFN6Ea2S49' className=''>
           
                German Homoeo Lab Complex
           
            </Link>
            <div className='text-white-500 text-sm' >
               Dugrachak, Haldia
              </div>
          </div>
        </div>
      </div> */}

    </nav>


  );
};

export default Nav;