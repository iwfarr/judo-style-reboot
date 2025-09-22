import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, Trophy, Shield, Heart, Clock, MapPin, Facebook } from 'lucide-react';
import heroImage from '@/assets/hero-dojo.jpg';

const Index = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      title: "Family Friendly",
      description: "Welcoming environment for kids, teens, adults, and families of all ages"
    },
    {
      icon: <Trophy className="w-8 h-8 text-accent" />,
      title: "Competition Success", 
      description: "National and international competition experience with proven results"
    },
    {
      icon: <Shield className="w-8 h-8 text-accent" />,
      title: "Self Defense",
      description: "Street-proven Olympic Judo techniques for practical self-defense"
    },
    {
      icon: <Heart className="w-8 h-8 text-accent" />,
      title: "Character Building",
      description: "Develop discipline, resilience, and respect through martial arts"
    }
  ];

  const coaches = [
    { name: "Phil Craven", role: "Head Coach", experience: "Expert competitor and instructor" },
    { name: "Jeff Jones", role: "Senior Coach & Founder", experience: "Founded the club in 1982" },
    { name: "Coaching Team", role: "8 Registered Coaches", experience: "Decades of combined experience" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative hero-section py-20 lg:py-32 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={heroImage} 
            alt="Professional judo dojo" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-accent text-primary mb-6 text-sm px-4 py-2">
              Established 1982 • 40+ Years of Excellence
            </Badge>
            <h1 className="hero-text mb-6">
              Imperial Judo Club
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
              Family Judo, fitness, and fun in Gorseinon since 1982.<br />
              Building strength, discipline, and community through Olympic Judo.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="btn-hero text-lg px-8 py-3">
                Join Our Club
              </Button>
              <Button 
                variant="outline" 
                className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-3"
                asChild
              >
                <a href="https://www.facebook.com/ImperialJudo" target="_blank" rel="noopener noreferrer">
                  <Facebook className="w-5 h-5 mr-2" />
                  Message Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="section-title">About Our Club</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Imperial Judo Club is a friendly community club at Penyrheol Leisure Centre in 
              Gorseinon, near Swansea. We welcome all: kids, teens, mums, dads, and families 
              to experience the benefits of Judo. We focus on developing fitness, discipline, 
              resilience, and street-proven self-defence skills through Olympic Judo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="card-elegant p-6 text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coaching Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Expert Coaching Team</h2>
            <p className="text-lg text-muted-foreground">
              Led by experienced coaches with decades of martial arts expertise
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {coaches.map((coach, index) => (
              <Card key={index} className="card-elegant p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-accent to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">
                    {coach.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {coach.name}
                </h3>
                <p className="text-accent font-medium mb-2">
                  {coach.role}
                </p>
                <p className="text-muted-foreground text-sm">
                  {coach.experience}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Programs</h2>
            <p className="text-lg text-muted-foreground">
              Training programs designed for every age and skill level
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="card-elegant p-8">
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 text-accent mr-3" />
                <h3 className="text-2xl font-semibold text-primary">
                  Kids & Youth Program
                </h3>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Age-appropriate training that builds confidence, discipline, and skills 
                in a safe, fun environment. Perfect for developing character and making friends.
              </p>
              <Button variant="outline" className="w-full" asChild>
                <a href="/kids">Learn More About Kids Program</a>
              </Button>
            </Card>

            <Card className="card-elegant p-8">
              <div className="flex items-center mb-4">
                <Trophy className="w-8 h-8 text-accent mr-3" />
                <h3 className="text-2xl font-semibold text-primary">
                  Adult Training
                </h3>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Whether you're a beginner or returning to judo, our inclusive program 
                welcomes adults of all ages to develop fitness and practical self-defense skills.
              </p>
              <Button variant="outline" className="w-full">
                Join Adult Classes
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Location & Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-title">Visit Us</h2>
              <p className="text-lg text-muted-foreground">
                Located at Penyrheol Leisure Centre in Gorseinon, near Swansea
              </p>
            </div>

            <Card className="card-elegant p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-start space-x-3 mb-6">
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
                  
                  <div className="flex items-start space-x-3">
                    <Clock className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-2">
                        Training Times
                      </h3>
                      <p className="text-muted-foreground">
                        Contact us for current class schedule<br />
                        Programs for all ages and skill levels
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-primary mb-4">
                    Get Started Today
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Ready to begin your judo journey? We'd love to welcome you 
                    to our friendly community.
                  </p>
                  <Button className="btn-hero w-full mb-3" asChild>
                    <a href="https://www.facebook.com/ImperialJudo" target="_blank" rel="noopener noreferrer">
                      Message Us on Facebook
                    </a>
                  </Button>
                  <p className="text-sm text-muted-foreground text-center">
                    Or come along to watch a class anytime
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join the Imperial Judo Family
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Experience the benefits of Olympic Judo in our welcoming, family-friendly 
            environment. All ages and abilities welcome.
          </p>
          <Button className="btn-hero text-lg px-8 py-3" asChild>
            <a href="https://www.facebook.com/ImperialJudo" target="_blank" rel="noopener noreferrer">
              Start Your Journey Today
            </a>
          </Button>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;