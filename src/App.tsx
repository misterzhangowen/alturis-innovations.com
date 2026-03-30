import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Philosophy } from "./components/Philosophy";
import { Verticals } from "./components/Verticals";
import { Advantage } from "./components/Advantage";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-brand-dark text-white font-sans selection:bg-brand-blue selection:text-brand-dark">
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <Verticals />
        <Advantage />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;

