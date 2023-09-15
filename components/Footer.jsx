"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import { Text } from "@nextui-org/react";
// import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Footer = () => {
    // const { data: session } = useSession();

    const userLogedIn = true;

    //   const [providers, setProviders] = useState(null);
    const [toggleDropdown, setToggleDropdown] = useState(false);


    //   useEffect(() => {
    //     (async () => {
    //       const res = await getProviders();
    //       setProviders(res);
    //     })();
    //   }, []);

    return (
        <nav className=' w-full'>
            <div className='flex-between c-wrapperFooterTop'>
                {/* <div >
                    <span className='  innerwidth flex-start orangeText text-sm'>Copyright © 2023 German Homeo Lab</span>
                    <span className='  innerwidth flex-start orangeText text-sm'>Powered by German Homeo Lab</span>
                </div> */}
                <br />
                <section className='  gap-5 flex-end mb-7 pt-3 '>

                    <h1 className="text-white text-large font-inter ">
                        Follow Us
                    </h1>

                    <motion.div className="card" whileHover={{
                        scale: 1.2,
                        transition: {
                            duration: .2
                        }
                    }}>
                        <Link href='https://www.facebook.com/ghlhaldia' className='flex gap-5 flex-center'>
                            <Image
                                src='/fb.jpg'
                                alt='logo'
                                width={25}
                                height={25}
                                className='object-contain'
                            />
                        </Link>
                    </motion.div>
                    <motion.div className="card" whileHover={{
                        scale: 1.2,
                        transition: {
                            duration: .2
                        }
                    }}>
                        <Link href='https://www.instagram.com/ge.rman4260/' className='flex gap-2 flex-center'>
                            <Image
                                src='/insta.png'
                                alt='logo'
                                width={25}
                                height={25}
                                className='object-contain'
                            />

                        </Link>
                    </motion.div>

                    <motion.div className="card" whileHover={{
                        scale: 1.2,
                        transition: {
                            duration: .2
                        }
                    }}>
                        <Link href='https://www.youtube.com/channel/UCwmN7r6IzfeDHJ9wwNr3RaQ' className='flex gap-2 flex-center'>
                            <Image
                                src='/youtube.png'
                                alt='logo'
                                width={25}
                                height={25}
                                className='object-contain'
                            />
                        </Link>
                    </motion.div>
                </section>
            </div>


            <div className=" innerWidth80 flex-center flex max-sm:hidden">

                <div className=' paddings c-wrapperFooter flex-between justify-content w-full' >
                    {/* For Showing Logo and SMall Details */}
                    {/* <div className="innerwidth paddingsLeft" >

                        <Link href='/' className='flex gap-2 flex-center'>
                            <Image
                                src='/logo.png'
                                alt='logo'
                                width={180}
                                height={180}
                                className='object-contain'
                            />
                        </Link>

                        <span className='  innerwidth flexCenter orangeText text-medum'>   German Homoeo Lab (Haldia)</span>
                        <span className='  innerwidth flexCenter orangeText text-sm'>    Monday - Saturday: 9 AM to 6 PM</span>
                        <br />
                        <div className='black_btn'>
                            Email: homoeolabgerman@gmail.com
                        </div>
                    </div> */}

                    {/* Address */}
                    {/* <div className="innerwidth paddingsLeft">


                        <span className='  innerwidth flex-start orangeText text-sm'> F-11, Durgachak (Near HP GAS )</span>
                        <span className='  innerwidth flex-start orangeText text-sm'>  Haldia, West Bengal 721602 </span>
                        <br />
                        <div className='black_btn'>
                            Email: homoeolabgerman@gmail.com
                        </div>
                    </div> */}



                    {/* For Importent links */}
                    <div className="innerwidth paddingsLeft">
                        <Text className="text-black font-inter">
                            <b>
                                Quick Links
                            </b> </Text>

                        <Link href='' className='   flex-start  text-sm'> Contact Us! </Link>
                        <Link href='' className='   flex-start  text-sm'> Privacy Policy </Link>
                        <Link href='' className='   flex-start  text-sm'> Our Service </Link>
                        <Link href='' className='   flex-start  text-sm'> FAQ </Link>
                        <br />
                    </div>

                    {/* For Terms and Polices */}
                    <div className="innerwidth paddingsLeft">
                        <Text className="text-black font-inter">
                            <b>
                                Terms & Policies
                            </b>

                        </Text>
                        <Link href='' className='   flex-start  text-sm'> Privacy Policy </Link>
                        <Link href='' className='   flex-start  text-sm'> Our Service </Link>
                        <Link href='' className='   flex-start  text-sm'> FAQ </Link>
                        <br />
                    </div>

                    {/* For Categories*/}
                    <div className="innerwidth paddingsLeft">
                        <Text className="text-black font-inter">
                            <b>
                                Categories
                            </b>

                        </Text>

                        <Link href='' className='   flex-start  text-sm'> Male Enhancement Treatment </Link>
                        <Link href='' className='   flex-start  text-sm'> Lack of Sex Desire Treatment </Link>
                        <Link href='' className='   flex-start  text-sm'> Penis Enlargement Treatment </Link>
                        <Link href='' className='   flex-start  text-sm'> Erectile Dysfunction Treatment </Link>
                        <br />
                    </div>


                </div>
            </div>

            {/* Mobile Footer */}
            <div className="sm:hidden flex relative flex-col flex-start paddings  ">
                {/* For Importent links */}
                <div className="innerwidth paddingsLeft">
                    <Text className="text-black font-inter font-bold">

                        Quick Links
                    </Text>

                    <Link href='' className='   flex-start  text-sm'> Contact Us! </Link>
                    <Link href='' className='   flex-start  text-sm'> Privacy Policy </Link>
                    <Link href='' className='   flex-start  text-sm'> Our Service </Link>
                    <Link href='' className='   flex-start  text-sm'> FAQ </Link>
                    <br />
                </div>

                {/* For Terms and Polices */}
                <div className="innerwidth paddingsLeft">
                    <Text className="text-black font-inter font-bold">

                        Terms & Policies


                    </Text>
                    <Link href='' className='   flex-start  text-sm'> Privacy Policy </Link>
                    <Link href='' className='   flex-start  text-sm'> Our Service </Link>
                    <Link href='' className='   flex-start  text-sm'> FAQ </Link>
                    <br />
                </div>

                {/* For Categories*/}
                <div className="innerwidth paddingsLeft">
                    <Text className="text-black font-inter font-bold">

                        Categories


                    </Text>

                    <Link href='' className='   flex-start  text-sm'> Male Enhancement Treatment </Link>
                    <Link href='' className='   flex-start  text-sm'> Lack of Sex Desire Treatment </Link>
                    <Link href='' className='   flex-start  text-sm'> Penis Enlargement Treatment </Link>
                    <Link href='' className='   flex-start  text-sm'> Erectile Dysfunction Treatment </Link>
                    <br />
                </div>

            </div>
            <hr className="rounded"></hr>
            <div className='flex-center c-wrapperFooterDown'>
                <section className='w-full gap-5 flex-end mb-7 pt-3 '>

                    <iframe className="w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3697.462622368836!2d88.13414837531907!3d22.070142679852804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02f7af492cf2f5%3A0xe4d9c5b3522681a8!2sGerman%20Homoeo%20Lab!5e0!3m2!1sen!2sin!4v1694769050594!5m2!1sen!2sin" style={{  height:"450", style: "border:0", allowfullscreen: "", loading: "lazy", referrerpolicy: "no-referrer-when-downgrade"}}></iframe>

                </section>
            </div>
            
            <hr className="rounded"></hr>
            <div className='flex-center c-wrapperFooterDown'>
                <section className='  gap-5 flex-end mb-7 pt-3 '>

                    <h1 className="text-black text-sm font-inter ">
                        Copyright © 2023. All Rights Reserved. German Homoeo Lab ( Haldia )
                    </h1>

                </section>
            </div>


            {/* <div  className='paddingsTop flex-start'>
         <span className='  innerwidth flexCenter orangeText text-sm'>Copyright © 2023 German Homeo Lab</span>
         <span className='  innerwidth flexCenter orangeText text-sm'>Powered by German Homeo Lab</span>
        </div> */}






        </nav>
    );
};

export default Footer;