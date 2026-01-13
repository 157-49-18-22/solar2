import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="video-background">
                <video autoPlay loop muted playsInline className="back-video">
                    <source src="https://videos.pexels.com/video-files/4255153/4255153-hd_1920_1080_30fps.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="overlay"></div>
            </div>

            <div className="container hero-content">
                <div className="hero-text-center">
                    <h1>
                        Still paying for electricity?
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
                            <strong>SolarSquare is India's trusted solar company</strong>
                            <span>Rated 4.8 on Google with 6000+ customer reviews</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
