"use client";

import React, {useState} from 'react'
import './Slider.css'
import BtnSlider from './BtnSlider'
import dataSlider from './dataSlider'


export default function Slider() {

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === dataSlider.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(dataSlider.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    };
    // init() {
    //     setInterval(setSlideIndex(slideIndex +1), 1000);
    // }
    

    // window.onload = function() {
    //     var minute = 1;
    //     var sec = 60;
    //     setInterval(function() {
    //       document.getElementById("timer").innerHTML = minute + ":" + sec;
    //       sec--;
      
    //       if (sec == 00) {
    //         minute--;
    //         sec = 60;
      
    //         if (minute == 0) {
    //           minute = 1;
    //           setSlideIndex(slideIndex +1);
    //         }
    //       }
    //     }, 1000);
    //   }


    return (
        <div className="container-slider">
            {dataSlider.map((obj, index) => {
                return (
                    <div
                    key={index}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <img 
                        src={`/Imgs/img${index + 1}.jpg`} 
                        alt='kj'
                        width={100}
                        height={100}
                        />
                        {/* <img
                            src={"./bhaskar1.jpeg"}
                            width={37}
                            height={37}
                            className='rounded-full'
                            alt='profile'
                        /> */}
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

            <div className="container-dots">
                {Array.from({length: 5}).map((item, index) => (
                    <div 
                    key={index}
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
    )
}
