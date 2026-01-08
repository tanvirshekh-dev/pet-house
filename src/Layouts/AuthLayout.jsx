import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div>
            <section>
                <Header></Header>
            </section>
            <section>
                <Outlet></Outlet>
            </section>
        </div>
    );
};

export default AuthLayout;