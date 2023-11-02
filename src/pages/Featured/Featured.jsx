import React, { useRef, useState, useEffect } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import './Featured.css'; // Import your CSS/SASS styles here
import Rounded from '../../common/RoundedButton';
import img1 from '../../assets/img1.jpeg'
import img2 from '../../assets/img2.jpeg'
import img3 from '../../assets/img3.jpeg'
import img4 from '../../assets/img4.jpeg'
import img5 from '../../assets/img5.jpeg'
import img6 from '../../assets/img10.jpg'
import img7 from '../../assets/img9.jpeg'
import img8 from '../../assets/img8.jpeg'
import img9 from '../../assets/img9.jpeg'


const slider1 = [
    {
        color: "#e3e5e7",
        src: img1
    },
    {
        color: "#d6d7dc",
        src: img2
    },
    {
        color: "#e3e3e3",
        src: img3
    },
    {
        color: "#21242b",
        src: img4
    }
];

const slider2 = [
    {
        color: "#d4e3ec",
        src: img5
    },
    {
        color: "#e5e0e1",
        src: img6
    },
    {
        color: "#d7d4cf",
        src: img7
    },
    {
        color: "#e1dad6",
        src: img8
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


    return (
        <div ref={container} className="slidingImages">
            <h2 class="featured-title">Featur<span class="stroke">ed</span>
                <span class="featured-title__square"></span>
            </h2>
            <motion.div style={{ x: x1 }} className="slider">
                {
                    slider1.map((project, index) => {
                        return <div key={index} className="project" style={{ backgroundColor: project.color }} >
                            <div className="imageContainer">
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
                        return <div key={index} className="project" style={{ backgroundColor: project.color }} >
                            <div key={index} className="imageContainer">
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
                <p>More work</p>
            </Rounded>
            <motion.div style={{ height }} className="circleContainer">
                <div className="circle"></div>
            </motion.div>

        </div>
    );
};

export default Featured;
