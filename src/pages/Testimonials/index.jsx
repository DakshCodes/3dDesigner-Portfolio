import React, { useEffect, useState } from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
// import SwiperCore, { Autoplay, EffectCoverflow } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ImQuotesLeft } from "react-icons/im";
import img1 from '../../assets/img1.jpeg'
import img2 from '../../assets/img3.jpeg'
import img3 from '../../assets/img5.jpeg'
import img4 from '../../assets/img9.jpeg'
import {motion} from 'framer-motion'

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { testimonials } from '../testimonialData/data';

const Testimonial = () => {

    const [slidesPerView, setSlidesPerView] = useState(1);

    useEffect(() => {
        // Update slidesPerView based on screen size
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setSlidesPerView(2.6);
            } else {
                setSlidesPerView(1);
            }
        };

        // Set initial slidesPerView
        handleResize();

        // Attach event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCoverflow]); // Include Autoplay in the SwiperCore.use
    const handleSlideChange = (swiper) => {
        // Start autoplay when the Swiper is initialized
        if (!swiper.autoplay.running) {
            swiper.autoplay.start();
        }
    };

    return (
        <>
            <div className='text-white  max-w-[1800px] mx-auto my-10 mb-10'>
                <div className='p-4 '>
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0, }}
                        transition={{ duration: 0.4 }}
                    >
                        <h1 className='text-lg md:text-[3rem] text-center syne'>Hear from them</h1>
                    </motion.div>

                    {/* swiper */}
                    <div className="swiper   my-10">
                        <div className='side hidden md:block bg-[#000] w-[1rem] z-50 absolute -top-8 h-full'>.</div>
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                            spaceBetween={50}
                            slidesPerView={slidesPerView}
                            centeredSlides={true} // Center the active slide
                            className='px-6'
                            pagination={{ clickable: true }}
                            // effect="slide"
                            scrollbar={{ draggable: true }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={(swiper) => handleSlideChange(swiper)}
                            autoplay={{ delay: 2000 }}// Autoplay configuration
                            effect="coverflow" // 3D effect
                            coverflowEffect={{
                                rotate: 50, // Set the rotate effect
                                stretch: 0, // Stretch space between slides (in px)
                                depth: 100, // Depth offset in px (slides translate in Z axis)
                                modifier: 1, // Effect multipler
                                slideShadows: true, // Enables slides shadows
                            }}
                        >
                            {
                                testimonials.map((item, index) => {
                                    return (
                                        <>
                                            <SwiperSlide key={index} className='mb-8'>
                                                <div className=' bg-[#202020] text-center p-6 min-h-fit max-h-[400px] flex items-center justify-between flex-col rounded-xl'>
                                                    <ImQuotesLeft className='text-[8rem] absolute -top-8  opacity-20 left-[2rem]' />
                                                    <div className='opensans text-base opacity-90 z-50'>{item.msg}</div>

                                                    <div className='mt-6 w-full flex items-center gap-4 border-t border-dashed pt-4 border-t-white'>
                                                        <div className=' w-[4rem] h-[4rem] rounded-full'>
                                                            <img src={item.img} className='rounded-full w-full h-full object-cover' alt="" />
                                                        </div>
                                                        <div className='syne'>
                                                            <p>{item.person}</p>
                                                        </div>
                                                    </div>
                                                </div>

                                            </SwiperSlide>
                                        </>
                                    )
                                })
                            }





                            ...
                        </Swiper>
                        {/* <div className='bg-red-500 w-[6rem] z-50 absolute -top-8 h-full'>.</div> */}
                        <div className='side hidden md:block bg-[#000] w-[1rem] z-50 absolute -top-8 right-0 h-full'>.</div>



                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonial
