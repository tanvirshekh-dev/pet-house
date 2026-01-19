import React from 'react';
import HeroSlider from '../components/HeroSlider';
import Services from '../components/Services';
import TipsAndCare from '../components/TipsAndCare';
import OurExpertVets from '../components/OurExpertVets';
import FAQ from '../components/FAQ';

const HomePage = () => {
    return (
        <div className='text-black'>
            {/* slider section */}
            <section >
                <HeroSlider></HeroSlider>
            </section>
            {/* Services section */}
            <section>
                <Services></Services>
            </section>
            {/* Tips and care */}
            <section>
                <TipsAndCare></TipsAndCare>
            </section>
            {/* Our Expert Vets */}
            <section>
                <OurExpertVets></OurExpertVets>
            </section>
            {/* Frequently ask question */}
            <section>
                <FAQ></FAQ>
            </section>
        </div>
    );
};

export default HomePage;