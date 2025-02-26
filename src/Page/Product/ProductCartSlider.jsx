import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// Import required modules
import { Navigation } from 'swiper/modules';
import ProductCart from './ProductCart';

const ProductCartSlider = () => {
    return (
        <div className="mt-[50px] relative">
            <Swiper
                slidesPerView={5} // Default value for large screens
                spaceBetween={30} // Default spacing
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }}
                modules={[Navigation]}
                className="mySwiper mb-[50px]"
                breakpoints={{
                    320: { // Mobile devices
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    640: { // Small tablets
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                    768: { // Tablets
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1024: { // Small laptops
                        slidesPerView: 4,
                        spaceBetween: 25,
                    },
                    1280: { // Large screens
                        slidesPerView: 5,
                        spaceBetween: 30,
                    },
                }}
            >
                {/* Slides */}
                {[...Array(9)].map((_, index) => (
                    <SwiperSlide key={index}>
                        <ProductCart />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <div className="swiper-button-next text-black text-3xl absolute right-0 top-1/2 transform -translate-y-1/2 z-10"></div>
            <div className="swiper-button-prev text-black text-3xl absolute left-0 top-1/2 transform -translate-y-1/2 z-10"></div>
        </div>
    );
};

export default ProductCartSlider;
