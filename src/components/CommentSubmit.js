import React from 'react';

import ProfileBox from './ProfileBox';

import CommentSuccess from './InnerComponents/commentsuccess.js';

function CommentSubmit() {
    return ( 
        <section className='section_area'>
            <div className="container">
                <h2 className="text-center toptile">Discussion on</h2>  
                <ProfileBox/>
                <br />
                <CommentSuccess/>
                <br />
                <div class="text-center">
                    <a href="#" class="nextBtn">View</a>
                </div>
            </div>
        </section>
     );
}

export default CommentSubmit;