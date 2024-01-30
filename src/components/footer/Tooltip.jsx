function Tooltip({ children }) {
    return (
      <span
        className="absolute hidden font-boo group-hover:block left-[50%] group-hover:animate-fadein
                    group-hover:[animation-duration:.5s] -translate-x-[50%] py-1 px-3 -top-[2.5rem] border-solid border-x-[1px]
                    border-y-[1px] border-black border-opacity-50rounded-lg bg-slate-600 bg-opacity-50 tooltip-after"
      >
        {children}
      </span>
    );
}

export default Tooltip;