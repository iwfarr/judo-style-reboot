import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import historyImage from '@/assets/history-vintage.jpg';

const History = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero-section py-20 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="hero-text martial-arts-font mb-6">Our History</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Four decades of excellence in judo education and community building
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Historic Image */}
            <div className="mb-12">
              <img 
                src={historyImage} 
                alt="Historic judo training from the 1980s" 
                className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* History Content */}
            <div className="grid gap-8">
              <Card className="card-elegant p-8">
                <h2 className="section-title">Founded in 1982</h2>
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  The Imperial Judo Club was founded in 1982 by Senior Coach Jeff Jones within 
                  the Penyrheol Leisure Centre Complex, Gorseinon. What started as a vision to 
                  bring quality judo instruction to the local community has grown into one of 
                  Wales' most respected judo clubs.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  From our humble beginnings, we have maintained our commitment to excellence 
                  in teaching Olympic Judo while fostering a welcoming, family-friendly environment 
                  that welcomes practitioners of all ages and abilities.
                </p>
              </Card>

              <Card className="card-elegant p-8">
                <h2 className="section-title">Leadership Excellence</h2>
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  Under the guidance of head coach Phil Craven and our dedicated team of eight 
                  registered coaches, the Imperial Judo Club has achieved remarkable success. 
                  Our coaching team combines decades of experience with modern teaching methods 
                  to ensure every student receives the highest quality instruction.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Phil Craven, along with our expert coaching team, has elevated the club to 
                  new heights of achievement, creating a legacy of excellence that continues 
                  to inspire new generations of judoka.
                </p>
              </Card>

              <Card className="card-elegant p-8">
                <h2 className="section-title">Competition Success</h2>
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  Our club's commitment to excellence extends far beyond the dojo walls. Many 
                  of our junior, youth, senior, and veteran players regularly participate in 
                  National and International competitions, celebrating success at the highest 
                  levels of the sport.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  From local tournaments to international championships, Imperial Judo Club 
                  athletes have consistently demonstrated the technical skill, mental toughness, 
                  and sportsmanship that define our club's values.
                </p>
                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    Our Achievements Include:
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• National championship titles across multiple age categories</li>
                    <li>• International competition representation</li>
                    <li>• Regional championship dominance</li>
                    <li>• Development of multiple black belt students</li>
                    <li>• Consistent medal performances at major tournaments</li>
                  </ul>
                </div>
              </Card>

              <Card className="card-elegant p-8">
                <h2 className="section-title">Community Impact</h2>
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  For over four decades, Imperial Judo Club has been more than just a sports 
                  club – we've been a cornerstone of the Gorseinon community. We've taught 
                  thousands of students the values of respect, discipline, and perseverance 
                  that extend far beyond the tatami.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Our legacy is measured not just in trophies and titles, but in the confidence 
                  we've built in young people, the friendships we've fostered, and the positive 
                  impact we've made on countless families throughout South Wales.
                </p>
              </Card>

              <Card className="card-elegant p-8 bg-gradient-to-r from-accent/5 to-secondary/5 border-accent/20">
                <h2 className="section-title text-gradient">Looking Forward</h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  As we continue into our fifth decade, Imperial Judo Club remains committed 
                  to our founding principles while embracing modern training methods and 
                  opportunities. We look forward to welcoming new generations of students 
                  and continuing our tradition of excellence in judo education.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default History;