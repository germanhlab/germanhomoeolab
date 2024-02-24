//import Feed from "@components/feed"
'use client'

import LeftNav from "@components/LeftNav/LeftNav"
import LeftNav2 from "@components/LeftNav2/LeftNav2"
import Disease from "@components/ListComp/Disease"
import PopupGfg from "@components/PopupForm"
import MainSlider from "@components/Slider/MainSlider"
import Slider from "@components/Slider/Slider"
import Image from "next/image"
import Link from 'next/link'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
// import BootstrapCarousel from "./carousels/Bootstrap"
// import Slider2 from "@components/Slider2/page"
// import EmblaCarousel from './EmblaCarousel'

const OPTIONS = {}
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())


function Home() {

    const time = new Date();
  time.setSeconds(time.getSeconds() + 5); // 10 minutes timer

    return (
        
        <section className="w-full">
            <div className="flex-start">
                <div className="max-sm:hidden paddings">
                    <LeftNav2 />
                    <br />
                    <LeftNav />
                    {/* <div>
            <h4>Popup - GeeksforGeeks</h4>
            <Popup trigger=
                {<button> Click to open modal </button>} 
                modal nested>
                {
                    close => (
                        <div className='modal'>
                            <div className='content'>
                                Welcome to GFG!!!
                            </div>
                            <div>
                                <button onClick=
                                    {() => close()}>
                                        Close modal
                                </button>
                            </div>
                        </div>
                    )
                }
            </Popup>
        </div> */}
<PopupGfg expiryTimestamp={time}/>

                    {/* <Popup trigger={<button> Trigger</button>} position="right center">
    <div>Popup content here !!</div>
  </Popup> */}
                </div>
                {/* <div className="blank-container" /> */}

                <div className="w-full">
                      {/* <Slider />  */}
                     <MainSlider slides={SLIDES} options={OPTIONS}/>
                   {/* <BootstrapCarousel/>  */}
                    {/* <Example/> */}
                    {/* <Slider2/>  */}

                    <br />
                    {/* <div className=" belowSlider-container transform overflow-hidden ">

                        <Image
                            className=""
                            src={'/banner1.jpg'}
                            alt={''}
                           fill= {true}
                        />
                    </div>
                    <br /> */}
                
                    <div className="below2nd-container paddings flex-between">

                        <h3 className="text-lg font-medium font-bold text-blue"> Featured Treatments</h3>

                        <Link href={'/products'} className="text-sm font-medium text-blue-500">

                            <h2 >{'view all >'}</h2>
                        </Link>
                    </div>
                    {/* appointment widget */}
                    <div className="fab-container2 w-[40px]">
                        <Link href={'/book_an_appointment'}  className="textVertical paddingsSmall text-white" >
                             Book an Appointment

                        </Link>
                    </div>

                    {/* Whatsapp Widget */}
                    <div className="fab-container" >
                       
                        <Link href={'https://api.whatsapp.com/send/?phone=919734555533&text&type=phone_number&app_absent=0'}>
                            <Image
                                className="makeImageCircular"
                                width={60}
                                height={60}
                                src={'/Wapp.PNG'}
                                alt={''}
                            />
                        </Link>

                    </div>
                
                    <Disease /> 
                    <br />
                </div>

            </div>

            {/* <Hero/> */}

            {/* Feed */}
        </section>
    )
}

export default Home