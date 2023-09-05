import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import Header from '../components/Header';
import { editCategory } from '../helpers/manageCategories';

const EditCategory = () => {
    const [ isClicked, setIsClicked ] = useState(false);
    const navigate = useNavigate();
    const { state } = useLocation();
    const { name, description, securityCode, color, id } = state;
    const [ data, setData ] = useState({
        name, description, securityCode, color,
    });
    
    return (
        <div className="relative bg-black/90">
            <Header />
            <div className="mx-auto max-w-7xl px-6 md:px-8 p-12 lg:py-16 text-white min-h-screen">
                <h1 className="text-2xl lg:text-4xl text-center font-bold">Editar Categoria</h1>
                <form className="mt-16 space-y-8">
                    <div className="">
                        <input type="text" value={ data.name } name="name" id="name"
                            onChange={ (e) => setData({
                                ...data,
                                name: e.target.value,
                            }) }
                            className="w-full bg-transparent" placeholder='Nombre'
                        />
                        { isClicked && !data.name && (
                            <p className="text-xs text-red-700">El nombre es obligatorio</p>
                        ) }
                    </div>
                    <div className="">
                        <textarea type="text" value={ data.description } name="description" id="description"
                            onChange={ (e) => setData({
                                ...data,
                                description: e.target.value,
                            }) }
                            className="w-full bg-transparent" placeholder='Description'
                        />
                        { isClicked && !data.description && (
                            <p className="text-xs text-red-700">La description es obligatorio</p>
                        ) }
                    </div>
                    <div className="">
                        <input type="color" value={ data.color } name="color" id="color"
                            onChange={ (e) => setData({
                                ...data,
                                color: e.target.value,
                            }) }
                            className="w-full bg-transparent" placeholder='Color'
                        />
                        { isClicked && !data.color && (
                            <p className="text-xs text-red-700">Debes elegir un color</p>
                        ) }
                    </div>
                    <div className="">
                        <input type="text" value={ data.securityCode } name="securityCode" id="securityCode"
                            onChange={ (e) => setData({
                                ...data,
                                securityCode: e.target.value,
                            }) }
                            className="w-full bg-transparent" placeholder='Codigo de seguridad'
                        />
                        { isClicked && !data.securityCode && (
                            <p className="text-xs text-red-700">El codigo de seguridad es obligatorio</p>
                        ) }
                    </div>
                    <div className="flex items-center gap-x-6 mt-16">
                        <button type='button'
                            className="btn bg-primary"
                            onClick={ () => editCategory(id, data, setIsClicked) }
                        >
                            Guardar
                        </button>
                        <button type='button' className="btn bg-gray-300 text-black" onClick={ () => navigate(-1) }>Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditCategory;