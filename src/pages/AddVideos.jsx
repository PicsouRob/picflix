import React, { useState } from 'react';

import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { useCategory } from '../hooks/useCategories';
import { addData } from '../helpers/addDataToServer';

const AddVideos = () => {
    const categories = useCategory("http://localhost:8080/categories");
    const [ isClicked, setIsClicked ] = useState(false);
    const [ data, setData ] = useState({
        title: "",
        description: "",
        securityCode: "",
        category: "",
        imageLink: "",
        videoLink: ""
    });
    
    const cleanAllField = () => {
        setData({
            title: "",
            description: "",
            securityCode: "",
            category: "",
            imageLink: "",
            videoLink: ""
        });
    }
    
    return (
        <div className="bg-black/90">
            <Header />
            <div className="mx-auto max-w-7xl px-6 md:px-8 p-12 lg:py-16 text-white min-h-screen">
                <h1 className="text-2xl lg:text-4xl text-center font-bold">Nueva Video</h1>
                <form className="mt-16 space-y-10">
                    <div className="">
                        <input type="text" value={ data.title } name="title" id="title"
                            onChange={ (e) => setData({
                                ...data,
                                title: e.target.value,
                            }) }
                            className="w-full bg-transparent" placeholder='Titulo'
                        />
                        { isClicked && !data.title && (
                            <p className="text-xs text-red-700">El titulo es obligatorio</p>
                        ) }
                    </div>
                    <div className="">
                        <input type="text" value={ data.imageLink } name="imageLink" id="image"
                            onChange={ (e) => setData({
                                ...data,
                                imageLink: e.target.value,
                            }) }
                            className="w-full bg-transparent" placeholder='Link imagen del video'
                        />
                        { isClicked && !data.imageLink && (
                            <p className="text-xs text-red-700">El link de la imagen es obligatorio</p>
                        ) }
                    </div>
                    <div className="">
                        <input type="text" value={ data.videoLink } name="videoLink" id="videoLink"
                            onChange={ (e) => setData({
                                ...data,
                                videoLink: e.target.value,
                            }) }
                            className="w-full bg-transparent" placeholder='Link del video'
                        />
                        { isClicked && !data.videoLink && (
                            <p className="text-xs text-red-700">El link del video es obligatorio</p>
                        ) }
                    </div>
                    <div className="">
                        <select value={ data.category } name="category" id="category"
                            onChange={ (e) => setData({
                                ...data,
                                category: e.target.value,
                            }) }
                            className="w-full bg-[#191919]"
                        >
                            <option selected value="" className="">Selecione una categoria</option>
                            { categories.map((data, ind) => (
                                <option key={ind} value={data.name} className="">{ data.name }</option>
                            ))}
                        </select>
                        { isClicked && !data.category && (
                            <p className="text-xs text-red-700">La categoria es obligatorio</p>
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
                    <div className="flex flex-wrap items-center md:justify-between gap-y-8">
                        <div className="flex items-center gap-x-6">
                            <button type='button' className="btn bg-primary" onClick={() => addData("http://localhost:8080/videos", data, setIsClicked) }>Guardar</button>
                            <button type='button' className="btn bg-gray-300 text-black" onClick={ () => cleanAllField() }>Limpiar</button>
                        </div>
                        <Link to="/add-categories" className="btn bg-primary">Nueva Categoria</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddVideos;