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
        title: "Homes",
        image: "https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg?auto=compress&cs=tinysrgb&w=800",
        desc: "Reduce electricity bills by up to 90% for your home."
    },
    {
        title: "Housing Society",
        image: "https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=800",
        desc: "Power common areas and amenities with clean energy."
    },
    {
        title: "Commercial",
        image: "https://images.pexels.com/photos/9875415/pexels-photo-9875415.jpeg?auto=compress&cs=tinysrgb&w=800",
        desc: "Sustainable power solutions for businesses and offices."
    },
    {
        title: "Industrial",
        image: "https://images.pexels.com/photos/9875417/pexels-photo-9875417.jpeg?auto=compress&cs=tinysrgb&w=800",
        desc: "Large scale solar installations for factories."
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
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 2.5,
                            slideShadows: true,
                        }}
                        pagination={{ clickable: true }}
                        navigation={true}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        loop={true}
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
