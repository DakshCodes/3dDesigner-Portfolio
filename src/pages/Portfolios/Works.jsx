import React, { useEffect, useRef } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import './Works.css';
import gsap from 'gsap';


const Works = () => {
    const workWrapper = useRef(null);

    const handleScroll = () => {
        const workItems = workWrapper.current.querySelectorAll('.work__item, .work__item-num, .work__item-img img');
        const scrollTop = window.scrollY;

        workItems.forEach((item, index) => {
            const yPos = parseFloat(item.getAttribute('data-speed'));
            const transformValue = `translateY(${(scrollTop * yPos) / -3000}px)`;

            item.style.transform = transformValue;
        });
    };

    // Attach the handleScroll function to the scroll event
    window.addEventListener('scroll', handleScroll);


    useEffect(() => {
        gsap.to('.work__item-img img', {
            scale: 1,
            scrollTrigger: {
                trigger: '.work__wrapp',
                start: '-10% 0%',
                end: '100% 0%',
                scrub: 1.1,
            }
        })
        gsap.to('.work-title__square', {
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
                <motion.div className="work__item" data-speed={-300}>
                    <motion.span className="work__item-num" data-speed={-1000}>/001</motion.span>
                    <motion.div className="work__item-img">
                        <motion.img src="https://i.pinimg.com/564x/ce/3b/17/ce3b1704a8eba3af31f5f596d1613d8b.jpg" alt={3} />
                    </motion.div>
                </motion.div>
                <motion.div className="work__item" data-speed={-600}>
                    <motion.span className="work__item-num" data-speed={-900}>/002</motion.span>
                    <motion.div className="work__item-img">
                        <motion.img src="https://i.pinimg.com/564x/a9/d5/68/a9d5686c6f7228b73bb83a959b4dd2cf.jpg" alt={4} />
                    </motion.div>
                </motion.div>
                <motion.div className="work__item" data-speed={-700}>
                    <motion.span className="work__item-num" data-speed={-700}>/003</motion.span>
                    <motion.div className="work__item-img">
                        <motion.img src="https://i.pinimg.com/564x/db/6c/d5/db6cd52130a0ea3174195475f74e0a8e.jpg" alt={5} />
                    </motion.div>
                </motion.div>
                <motion.div className="work__item" data-speed={-400}>
                    <motion.span className="work__item-num" data-speed={-200}>/004</motion.span>
                    <motion.div className="work__item-img">
                        <motion.img src="https://i.pinimg.com/564x/c6/15/0e/c6150e619639814a100c420f260f0289.jpg" alt={6} />
                    </motion.div>
                </motion.div>
                <motion.div className="work__item" data-speed={-400}>
                    <motion.span className="work__item-num" data-speed={-200}>/005</motion.span>
                    <motion.div className="work__item-img">
                        <motion.img src="https://i.pinimg.com/564x/75/73/4d/75734dd8c497f868c6c4e879b9fe64e5.jpg" alt={6} />
                    </motion.div>
                </motion.div>
                <motion.div className="work__item" data-speed={-400}>
                    <motion.span className="work__item-num" data-speed={-200}>/006</motion.span>
                    <motion.div className="work__item-img">
                        <motion.img src="https://i.pinimg.com/564x/b8/62/a4/b862a4061ceea0f9c1468f3154924563.jpg" alt={6} />
                    </motion.div>
                </motion.div>
            </div>
        </section>

    )
}

export default Works
