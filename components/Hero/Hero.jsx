"use client";

import React from 'react'
import './Hero.css'
import {HiLocationMarker, HiSearch} from 'react-icons/hi'
import CountUp from 'react-countup'

const Hero = () => {
  return (
    <section className='hero-wrapper'>
        <div className='paddings innerWidth flexSpaceBetween hero-container'  >
            
            {/* left Side */}
            <div className="flexColStart hero-left">
                <div className="hero-title">
                    <div className="orange-circle"/>
                    <h1>
                    German Homoeo Lab
                    </h1>
                </div>
                <div className="flexColStart hero-des">
                    <span> The German Homoeo Lab is a multi-specialized treatment center for homeopathy. All kinds of old and critical diseases are treated in the German Homeo Lab. In the German laboratory Homoeo we deal with different types of treatment such as arthritis, asthma, hyperacidity & Gas, Addiction, Breast Enhancement, Diabetes, Cholesterol, Fissures, Fistulas, Hemorrhoids, Liver Problems, Hypertension, Sexual Problems, Hair Problems, Skin Problems, Obesity, Health Development, Infertility, Leucoderma.</span>
                    <span>জার্মান হোমিও ল্যাব হল হোমিওপ্যাথির জন্য একটি বহু-বিশেষায়িত চিকিৎসা কেন্দ্র। জার্মান হোমিও ল্যাবে সব ধরনের পুরনো ও জটিল রোগের চিকিৎসা করা হয়। জার্মান ল্যাবরেটরি হোমিওতে আমরা বিভিন্ন ধরনের চিকিৎসা যেমন আর্থ্রাইটিস, অ্যাজমা, হাইপার অ্যাসিডিটি এবং গ্যাস, আসক্তি, স্তন বৃদ্ধি, ডায়াবেটিস, কোলেস্টেরল, ফিসার, ফিস্টুলাস, হেমোরয়েডস, লিভারের সমস্যা, উচ্চ রক্তচাপ, যৌন সমস্যা, চুলের সমস্যা, ত্বকের সমস্যা নিয়ে কাজ করি। , স্থূলতা, স্বাস্থ্য উন্নয়ন, বন্ধ্যাত্ব, লিউকোডর্মা।</span>
                </div>

               <div className="flexCenter stats">

                    <div className="flexColCenter stat">
                       
                       {/* Count 1 */}
                    <span>
                        <CountUp start={10} end={30} duration={3}/>
                        <span>+</span>
                    </span>
                    <span className='secondaryText'>Consultent</span>
                    </div>

                    {/* Count 2 */}
                    <div className="flexColCenter stat">
                        
                    <span>
                        <CountUp start={9900} end={10000} duration={4}/>
                        <span>+</span>
                    </span>
                        
                    <span className='secondaryText'>Happy Customers</span>
                    </div>

                    {/* Count 2 */}
                    <div className="flexColCenter stat">
                    <span>
                        <CountUp start={250} end={365} duration={4}/>
                        <span></span>
                    </span>
                        
                    <span className='secondaryText'>Days Open</span>
                    </div>
               </div>


            </div>


            {/* Right Side */}

            <div className="flexCenter hero-right">
                    <div className="image-container">
                        <img src="./bhaskar1.jpeg" alt="" />
                       
                    </div>
                    
            </div>
        </div>
    </section>
  )
}

export default Hero