import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';
import Social from './components/Social';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About/>
      <Skills/>
      <Work/>
      <Social/>
      <Contact/>
      
    </div>
  );
}

export default App;
