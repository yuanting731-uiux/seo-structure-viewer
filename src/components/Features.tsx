import { FileText, Eye, Image, Link, GitBranch, Scale } from 'lucide-react';

const features = [
  {
    icon: FileText,
    title: 'Website Metadata at a Glance',
    description: 'Instantly view Title, Description, and Keywords in one clear overview.',
    gradient: 'from-purple-400 to-pink-500',
    image: '/images/feature-1.png',
  },
  {
    icon: Eye,
    title: 'Visual Tag Annotations',
    description: 'H1-H6 tags highlighted directly on the page without disrupting the original layout.',
    gradient: 'from-yellow-400 to-orange-500',
    image: '/images/feature-2.png',
  },
  {
    icon: Image,
    title: 'Image Audit',
    description: 'Automatically detect and flag images missing Alt attributes for better accessibility.',
    gradient: 'from-green-400 to-emerald-500',
    image: '/images/feature-3.png',
  },
  {
    icon: Link,
    title: 'Link Audit',
    description: 'Quickly distinguish between internal and external links to ensure proper link structure.',
    gradient: 'from-blue-400 to-cyan-500',
    image: '/images/feature-4.png',
  },
  {
    icon: GitBranch,
    title: 'Structure Tree View',
    description: 'Clear hierarchical display of heading structure to quickly verify SEO weight distribution.',
    gradient: 'from-indigo-400 to-purple-500',
    image: '/images/feature-5.png',
  },
  {
    icon: Scale,
    title: 'Image Size Analysis',
    description: 'Display image size tags next to elements. Counts and flags images over 150KB with red warnings.',
    gradient: 'from-pink-500 to-rose-500',
    image: '/images/feature-6.png',
  },
];

export function Features() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Powerful Features
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need for comprehensive SEO analysis
          </p>
        </div>

        {/* Features list */}
        <div className="space-y-24">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  isEven ? '' : 'md:grid-flow-dense'
                }`}
              >
                {/* Content */}
                <div className={`space-y-6 ${isEven ? '' : 'md:col-start-2'}`}>
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold text-white">
                    {feature.title}
                  </h3>
                  
                  <p className="text-lg text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Image placeholder */}
                <div className={`relative ${isEven ? '' : 'md:col-start-1 md:row-start-1'}`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-20 rounded-3xl blur-2xl`}></div>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback to gradient background if image fails to load
                        e.currentTarget.style.display = 'none';
                        const parent = e.currentTarget.parentElement;
                        if (parent) {
                          parent.style.background = `linear-gradient(to bottom right, var(--tw-gradient-stops))`;
                          parent.className += ` ${feature.gradient}`;
                        }
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
