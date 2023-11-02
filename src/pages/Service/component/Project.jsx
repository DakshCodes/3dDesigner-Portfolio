import React from 'react';
import './Project.css';
import arrow from '../../../assets/arrow.svg'

const Project = ({ index, title, manageModal }) => {
    const handleMouseEnter = (e) => {
        manageModal(true, index, e.clientX, e.clientY);
    };

    const handleMouseLeave = (e) => {
        manageModal(false, index, e.clientX, e.clientY);
    };

    return (
        <div class="serv__item"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <span class="serv__item-arrow" data-speed="500">
                <img src={arrow} alt="" />
            </span>
            <div class="serv__item-txt">
                <span class="serv__item-text">/{title}</span>
            </div>
        </div>

    );
};

export default Project;
