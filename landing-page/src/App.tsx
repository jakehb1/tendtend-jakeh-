import Nav from './components/Nav';
import Hero from './components/Hero';
import StackDiagram from './components/StackDiagram';
import OntologyDiagram from './components/OntologyDiagram';
import ActivityFeed from './components/ActivityFeed';
import Trust from './components/Trust';
import Layers from './components/Layers';
import Process from './components/Process';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <StackDiagram />
        <OntologyDiagram />
        <ActivityFeed />
        <Trust />
        <Layers />
        <Process />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
