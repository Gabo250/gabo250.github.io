import { useRef } from "react";
import useViewBox from "../utility/useViewBox";
import { personalInfo } from "../utility/Datas";

function About() {
    const iRef = useRef();
    const nRef = useRef();

    const nInViewBox = useViewBox(nRef);
    const iInViewbox = useViewBox(iRef);

    return (
        <article className="relative flex flex-row gap-10 w-full pt-20 justify-evenly items-center xmd:flex-col z-[2] bg-gradient-to-r from-black via-purple-950 to-black">
            <div className="relative h-[290px] hidden">
                    <img ref={iRef} className={`rounded-full w-full h-full ${iInViewbox ? "animate-fadein [animation-delay:.2s]" : ""}`} src="./img/vik.webp" alt="Nagy Viktória - Masszőr, Lélekgyógyász" /> 
            </div>
            

            <div className="w-1/2 xmd:w-11/12">
                <h2 className="text-justify leading-6">                   
                    <p>
                        <span ref={nRef} className={`font-extrabold text-3xl mr-2 relative text-transparent
                                                    ${ nInViewBox ? "after:animate-revealright [animation-delay:.2s]" : "" }
                                                    after:content-['Nagy_Viktória'] after:absolute after:-top-[.2px] after:left-[.6px]
                                                    after:w-full after:text-purple-500 after:whitespace-nowrap after:overflow-hidden
                                                    after:[text-shadow:0px_0px_5px_#ffffff]`}
                        >{ personalInfo.name }</span>
                        vagyok, masszőr és lélekgyógyító.
                        Az én szenvedélyem az emberek segítése abban, hogy testben és lélekben egyaránt harmóniára találjanak.
                        Hiszek abban, hogy az egészség és a boldogság összefonódik,
                        és hogy a testi-lelki egyensúly eléréséhez szükséges az odafigyelés és a tudatos gondoskodás.
                    </p>
                    <p className={`mt-3`}>
                        Masszázskezeléseimben ötvözöm a hagyományos technikákat és az intuitív megközelítést,
                        hogy megteremtsem a teljes ellazulás és regeneráció élményét. Mindegy, hogy csak egy pillanatnyi kikapcsolódásra vágysz,
                        vagy hosszabb távú stresszoldásra és energetikai feltöltődésre van szükséged,
                        személyre szabott kezeléseimet a te igényeidre és testi állapotodra szabom.
                    </p>
                </h2>
            </div>
        </article>        
    );
}

export default About;