import React from 'react';
import Header from '../Layouts/Header';
import HeroSlider from '../components/HeroSlider';
import Services from '../components/Services';

const HomePage = () => {
    return (
        <div className='text-black'>
            {/* slider section */}
            <section>
                <HeroSlider></HeroSlider>
            </section>
            {/* Services section */}
            <section>
                <Services></Services>
            </section>
        </div>
    );
};

export default HomePage;