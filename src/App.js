import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Nav from './components/navcomp/Nav';
import PriceList from './components/pricecomp/PriceList';
import Service from './components/service/Service';

function App() {
  return (
    <div className="bg-gradient-to-r from-black  via-purple-950 to-black overflow-x-hidden select-none ">
      <Nav/>
      <Header/>
      <Service/>
      <PriceList/>
      <Footer/>
    </div>
  );
}

export default App;