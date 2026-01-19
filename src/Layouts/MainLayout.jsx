import React, { useEffect } from 'react';
import { Outlet } from 'react-router';
import AOS from "aos";
import Header from '../components/Header';
import Footer from '../components/Footer';

const MainLayout = () => {
     useEffect(() => {
    AOS.init({ duration: 1000, once: true });
     }, []);
    
    return (
        <div className='bg-light'>
            <section>
                <Header></Header>
            </section>
            <section>
                <Outlet></Outlet>
            </section>
            <section>
                <Footer></Footer>
            </section>
        </div>
    );
};

export default MainLayout;