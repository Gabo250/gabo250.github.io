import { useRef } from "react";
import useViewBox from "../utility/useViewBox";

function About() {
    const iRef = useRef();
    const nRef = useRef();
    const nInViewBox = useViewBox(nRef);
    const iInViewbox = useViewBox(iRef);

    return (
        <article className="relative flex flex-row gap-10 w-4/5 xmd:w-11/12 justify-evenly items-center xmd:flex-col z-[2]">
            <div className="relative w-52 h-[290px]">
                <img ref={iRef} className={`rounded-full w-full h-full ${iInViewbox ? "animate-fadein" : ""}`} src="./img/vik.jpg" alt="Nagy Viktória - Masszőr, Lélekgyógyász" />
            </div>

            <div className="w-1/2 xmd:w-11/12">
                <h2 className="text-justify leading-6">
                    <span ref={nRef} className={`font-extrabold text-3xl relative text-transparent
                                                ${ nInViewBox ? "after:animate-revealright" : "" }
                                                after:content-['Nagy_Viktória'] after:absolute after:-top-[.2px] after:left-[.6px]
                                                after:w-full after:text-purple-500 after:whitespace-nowrap after:overflow-hidden
                                                after:[text-shadow:0px_0px_5px_#ffffff]`}>
                        Nagy Viktória
                    </span>
                    &nbsp;vagyok, masszőr és lélekgyógyító.
                    Az én szenvedélyem az emberek segítése abban, hogy testben és lélekben egyaránt harmóniára találjanak.
                    Hiszek abban, hogy az egészség és a boldogság összefonódik,
                    és hogy a testi-lelki egyensúly eléréséhez szükséges az odafigyelés és a tudatos gondoskodás.
                </h2>
            </div>
        </article>        
    );
}

export default About;