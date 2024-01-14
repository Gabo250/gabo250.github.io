import "../../index.css";

/**
* Creates a Link element that is clicked scrolling to the given id's element
*
* @param to The given element's ID
* @param scrollInfo The given scroll infos like smooth scrolling
* @param first Boolean flag that defines if it is the first link
* @param children Nested elements
*
* @returns Link
*/
function NavLink({ to, scrollInfo, first, children }) {
    
    function clickHandle(e) {
        e.preventDefault();
        if (!to) {
            return;
        }

        const clickedElement = e.currentTarget;
        const targetElement = document.getElementById(clickedElement.getAttribute("href").slice(1));
        if (!targetElement) {
            return;
        }    

        targetElement.scrollIntoView(scrollInfo);
    }

    return (
      <a
        href={to}
        onClick={clickHandle}
        className={`uppercase relative transition-transform duration-500 text-[13px] text-neutral-200
                    hover:font-extrabold hover:scale-[1.1] p-6 navlink-after
                        ${first ? "after:content-none" : 'after:content-[""]'}`}
      >
        {children}
      </a>
    );
}

export default NavLink;