import { useState, useEffect, useRef } from "react";

function useScroll() {
    const [scrollY, setScrollY] = useState(0);
    const [prevScrollY, setPrevScrollY] = useState(scrollY);

    const timeOutID = useRef();

    useEffect(() => {
        const handleScroll = () => {
            timeOutID.current = setTimeout(() => {
                setPrevScrollY(scrollY);
                setScrollY(window.scrollY);
            }, 200)            
        }
        
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {            
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(timeOutID.current);
        }
    }, [scrollY, prevScrollY]);

    return [scrollY, prevScrollY];
}

export default useScroll;