import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Nav from './components/navcomp/Nav';
import Cookie from './components/utility/Cookie';
import Home from './components/sites/Home';
import NotFound from './components/sites/NotFound';

function App() {
  return (
    <BrowserRouter >
      <Nav/>
      <Header/>

      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/*' element={ <NotFound /> } />
      </Routes> 

      <Footer/>
      <Cookie/>
    </BrowserRouter>
  );
}

export default App;