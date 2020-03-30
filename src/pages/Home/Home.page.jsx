import React from 'react';

import './Home.style.scss';

import People from '../../components/People/People.component';
import Feed from '../../components/Feed/Feed.component';

function Home() {
    return (
        <div className="home-page">
            <div className="home-page-left">
                <div className="home-page-left-container">
                    <People />
                </div>
            </div>

            <div className="home-page-right">
                <div className="news-feed">
                    <Feed />
                </div>
            </div>
        </div>
    )
}

export default Home
