import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Keyboard, Pagination, Navigation } from 'swiper/modules';
import Sliderimage from '../../assets/sliderImage.jpg';

const IphoneBanner = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      keyboard={{ enabled: true }}
      pagination={{ clickable: true, dynamicBullets: true }}
      navigation={{
        nextEl: ".banner-next",
        prevEl: ".banner-prev",
      }}
      modules={[Keyboard, Pagination, Navigation]}
      className="bannerSwiper h-full" // Unique className
    >
      <SwiperSlide>
        <div className="bg-black w-full h-full flex flex-col md:flex-row items-center justify-center p-5">
          <div className="text-center md:text-left">
            <h1 className="text-white text-3xl md:text-4xl font-bold">iPhone 14 Series</h1>
            <h2 className="text-white text-xl md:text-2xl mt-2">Up to 10% off Voucher</h2>
            <button className="mt-4 px-6 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition">Shop Now →</button>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img className="w-3/4 md:w-full h-auto object-contain" src={Sliderimage} alt="iPhone 14 Promo" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-black w-full h-full flex flex-col md:flex-row items-center justify-center p-5">
          <div className="text-center md:text-left">
            <h1 className="text-white text-3xl md:text-4xl font-bold">iPhone 14 Series</h1>
            <h2 className="text-white text-xl md:text-2xl mt-2">Up to 10% off Voucher</h2>
            <button className="mt-4 px-6 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition">Shop Now →</button>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img className="w-3/4 md:w-full h-auto object-contain" src={Sliderimage} alt="iPhone 14 Promo" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-black w-full h-full flex flex-col md:flex-row items-center justify-center p-5">
          <div className="text-center md:text-left">
            <h1 className="text-white text-3xl md:text-4xl font-bold">iPhone 14 Series</h1>
            <h2 className="text-white text-xl md:text-2xl mt-2">Up to 10% off Voucher</h2>
            <button className="mt-4 px-6 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition">Shop Now →</button>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img className="w-3/4 md:w-full h-auto object-contain" src={Sliderimage} alt="iPhone 14 Promo" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-black w-full h-full flex flex-col md:flex-row items-center justify-center p-5">
          <div className="text-center md:text-left">
            <h1 className="text-white text-3xl md:text-4xl font-bold">iPhone 14 Series</h1>
            <h2 className="text-white text-xl md:text-2xl mt-2">Up to 10% off Voucher</h2>
            <button className="mt-4 px-6 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition">Shop Now →</button>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img className="w-3/4 md:w-full h-auto object-contain" src={Sliderimage} alt="iPhone 14 Promo" />
          </div>
        </div>
      </SwiperSlide>
      {/* Custom Navigation */}
      <div className="banner-prev text-white absolute left-5 top-1/2 transform -translate-y-1/2 cursor-pointer">◀</div>
      <div className="banner-next text-white absolute right-5 top-1/2 transform -translate-y-1/2 cursor-pointer">▶</div>
    </Swiper>
  );
};

export default IphoneBanner;
