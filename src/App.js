import './App.css';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Techstack from './components/Techstack';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Techstack />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
