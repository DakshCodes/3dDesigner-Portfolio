import React, { useEffect, useRef } from 'react';
import './Works.css';
import gsap from 'gsap';
import { motion } from 'framer-motion';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import ScrollTrigger from GSAP
import projectvideo from '../../assets/project-1.mp4'

gsap.registerPlugin(ScrollTrigger); //


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

        // GSAP animations with ScrollTrigger
        gsap.to('.work__item-img img', {
            scale: 0.7,
            scrollTrigger: {
                trigger: '.work__wrapp',
                start: '-10% 0%',
                end: '100% 0%',
                scrub: 1,
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
                <motion.div className="work__item" data-speed={100}>
                    <motion.span className="work__item-num" data-speed={-500}>/001</motion.span>
                    <motion.div className="work__item-img">
                        <motion.img src="https://i.pinimg.com/564x/ce/3b/17/ce3b1704a8eba3af31f5f596d1613d8b.jpg" alt={3} />
                        <video loop autoPlay muted preload="auto" id="project-video">
                            <source src={projectvideo} type="video/mp4" />
                        </video>
                    </motion.div>
                </motion.div>
                <motion.div className="work__item" data-speed={-700}>
                    <motion.span className="work__item-num" data-speed={-700}>/002</motion.span>
                    <motion.div className="work__item-img">
                        <motion.img src="https://i.pinimg.com/564x/a9/d5/68/a9d5686c6f7228b73bb83a959b4dd2cf.jpg" alt={4} />
                        <video loop autoPlay muted preload="auto" id="project-video">
                            <source src="https://v1.pinimg.com/videos/mc/720p/9b/5e/4f/9b5e4f2eb7175e906f24404f993d992e.mp4" type="video/mp4" />
                        </video>
                    </motion.div>
                </motion.div>
                <motion.div className="work__item" data-speed={-300}>
                    <motion.span className="work__item-num" data-speed={-300}>/003</motion.span>
                    <motion.div className="work__item-img">
                        <motion.img src="https://i.pinimg.com/564x/db/6c/d5/db6cd52130a0ea3174195475f74e0a8e.jpg" alt={5} />
                        <video loop autoPlay muted preload="auto" id="project-video">
                            <source src="https://v1.pinimg.com/videos/mc/720p/17/a2/40/17a240d48d7b52a4f8554b602ad31e49.mp4" type="video/mp4" />
                        </video>
                    </motion.div>
                </motion.div>
                <motion.div className="work__item" data-speed={-400}>
                    <motion.span className="work__item-num" data-speed={-300}>/004</motion.span>
                    <motion.div className="work__item-img">
                        <motion.img src="https://i.pinimg.com/564x/c6/15/0e/c6150e619639814a100c420f260f0289.jpg" alt={6} />
                        <video loop autoPlay muted preload="auto" id="project-video">
                            <source src="https://v1.pinimg.com/videos/mc/720p/94/e9/74/94e974bf64c1638b22922882ff070505.mp4" type="video/mp4" />
                        </video>
                    </motion.div>
                </motion.div>
                <motion.div className="work__item" data-speed={-400}>
                    <motion.span className="work__item-num" data-speed={-100}>/005</motion.span>
                    <motion.div className="work__item-img">
                        <motion.img src="https://i.pinimg.com/564x/75/73/4d/75734dd8c497f868c6c4e879b9fe64e5.jpg" alt={6} />
                        <video loop autoPlay muted preload="auto" id="project-video">
                            <source src="https://v1.pinimg.com/videos/mc/720p/62/f7/1a/62f71a0f2186e17fd7d911a76f0984fd.mp4" type="video/mp4" />
                        </video>
                    </motion.div>
                </motion.div>
                <motion.div className="work__item" data-speed={-700}>
                    <motion.span className="work__item-num" data-speed={-400}>/006</motion.span>
                    <motion.div className="work__item-img">
                        <motion.img src="https://i.pinimg.com/564x/b8/62/a4/b862a4061ceea0f9c1468f3154924563.jpg" alt={6} />
                        <video loop autoPlay muted preload="auto" id="project-video">
                            <source src="https://v1.pinimg.com/videos/mc/720p/17/a2/40/17a240d48d7b52a4f8554b602ad31e49.mp4" type="video/mp4" />
                        </video>
                    </motion.div>
                </motion.div>
                <motion.div className="work__item" data-speed={-600}>
                    <motion.span className="work__item-num" data-speed={-300}>/007</motion.span>
                    <motion.div className="work__item-img">
                        <motion.img src="https://i.pinimg.com/564x/a7/d2/e8/a7d2e856e2fcac2f4c8488e46de3f3f9.jpg" alt={6} />
                        <video loop autoPlay muted preload="auto" id="project-video">
                            <source src={projectvideo} type="video/mp4" />
                        </video>
                    </motion.div>
                </motion.div>
                <motion.div className="work__item" data-speed={-800}>
                    <motion.span className="work__item-num" data-speed={-100}>/008</motion.span>
                    <motion.div className="work__item-img">
                        <motion.img src="https://i.pinimg.com/736x/02/61/a5/0261a557399bc07c61d4ec0a2031b1da.jpg" alt={6} />
                        <video loop autoPlay muted preload="auto" id="project-video">
                            <source src="https://v1.pinimg.com/videos/mc/720p/17/a2/40/17a240d48d7b52a4f8554b602ad31e49.mp4" type="video/mp4" />
                        </video>
                    </motion.div>
                </motion.div>
            </div>
        </section>

    )
}

export default Works
