interface FooterProps {
  onPrivacyClick: () => void;
}

export function Footer({ onPrivacyClick }: FooterProps) {
  return (
    <footer className="border-t border-white/10 bg-black/50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-8 h-8 relative">
                <img
                  src="/images/logo.png"
                  alt="Logo"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    // Fallback to text if logo doesn't exist
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                SEO Structure Viewer
              </div>
            </div>
            <p className="text-gray-400 text-sm mt-2 ml-1">
              The most powerful SEO visual audit tool
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 mt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2026 SEO Structure Viewer. All rights reserved.</p>
          <button
            onClick={onPrivacyClick}
            className="text-gray-500 hover:text-white transition-colors"
          >
            Privacy Policy
          </button>
        </div>
      </div>
    </footer>
  );
}
