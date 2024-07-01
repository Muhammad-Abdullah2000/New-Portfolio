import './App.css';
import Footer from "./components/Footer";
import Navbar from './components/Navbar';
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from './pages/Header';
import Portfolio from "./pages/Portfolio";
import { Sevices } from "./pages/Sevices";
import { Skills } from "./pages/Skills";

function App() {
  return (

    <div className="App">


      <Navbar />
      <Header />
      <About />
      <Skills />
      <Sevices />
      <Portfolio />
      <Contact />
      <Footer />
    </div>

  );
}

export default App;
