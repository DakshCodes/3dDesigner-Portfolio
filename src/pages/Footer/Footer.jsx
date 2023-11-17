import './Footer.css';
import Rounded from '../../common/RoundedButton';
import { useRef } from 'react';
import { useScroll, motion, useTransform, useSpring } from 'framer-motion';
import Magnetic from '../../common/Magnetic';
import footer from '../../assets/ankit.jpg'
import { Link } from 'react-router-dom';

export default function Footer() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    })
    const x = useTransform(scrollYProgress, [0, 1], [0, 100])
    const y = useTransform(scrollYProgress, [0, 1], [-500, 0])
    const rotate = useTransform(scrollYProgress, [0, 1], [120, 90])
    return (
        <motion.div ref={container} className="contact">
            <div className="body mt-10">
                <div className="title">
                    <span>
                        <div className="imageContainer">
                            <img
                                fill={true}
                                alt={"image"}
                                src={footer}
                            />
                        </div>
                        <h2 clss>Let's work</h2>
                    </span>
                    <h2 clss>together</h2>
                    <motion.div style={{ x }} className="buttonContainer">
                        <Rounded backgroundColor={"red"} className="button">
                            <p>Get in touch</p>
                        </Rounded>
                    </motion.div>
                    <motion.svg style={{ rotate, scale: 2 }} width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z" fill="white" />
                    </motion.svg>
                </div>
                <div className="nav">
                    <div className='roundedButton-1'>
                        <p>itx3dstudio@gmail.com</p>
                    </div>
                    <div className='roundedButton-1'>
                        <p>+31 xxx 80 xx</p>
                    </div>
                </div>
                <div className="info">
                    <div>
                        <span>
                            <h3>Version</h3>
                            <p>2023 © Edition</p>
                        </span>
                        <span>
                            <h3>Developed & Designed by</h3>
                            <Link to={"https://www.instagram.com/valuexlabs/"} target={"_blank"}>
                                <p className='valuexlabs'>ValueXLabs</p>
                            </Link>
                        </span>
                    </div>
                    <div>
                        <span>
                            <h3>Socials</h3>
                            <Magnetic>
                                <p>Awwwards</p>
                            </Magnetic>
                        </span>
                        <Magnetic>
                            <p>Instagram</p>
                        </Magnetic>
                        <Magnetic>
                            <p>Dribble</p>
                        </Magnetic>
                        <Magnetic>
                            <p>Linkedin</p>
                        </Magnetic>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
