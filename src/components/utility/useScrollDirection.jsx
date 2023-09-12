import { useEffect, useState } from "react";
import useScroll from "./useScroll";

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

    return [scrollDirectionDown];
}

export default useScrollDirection;