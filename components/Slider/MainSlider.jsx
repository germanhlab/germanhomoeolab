"use client";

import React, {useState} from 'react'

// requires a loader
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import Image from 'next/image';
import { UncontrolledCarousel,Row,Col } from 'reactstrap';
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import imageByIndex from './imageByIndex'

const images = [
    {
        "id": "0",
        "author": "Alejandro Escamilla",
        "width": 5000,
        "height": 3333,
        "url": "https://unsplash.com/photos/yC-Yzbqy7PY",
        "download_url": "/Imgs/img3.jpg"
    },
    {
        "id": "1",
        "author": "Alejandro Escamilla",
        "width": 5000,
        "height": 3333,
        "url": "https://unsplash.com/photos/LNRyGwIJr5c",
        "download_url": "/Imgs/img3.jpg"
    },
    {
        "id": "2",
        "author": "Alejandro Escamilla",
        "width": 5000,
        "height": 3333,
        "url": "https://unsplash.com/photos/N7XodRrbzS0",
        "download_url": "https://picsum.photos/id/2/5000/3333"
    },
    {
        "id": "3",
        "author": "Alejandro Escamilla",
        "width": 5000,
        "height": 3333,
        "url": "https://unsplash.com/photos/Dl6jeyfihLk",
        "download_url": "https://picsum.photos/id/3/5000/3333"
    },
    {
        "id": "4",
        "author": "Alejandro Escamilla",
        "width": 5000,
        "height": 3333,
        "url": "https://unsplash.com/photos/y83Je1OC6Wc",
        "download_url": "https://picsum.photos/id/4/5000/3333"
    },
];
const items = [
    {
      src: `/Imgs/img${1}.jpg`,
      altText: "Slide 1",
      caption: "",
      header: "",
      key: "1",
    },
    {
        src: `/Imgs/img${1}.jpg`,
        altText: "Slide 2",
      caption: "",
      header: "",
      key: "2",
    },
    // {
    //     src: require("/Imgs/img3.jpg"),
    //   altText: "Slide 3",
    //   caption: "",
    //   header: "",
    //   key: "3",
    // },
  ];
const settings = {
  showArrows: false,
  interval: 3500,
  dynamicHeight: false,
  stopOnHover: false,
  infiniteLoop: true,
  showStatus: true,
  transitionTime: 500,
  showThumbs: false,
  showIndicators: true,
  swipeable: true,
  emulateTouch: true,
  autoPlay: false,
};


export default function MainSlider(props) {

    // const [slideIndex, setSlideIndex] = useState(1)

    // const nextSlide = () => {
    //     if(slideIndex !== dataSlider.length){
    //         setSlideIndex(slideIndex + 1)
    //     } 
    //     else if (slideIndex === dataSlider.length){
    //         setSlideIndex(1)
    //     }
    // }

    // const prevSlide = () => {
    //     if(slideIndex !== 1){
    //         setSlideIndex(slideIndex - 1)
    //     }
    //     else if (slideIndex === 1){
    //         setSlideIndex(dataSlider.length)
    //     }
    // }

    // const moveDot = index => {
    //     setSlideIndex(index)
    // };
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


//     return (
    
      
//       <Row>
//     <Col md="8" className="w-full mx-auto">
//       <UncontrolledCarousel items={items} />
//     </Col>
//   </Row>
      
//     )

const { slides, options } = props;
const [emblaRef] = useEmblaCarousel(options, [Autoplay()])

return (
  <div className="embla">
    <div className="embla__viewport" ref={emblaRef}>
      <div className="embla__container">
        {slides.map((index) => (
          <div className="embla__slide" key={index}>
            <div className="embla__slide__number">
              <span>{index + 1}</span>
            </div>
            <img
              className="embla__slide__img"
              src={`/Imgs/img${index + 1}.jpg`} 
              alt="Your alt text"
            />
          </div>
        ))}
      </div>
    </div>
  </div>
)

}
