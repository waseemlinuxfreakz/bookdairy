import React from 'react';

import ProfilePic from '../img/profile.jpg';

function AboutStudy() {
    return (
        <section className="aboutStudy_container">
            <div className="container">
                <div className="profileBox">
                    <img src={ProfilePic} alt="profileImg" className="profileImg" />
                    <div className="profileCont">
                        <h3 className="secTitleUnder">REDUCE JOINT PAIN</h3>
                        <h4>BY MARK SURNAME</h4>
                        <p>Reduce joint pain in less than 3
                            months, better than prescribed
                            painkillers</p>
                    </div>
                </div>
                <h2 className="title_underline">About The Study</h2>
                <div className="whiteBox ml-30 mr-30">
                    <p>Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry. Lorem
                        psum has been the industry's standard. <br /><br />
                        text ever since the 1500s, when an
                        unknown printer took a galley of type
                        and scrambled it to make a type</p>
                </div>
                <br />
                <br />
                <h2 className="title_underline">About Mark Surname</h2>
                <div className="whiteBox ml-30 mr-30">
                    <p>Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry. Lorem
                        psum has been the industry's standard.
                        text ever since the 1500s.</p>
                </div>
                <div className="studyBottom">
                    <h3 className="secTitleUnder">REDUCE JOINT PAIN</h3>
                    <a href="#" className='nextBtn'>Take Part</a>
                    <a href="#" className='nextBtn'>View Forum</a>
                </div>
            </div>
        </section>
    );
}

export default AboutStudy;