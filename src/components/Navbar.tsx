import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';
import { Menu, X, ArrowRight, Play } from 'lucide-react';

interface NavbarProps {
  onOpenDemo: () => void;
  onOpenCalculator: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemo, onOpenCalculator }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'How It Works', href: '#workflow' },
    { name: 'Watch Demo', href: '#demo-video' },
    { name: 'Savings Calculator', href: '#calculator', onClick: onOpenCalculator },
    { name: 'Sample Scorecard', href: '#scorecard' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-border shadow-subtle py-3'
          : 'bg-white/80 backdrop-blur-sm py-4 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 group transition-transform duration-200 hover:scale-[1.02]"
            aria-label="CogniHire Home"
          >
            <BrandLogo variant="dark" showTagline={false} />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={link.onClick}
                className="px-3.5 py-1.5 text-sm font-medium text-ink-muted hover:text-forest-deep hover:bg-mist rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#demo-video"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-forest-deep bg-mist hover:bg-white border border-border rounded-lg transition-colors"
            >
              <Play className="w-3 h-3 fill-forest" />
              <span>Watch Demo</span>
            </a>
            <button
              onClick={onOpenDemo}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-forest hover:bg-forest-hover active:bg-forest-dark rounded-lg shadow-sm transition-all duration-150 transform hover:-translate-y-0.5"
            >
              <span>Book a Demo</span>
              <ArrowRight className="w-4 h-4 text-mint" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenDemo}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-forest rounded-md"
            >
              Demo
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-ink-primary hover:text-forest hover:bg-mist rounded-lg transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="sm:hidden mt-3 pt-3 pb-4 border-t border-border bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-elevated animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    if (link.onClick) link.onClick();
                    setMobileMenuOpen(false);
                  }}
                  className="px-3 py-2 text-sm font-medium text-forest-deep hover:bg-mist rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 border-t border-border">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenDemo();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-forest rounded-lg shadow-sm"
                >
                  <span>Book a Demo</span>
                  <ArrowRight className="w-4 h-4 text-mint" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
