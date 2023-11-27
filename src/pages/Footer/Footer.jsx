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
                            <motion.img
                                initial={{ opacity: 0, x: -40 }}
                                whileInView={{ opacity: 1, x: 0, }}
                                transition={{ duration: 0.4 }}
                                fill={true}
                                alt={"image"}
                                src={footer}
                            />
                        </div>
                        <motion.h2
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0, }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                        >Let's work</motion.h2>
                    </span>
                    <motion.h2
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0, }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                    >together</motion.h2>
                    <motion.div style={{ x }} className="buttonContainer">
                        <Link to={'/contact'}>
                            <Rounded backgroundColor={"red"} className="button">
                                <p>Get in touch</p>
                            </Rounded>
                        </Link>
                    </motion.div>
                    <motion.svg
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0, }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        style={{ rotate, scale: 2 }} width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z" fill="white" />
                    </motion.svg>
                </div>
                <div className="nav 2xl:mt-[200px]">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0, }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className='roundedButton-1'>
                        <p>itx3dstudio@gmail.com</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0, }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className='roundedButton-1'>
                        <p>94600 09410</p>
                    </motion.div>
                </div>
                <div className="info">
                    <div>
                        <motion.span
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0, }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                        >
                            <h3>Version</h3>
                            <p>2023 © Edition</p>
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0, }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                        >
                            <h3>Developed & Designed by</h3>
                            <Link to={"https://www.instagram.com/valuexlabs/"} target={"_blank"}>
                                <p className='valuexlabs'>ValueXLabs</p>
                            </Link>
                        </motion.span>
                    </div>
                    <div>
                        <motion.span
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0, }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                        >
                            <motion.h3
                                initial={{ opacity: 0, x: -40 }}
                                whileInView={{ opacity: 1, x: 0, }}
                                transition={{ duration: 0.4, delay: 0.2 }}
                            >Socials</motion.h3>
                        </motion.span>
                        <Magnetic>
                            <Link to={"https://www.instagram.com/itx3dstudio/"} target='_blank'>
                                <p>Instagram</p>
                            </Link>
                        </Magnetic>
                        <Magnetic>
                            <Link to={"https://www.linkedin.com/in/ankit-kumawat-11560a218/"} target='_blank'>
                            <p>Linkedin</p>
                            </Link>
                        </Magnetic>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
