import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const ProductDetailsCarousel = ({ images }) => {
    return (
        <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
            <Carousel
                infiniteLoop={true}
                showIndicators={false}
                showStatus={false}
                thumbWidth={60}
                className="productCarousel"
            >
                {images?.map((img) => (
                    // <img
                    //     key={img.id}
                    //     src={img.url}
                    //     alt={img.name}
                    // />
                    <img
                        key={img}
                        src={img}
                        alt={img}
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
