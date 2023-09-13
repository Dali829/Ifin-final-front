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

function App() {
  return (
    <div>
      <Navbar />
      <QuiSommeNous/>
      <Suggestion/>
      <NosOffres/>
      <Forfait/>
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
