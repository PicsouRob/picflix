import { useEffect, useState } from "react";

export const useCategory = (url) => {
    const [ categories, setCategories ] = useState([]);
    
    useEffect(() => {
        const getCategories = async () => {
            const response = await fetch(url);
            const data = await response.json();
            
            setCategories(data);
        }
        
        getCategories();
    }, [url]);
    
    return categories;
}