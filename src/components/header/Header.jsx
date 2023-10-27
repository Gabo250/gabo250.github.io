function Header() {   
    return (
        <header id="main" className="relative overflow-hidden z-[2]">
            <div className="absolute bg-home bg-no-repeat bg-cover w-full h-full bg-fixed grayscale-[60%]"></div>
            
            <section className="relative flex flex-col justify-center items-center pb-40 gap-32 xmd:gap-16 xsm:gap-1 w-full h-full
                                bg-transparent">
                <article className="xsm:mt-40 mt-52">
                    <h1 className="font-brico uppercase text-mainmax xsm:text-[10vw] text-center tracking-widest
                                    md:tracking-normal leading-6 sm:leading-[1rem] whitespace-nowrap
                                    [text-shadow:0px_0px_5px_#ffffff]">gyémánt kuckó</h1>
                    <h2 className="font-dance text-altmax xsm:text-[7vw] tracking-widest md:tracking-wide
                                    text-center italic text-lime-500 whitespace-nowrap">ébrezd fel magad a határokon túl</h2>
                </article>
                
                
            </section>
        </header>
    )
}

export default Header;