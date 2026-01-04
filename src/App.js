import './App.css';
import { useContext, useEffect } from 'react';
import Header from './components/Header/Header';
import Services from './components/Services/Services';
import Depoimentos from './components/Depoimentos/Depoimentos';
import Contato from './components/Contato/Contato';
import { Element, Events, scrollSpy } from 'react-scroll';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import NavbarMobile from './components/Navbar/NavbarMobile';
import Whatsapp from './components/Itens/Whatsapp';
import { ThemeContext } from './theme/Theme';

function App() {
  useEffect(() => {
    Events.scrollEvent.register('begin', (to, element) => {
      // console.log('begin', to, element);
    });

    Events.scrollEvent.register('end', (to, element) => {
      // console.log('end', to, element);
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  const { theme } = useContext(ThemeContext);

  return (
    <div id="App" className={`min-h-screen ${theme === 'dark' ? 'bg-slate-950 text-slate-300' : 'bg-slate-50 text-slate-900'} transition-colors duration-500 overflow-x-hidden`}>
      <Navbar />
      <NavbarMobile />

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

      <Whatsapp />
      <Footer />
    </div>
  );
}

export default App;

