import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="container">
        <Hero />
      </div>
      
    </div>
  );
}

export default App;
