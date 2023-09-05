function VideoSection() {
    return (
        <section className="relative w-full pb-32 z-[2]  bg-gradient-to-tr from-purple-950 via-purple-500 to-purple-950">
            <article className="relative flex flex-row w- h-80 justify-center items-center">
                <div>
                    <h2>Várlak szeretettel a masszázs <span>Kuckóba</span></h2>
                    <p></p>
                </div>

                <video src="./video/kucko.mp4" autoPlay muted loop playsInline className="w-96 h-auto rounded-lg"></video>
            </article>
        </section>
    );
}

export default VideoSection;