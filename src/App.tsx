import Header from './components/Header';
import Hero from './components/Hero';
import TrustIndicators from './components/TrustIndicators';
import Products from './components/Products';
// import Services from './components/Services';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Products />
        {/* <Services /> */}
        <TrustIndicators />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
