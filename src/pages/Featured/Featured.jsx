import React, { useRef, useState, useEffect } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import './Featured.css'; // Import your CSS/SASS styles here
import Rounded from '../../common/RoundedButton';
import img1 from '../../assets/img1.jpeg'
import img2 from '../../assets/img3.jpeg'
import img3 from '../../assets/img5.jpeg'
import img4 from '../../assets/img9.jpeg'
import img8 from '../../assets/Wave.gif'
import img9 from '../../assets/img9.jpeg'
import gsap from 'gsap';
import { Link } from 'react-router-dom';


const slider1 = [
    {
        color: "#e3e5e7",
        src: "https://res.cloudinary.com/dazeowi1e/image/upload/v1702453111/Night_Render_ap1chi.png",
    },
    {
        color: "#d6d7dc",
        src: "https://res.cloudinary.com/dylnk52kz/image/upload/v1702472072/Screenshot_2023-12-13_182311_fhzdf6.png"
    },
    {
        color: "#d6d7dc",
        src: "https://res.cloudinary.com/dazeowi1e/image/upload/v1702453194/0341_x7jlyo.png"
    },
];

const slider2 = [
    {
        color: "#d4e3ec",
        src: "https://res.cloudinary.com/dylnk52kz/image/upload/v1702472210/Screenshot_2023-12-13_182622_bgs3zd.png",
    },
    {
        color: "#e5e0e1",
        src: "https://res.cloudinary.com/dylnk52kz/image/upload/v1702472077/Screenshot_2023-12-13_182039_m2yngs.png"
    },
    {
        color: "#d7d4cf",
        src: "https://res.cloudinary.com/dylnk52kz/image/upload/v1702472607/Day_render_g7tjtc.jpg",
    }
];

const Featured = () => {

    const container = useRef(null);
    const mediaQuery = window.matchMedia('(min-width: 801px)');

 
        const { scrollYProgress } = useScroll({
            target: container,
            offset: ["start end", "end start"]
        })

    const x1 =   mediaQuery.matches && useTransform(scrollYProgress, [0, 1], [0, 250])
    const x2 =   mediaQuery.matches && useTransform(scrollYProgress, [0, 1], [0, -250])
    const height =   mediaQuery.matches && useTransform(scrollYProgress, [0, 0.9], [200, 0])


    useEffect(() => {
        gsap.to('.featured-title__square', {
            rotate: 730,
            scrollTrigger: {
                trigger: 'content',
                start: '-10% 0%',
                end: '100% 0%',
                scrub: 1.9,
            }
        })
    }, [])


    return (
        <div ref={container} className="slidingImages">
            <motion.h2
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0, }}
                transition={{ duration: 0.4 }}
                class="featured-title">Featur<span class="stroke">ed</span>
                <span class="featured-title__square"></span>
            </motion.h2>
            <motion.div style={{ x: x1 }} className="slider">
                {
                    slider1.map((project, index) => {
                        return <div key={index} className="project" style={{ backgroundColor: project.color }} >
                            <div className="imageContainer" id={project.id}>
                                <motion.img
                                    initial={{ height: "-100%" }}
                                    whileInView={{ height: "100%", }}
                                    transition={{ duration: 0.9, ease: 'circOut' }}
                                    fill={true}
                                    viewport={{once:true}}
                                    alt={"image"}
                                    src={project.src} />
                            </div>
                        </div>
                    })
                }
            </motion.div>
            <motion.div style={{ x: x2 }} className="slider">
                {
                    slider2.map((project, index) => {
                        return <div key={index} className="project" id={project.id} style={{ backgroundColor: project.id === "wave" ? "#fff" : project.color }} >
                            <div key={index} className="imageContainer" >
                                <motion.img
                                    initial={{ height: "-100%" }}
                                    whileInView={{ height: "100%", }}
                                    transition={{ duration: 0.7, ease: 'circOut' }}
                                    viewport={{once:true}}
                                    fill={true}
                                    alt={"image"}
                                    src={project.src} />
                            </div>
                        </div>
                    })
                }
            </motion.div>
            <Rounded>
                <Link to={"/works"}>
                    <p>More work</p>
                </Link>
            </Rounded>
            <motion.div style={{ height }} className="circleContainer">
                <div className="circle"></div>
            </motion.div>

        </div>
    );
};

export default Featured;
