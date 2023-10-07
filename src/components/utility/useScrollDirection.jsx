import { useEffect, useState } from "react";
import useScroll from "./useScroll";

/**
* Sets the boolean flag 'scrollDirectionDown' that defines the current scroll direction
*
* @returns scrollDirectionDown
*/
function useScrollDirection() {
    const [scrollY, prevScrollY] = useScroll();
    const [scrollDirectionDown, setScrollDirectionDown] = useState(false);

    useEffect(() => {
        let diff = scrollY - prevScrollY;
        if (diff > 0 && !scrollDirectionDown) {
            setScrollDirectionDown(true);                           
        }
        else if (diff < 0 && scrollDirectionDown) {
            setScrollDirectionDown(false)
        }
    }, [scrollDirectionDown, scrollY, prevScrollY]);

    return scrollDirectionDown;
}

export default useScrollDirection;