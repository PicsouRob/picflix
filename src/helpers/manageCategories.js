export const deleteCategory = async (id, setIsModalOpen) => {
    try {
        const response = await fetch(`http://localhost:8080/categories/${ id }`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
        
        if (!response.ok) {
            throw new Error("No se pudo eliminar el elemento.");
        }
        
        setIsModalOpen(false);
        console.log("Elemento eliminado exitosamente.");
        window.location.reload(true);
    } catch (error) {
        setIsModalOpen(false);
        console.log("Error: ", error.message);
    }
};

export const editCategory = async (id, data, setIsClicked) => {
    setIsClicked(true);
    for (let key in data) {
        if (data.hasOwnProperty(key)) {
            let dataValue = data[ key ];
            
            if (dataValue !== '') {
                try {
                    const response = await fetch(`http://localhost:8080/categories/${ id }`, {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(data),
                    });
                    
                    if (!response.ok) {
                        throw new Error("No se pudo editar el elemento.");
                    }
                    
                    setIsClicked(false);
                    console.log("Elemento editado exitosamente.");
                    window.location.href = "http://localhost:3000/add-categories";
                } catch (error) {
                    console.log("Error: ", error.message);
                }
            }
        }
    }
};