import './App.css';
import { useEffect} from 'react';
import Header from './components/Header/Header';
import Services from './components/Services/Services';
import Depoimentos from './components/Depoimentos/Depoimentos';
import Contato from './components/Contato/Contato';
import { Element , Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import Navbar from './components/Navbar/Navbar'; 
import Footer from './components/Footer/Footer'; 
import NavbarMobile from './components/Navbar/NavbarMobile'; 
import Whatsapp from './components/Itens/Whatsapp';

function App() {
  useEffect(() => {
    
    // Registering the 'begin' event and logging it to the console when triggered.
    Events.scrollEvent.register('begin', (to, element) => {
      console.log('begin', to, element);
    });

    // Registering the 'end' event and logging it to the console when triggered.
    Events.scrollEvent.register('end', (to, element) => {
      console.log('end', to, element);
    });

    // Updating scrollSpy when the component mounts.
    scrollSpy.update();

    // Returning a cleanup function to remove the registered events when the component unmounts.
    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  return (
      <div id="App" className='bg-dark text-white-50'>
          <Navbar/>
          <NavbarMobile/>
          <Element name="header">
            <Header />
          </Element>

          <Element name="servicos">
            <Services />
          </Element>
          <Element name="depoimentos">
            <Depoimentos />
          </Element>

          <Element name="contato">
            <Contato />
          </Element>
          <Whatsapp/>
          <Footer/>

      </div>
  );
}

export default App;
