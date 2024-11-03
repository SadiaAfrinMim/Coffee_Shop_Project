import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../components/Card';

const Coffes = () => {
    const data = useLoaderData()
    const [coffee,setcoffee] = useState(data)
    const handleSort = (sortBy)=>{
        if(sortBy == 'popularity'){
            const sorted = [...data].sort((a,b)=> b.popularity - a.popularity)
            setcoffee(sorted)

        }else if(sortBy == 'rating'){
            const sorted = [...data].sort((a,b)=> b.rating-a.rating)
            setcoffee(sorted)

        }

    }
    return (
       <div>
         <div className='flex justify-between items-center my12'>
        <h1 className="text-3xl">sort coffee&apos;s by popularity and rating</h1>
        <div className='space-x-4'>
            <button onClick={()=> handleSort('popularity')
            } className='btn btn-warning'>sort by popularity
            </button>
            <button onClick={()=> handleSort('rating')} className='btn btn-warning'>sort by rating</button></div>
       </div>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-12 gap-4'>
        {
           data.map(coffee=><Card key={coffee.id} coffee = {coffee}></Card>)
        }
        
        
    </div>
       </div>
    );
};

export default Coffes;