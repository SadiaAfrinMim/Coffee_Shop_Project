import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import Card from './Card';

const Coffeecard = () => {
    const navigate = useNavigate()
    const data = useLoaderData()
    const {category}= useParams()
    const [coffees,setcoffee] = useState([])
    useEffect(()=>{
        if(category){
            const filterData = [...data].filter(coffee => coffee.category === category)
        setcoffee(filterData)
        }
        else{
            setcoffee(data.slice(0,6))
        }
    },[category,data])
    return (
       <>
      
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-12 gap-4'>
            {
                coffees.map(coffee=><Card key={coffee.id} coffee = {coffee}></Card>)
            }
            
            
        </div>
        <button onClick={()=>navigate('/coffee')} className='btn btn-warning'>view all</button>
        </>
    );
};

export default Coffeecard;