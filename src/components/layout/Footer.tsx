import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { profile } from '../../data/profile';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">EN</h3>
            <p className="text-textSecondary text-sm">
              {profile.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-text font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-textSecondary hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-textSecondary hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-textSecondary hover:text-primary transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-textSecondary hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-text font-semibold mb-4">Connect</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center space-x-2 text-textSecondary hover:text-primary transition-colors"
                >
                  <Mail size={16} />
                  <span className="text-sm">{profile.email}</span>
                </a>
              </li>
              {profile.location && (
                <li className="flex items-center space-x-2 text-textSecondary">
                  <MapPin size={16} />
                  <span className="text-sm">{profile.location}</span>
                </li>
              )}
              <li>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-textSecondary hover:text-primary transition-colors"
                >
                  <Github size={16} />
                  <span className="text-sm">GitHub</span>
                </a>
              </li>
              {profile.linkedin && (
                <li>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-textSecondary hover:text-primary transition-colors"
                  >
                    <Linkedin size={16} />
                    <span className="text-sm">LinkedIn</span>
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-textSecondary text-sm">
            © {currentYear} {profile.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
