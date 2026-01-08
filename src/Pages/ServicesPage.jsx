import React from 'react';
import Services from '../components/Services';
import TipsAndCare from '../components/TipsAndCare';
import BookNow from '../components/BookNow';

const ServicesPage = () => {
    return (
        <div className='text-black'>
            <section>
                <Services></Services>
            </section>
            <section>
                <TipsAndCare></TipsAndCare>
            </section>
            <section>
                <BookNow></BookNow>
            </section>
        </div>
    );
};

export default ServicesPage;