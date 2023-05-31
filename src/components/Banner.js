import React from 'react'
import "./Banner.css"

let bannerData = {
    title: "React landing page",
    desc: "Documentation and examples for Bootstrap’s powerful, responsive navigation header, the navbar. Includes support for branding, navigation, and more, including support for our collapse plugin."
}

function Banner() {
    return (
        <div className='banner-bg'>
            <div className='container'>
                <div className='banner-con'>
                    <div className='banner-text'>
                        <h1>{bannerData.title}</h1>
                        <p>{bannerData.desc}</p>
                        <a href="#" className='banner-btn'>See More</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
