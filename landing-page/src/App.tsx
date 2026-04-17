import Nav from './components/Nav';
import Hero from './components/Hero';
import Problem from './components/Problem';
import ActivityFeed from './components/ActivityFeed';
import Trust from './components/Trust';
import Features from './components/Features';
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
        <Problem />
        <ActivityFeed />
        <Trust />
        <Features />
        <Process />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
