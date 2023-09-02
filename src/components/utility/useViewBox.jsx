import { useEffect, useState } from "react";
import useScroll from "./useScroll";

function useViewBox(element) {
    const [inViewBox, setInViewBox] = useState(false);
    const [scrollY] = useScroll();
    const offset = 50;

    useEffect(() => {
        if (!element.current){
            return;
        }

        const rect = element.current.getBoundingClientRect();          
        if(Math.abs(rect.top) + offset < window.innerHeight && rect.bottom - offset > 0 && !inViewBox) {                           
            setInViewBox(true);                
        }
    }, [scrollY, inViewBox, element]);

    return inViewBox;
}

export default useViewBox;