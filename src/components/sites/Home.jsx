import About from "../header/About";
import PriceList from "../pricecomp/PriceList";
import Service from "../service/Service";
import VideoSection from "../videocomponent/VideoSection";

function Home() {
    return (
        <>
            <About />
            <Service />
            <VideoSection />
            <PriceList />
        </>
    );
}

export default Home;