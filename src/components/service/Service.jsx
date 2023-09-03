import { serviceItems } from "../utility/Datas";
import Indicator from "./Indicator";
import ServiceCard from "./ServiceCard";

function Service() {
    return(
        <section id="serv" className="relative w-full flex flex-col items-center gap-32 pt-24 pb-32 z-[2] bg-gradient-to-r from-black  via-purple-950 to-black">
            <header className="relative w-[max(60rem,300px)] h-16">
                <h2 className="relative text-4xl text-center [text-shadow:2px_2px_4px_#000000] h-14 border-solid top-[50%] -translate-y-[50%]
                                drop-shadow-[0px_15px_15px_#800080]"
                >Szolgáltatások</h2>
            </header>
            
            { 
                serviceItems.map((service, id, services) => {
                    return (
                        <div key={ service.name } className="relative flex flex-col items-center">
                            <ServiceCard                                
                                name={ service.name }
                                description={ service.description }
                                imgUrl={ service.img }
                                alt={ service.alt }
                                posLeft={id % 2 === 0}
                                />
                            <Indicator left={ id % 2 === 0 }  last={ id === services.length - 1 }/>
                        </div>
                    );
                }) 
            }
        </section>
    );
}

export default Service;