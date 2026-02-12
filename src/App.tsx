import { useState } from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { ProductShowcase } from './components/ProductShowcase';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { Privacy } from './components/Privacy';

export default function App() {
  const [showPrivacy, setShowPrivacy] = useState(false);

  if (showPrivacy) {
    return <Privacy onBack={() => setShowPrivacy(false)} />;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background gradients */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <Hero />
        <Features />
        <ProductShowcase />
        <CTA />
        <Footer onPrivacyClick={() => setShowPrivacy(true)} />
      </div>
    </div>
  );
}
