import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Card } from '@/components/ui/card';
import { MapPin, Clock, Car, Bus } from 'lucide-react';

const Location = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero-section py-16 lg:py-20 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="hero-text mb-6">
            Our Location
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
            Find us at Penyrheol Leisure Centre in Gorseinon, near Swansea.
          </p>
        </div>
      </section>

      {/* Map and Location Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          
          {/* Google Map */}
          <div className="mb-16">
            <h2 className="section-title text-center mb-8">
              Find Us Here
            </h2>
            <Card className="card-elegant p-2 max-w-5xl mx-auto">
              <div className="w-full h-96 md:h-[500px] rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3073.361798030568!2d-4.044450622817074!3d51.67534437185206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486ef3920290d48b%3A0x5cde0c50c929b05a!2sPenyrheol%20Leisure%20Centre!5e1!3m2!1sen!2suk!4v1758396652059!5m2!1sen!2suk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Penyrheol Leisure Centre Location"
                ></iframe>
              </div>
            </Card>
          </div>

          {/* Location Information */}
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Venue Details */}
            <div className="space-y-8">
              <div>
                <h2 className="section-title text-left mb-8">
                  Venue Information
                </h2>
              </div>

              <div className="space-y-6">
                <Card className="card-elegant p-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-2">
                        Address
                      </h3>
                      <p className="text-muted-foreground">
                        Penyrheol Leisure Centre<br />
                        Gorseinon, Swansea SA4 4FG<br />
                        Wales, United Kingdom
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="card-elegant p-6">
                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-2">
                        Training Schedule
                      </h3>
                      <div className="text-muted-foreground space-y-1">
                        <p><span className="font-medium">Wednesday:</span> 6:30pm-8:30pm (Seniors)</p>
                        <p><span className="font-medium">Saturday:</span> 10am-11am (Mini-Mons & Junior)</p>
                        <p><span className="font-medium">Saturday:</span> 11am-12:30pm (Seniors & Cadet)</p>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="card-elegant p-6">
                  <div className="flex items-start space-x-4">
                    <Car className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-2">
                        Parking
                      </h3>
                      <p className="text-muted-foreground">
                        Free parking available on-site<br />
                        Easy access from main roads<br />
                        Accessible parking spaces available
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="card-elegant p-6">
                  <div className="flex items-start space-x-4">
                    <Bus className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-2">
                        Public Transport
                      </h3>
                      <p className="text-muted-foreground">
                        Regular bus services to Gorseinon<br />
                        Walking distance from local bus stops<br />
                        Well connected to Swansea city center
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div className="space-y-8">
              <div>
                <h2 className="section-title text-left mb-8">
                  Plan Your Visit
                </h2>
                <p className="text-muted-foreground mb-8">
                  Thinking of visiting us? Get in touch to arrange a trial session 
                  or just to watch a class. We're always happy to welcome new members 
                  to our judo family.
                </p>
              </div>
              
              <ContactForm title="Get Directions & Info" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Location;