function Tooltip({ children }) {
    return (
        <span className="absolute hidden font-boo group-hover:block left-[50%] group-hover:animate-fadein group-hover:[animation-duration:.5s] -translate-x-[50%] py-1 px-3 -top-[2.5rem] border-solid border-x-[1px]
                        border-y-[1px] border-black border-opacity-50rounded-lg bg-slate-600 bg-opacity-50
                        after:content-[''] after:absolute after:top-[100%] after:left-[50%] after:-translate-x-[50%] after:border-solid
                        after:[border-width:6px] after:border-slate-600 after:[border-color:rgb(71_85_105_/_80%)_transparent_transparent_transparent]"
        >{ children }</span>
    );
}

export default Tooltip;