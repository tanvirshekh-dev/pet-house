import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import ServicesDetailsCard from '../components/ServicesDetailsCard';
import Header from '../components/Header';

const ServiceDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const [pets, setPets] = useState({});

    useEffect(() => {
        const petDetails = data.find((singlePet)=> singlePet.serviceId == id)
        setPets(petDetails)
    }, [id, data]);

    return (
        <div className='text-black text-center min-h-screen'>
            <section className='w-11/12 mx-auto'>
                <Header></Header>
            </section>
            <section>
                <ServicesDetailsCard pets={pets}></ServicesDetailsCard>
            </section>
        </div>
    );
};

export default ServiceDetails;