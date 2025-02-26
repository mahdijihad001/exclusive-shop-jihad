import React from "react";
import aboutMember1 from "../../assets/Frame 874.png";
import aboutMember2 from "../../assets/Frame 875.png";
import aboutMember3 from "../../assets/Frame 876.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const AboutMember = () => {
    const aboutMember = [
        { name: "Tom Cruise", role: "Founder & Chairman", image: aboutMember1 },
        { name: "Emma Watson", role: "Managing Director", image: aboutMember2 },
        { name: "Will Smith", role: "Product Designer", image: aboutMember3 },
        { name: "Scarlett Johansson", role: "Chief Technology Officer", image: aboutMember1 },
        { name: "Ryan Reynolds", role: "UI/UX Designer", image: aboutMember2 },
        { name: "Chris Hemsworth", role: "Software Engineer", image: aboutMember3 },
    ];

    return (
        <div className="sectionContainer pt-[60px] pb-[100px]">
            <Swiper
                modules={[Navigation, Pagination]}
                pagination={{ clickable: true }}
                navigation
                spaceBetween={30}
                breakpoints={{
                    320: { slidesPerView: 1 }, // Mobile devices
                    640: { slidesPerView: 2 }, // Tablets
                    1024: { slidesPerView: 3 }, // Desktops
                }}
                className="mySwiper"
            >
                {aboutMember.map((item, idx) => (
                    <SwiperSlide key={idx}>
                        <div className="flex flex-col gap-2">
                            <div className="bg-[#F5F5F5] px-2.5 w-full h-auto flex items-center justify-center">
                                <img src={item.image} alt={item.name} />
                            </div>
                            <div>
                                <h1 className="font-bold text-[#000000] text-xl md:text-2xl lg:text-3xl">{item.name}</h1>
                                <h2 className="text-[16px] md:text-[18px] lg:text-[20px] text-slate-600">{item.role}</h2>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default AboutMember;
