import { priceItems } from "../utility/Datas";
import PriceCard from "./PriceCard";

function PriceList() {
    return (
            <section id="price" className="relative grid grid-cols-[repeat(2,minmax(20rem,30rem))] justify-center lmd:grid-cols-1 pb-32 pt-24 gap-y-24 gap-x-16 z-[2]
                                            [background:linear-gradient(90deg,_rgba(59,7,100,1)_0%,_rgba(15,24,42,1)_28%,_rgba(15,24,42,1)_75%,_rgba(59,7,100,1)_100%)]">            
                <header className="relative col-span-2 lmd:col-span-1 h-16">                      
                    <h2 className="relative text-[36px] text-center [text-shadow:2px_2px_4px_#000000] align-middle top-[50%]
                                    -translate-y-[50%] h-full drop-shadow-[0px_15px_10px_#0b0d0e]"
                    >Árak</h2>    
                </header>

                {
                    priceItems.map((data) => {
                        return <PriceCard key={ data.name }  servName={ data.name } servTimePrice={ data.price } />
                    })
                }
            </section>
    );
}

export default PriceList;