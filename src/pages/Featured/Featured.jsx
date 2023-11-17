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
        src: img1
    },
    {
        color: "#d6d7dc",
        src: img2,
    },
    {
        color: "#d6d7dc",
        src: img4,
    },
];

const slider2 = [
    {
        color: "#d4e3ec",
        src: img4
    },
    {
        color: "#e5e0e1",
        src: img3,
    },
    {
        color: "#d7d4cf",
        src: img2,
    }
];

const Featured = () => {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    })

    const x1 = useTransform(scrollYProgress, [0, 1], [0, 200])
    const x2 = useTransform(scrollYProgress, [0, 1], [0, -200])
    const height = useTransform(scrollYProgress, [0, 0.9], [200, 0])

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
            <h2 class="featured-title">Featur<span class="stroke">ed</span>
                <span class="featured-title__square"></span>
            </h2>
            <motion.div style={{ x: x1 }} className="slider">
                {
                    slider1.map((project, index) => {
                        return <div key={index} className="project" style={{ backgroundColor: project.color }} >
                            <div className="imageContainer" id={project.id}>
                                <img
                                    fill={true}
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
                                <img
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
