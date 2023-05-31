import React from 'react'
import './CallToAction.css'
import { FiCode } from 'react-icons/fi'

function CallToAction() {
    return (
        <div className='cta-bg'>
            <div className='overlay'></div>
            <div className='container'>
                <div className='cta-text'>
                    <FiCode className='FiCode'/>
                    <h2>React test dev</h2>
                    <p>React apps are made out of components. A component is a piece of the UI (user interface) that has its own logic and appearance. A component can be as small as a button, or as large as an entire page.</p>
                    <a href="#" className='cta-btn'>Get to know</a>
                </div>
            </div>
        </div>
    )
}

export default CallToAction
