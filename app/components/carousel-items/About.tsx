import React from 'react'

const About = () => {
    return (
        <div id="about" className="carousel-item h-full bg-secondary-content">
            <div className='container mx-auto px-4 flex flex-col justify-center items-center gap-8'>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">درباره ما</h2>
                        <p className='my-4'>Click the button to listen on Spotiwhy app.</p>
                        <div className="card-actions justify-end">
                            <a href="#home" className="btn btn-outline btn-primary">ارتباط با ما</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About