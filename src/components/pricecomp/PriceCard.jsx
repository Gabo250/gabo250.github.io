import { useRef, useState } from "react";
import useViewBox from "../utility/useViewBox";

function PriceCard({ servName, servTimePrice }) {    
    const objProperties = Object.keys(servTimePrice);
    const [price, setPrice] = useState(servTimePrice[objProperties[0]]);
    const cardRef = useRef();
    const cardInViewBox = useViewBox(cardRef);

    const clickHandle = (e) => {
        setPrice(servTimePrice[e.target.dataset.time])
    }

    return (
        <article ref={ cardRef } className={`relative left-[50%] -translate-x-[50%] grid items-center max-w-[400px] max-h-[100%] 
                            bg-slate-500 bg-opacity-20 rounded-tl-[40px] rounded-br-[40px] ${ cardInViewBox ? "animate-fadein visible" : "invisible" }
                            border-solid border-[1px] border-black border-opacity-50 backdrop-blur-[6px]
                            [clip-path:polygon(0_0,_94%_0,_100%_7%,_100%_100%,_80%_100%,_8%_100%,_0_92%,_0%_20%)]`}>

            <h2 className="font-dance text-center italic pt-6 pb-6 text-xl bg-black bg-opacity-40 text-lime-500 rounded-tl-[40px]">{ servName }</h2>
            <span className={`text-center mt-8 mb-8 font-extrabold text-[20px] [text-shadow:0px_0px_4px_#ffffff]`}>{ price }</span>
            <div className="flex flex-row justify-center pb-5 border-t-[4px] border-dotted border-slate-300 border-opacity-20 gap-3">
                { 
                    objProperties.map((time) => {
                            return (
                                <button
                                    key={ time }
                                    onClick={ clickHandle }
                                    data-time={ time }
                                    className={`py-2 px-5 xlsm:px-3 bg-opacity-30 hover:bg-slate-300 hover:bg-opacity-50
                                                hover:scale-105 hover:italic transition-[transform,_color,_background-color] rounded-md mt-3
                                                
                                                ${ servTimePrice[time] === price ? "bg-black bg-opacity-30 scale-105 shadow-lg shadow-slate-800" : "bg-slate-500"}`}
                                >{ time }</button>
                            )
                    })
                }
            </div>
        </article>
    );
}

export default PriceCard;