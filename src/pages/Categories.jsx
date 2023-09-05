import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../components/Header';
import { useCategory } from '../hooks/useCategories';
import { addData } from '../helpers/addDataToServer';
import Modal from '../components/Modal';

const Categories = () => {
    const navigate = useNavigate();
    const categories = useCategory("http://localhost:8080/categories");
    const [ title, setTitle ] = useState('');
    const [ isModalOpen, setIsModalOpen ] = useState(false);
    const [ categoryId, setCategoryId ] = useState("");
    const [ isClicked, setIsClicked ] = useState(false);
    const [ data, setData ] = useState({
        name: "",
        description: "",
        securityCode: "",
        color: "",
    });
    
    const cleanAllField = () => {
        setData({
            name: "",
            description: "",
            securityCode: "",
            color: "#5C7CFA",
        })
    }
    
    const openModal = (id, categoryTitile) => {
        setTitle(categoryTitile);
        setCategoryId(id);
        setIsModalOpen(true);
    }
    
    return (
        <div className="relative bg-black/90">
            <Header />
            <div className="mx-auto max-w-7xl px-6 md:px-8 p-12 lg:py-16 text-white">
                <h1 className="text-2xl lg:text-4xl text-center font-bold">Nueva Categoria</h1>
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
                        <button type='button' className="btn bg-primary" onClick={ () => addData("http://localhost:8080/categories", data, setIsClicked) }>Guardar</button>
                        <button type='button' className="btn bg-gray-300 text-black" onClick={ () => cleanAllField() }>Limpiar</button>
                    </div>
                </form>
                <div className="mt-16">
                    <table className="w-full text-left">
                        <thead className="">
                            <tr className="">
                                <th className="font-bold text-lg">Nombre</th>
                                <th className="font-bold text-lg">Description</th>
                                <th className="font-bold text-lg">Editar</th>
                                <th className="font-bold text-lg">Remover</th>
                            </tr>
                        </thead>
                        <tbody className="">
                            { categories.map((item, ind) => (
                                <tr key={ ind } className="">
                                    <td className="">{ item.name }</td>
                                    <td className="">{ item.description }</td>
                                    <td className="">
                                        <button
                                            onClick={() => navigate(`/edit-category/${ item.id }`, { state: item, })}
                                            className=" w-full hover:bg-black"
                                        >Editar</button>
                                    </td>
                                    <td className="">
                                        <button className=" w-full hover:bg-black"
                                            onClick={ () => openModal(item.id, item.name) }
                                        >Remover</button>
                                    </td>
                                </tr>
                            )) }
                        </tbody>
                    </table>
                </div>
            </div>
            <Modal title={ title } isModalOpen={ isModalOpen } setIsModalOpen={ setIsModalOpen } categoryId={ categoryId } />
        </div>
    );
};

export default Categories;