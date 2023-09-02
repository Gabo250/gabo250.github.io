import { priceItems } from "../utility/Datas";
import PriceCard from "./PriceCard";

function PriceList() {
    return (
            <section id="price" className="relative grid grid-cols-[repeat(2,minmax(20rem,30rem))] justify-center lmd:grid-cols-1 pb-32 pt-24 gap-y-24 gap-x-16 z-[2]
                                            bg-gradient-to-r from-slate-900  via-slate-700 to-slate-900">            
                <header className="relative col-span-2 lmd:col-span-1 h-16 shadow-2xl shadow-slate-600">                      
                    <h2 className="relative text-[36px] text-center [text-shadow:2px_2px_4px_#000000] align-middle top-[50%]
                                    -translate-y-[50%] h-full border-solid border-b-[1px] border-slate-400 border-opacity-60"
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