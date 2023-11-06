function NotFound() {
    return (
        <section className="relative flex justify-center items-center h-[40vh] z-[5] bg-gradient-to-r from-black  via-purple-950 to-black">
            <p className="flex flex-col text-[2rem] text-center sm:text-[1rem]">
                <span className="text-[3rem] text-red-600 font-bold mr-5 sm:text-[1.5rem] sm:mr-2">404</span>
                <span className="text-[1.5rem] italic text-red-100 sm:text-[1rem]">{ window.location.href }</span> oldal nem található!
            </p>
        </section>
    );
}

export default NotFound;