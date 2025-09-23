import { Facebook, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoImage from '@/assets/imperial-judo-logo.jpg';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Club Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src={logoImage} 
                alt="Imperial Judo Club Logo" 
                className="w-10 h-10 rounded-lg object-cover"
              />
              <span className="text-xl font-bold">Imperial Judo Club</span>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Family Judo, fitness, and fun in Gorseinon since 1982. 
              Building strength, discipline, and community through Olympic Judo.
            </p>
            <a
              href="https://www.facebook.com/ImperialJudo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-accent hover:text-secondary transition-colors"
            >
              <Facebook className="w-5 h-5" />
              <span>Follow Us on Facebook</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/history" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Our History
                </Link>
              </li>
              <li>
                <Link to="/kids" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Kids Program
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-secondary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Penyrheol Leisure Centre, Gorseinon, Swansea
                </span>
              </div>
              <Link 
                to="/contact"
                className="flex items-center space-x-3 text-secondary hover:text-accent transition-colors"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">Contact Us</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 Imperial Judo Club. All rights reserved. | Est. 1982
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;