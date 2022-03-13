import './App.css';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Intro from './pages/intro/Intro';
import Work from './pages/work/Work';
import Header from '../src/components/header/Header'
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Intro/>
      <About/>
      <Work/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
