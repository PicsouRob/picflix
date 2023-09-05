import React, { useRef } from 'react';

import { useCategory } from '../hooks/useCategories';
import { useCategoryByName } from '../hooks/useCatagoryByName';

const Caroussel = ({ title, isFrontEnd = false }) => {
    const scrollRef = useRef(null);
    const category = useCategoryByName(title);
    const data = useCategory(`http://localhost:8080/videos?category=${ title }`);
    
    const scrollToRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft  += 300;
        }
    }
    
    const scrollToLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft -= 300;
        }
    }
    
    return (
        <>
            <div className="px-6 md:px-8 pt-12 mx-auto max-w-7xl">
                <div className="flex items-center flex-wrap md:justify-between gap-5">
                    { !isFrontEnd && (
                        <div className="flex items-center gap-5 text-white">
                            <h1 className={ `p-2 font-bold text-xl` }
                                style={ {
                                    backgroundColor: `${ category?.color }`
                                } }
                            >{ title }</h1>
                            <p className="text-xs md:text-[15px]">{ category?.description }</p>
                        </div>
                    ) }
                    <div className={`${isFrontEnd ? "md:w-full" : "md:w-min md:justify-start"} flex items-center gap-4 w-full justify-between `}>
                        <div className={ `scrollBtn` }
                            onClick={ () => scrollToLeft() }
                            style={ {
                                backgroundColor: `${ category?.color }`
                            } }
                        >{ `<` }</div>
                        <div className={ `scrollBtn` }
                            onClick={ () => scrollToRight() }
                            style={ {
                                backgroundColor: `${ category?.color }`
                            } }
                        >{ `>` }</div>
                    </div>
                </div>
                <div ref={ scrollRef } className="mt-6 flex  gap-6 scrollbar-hide scroll-smooth scroll overflow-x-auto whitespace-nowrap overflow-scroll transition duration-300 ease-in-out">
                    { data.map((item, index) => (
                        <a key={ index } target="_blank" rel="noreferrer" href={item.videoLink} className="relative block bg-primary min-w-[300px] md:min-w-[350px]">
                            <img alt={ item.id }
                                src={item.imageLink}
                                className="rounded-sm shadow whitespace-nowrap bg-cover h-[200px] w-full col-span-3 relative block"
                            />
                        </a>
                    )) }
                </div>
            </div>
        </>
    );
}

export default Caroussel;