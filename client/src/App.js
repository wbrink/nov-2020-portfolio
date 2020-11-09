import About from "./Components/About/About";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Skills from "./Components/Skills/Skills";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="container">
        <Hero />
        <About />
        <Skills />
      </div>
      
    </div>
  );
}

export default App;
