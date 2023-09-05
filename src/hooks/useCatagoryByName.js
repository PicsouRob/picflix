import { useEffect, useState } from "react";

export const useCategoryByName = (name) => {
    const [ category, setCategory ] = useState({
        "id": "",
        "name": "",
        "description": "",
        "color": "",
        "securityCode": ""
    });
    
    useEffect(() => {
        const getCategories = async () => {
            try {
                const response = await fetch(`http://localhost:8080/categories?name=${ name }`);
            
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${ response.status }`);
                }
            
                const data = await response.json();
                setCategory(data[0]);
            } catch (error) {
                console.error(error);
            }
        }
        
        getCategories();
    }, [ name ]);
    
    return category;
};