import { useEffect, useState } from "react";
import { getFavoriteCoffee, removeFavorite } from "../Utilities";
import Card from "../components/Card";



const Dashboard = () => {
  
    const [coffess, setCoffees] = useState([])
    useEffect(()=>{
        const favorite = getFavoriteCoffee()
        setCoffees(favorite)
    },[])

    const handleRemove = (id) =>{
        removeFavorite(id)
        const favorite = getFavoriteCoffee()
        setCoffees(favorite)
    }
    return (
        <div>
            <div className="text-center">
            <h1 className="text-3xl font-bold">Welcome to our Dashboard</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, numquam!</p>
            
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-12 gap-4'>
            {
                coffess.map(coffee=><Card handleRemove={handleRemove} key={coffee.id} coffee = {coffee}></Card>)
            }
            
            
        </div>
        </div>
    );
};

export default Dashboard;