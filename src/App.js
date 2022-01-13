import './App.css';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Intro from './pages/intro/Intro';
import Work from './pages/work/Work';
import Header from '../src/components/header/Header'

function App() {
  return (
    <div className="App">
      <Header/>
      <Intro/>
      <About/>
      <Work/>
      <Contact/>
    </div>
  );
}

export default App;
