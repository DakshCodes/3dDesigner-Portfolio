import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import video from '../../assets/1552295514.mp4';
import hero from '../../assets/pic-3.png';
// import hero from '../../assets/pic-2.png';
// import hero from '../../assets/pic-1.png';
import animateHome from './animations';
import './style.css';

const Landing = () => {
    const videoRef = useRef(null);
    const [isMuted, setIsMuted] = useState(true); // Start with the video muted



    const toggleMute = () => {
        videoRef.current.muted = !isMuted;
        setIsMuted(!isMuted);
    };

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.muted = isMuted;
            videoRef.current.play();
        }
    }, []);

    useLayoutEffect(() => {
        animateHome();
    }, []);

    return (
        <>
            <section className="section hero" aria-label="home">
                <div className="video-container">
                    <button className='btn-video'>
                        {isMuted ? (
                            <svg onClick={toggleMute} className='unmute' viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#fff">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M1.5 4.83h2.79L8.15 1l.85.35v13l-.85.33-3.86-3.85H1.5l-.5-.5v-5l.5-.5zM4.85 10L8 13.14V2.56L4.85 5.68l-.35.15H2v4h2.5l.35.17zM15 7.83a6.97 6.97 0 0 1-1.578 4.428l-.712-.71A5.975 5.975 0 0 0 14 7.83c0-1.4-.48-2.689-1.284-3.71l.712-.71A6.971 6.971 0 0 1 15 7.83zm-2 0a4.978 4.978 0 0 1-1.002 3.004l-.716-.716A3.982 3.982 0 0 0 12 7.83a3.98 3.98 0 0 0-.713-2.28l.716-.716c.626.835.997 1.872.997 2.996zm-2 0c0 .574-.16 1.11-.44 1.566l-.739-.739a1.993 1.993 0 0 0 .005-1.647l.739-.739c.276.454.435.988.435 1.558z"></path>
                                </g>
                            </svg>
                        ) : (
                            <svg onClick={toggleMute} className='mute' viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path d="M18.2071 7.20711C18.5976 6.81658 18.5976 6.18342 18.2071 5.79289C17.8166 5.40237 17.1834 5.40237 16.7929 5.79289L5.79289 16.7929C5.40237 17.1834 5.40237 17.8166 5.79289 18.2071C6.18342 18.5976 6.81658 18.5976 7.20711 18.2071L18.2071 7.20711Z" fill="#fff"></path>
                                    <path d="M10.8639 8.6L15.3 5.87158L10.5716 10.6H8V13.1716L6.33126 14.8403C6.12404 14.5831 6 14.256 6 13.9V10.1C6 9.27157 6.67157 8.6 7.5 8.6H10.8639Z" fill="#fff"></path>
                                    <path d="M16 16.2109L12.6673 14.1611L11.2135 15.615L15.7142 18.3831C16.7136 18.9978 18 18.2788 18 17.1055V8.82844L16 10.8284V16.2109Z" fill="#fff"></path>
                                </g>
                            </svg>
                        )}
                    </button>
                    <video autoPlay loop id="myVideo" ref={videoRef}>
                        <source src={video} type="video/mp4" />
                    </video>
                </div>
                <div className="hero-imges">
                    <img src={hero} alt="" />
                </div>
                <div className="container">
                    <div className="hero-content">
                        <div className="hero-banner">
                        </div>
                        <h1 className="h1 hero-title">itx <span id='d'>3d</span> studio</h1>
                        <h1 className="h2 hero-title2">Ankit is</h1>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Landing;
