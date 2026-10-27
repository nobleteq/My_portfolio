import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Download } from 'lucide-react';
import { profile } from '../../data/profile';

interface NavigationProps {
  activeSection: string;
}

const Navigation = ({ activeSection }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-sm border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#home"
            className="nav-brand text-sm font-bold text-primary hover:text-primaryHover transition-colors"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
          >
            <span className="nav-brand-mark">EN</span>
            <span className="nav-brand-name">EMMANUEL NNEJI</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === item.href.slice(1) ? 'text-primary' : 'text-textSecondary'
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {profile.cvUrl && (
              <a
                href={profile.cvUrl}
                download
                className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-text bg-surfaceLight border border-border rounded-lg hover:border-primary transition-colors"
              >
                <Download size={16} />
                <span>CV</span>
              </a>
            )}
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-textSecondary hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            {profile.linkedin && (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-textSecondary hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-text hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-surface border-b border-border">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`block py-2 text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === item.href.slice(1) ? 'text-primary' : 'text-textSecondary'
                }`}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 border-t border-border flex items-center space-x-4">
              {profile.cvUrl && (
                <a
                  href={profile.cvUrl}
                  download
                  className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-text bg-surfaceLight border border-border rounded-lg"
                >
                  <Download size={16} />
                  <span>CV</span>
                </a>
              )}
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-textSecondary hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              {profile.linkedin && (
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-textSecondary hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
