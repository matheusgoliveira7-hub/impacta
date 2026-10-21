import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Challenge } from './components/Challenge';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Timeline } from './components/Timeline';
import { NextSteps } from './components/NextSteps';
import { Invitation } from './components/Invitation';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="impacta-app">
      <Header />
      <main id="conteudo-principal">
        <Hero />
        <Challenge />
        <About />
        <Skills />
        <Timeline />
        <NextSteps />
        <Invitation />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
