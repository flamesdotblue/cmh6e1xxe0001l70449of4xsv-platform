import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import ProductGrid from './components/ProductGrid.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <Navbar />
      <main>
        <Hero />
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6">New Arrivals</h2>
          <p className="text-neutral-400 mb-10 max-w-2xl">Elevated essentials inspired by the streets. Built with premium fabrics and tailored fits designed for everyday wear.</p>
          <ProductGrid />
        </section>
      </main>
      <Footer />
    </div>
  );
}
