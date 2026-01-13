import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="video-background">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="back-video"
                    poster="https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=1920"
                >
                    <source src="/bg.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="overlay"></div>
            </div>

            <div className="container hero-content">
                <div className="hero-text-center">
                    <h1>
                        Still pay
                        <span className="i-with-sun">
                            <dotlottie-player
                                src="/sun.json"
                                background="transparent"
                                speed="1"
                                loop
                                autoplay
                                className="sun-lottie"
                            ></dotlottie-player>
                            i
                        </span>
                        ng for electricity?
                    </h1>
                    <h2 className="sub-headline">
                        Switch to solar. Let the sun pay your bills.
                    </h2>

                    <button className="btn btn-primary btn-lg">
                        Join India's Solar Revolution
                    </button>

                    <div className="trust-badge">
                        <div className="google-icon">G</div>
                        <div className="trust-text">
                            <strong>Grid Zero is India's trusted solar company</strong>
                            <span>Rated 4.8 on Google with 6000+ customer reviews</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
