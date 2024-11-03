import React from 'react';
import Banner from '../components/Banner';
import Heading from '../components/Heading';
import { Outlet, useLoaderData } from 'react-router-dom';
import Categories from '../components/Categories';

const Home = () => {
    const categories = useLoaderData()
    
    return (
        <div>
            <Banner></Banner>
            <Heading title={'browse coffee by categorys'} subtitle={'Are you looking for information about coffee, or maybe you want to chat about brewing methods, types of coffee, or coffee-related recipes? Just let me know, and we can dive in! '}></Heading>
            <Categories categories = {categories}></Categories>
            <Outlet></Outlet>

            
        </div>
    );
};

export default Home;