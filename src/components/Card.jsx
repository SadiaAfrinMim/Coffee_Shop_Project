import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaTrashAlt } from "react-icons/fa";

const Card = ({coffee,handleRemove}) => {
  const {pathname} = useLocation()
    const {id,name,nutrition_info,ingredients,image,category,origin,description,popularity,rating} = coffee || {}
    return (
        <div className='flex relative'>
            <Link to={`/coffee/${id}`}>
        <div>
           <div class="card bg-base-100 border-2 p-6 shadow-xl">
  <figure className='rounded-xl '>
    <img
    className='object-cover w-full'
      src={image}
      alt="Shoes" />
  </figure>
  <div class="card-body space-y-4">
 
    
    <h2 class="card-title">
      {category}
      <div class="badge badge-secondary">NEW</div>
    </h2>
    
    <div>
        <p className='text-left'>{description}</p>
    </div>
    <div className='border-t-2 border-dashed '></div>
    <div className='flex justify-between items-center'>
        <h3>popularity: {popularity}</h3>
        <h2> rating: {rating}</h2>
    </div>
   
    <div class="card-actions justify-between">
       
      <div class="badge badge-outline">{name}</div>
      <div class="rating">
  <input type="radio" name="rating-4" class="mask mask-star-2 bg-pink-500" />
  
  
</div>
    </div>
  </div>
</div>
        </div>
       </Link>
       {pathname === '/dashboard' && (
  <p onClick={()=>handleRemove(id)}  className="absolute -top-5 -right-5 p-3 bg-yellow-400 rounded-full shadow-lg">
    <FaTrashAlt />
  </p>
)}

        </div>
       
    );
};

export default Card;