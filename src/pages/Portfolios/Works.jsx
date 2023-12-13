import React, { useEffect, useRef, useState } from 'react';
import './Works.css';
import gsap from 'gsap';
import { motion } from 'framer-motion';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import ScrollTrigger from GSAP
import projectvideo from '../../assets/project-1.mp4'

gsap.registerPlugin(ScrollTrigger); //



const WorkItem = ({ videoSource, number, componentspeed, numberspeed }) => {
    const videoRef = useRef(null);

    const handleHover = () => {
        videoRef.current.play();
    };

    const handleHoverOut = () => {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
    };

    return (
        <motion.div
            className="work__item"
            data-speed={componentspeed}
            onMouseEnter={handleHover}
            onMouseLeave={handleHoverOut}
        >
            <motion.div className="work__item-img">
                <motion.span className="work__item-num" data-speed={numberspeed}>{number}</motion.span>
                <motion.video loop  preload="auto" ref={videoRef} id="project-video">
                    <source src={videoSource} type="video/mp4" />
                </motion.video>
            </motion.div>
        </motion.div>
    );
};

const Works = () => {
    const workWrapper = useRef(null);

    useEffect(() => {
        // Function to handle the scroll event
        const mediaQuery = window.matchMedia('(min-width: 801px)');
        // Change the media query to target screen widths greater than 800px
        const handleScroll = () => {
            if (mediaQuery.matches && workWrapper.current) {
                const workItems = workWrapper.current.querySelectorAll('.work__item, .work__item-num, .work__item-img img');
                const scrollTop = window.scrollY;

                workItems.forEach((item, index) => {
                    const yPos = parseFloat(item.getAttribute('data-speed'));
                    const transformValue = `translateY(${(scrollTop * yPos) / -3000}px)`;

                    item.style.transform = transformValue;
                });
            }
        };

        // Add the event listener for scroll when the component mounts
        window.addEventListener('scroll', handleScroll);
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0); // This line will scroll the window to the top

        // GSAP animations with ScrollTrigger
        gsap.to('.work__item-img #project-video', {
            scale: 0.9,
            scrollTrigger: {
                trigger: '.work__wrapp',
                start: '-10% 0%',
                end: '100% 0%',
                scrub: 0.1,
            },
        });

        gsap.to('.work-title__square', {
            rotate: 730,
            scrollTrigger: {
                trigger: '.content', // Correct trigger selector
                start: '-10% 0%',
                end: '100% 0%',
                scrub: 1.9,
            },
        });

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        // < !--div.work -- >
        <section className="work">
            <div className="content">
                <h2 className="work-title">portfo<span className="work-stroke">lios</span>
                    <span className="work-title__square" />
                </h2>
            </div>
            <div className="work__wrapp"
                ref={workWrapper}
            >
                <WorkItem videoSource="https://res.cloudinary.com/dylnk52kz/video/upload/v1702478650/Airpods_render_1__1_rfpsg4.mp4" numberspeed={-0} componentspeed={-100} number={"01"} />
                <WorkItem videoSource="https://res.cloudinary.com/dazeowi1e/video/upload/v1702453128/CUP0001_1_ue31ty.mp4" numberspeed={0} componentspeed={400} number={"02"} />
                <WorkItem videoSource="https://res.cloudinary.com/dylnk52kz/video/upload/v1702478643/Airpods_render_1_cur5xr.mp4" numberspeed={0} componentspeed={200} number={"03"} />
                <WorkItem videoSource="https://res.cloudinary.com/dylnk52kz/video/upload/v1702478660/Airpods_render_1__2_tj3jff.mp4" numberspeed={0} componentspeed={930} number={"04"} />
                <WorkItem videoSource="https://res.cloudinary.com/dazeowi1e/video/upload/v1702453212/t_shhirt_mockup_onhfxc.mp4" numberspeed={0} componentspeed={300} number={"05"} />
                <WorkItem videoSource="https://res.cloudinary.com/dazeowi1e/video/upload/v1702453274/finel_output_with_sound_ni8rzb.mp4" numberspeed={0} componentspeed={900} number={"06"} />
            </div>
        </section>

    )
}

export default Works
