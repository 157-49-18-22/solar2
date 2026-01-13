import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import './SolarSolutions.css';

const solutions = [
    {
        title: "Residential Homes",
        image: "https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg?auto=compress&cs=tinysrgb&w=800",
        desc: "Save big on your home electricity bills."
    },
    {
        title: "Housing Societies",
        image: "https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=800",
        desc: "Power common areas with clean energy."
    },
    {
        title: "Commercial Offices",
        image: "https://images.pexels.com/photos/9875415/pexels-photo-9875415.jpeg?auto=compress&cs=tinysrgb&w=800",
        desc: "Sustainable workspaces for modern businesses."
    },
    {
        title: "Factories & Industry",
        image: "https://images.pexels.com/photos/9875417/pexels-photo-9875417.jpeg?auto=compress&cs=tinysrgb&w=800",
        desc: "Heavy-duty power for industrial needs."
    },
    {
        title: "Agriculture",
        image: "https://images.pexels.com/photos/2560898/pexels-photo-2560898.jpeg?auto=compress&cs=tinysrgb&w=800",
        desc: "Solar pumps and farming solutions."
    },
    {
        title: "EV Charging",
        image: "https://images.pexels.com/photos/9800009/pexels-photo-9800009.jpeg?auto=compress&cs=tinysrgb&w=800",
        desc: "Fuel your ride with the power of the sun."
    },
    {
        title: "Solar Carports",
        image: "https://images.pexels.com/photos/8853502/pexels-photo-8853502.jpeg?auto=compress&cs=tinysrgb&w=800",
        desc: "Shade your car while generating power."
    },
    {
        title: "Schools & Hospitals",
        image: "https://images.pexels.com/photos/2056926/pexels-photo-2056926.jpeg?auto=compress&cs=tinysrgb&w=800",
        desc: "Reliable power for essential services."
    }
];

const SolarSolutions = () => {
    return (
        <section className="solutions-section">
            <div className="container">
                <h2 className="section-title">Our <span className="highlight">Solar Solutions</span></h2>
                <div className="carousel-container">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        spaceBetween={40}
                        loop={true}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 50,
                            modifier: 1,
                            slideShadows: false,
                        }}
                        pagination={{ clickable: true }}
                        navigation={true}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        className="solutions-swiper"
                    >
                        {solutions.map((item, index) => (
                            <SwiperSlide key={index} className="solution-slide">
                                <div className="solution-card">
                                    <div className="card-image">
                                        <img src={item.image} alt={item.title} />
                                    </div>
                                    <div className="card-content">
                                        <h3>{item.title}</h3>
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default SolarSolutions;
