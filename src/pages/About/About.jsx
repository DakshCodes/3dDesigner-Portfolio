import React, { useEffect } from 'react'
import './About.css'

const About = () => {

    useEffect(() => {
        window.scrollTo(0, 0); // This line will scroll the window to the top
    }, [])
    return (
        <div className='about-main'>
            <div className="about-profile">

                <div className="profile-pics">
                    <div className="img-bg-1"></div>
                    <div className="img-bg-2"></div>
                    <div className="profile-img">
                        <img src="https://i.pinimg.com/564x/31/ca/cf/31cacfc8bceb2011c2f23ea32d2fbfa1.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div className="about-person">
                <div className="work-exp">
                    <div className="blockquote-wrapper">
                        <div className="blockquote">
                            <h1>
                                Intuitive design happens when <span style={{ color: '#ffffff' }}>current knowledge</span> is the same as the <span style={{ color: '#ffffff' }}>target knowledge.</span>
                            </h1>
                            <h4>—Ankit Kumawat<br /><em>3d Designer : 5Years Experience</em></h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
