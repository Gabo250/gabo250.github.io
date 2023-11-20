import { useRef } from "react";
import useViewBox from "../hooks/useViewBox";

function VideoSection() {
    const textRef = useRef();
    const textInViewBox = useViewBox(textRef);

    return (
        <section className="relative w-full z-[2]  bg-gradient-to-r from-black  via-purple-950 to-black xmd:pt-14 pb-24">
            <article className="relative flex flex-row justify-center gap-10 items-center xmd:flex-col bg-gradient-to-tr from-purple-950 via-purple-500 to-purple-950
                                overflow-hidden xmd:pt-14 xmd:pb-0">
                <div className="xmd:mt-3">
                    <h2 className="text-xl text-black xsm:text-center font-semibold">Várlak szeretettel a masszázs 
                        <span ref={ textRef }
                            className={`relative uppercase ml-2 text-transparent after:content-['Kuckóba']
                                        after:absolute after:-top-[.1rem] after:left-0 ${ textInViewBox ? "after:animate-revealright visible" : "invisible"}
                                        after:bg-gradient-to-r after:from-pink-500 after:to-violet-700
                                        after:overflow-hidden after:bg-clip-text after:[animation-iteration-count:infinite]`}
                        >Kuckóba</span>
                    </h2>
                    <p></p>
                </div>

                <video src="./video/kucko.mp4" autoPlay muted loop playsInline className="w-[50%] xmd:w-full h-auto rounded-br-full rounded-tl-full shadow-[0_25px_50px_-12px,-5px_-25px_50px_-12px] shadow-fuchsia-800"></video>
            </article>
        </section>
    );
}

export default VideoSection;