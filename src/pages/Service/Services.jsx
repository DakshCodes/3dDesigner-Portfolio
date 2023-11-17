import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import './Services.css';

const projects = [
  {
    title: "3d Modeling",
    src: "https://i.pinimg.com/564x/da/49/32/da493289f89d2383b324bbf1608590df.jpg",
    color: "#000000"
  },
  {
    title: "Animations",
    src: "https://i.pinimg.com/originals/6c/44/60/6c4460dff365e2c4eea5ae323265c70f.gif",
    color: "#8C8C8C"
  },
  {
    title: "Video Editing",
    src: "https://i.pinimg.com/originals/e1/58/83/e158838ac07449d2dee9621f92a2a976.gif",
    color: "#EFE8D3"
  },
  {
    title: "Graphic Designing",
    src: "https://i.pinimg.com/564x/2a/bb/e8/2abbe8129d0626c377c9243845f20c6d.jpg",
    color: "#706D63"
  }
];


const Home = () => {

  useEffect(() => {
    gsap.to('.section-title__square', {
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
    <main className='projects'>
      <h2 class="section-title">servic<span class="stroke">es</span>
        <span class="section-title__square"></span>
      </h2>
      <div className="services-main">
        <div className="service-box">
          <div className="service-card">
            <div className="ag-courses_item">
              <div className="ag-courses-item_link">
                <div className="ag-courses-item_bg"
                  style={{ "--tooltip-color": "#706D63" }}
                />
                <div className="ag-courses-item_title">
                  /3d Modeling
                </div>
              </div>
            </div>
          </div>
          <div className="service-content">
            <div>UI/Web&amp;Graph design for teenagers 11-17&nbsp;years oldr</div>
          </div>
        </div>
        <div className="service-box">
          <div className="service-card">
            <div className="ag-courses_item">
              <div className="ag-courses-item_link">
                <div className="ag-courses-item_bg"
                  style={{ "--tooltip-color": "red" }}
                />
                <div className="ag-courses-item_title">
                  /Animations
                </div>
              </div>
            </div>
          </div>
          <div className="service-content">
            <div>UI/Web&amp;Graph design for teenagers 11-17&nbsp;years oldr</div>
          </div>
        </div>
        <div className="service-box">
          <div className="service-card">
            <div className="ag-courses_item">
              <div className="ag-courses-item_link">
                <div className="ag-courses-item_bg"
                  style={{ "--tooltip-color": "#18fff7" }}
                />
                <div className="ag-courses-item_title">
                  /Video Editing
                </div>
              </div>
            </div>
          </div>
          <div className="service-content">
            <div>UI/Web&amp;Graph design for teenagers 11-17&nbsp;years oldr</div>
          </div>
        </div>
        <div className="service-box">
          <div className="service-card">
            <div className="ag-courses_item">
              <div className="ag-courses-item_link">
                <div className="ag-courses-item_bg"
                  style={{ "--tooltip-color": "#ffe0c1" }}
                />
                <div className="ag-courses-item_title">
                  /Graphic Designing
                </div>
              </div>
            </div>
          </div>
          <div className="service-content">
            <div>UI/Web&amp;Graph design for teenagers 11-17&nbsp;years oldr</div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
