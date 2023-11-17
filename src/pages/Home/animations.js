import React from 'react';
import gsap from 'gsap';
import SplitType from 'split-type'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const animateHome = () => {
    let typeSplit = new SplitType('.hero-title', {
        types: 'lines, words, chars',
        tagName: 'span'
    });
    let typeSplit2 = new SplitType('.hero-title2', {
        types: 'lines, words, chars',
        tagName: 'span'
    });

    gsap.set(".hero-imges img", { opacity: 0 });
    gsap.set(".container .nav-toggle-btn", { x: 40, opacity: 0 });
    gsap.set(".container #logo", { opacity: 0, x: -40 });

    const gTl = gsap.timeline();

    gTl.to(".container #logo",{ delay: 4.2, opacity: 1, x: 0, ease: "back.out" }).to(".container .nav-toggle-btn", { delay: -0.2,x: 0, opacity: 1, ease: "back.out" });
    gTl.from(".hero-banner", 2, { opacity: 0, xPercent: -130, delay: -2.2, ease: "expo.out" });
    gTl.from(".hero-title2 .char", 1, { opacity: 0, xPercent: 130, stagger: 0.06, delay: -0.7, ease: "back.out" });

    gTl.to('.hero-imges img', 0.35, { opacity: 1, delay: -1, clipPath: "polygon(50% 0%, 51% 0%, 51% 100%, 50% 100%)" })
        .to('.hero-imges img', 0.4, { opacity: 1, clipPath: "polygon(40% 0%, 51% 0%, 51% 100%, 40% 100%)" })
        .to('.hero-imges img', 0.5, { opacity: 1, clipPath: "polygon(70% 0%, 51% 0%, 51% 100%, 70% 100%)", ease: "power4.out" })
        .to('.hero-imges img', 1, { opacity: 1, clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100% )", ease: "power2.out" })
        .to('.hero-imges img', 0.8, { opacity: 1, backgroundSize: "100% 100%", ease: "power3.inOut" }, "-=1");
};

export default animateHome;
