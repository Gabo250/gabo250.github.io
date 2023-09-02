function Burger({ clickHandle, checkRef }) {
    return (
        <label className="relative h-8 w-8 top-3 pb-10 cursor-pointer select-none hidden md:block xsm:mr-4">
            <input ref={checkRef} onClick={clickHandle} className="absolute cursor-pointer h-0 w-0 opacity-0 peer" type="checkbox"/>            
            <span className="absolute top-1 left-0 bg-slate-100 h-[2.5px] w-7 origin-left
                             peer-checked:rotate-[45deg] peer-checked:top-1 transition-all duration-500
                             shadow-[0px_0px_10px_2px_rgba(156,18,190,.5)]"></span>

            <span className="absolute top-[14px] left-0 bg-slate-100 h-[2.5px] w-5
                             peer-checked:w-0 peer-checked:opacity-0 transition-all duration-500
                             shadow-[0_0px_10px_2px_rgba(156,18,190,.5)]"></span>

            <span className="absolute top-[24px] left-0 bg-slate-100 h-[2.5px] w-7 origin-left
                             peer-checked:-rotate-[45deg] peer-checked:top-[24px] duration-500
                             transition-transform shadow-[0_0px_10px_2px_rgba(156,18,190,.5)]"></span>
        </label>
    );
}

export default Burger;