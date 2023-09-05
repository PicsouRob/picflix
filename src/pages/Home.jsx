import React from 'react';

import Header from '../components/Header';
import Caroussel from '../components/Caroussel';

const Home = () => {
    return (
        <div className="bg-black/90 pb-16">
            <Header includeButton={ true } />
            <div
                style={ {
                    background: 'url(https://images.rawpixel.com/image_1000/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0zNzgtMDkteC5qcGc.jpg)'
                } }
                className="bg-cover object-cover w-full min-h-[550px] bg-[rgba(0,_18,_51,_0.56)] py-12 flex items-center" id=""
            >
                <div className="mx-auto max-w-7xl px-6 md:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center md:justify-between">
                        <div className="space-y-6 w-full text-[#f5f5f5]">
                            <h1 className="text-4xl max-w-max text-[#f5f5f5] bg-[#6bd1ff] block p-2 font-semibold">
                                Front End
                            </h1>
                            <h1 className="text-5xl block">Challenge React</h1>
                            <p className="text-lg font-light w-full">
                                Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás
                                comprometerte en la resolución de un problema para poder aplicar todos los
                                conocimientos adquiridos en la formación React.
                            </p>
                        </div>
                        <a
                            href="https://file.rendit.io/n/7n44C67SojV3YG5gTqnj.png"
                            className="" target='_blank'
                            rel="noreferrer"
                        >
                            <img
                                src="https://file.rendit.io/n/7n44C67SojV3YG5gTqnj.png"
                                className="w-min"
                                id="PlayerRoot" alt='frontend'
                            />
                        </a>
                    </div>
                </div>
            </div>
            <Caroussel title="Front End" isFrontEnd />
            <Caroussel title="Back End" />
            <Caroussel title="Inovacion y Gestion" />
        </div>
    );
}

export default Home;