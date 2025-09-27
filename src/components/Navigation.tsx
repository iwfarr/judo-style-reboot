import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Facebook } from 'lucide-react';
import logoImage from '@/assets/imperial-judo-logo.jpg';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/history', label: 'History' },
    { path: '/kids', label: 'Kids Program' },
    { path: '/location', label: 'Location' },
    { path: '/contact', label: 'Contact Us' },
  ];

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src={logoImage} 
              alt="Imperial Judo Club Logo" 
              className="w-10 h-10 rounded-lg object-cover"
            />
            <span className="text-xl font-bold text-primary hidden sm:block">
              Imperial Judo Club
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors hover:text-accent ${
                  isActive(link.path) 
                    ? 'text-accent border-b-2 border-accent pb-1' 
                    : 'text-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://www.facebook.com/ImperialJudo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-foreground hover:text-accent transition-colors"
            >
              <Facebook className="w-5 h-5 text-accent" />
              <span className="hidden lg:block text-accent">Facebook</span>
            </a>
            <Button className="btn-hero" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-accent transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`font-medium transition-colors hover:text-accent ${
                    isActive(link.path) ? 'text-accent' : 'text-foreground'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              
              {/* Training Times Section */}
              <div className="py-2 border-t border-border">
                <h4 className="font-semibold text-primary mb-2">Training Times</h4>
                  <div className="space-y-1 text-sm text-muted-foreground pl-2">
                    <p><span className="font-medium">Wednesday:</span> 6:30pm-8:30pm (Seniors & 11 years+)</p>
                    <p><span className="font-medium">Saturday:</span> 10am-11am (Kids 5-10 years)</p>
                    <p><span className="font-medium">Saturday:</span> 11am-12:30pm (Seniors & 11 years+)</p>
                  </div>
              </div>
              
              <a
                href="https://www.facebook.com/ImperialJudo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-foreground hover:text-accent transition-colors"
              >
                <Facebook className="w-5 h-5 text-accent" />
                <span className="text-accent">Follow Us on Facebook</span>
              </a>
              <Button className="btn-hero w-full" asChild>
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;