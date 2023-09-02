import { useRef } from "react";
import useViewBox from "../utility/useViewBox";

function ServiceCard({ name, description, imgUrl, alt, posLeft }) {
    const articleRef = useRef();
    const imgRef = useRef();
    const textRef = useRef();
    const artInViewBox = useViewBox(articleRef);
    const imgInViewBox = useViewBox(imgRef);
    const textInVievBox = useViewBox(textRef);

    return(
        <article ref={articleRef} className={`relative ${artInViewBox ? 'visible' : 'invisible'}
                                            ${artInViewBox && posLeft ? 
                                                'mmd:animate-slideright [clip-path:polygon(0_0,_100%_0,_100%_77%,_90%_100%,_0_100%,_0%_50%)]' : ''}
                                            ${artInViewBox && !posLeft ?
                                                'mmd:animate-slideleft [clip-path:polygon(0_0,_100%_0,_100%_50%,_100%_100%,_10%_100%,_0_81%)]' : ''}  
                                             xmd:[clip-path:polygon(0_0,_100%_0,_100%_94%,_77%_100%,_0_100%,_0%_50%)]                                     
                                             w-4/5 bg-purple-400 bg-opacity-10 grid grid-cols-[auto_auto]
                                             grid-rows-[auto_auto] gap-x-10 md:p-6 md:grid-cols-[auto] border-solid border-white border-[1px]
                                             border-opacity-10`}>
            { 
                posLeft ? 
                    <>
                        <img ref={imgRef} src={ imgUrl } alt={ alt } className={`row-span-2 p-6 w-52 h-52 rounded-full object-cover ml-[50%] -translate-x-[50%]
                                                                                ${imgInViewBox ? 'animate-fadein' : ''} ${imgInViewBox ? 'visible' : 'invisible'}`}/>
                        <h2 data-name={name} className={`font-dance text-center text-2xl md:pb-6 pt-6 text-lime-300`}>{ name }</h2>
                        <div className="overflow-hidden">
                            <p ref={textRef} className={`relative text-center xsm:text-justify text-sm xsm:text-xs leading-5 sm:pr-0 pr-12 pb-6
                                                        ${textInVievBox ? 'md:animate-slidedown' : ''} ${textInVievBox ? 'visible' : 'invisible'}`}>{ description }</p>
                        </div>
                    </>
                        :
                    <>
                        <h2 className={`font-dance text-center text-2xl md:pb-6 pt-6 text-lime-300 overflow-hidden`}>{ name }</h2>                   
                        <img ref={imgRef} src={ imgUrl } alt={ alt } className={`row-span-2 p-6 w-52 h-52 rounded-full object-cover ml-[50%] -translate-x-[50%]
                                                                                ${imgInViewBox ? 'animate-fadein' : ''} ${imgInViewBox ? 'visible' : 'invisible'}`}/>
                        <div className="overflow-hidden">
                            <p ref={textRef} className={`relative text-center xsm:text-justify text-sm xsm:text-xs leading-5 sm:pl-0 pl-12 pb-6
                                                        ${textInVievBox ? 'md:animate-slidedown' : ''} ${textInVievBox ? 'visible' : 'invisible'}`}>{ description }</p>
                        </div>
                    </>
            }            
        </article>
    );
}

export default ServiceCard;