import React from 'react'

import './Home.style.scss'

function Home() {
    return (
        <div className="home-page">
            <div className="home-page-left">
                <div className="home-page-left-container">
                    Left Section
                </div>
            </div>

            <div className="home-page-right">
                Right Section
            </div>
        </div>
    )
}

export default Home
