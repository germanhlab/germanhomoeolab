"use client"

import React from "react";
import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const ProductDetailsCarousel = ({ images }) => {

    const consol = () => {
        console.log(images);
    }
    const [loadingF, setLoading] = useState(true);


    // const {user, isLoading, signOut} = useAuth();

    useEffect(() => {

        if (loadingF) {
            
        }
      }, [ loadingF]);

      const time = new Date();
  time.setSeconds(time.getSeconds() + 20); // 10 minutes timer
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
        } = useTimer({ time, onExpire: () => setLoading(false) });
      

    return (

        <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
            <Carousel
                infiniteLoop={true}
                showIndicators={true}
                showStatus={false}
                thumbWidth={60}
                className="productCarousel"
            >
                {images?.map((img,index) => (
                    // <img
                    //     key={img.id}
                    //     src={img.url}
                    //     alt={img.name}
                    // />
                    <img
                        key={index}
                        src={img}
                        alt={index}
                    />
                ))}

{/* <img
                        key={img.attributes}
                        src={img.attributes}
                        alt={img.attributes}
                    /> */}

                {/* <img src="/arthritis.jpg" />
                <img src="/arthritis1.jpg" />
                <img src="/arthritis2.jpg" />
                <img src="/arthritis3.jpg" /> */}
            </Carousel>
        </div>
    );
};

export default ProductDetailsCarousel;
