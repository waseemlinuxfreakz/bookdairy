import React from 'react';

import ProfileBox from './ProfileBox';


function NotificationCenter() {
    return (

        <section className="eligiglityContainer">
            <div className="container">
                <ProfileBox />
                <div className="contentBox p15">
                    <h3 className='secTitleUnder'>NOTIFICATIONS SET UP</h3>
                    <p>We would like to notity you to keep on track with
                        your participation and reporting during the study</p> <br />
                    <p>Please set your preferred times for these
                        notifications, based on the practitioners
                        suggestions.</p>
                    <br />
                    <h3>REMINDERS TO TAKE TABLES,
                        3 TIMES A DAY WITH MEALS.</h3>
                </div>
                <div className="remindBox">
                    <div className="remoinCol">
                        <div className="remindText">
                        Daily, Morning at
                        </div>
                        <span>07:00</span>
                    </div>
                    <div className="remoinCol">
                        <div className="remindText">
                        Daily, Afternoon at
                        </div>
                        <span>07:00</span>
                    </div>
                    <div className="remoinCol">
                        <div className="remindText">
                        Daily, evening at
                        </div>
                        <span>07:00</span>
                    </div>
                    <h3>REMINDER TO REPORT WEIGHT</h3>
                    <div className="remoinCol">
                        <div className="remindText">
                        Daily at
                        </div>
                        <span>07:00</span>
                    </div>
                </div>
                <br />
                <div className="nex_btn">
                    <a href="#" className='nextBtn'>Next</a>
                </div>
            </div>
        </section>


    );
}

export default NotificationCenter;