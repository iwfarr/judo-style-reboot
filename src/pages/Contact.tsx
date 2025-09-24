import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Card } from '@/components/ui/card';
import { Facebook, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero-section py-16 lg:py-20 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="hero-text martial-arts-font mb-6">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
            Ready to start your judo journey? Get in touch with Imperial Judo Club today.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="section-title text-left mb-8">
                  Get In Touch
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We'd love to hear from you! Whether you're interested in joining our club, 
                  have questions about our programs, or just want to learn more about judo, 
                  don't hesitate to reach out.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="card-elegant p-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-2">
                        Training Location
                      </h3>
                      <p className="text-muted-foreground">
                        Penyrheol Leisure Centre<br />
                        Gorseinon, Swansea<br />
                        Wales
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="card-elegant p-6">
                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-2">
                        Training Times
                      </h3>
                      <div className="text-muted-foreground space-y-1">
                        <p><span className="font-medium">Wednesday:</span> 6:30pm-8:30pm (Seniors & Cadets)</p>
                        <p><span className="font-medium">Saturday:</span> 10am-11am (Kids: Mini-Mons & Junior)</p>
                        <p><span className="font-medium">Saturday:</span> 11am-12:30pm (Seniors & Cadet)</p>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="card-elegant p-6">
                  <div className="flex items-start space-x-4">
                    <Facebook className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-2">
                        Follow Us Online
                      </h3>
                      <a 
                        href="https://www.facebook.com/ImperialJudo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:text-secondary transition-colors"
                      >
                        Imperial Judo on Facebook
                      </a>
                      <p className="text-muted-foreground text-sm mt-1">
                        Stay updated with news, events, and training updates
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm title="Send Us A Message" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;