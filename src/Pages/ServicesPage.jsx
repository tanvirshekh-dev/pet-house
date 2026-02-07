import React from 'react';
import Services from '../components/Services';
import TipsAndCare from '../components/TipsAndCare';
import BookNow from '../components/BookNow';
import FAQ from '../components/FAQ';

const ServicesPage = () => {
    return (
        <div className='text-black overflow-hidden'>
            <section data-aos="fade-up">
                <Services></Services>
            </section>
            <section>
                <TipsAndCare></TipsAndCare>
            </section>
            <section>
                <FAQ></FAQ>
            </section>
        </div>
    );
};

export default ServicesPage;