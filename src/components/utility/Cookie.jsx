import { useState } from "react";
import { CookieIcon } from "./Icons";

function Cookie() {
    const [ visible, setVisible ] = useState();

    const handleCookieClick = () => {
        setVisible(true);
    }

    const handleCloseClick = () => {
        setVisible(false);
    }

    return (
        <>
            <div className={`fixed flex justify-center bg-purple-600 bg-opacity-20 left-3 ${ visible ? "hidden" : "block" }
                             bottom-3 z-10 backdrop-blur-md rounded-full w-10 h-10`}>
                <button aria-label="Süti elfogadás" onClick={ handleCookieClick } >
                    <CookieIcon />
                </button>            
            </div>

            <div className={`fixed w-[700px] md:w-[100vw] ${ visible ? "flex" : "hidden" } bg-slate-700 bg-opacity-25 py-2 px-3 bottom-3
                            left-[50%] -translate-x-[50%] flex-row justify-between items-center z-10 backdrop-blur-sm`}>
                <p className="text-[.8rem] xmd:ml-3">Az oldal látogatásával automatikusan elfogadod, hogy a szükséges sütiket használja.</p>
                <button aria-label="Bezárás" onClick={ handleCloseClick } className="mr-1 rounded-sm bg-purple-500 bg-opacity-30 px-3 py-1 text-[.8rem]">
                    OK
                </button>
            </div>
        </>
    ); 
}

export default Cookie;