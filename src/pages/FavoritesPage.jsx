import { FavoriteList } from "../components/FavoriteList/FavoriteList";
import { useEffect} from "react";
import { useState } from "react"; 
export default function FavoritesPage() {
    const [favorites, setFavorites] = useState([]);
    const [favoritesChanged, setFavoritesChanged] = useState(false);

    

    useEffect(() => {
        const fetchDataFromLocalStorage = () => {
            const storedItems = JSON.parse(localStorage.getItem('storedItems')) || [];
            setFavorites(storedItems);
        };
        fetchDataFromLocalStorage();
        
    }, []); 
    

    

    return (
        <>
        <FavoriteList favorites={favorites}/>
        </>
    )
}


