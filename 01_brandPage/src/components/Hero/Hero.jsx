import React from 'react'

function Hero() {
    return (
        <main className='hero container'>
            <div className='heroContent'>
                <h1>YOUR FEET
                    DESERVE
                    THE BEST</h1>
                <p>
                    YOUR FEET DESERVE THE BEST AND
                    WE’RE HERE TO HELP YOU WITH OUR SHOES.
                    YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
                </p>
                <div className="hero-btn">
                    <button>Shop Now</button>
                    <button>Category</button>
                </div>
                <div className="shopping">
                    <p>Also Available</p>
                    <div className="brand-icons">
                        <img src="/Images/amazon.png" alt="" />
                        <img className='hero-2nd-btn' src="/Images/flipkart.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="heroImage">
                <img src="/Images/shoe_image.png" alt="" />
            </div>
        </main>
    )
}

export default Hero
