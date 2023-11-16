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
                <motion.span className="work__item-num" data-speed={numberspeed}>/{number}</motion.span>
                <motion.video loop muted preload="auto" ref={videoRef} id="project-video">
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
        const handleScroll = () => {
            if (workWrapper.current) {
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
                <h2 className="work-title">portfo<span className="work-stroke">lio</span>
                    <span className="work-title__square" />
                </h2>
            </div>
            <div className="work__wrapp"
                ref={workWrapper}
            >
                <WorkItem videoSource="https://v1.pinimg.com/videos/mc/expMp4/11/57/38/1157385f7a7d8152cf14bbfb4fb093ec_t3.mp4" numberspeed={-400} componentspeed={800} number={"001"} />
                <WorkItem videoSource="https://v1.pinimg.com/videos/mc/expMp4/3f/b4/e4/3fb4e41e0e27e4146b87398cee8719c9_t3.mp4" numberspeed={-500} componentspeed={600} number={"002"} />
                <WorkItem videoSource="https://v1.pinimg.com/videos/mc/720p/c1/32/0c/c1320cf3edba286632c6810b09ad3de5.mp4" numberspeed={-400} componentspeed={500} number={"003"} />
                <WorkItem videoSource="https://v1.pinimg.com/videos/mc/720p/95/92/71/959271eceee104db73c0930ab3a7135a.mp4" numberspeed={-250} componentspeed={530} number={"004"} />
                <WorkItem videoSource="https://v1.pinimg.com/videos/mc/expMp4/e9/3c/1c/e93c1cc844923d7c3d8c0e5c6625d9f0_t3.mp4" numberspeed={-50} componentspeed={630} number={"005"} />
                <WorkItem videoSource="https://v1.pinimg.com/videos/mc/720p/22/28/92/22289235b3d1f7b54bd04ff99d21b0b3.mp4" numberspeed={-150} componentspeed={530} number={"006"} />
            </div>
        </section>

    )
}

export default Works
