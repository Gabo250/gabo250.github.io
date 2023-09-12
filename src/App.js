import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Nav from './components/navcomp/Nav';
import PriceList from './components/pricecomp/PriceList';
import Service from './components/service/Service';
import VideoSection from './components/videocomponent/VideoSection';

function App() {
  return (
    <div className="bg-gradient-to-r from-black  via-purple-950 to-black overflow-x-hidden select-none z-[2]">
      <Nav/>
      <Header/>
      <Service/>
      <VideoSection/>
      <PriceList/>
      <Footer/>
    </div>
  );
}

export default App;