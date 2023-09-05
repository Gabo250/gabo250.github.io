import { useState, useEffect, useRef } from "react";

function useScroll() {
    const [scrollY, setScrollY] = useState(0);
    const prevScrollY = useRef(scrollY);

    useEffect(() => {
        const handleScroll = () => {
            prevScrollY.current = scrollY;
            setScrollY(window.scrollY);
        }

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [scrollY]);

    return [scrollY, prevScrollY];
}

export default useScroll;