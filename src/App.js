import React from 'react';
import Analytics from './components/Analytics';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import QuiSommeNous from './components/QuiSommeNous';
import Suggestion from './components/Suggestion';
import NosOffres from './components/NosOffres';
import Forfait from './Forfait';
import Simulateur from './components/Simulateur';

function App() {
  return (
    <div className='space-y-8'>
      <Navbar/>
      <Simulateur />
      <NosOffres />
      <Suggestion />
      <QuiSommeNous />
      <Forfait />
      {/*<Hero />
      <Analytics />
      <Newsletter />
  <Cards />*/}
      <Footer />
    </div>
  );
}

export default App;
