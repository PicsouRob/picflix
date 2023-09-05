import React from 'react';

import { deleteCategory } from '../helpers/manageCategories';

const Modal = ({ setIsModalOpen, title, categoryId, isModalOpen }) => {
    return (
        <>
            <div
                className={ `${isModalOpen ? "translate-y-0" : "-translate-y-full"} fixed inset-0 max-h-screen z-20 flex items-center justify-center text-gray-700 transition duration-300 ease-in-out` }
                style={ {
                    background: 'rgba(0, 0, 0, 0.7)'
                }}
            >
                <div className="center flex-col bg-white p-8 rounded-md shadow-sm space-y-4 text-center w-min">
                    <img src="images/alert.svg" alt="alert" className="h-12 w-20" />
                    <h1 className="font-bold text-lg">Estas seguro?</h1>
                    <p className="">Vas a eliminar <strong>'{title}'</strong> de la lista de categoria. Estas seguro?</p>
                    <div className="flex items-center justify-center gap-6">
                        <button className="bg-red-500 py-1.5 hover:opacity-90 w-32 rounded shadow text-white"
                            onClick={ () => deleteCategory(categoryId, setIsModalOpen) }
                        >Eliminar</button>
                        <button className="border border-red-500 py-1.5 hover:opacity-90 w-32 rounded shadow text-red-500"
                            onClick={ () => setIsModalOpen(false) }
                        >Cancelar</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Modal;
