import { v4 as uuidv4 } from 'uuid';

export const addData = async (url, data, setIsClicked) => {
    setIsClicked(true);
    
    try {
        const uniqueId = uuidv4();
        for (let key in data) {
            if (data.hasOwnProperty(key)) {
                let dataValue = data[key];
                
                if (dataValue !== '') {
                    const response  = await fetch(url, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",   
                        },
                        body: JSON.stringify({ id: uniqueId, ...data }),
                    });
                    
                    if (response.ok) {
                        setIsClicked(false);
                        window.history.back();
                        console.log("Your insertion added successfully!");
                    } else {
                        throw new Error("Your insertion failed.");
                    }
                }
            }
        }
    } catch (error) {
        console.log("Error creando nuevo categoria: ", error); 
    }
}