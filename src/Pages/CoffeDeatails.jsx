import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToFavorite, getFavoriteCoffee } from '../Utilities';
import toast, { Toaster } from 'react-hot-toast';

const CoffeeDetails = () => {
    const { id } = useParams();
    const allCoffeeData = useLoaderData();
   
    const [coffee, setCoffee] = useState({});
    const [isFavorite, setIsFavorite] = useState(true);

    useEffect(() => {
        const singleData = allCoffeeData.find(coffee => coffee.id === parseInt(id));
        setCoffee(singleData || {}); // Ensure coffee is an object if not found

        if (singleData) {
            const favorite = getFavoriteCoffee();
            const isExist = favorite.find(item => item.id === singleData.id);
            setIsFavorite(Boolean(isExist));
        }
    }, [allCoffeeData, id]);

    const handleFavorite = () => {
        addToFavorite(coffee);
        setIsFavorite(true); // Set as favorite after adding
        
    };

    const {
        category,
        making_process,
        description,
        type,
        origin,
        ingredients,
        nutrition_info,
        popularity,
        rating,
        image = "https://i.ibb.co.com/6XPk3nf/espresso.webp" // default image
    } = coffee;

    return (
        <div className="w-10/12 mx-auto shadow-xl p-8 rounded-xl">
         
            <div className="mt-6 border-t pt-4">
                <img 
                  src={image}
                  alt={coffee.name || "Coffee"}
                  className="w-full h-80 rounded mb-4"
                />
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold text-gray-700">{coffee.name || "Coffee"}</h2>
                    <button
                        disabled={isFavorite}
                        onClick={handleFavorite}
                        className="btn btn-warning"
                    >
                        {isFavorite ? "In Favorites" : "Add to Favorites"}
                    </button>
                </div>
                <p className="text-gray-600"><strong>Category:</strong> {category}</p>
                
                <p className="text-gray-600">
                    <strong>Ingredients:</strong> {ingredients ? ingredients.map((ingredient, index) => (
                        <span key={index}>
                            {ingredient}
                            {index < ingredients.length - 1 && ', '}
                        </span>
                    )) : "N/A"}
                </p>

                <p className="text-gray-600"><strong>Origin:</strong> {origin || "Unknown"}</p>
                <p className="text-gray-600"><strong>Type:</strong> {type || "N/A"}</p>
                <p className="text-gray-600"><strong>Description:</strong> {description || "No description available."}</p>
                <p className="text-gray-600"><strong>Making Process:</strong> {making_process || "No information available."}</p>
                
                {nutrition_info && (
                    <div className="text-gray-600 mt-2">
                      <div className="flex items-center justify-between">
                        
                        <div className="flex-1">
                        <p><strong>Nutrition Information:</strong></p>
                        <ul className="list-disc pl-5">
                            <li>Calories: {nutrition_info.calories}</li>
                            <li>Fat: {nutrition_info.fat}g</li>
                            <li>Carbohydrates: {nutrition_info.carbohydrates}g</li>
                            <li>Protein: {nutrition_info.protein}g</li>
                        </ul>
                        </div>
                        <div className="flex-1">
                          <img className="rounded-xl" src={image} alt="" />
                        </div>
                      </div>
                    </div>
                )}

                <p className="text-gray-600 mt-2"><strong>Rating:</strong> {rating || "No rating available."}</p>
                <p className="text-gray-600"><strong>Popularity:</strong> {popularity || "N/A"}</p>
            </div>
        </div>
    );
};

export default CoffeeDetails;
