import React from 'react';
import ProfileBox from './ProfileBox';

function SearchStudies2() {
    return (
        <section className="section_area">
            <div className="container">
                <h2 className='toptile'>Search</h2>
                <div className="studies_form ViewAllStudies">
                    <form action="#">
                        <div className="searchInput">
                            <input type="search" name='searchStudies' id='searchStudies' />
                            <button type='button' className='searchBtn'>
                                <i class="fas fa-search"></i>
                            </button>
                        </div>
                    </form>
                </div>
                <br />
                <br />
                <br />
                <div className="searchResultBox searchResultBox2">
                    <h2 className='toptile'>All Studies</h2>
                    <select class="selectOpt" name="" id="">
                        <option>Latest</option>
                        <option>Studies</option>
                    </select>
                    <br />
                    <ProfileBox/>
                    <ProfileBox/>
                </div>
                <br />
                <div class="text-center"><a href="#" class="nextBtn">Back</a></div>
            </div>
        </section>
    );
}

export default SearchStudies2;