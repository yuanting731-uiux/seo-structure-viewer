import { Check } from 'lucide-react';

export function ProductShowcase() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Built for SEO Professionals
                </span>
              </h2>
              <p className="text-xl text-gray-400">
                Every detail designed to give you the best SEO analysis experience
              </p>
            </div>

            <div className="space-y-4">
              {[
                'Instant analysis with one-click activation',
                'Visual overlays that preserve page layout',
                'Comprehensive metadata extraction',
                'Real-time link structure mapping',
                'Exportable reports for team collaboration',
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-300 text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-2xl"></div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10">
              <img
                src="/images/seo-professional.png"
                alt="SEO Structure Viewer Features"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    parent.style.background = 'linear-gradient(to right, rgba(6, 182, 212, 0.2), rgba(168, 85, 247, 0.2))';
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
