import { ArrowRight } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10"></div>
          
          <div className="relative p-12 md:p-16 text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Ready to Optimize Your SEO?
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join us to use the most powerful visual audit tool
            </p>

            <div className="flex items-center justify-center">
              <button className="group inline-flex items-center gap-2 bg-white text-black hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-medium transition-colors">
                Start Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
