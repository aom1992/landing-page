import React from 'react'
import "./Content.css"

function Content() {
    return (
        <div className='container'>
            <section className='content-con'>
                <div className='content-l'>
                    <img src="https://images.unsplash.com/photo-1684863941689-2962fb53bc0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=982&q=80" alt=""/>
                </div>
                <div className='content-r'>
                    <h2>First Topic</h2>
                    <p>
                        Include popular icons in your React projects easily with react-icons, which utilizes ES6 imports that allows you to include only the icons that your project is using.
                    </p>
                </div>
            </section>

            <section className='content-con'>
                <div className='content-r'>
                    <h2>Second Topic</h2>
                    <p>
                        Include popular icons in your React projects easily with react-icons, which utilizes ES6 imports that allows you to include only the icons that your project is using.
                    </p>
                </div>
                <div className='content-l'>
                    <img src="https://images.unsplash.com/photo-1683997375697-d4dc4274a4ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80" alt=""/>
                </div>
            </section>

            <section className='content-con'>
                <div className='content-l'>
                    <img src="https://images.unsplash.com/photo-1615962974697-94e917a14907?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt=""/>
                </div>
                <div className='content-r'>
                    <h2>Third Topic</h2>
                    <p>
                        Include popular icons in your React projects easily with react-icons, which utilizes ES6 imports that allows you to include only the icons that your project is using.
                    </p>
                </div>
            </section>

            <section className='content-con'>
                <div className='content-r'>
                    <h2>Last Topic</h2>
                    <p>
                        Include popular icons in your React projects easily with react-icons, which utilizes ES6 imports that allows you to include only the icons that your project is using.
                    </p>
                </div>
                <div className='content-l'>
                    <img src="https://images.unsplash.com/photo-1683977935208-2e0585ffa9af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt=""/>
                </div>
            </section>
        </div>
    )
}

export default Content
