import { useState } from "react";
import { getCookie, setCookie } from "./cookieUtility";

function Cookie() {
    const [ visible, setVisible ] = useState(getCookie("accepted") ? false : true);

    const handleCloseClick = () => {
        setCookie("accepted", true);
        setVisible(false);
    }

    return (              
        <div className={`fixed w-[600px] sm:w-[100vw] ${ visible ? "flex sm:block" : "hidden" } bg-slate-700 bg-opacity-25 py-2 px-3 bottom-3
                        left-[50%] -translate-x-[50%] flex-row justify-between items-center z-10 backdrop-blur-sm`}>
            <p className="text-[.8rem] xmd:ml-3 text-center">Az oldal látogatásával automatikusan elfogadod, hogy sütiket használ.</p>
            <button aria-label="Bezárás" onClick={ handleCloseClick } className="mr-1 rounded-sm bg-purple-500 bg-opacity-30 px-3 py-1 text-[.8rem] sm:ml-[50%] sm:-translate-x-[50%]">
                OK
            </button>
        </div>    
    ); 
}

export default Cookie;