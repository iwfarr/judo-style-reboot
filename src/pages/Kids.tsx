import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, Shield, Users, Trophy, Clock, Star } from 'lucide-react';
import kidsImage from '@/assets/kids-judo.jpg';

const Kids = () => {
  const benefits = [
    {
      icon: <Heart className="w-8 h-8 text-accent" />,
      title: "Build Confidence",
      description: "Develop self-esteem and social skills in a supportive environment"
    },
    {
      icon: <Shield className="w-8 h-8 text-accent" />,
      title: "Learn Self-Defense",
      description: "Practical skills for personal safety and awareness"
    },
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      title: "Make Friends",
      description: "Join a welcoming community of young martial artists"
    },
    {
      icon: <Trophy className="w-8 h-8 text-accent" />,
      title: "Achieve Goals",
      description: "Progress through belt rankings and celebrate achievements"
    },
    {
      icon: <Clock className="w-8 h-8 text-accent" />,
      title: "Discipline & Focus",
      description: "Develop concentration and time management skills"
    },
    {
      icon: <Star className="w-8 h-8 text-accent" />,
      title: "Olympic Sport",
      description: "Learn authentic Olympic Judo techniques and traditions"
    }
  ];

  const ageGroups = [
    {
      title: "Kids 5-10 years",
      age: "Ages 5-10",
      focus: "Fun, basic movements, listening skills, and following instructions",
      color: "bg-green-100 text-green-800"
    },
    {
      title: "11 years+",
      age: "Ages 11+", 
      focus: "Advanced techniques, competition training, and leadership development",
      color: "bg-purple-100 text-purple-800"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero-section py-20 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="hero-text martial-arts-font mb-6">Kids Judo Program</h1>
              <p className="text-xl md:text-2xl opacity-90 mb-8">
                Building confident, respectful, and skilled young martial artists 
                through the art of Olympic Judo
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="btn-hero text-lg px-8 py-3" asChild>
                  <Link to="/contact">Start Your Child's Journey</Link>
                </Button>
                <Button 
                  variant="outline" 
                  className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  asChild
                >
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={kidsImage} 
                alt="Children learning judo in a safe, fun environment" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-accent text-primary px-6 py-3 rounded-lg font-bold text-lg shadow-lg">
                40+ Years Experience
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Why Choose Judo for Your Child?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Judo is more than just a martial art – it's a pathway to building character, 
              confidence, and lifelong skills in a safe, structured environment.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="card-elegant p-6 text-center">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Training Times Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Training Schedule</h2>
            <p className="text-lg text-muted-foreground">
              Regular training sessions for all age groups
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="card-elegant p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-4">Wednesday</h3>
                  <div className="space-y-2">
                    <p className="text-muted-foreground">
                      <span className="font-medium">6:30pm - 8:30pm</span><br />
                      Seniors & 11 years+ (Adults & Ages 11+)
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-4">Saturday</h3>
                  <div className="space-y-3">
                    <p className="text-muted-foreground">
                      <span className="font-medium">10:00am - 11:00am</span><br />
                      Kids 5-10 years (Ages 5-10)
                    </p>
                    <p className="text-muted-foreground">
                      <span className="font-medium">11:00am - 12:30pm</span><br />
                      Seniors (Adults) & 11 years+ (Ages 11+)
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Age Groups Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Programs by Age Group</h2>
            <p className="text-lg text-muted-foreground">
              Age-appropriate training that grows with your child
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {ageGroups.map((group, index) => (
              <Card key={index} className="card-elegant p-8 text-center">
                <Badge className={`${group.color} mb-4 text-sm px-3 py-1`}>
                  {group.age}
                </Badge>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  {group.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {group.focus}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-title">Safety & Child Protection</h2>
              <p className="text-lg text-muted-foreground">
                Your child's safety and wellbeing is our absolute priority
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="card-elegant p-8">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Safeguarding Standards
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <Shield className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                    Appointed Child Protection Officer on staff
                  </li>
                  <li className="flex items-start">
                    <Shield className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                    All coaches are registered and qualified
                  </li>
                  <li className="flex items-start">
                    <Shield className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                    Children's welfare is always the first priority
                  </li>
                  <li className="flex items-start">
                    <Shield className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                    Quick response to any concerns or allegations
                  </li>
                </ul>
              </Card>

              <Card className="card-elegant p-8">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Our Values
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <Heart className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                    Respect for self and others
                  </li>
                  <li className="flex items-start">
                    <Heart className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                    Positive interaction and encouragement
                  </li>
                  <li className="flex items-start">
                    <Heart className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                    Best standards of conduct and behavior
                  </li>
                  <li className="flex items-start">
                    <Heart className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                    Inclusive and supportive community
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Child's Judo Journey?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join our welcoming community and give your child the gift of confidence, 
            discipline, and lifelong skills through Olympic Judo.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="btn-hero text-lg px-8 py-3" asChild>
              <Link to="/contact">Contact Us Today</Link>
            </Button>
            <Button 
              variant="outline" 
              className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-3"
              asChild
            >
              <a href="https://www.facebook.com/ImperialJudo" target="_blank" rel="noopener noreferrer">
                Visit Our Facebook
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Kids;