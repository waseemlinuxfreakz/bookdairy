import React from 'react';

import HomeIcon from '../img/home.png';
import SearchIcon from '../img/search.png';
import userIcon from '../img/user.png';

function FooterNavigation() {
    return ( 
        <footer className="FooterNavigation">
            <div className="container">
                <div className="footeNavigateCont">
                    <div className="homeMenu">
                        <a href="#"><img src={HomeIcon} alt="HomeIcon" /></a>
                    </div>
                    <div className="search_icon">
                        <button className="searchTriger">
                            <img src={SearchIcon} alt="HomeIcon" />
                        </button>
                    </div>
                    <div className="UserIcon">
                        <a href="#"><img src={userIcon} alt="HomeIcon" /></a>
                    </div>
                </div>
            </div>
        </footer>
     );
}

export default FooterNavigation;