import React, { useEffect } from 'react';
import gsap from 'gsap'; // Make sure you have gsap properly installed
import logo from '../../assets/logo.png'
import './Loader.css'

function LoaderAnimation() {
    useEffect(() => {
        const loader = () => {
            gsap.set(".loader-text img", {
                opacity: 0,
            })
            gsap.to(".loader-text h2", {
                opacity: 0,
                ease: "expo.inOut",
                duration: 2
            });
            gsap.to(".loader-text img", {
                opacity: 1,
                y: -40,
                ease: "expo.inOut",
                delay: 1.2,
            });
            gsap.fromTo(
                ".block",
                { width: "0%" },
                {
                    width: "100%",
                    ease: "power1.in",
                    delay: 2,
                    duration: 1,
                    stagger: 0.04
                }
            );

            gsap.to(".loader", {
                x: "100%",
                ease: "expo.inOut",
                delay: 4,
                duration: 2,
            });
            gsap.to(".loader", {
                width: 0,
                ease: "expo.inOut",
                delay: 3,
                duration: 2,
            });
            gsap.to(".loader-text img", {
                opacity: 0,
            });
        };

        loader();
    }, []);

    return (
        // < !--loader -- >
        <div className="loader">
            <div className="container-loader">
                <div className="loader-text">
                    <h2>3D Artist</h2>
                    <img src={logo} alt />
                </div>
                <div className="overlay-loader">
                    <div className="block block-1" />
                    <div className="block block-2" />
                    <div className="block block-3" />
                    <div className="block block-4" />
                    <div className="block block-5" />
                    <div className="block block-6" />
                    <div className="block block-7" />
                    <div className="block block-8" />
                    <div className="block block-9" />
                    <div className="block block-10" />
                    <div className="block block-11" />
                    <div className="block block-12" />
                    <div className="block block-13" />
                    <div className="block block-14" />
                    <div className="block block-15" />
                    <div className="block block-16" />
                    <div className="block block-17" />
                    <div className="block block-18" />
                    <div className="block block-19" />
                    <div className="block block-20" />
                </div>
            </div>
        </div>

    );
}

export default LoaderAnimation;
