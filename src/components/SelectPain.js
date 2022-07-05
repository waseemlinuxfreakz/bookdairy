import React from 'react';

import ProfileBox from './ProfileBox';

import Slider from 'react-rangeslider';

function SelectPain() {
    return (

        <section className="eligiglityContainer">
            <div className="container">
                <ProfileBox />
                <div className="contentBox p15">
                    <h2 className='mb10'>Logging activity for <br />April the 20th.</h2>
                    <div className="whiteBox boRa text-center">
                        <h2 className=''>Did you take X or Y?</h2>
                        <div className="alignBtn">
                            <a href="#" className='nextBtn'>Yes</a>
                            <a href="#" className='whiteBtn'>No</a>
                        </div>
                    </div>
                </div>
                <div className="contentBox p15">
                    <p>How is your pain feeling today on a
                        scale of 0 to 10, where 0 no pain and
                        10 is really bad pain?
                    </p>
                </div>
                <div className="whiteBox boRa selectRangeBox">
                    <p>Select right mark then click to submit.</p>
                    <div className="selectRange">
                    <Slider
  min={Number}
  max={Number}
  step={Number}
  value={Number}
  orientation={String}
  reverse={Boolean}
  tooltip={Boolean}
  labels={Object}
  handleLabel={String}
  format={Function}
  onChangeStart={Function}
  onChange={Function}
  onChangeComplete={Function}
/>
                    </div>
                </div>
                <br />
                <br />
                <div className="text-center">
                    <a href="#" className='nextBtn'>Submit</a>
                </div>
            </div>
        </section>
    );
}

export default SelectPain;