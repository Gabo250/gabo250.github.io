import { useRef } from "react";
import useViewBox from "../utility/useViewBox";

function Indicator({ left, last }) {
    const indRef = useRef();
    const inViewBox = useViewBox(indRef);

    return(
        <>
            {
                !last ? <div ref={indRef} className={`absolute w-20 h-32 [clip-path:polygon(25%_0%,_100%_0%,_75%_100%,_0%_100%)]
                                                    top-[100%] bg-gradient-to-t from-purple-900 via-purple-500 to-purple-900 z-[2]
                                                    ${ left ? "left-[25%] md:left-1/2 md:-translate-x-[50%]" : "left-[75%] md:left-1/2 md:-translate-x-[50%]"}
                                                    ${ inViewBox ? 'animate-fadein visible' : 'invisible'}`}></div>
                    : null
            }
        </>
    );
}

export default Indicator;