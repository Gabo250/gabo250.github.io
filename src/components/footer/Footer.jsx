import { EmailIcon, FBIcon, InstaIcon, PhoneIcon } from "../utility/Icons";
import Tooltip from "./Tooltip";

function Footer() {
    return (
        <footer id="conn" className="h-[30rem] xmd:h-[40rem] w-full bg-ftbg bg-cover z-[-1]">
            <section className="fixed xsm:relative flex flex-row xmd:flex-col justify-center gap-[10vw] xmd:gap-8 items-center top-[calc(100%-30rem)]
                                xmd:top-[calc(100%-40rem)] left-[50%] -translate-x-[50%] h-[30rem] xmd:h-[40rem] w-full
                                backdrop-blur-md z-[1]">
                
                <div className="flex flex-col items-center xmd:flex-row xsm:!flex-col xsm:!gap-8 xmd:gap-[10vw] gap-10 mt-1">
                    <div className="flex flex-row items-center justify-center gap-8 border-dashed border-b-[1px] xmd:border-b-0 border-purple-300 xmd:border-r-[1px]
                                    pb-10 xmd:pb-0 xmd:pr-16 xsm:!border-r-0 xsm:!border-b-[1px] xsm:!pb-10 xsm:!pr-0">
                        <a target="_blank" aria-label="Check my Instagram page" rel="noreferrer external" href="https://www.facebook.com/profile.php?id=100091972387797" className="relative group">
                            <FBIcon classes={"hover:scale-110 transition-all drop-shadow-[0px_5px_6px_#4444dd]"}/>
                            <Tooltip>Facebook</Tooltip>
                        </a>
                        <a target="_blank" aria-label="Check my Facebook page" rel="noreferrer external" href="https://www.instagram.com/gyemantkucko/" className="relative group">
                            <InstaIcon classes={"hover:scale-110 transition-all drop-shadow-[0px_5px_6px_#C13584]"}/>
                            <Tooltip>Instagram</Tooltip>
                        </a>
                    </div>

                    <div className="flex flex-col">
                        <div className="relative flex flex-row gap-2 items-center group">
                            <EmailIcon/>
                            <span className="italic select-text">ggaborr1@gmail.com</span>
                        </div>

                        <div className="relative group flex flex-row gap-2 items-center">
                            <PhoneIcon/>
                            <span className="italic select-text">+36303376136</span>
                        </div>
                    </div>
                </div>

                <iframe 
                    title="Gyémánt kuckó a Google Maps-en" 
                    className="w-[600px] h-[300px] xmd:w-[80%] xsm:!w-full shadow-2xl shadow-slate-300 rounded-md group"
                    loading="lazy"
                    allowFullScreen
                    src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJJ5v58gfBQUcRROLTg4f8mcw&key=AIzaSyAx8doNzpjexsyC0WW2_PlBfUKWa_O3nNA"
                ></iframe>
            </section>            
        </footer>
    );
}

export default Footer;