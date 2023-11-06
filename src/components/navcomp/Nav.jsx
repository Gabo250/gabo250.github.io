import { useEffect, useRef } from "react";
import { menuItems } from "../utility/Datas";
import Burger from "./Burger";
import NavLink from "./Navlink";
import useScrollDirection from "../utility/useScrollDirection";

function Nav() {
    const menuRef = useRef();
    const slideDown = useScrollDirection();
    const isBurgerChecked = useRef();

    useEffect(() => {
        if (isBurgerChecked.current.checked) {
            isBurgerChecked.current.checked = false;
            menuDisappear();
        }
    }, [slideDown]);

    const menuDisappear = () => {
        menuRef.current.classList.remove("animate-revealdown");
        menuRef.current.classList.add("animate-disappear");
        menuRef.current.classList.add("md:h-0");
    };

    const clickHandle = (e) => {      
        const isChecked = e.target.checked;
        if (isChecked) {  
            menuRef.current.classList.remove("md:h-0");          
            menuRef.current.classList.remove("animate-disappear");
            menuRef.current.classList.add("animate-revealdown");
        }
        else {
            menuDisappear();
        }
    };    

    return (
        <section className={`fixed fill-mode-forward w-full ${slideDown ? 'animate-slideup' : 'animate-slidedown'} z-10`}>
            <article className="flex flex-row w-full justify-center lg:justify-evenly gap-52 xlsm:!gap-[.5rem] md:gap-36 lg:gap-8 
                             backdrop-blur-sm bg-purple-900 bg-opacity-30 rounded-b-pfull">

                <div className="bg-logo bg-no-repeat bg-cover w-10 h-10 mt-2 xsm:ml-3 lg:mb-2 rounded-full shadow-[0_0px_10px_1px_rgba(156,18,190,1)]">
                </div>

                <nav ref={menuRef} className="flex flex-row mr-10 lg:mr-0 md:gap-1 md:h-0 md:flex-col
                                              md:mt-14 md:items-center md:overflow-hidden">
                    {
                        menuItems.map((item, id) => {
                            return (                                
                                <NavLink
                                    key={item.href}
                                    to={item.href}
                                    scrollInfo={{behavior: "smooth", block: "start"}}
                                    first={id === 0 ? true : false}
                                >
                                    <div className="flex flex-row items-center gap-3">
                                        {item.icon}
                                        {item.name}
                                    </div>
                                </NavLink>                                                                                      
                                )                            
                        })
                    }                
                </nav>

                <Burger clickHandle={clickHandle} checkRef={isBurgerChecked}/>
            </article>
        </section>
    );
}

export default Nav;