import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, Users, Target, Leaf } from "lucide-react";

const About = () => {
  const team = [
    {
      name: "James Richardson",
      role: "CEO & Founder",
      bio: "20+ years in agricultural technology and sustainable farming investments.",
    },
    {
      name: "Sarah Thompson",
      role: "Chief Investment Officer",
      bio: "Former investment banker specializing in agricultural commodities and ESG investments.",
    },
    {
      name: "Michael Chen",
      role: "Head of Farm Operations",
      bio: "Agricultural scientist with expertise in crop yield optimization and sustainable practices.",
    },
  ];

  const values = [
    {
      icon: Leaf,
      title: "Sustainability First",
      description: "Every investment supports environmentally responsible farming practices and land preservation.",
    },
    {
      icon: Award,
      title: "Transparency",
      description: "Complete visibility into farm performance, returns, and investment structures.",
    },
    {
      icon: Users,
      title: "Investor Success",
      description: "Dedicated support and education to help investors make informed decisions.",
    },
    {
      icon: Target,
      title: "Proven Track Record",
      description: "Consistent delivery of projected returns backed by verified farm data.",
    },
  ];

  const achievements = [
    { value: "₦20B+", label: "Total Investment Interest" },
    { value: "200+", label: "Hectares Preserved" },
    { value: "500+", label: "Active Investors" },
    { value: "15+", label: "Partner Farms" },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-16 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary-foreground">
            About AgroInvest Hub
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Connecting investors with sustainable agricultural opportunities across Nigeria since 2020.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-6">
              We believe that sustainable agriculture should be accessible to all investors, not just institutional players. 
              AgroInvest Hub democratizes agricultural investment by providing transparent, verified opportunities that 
              generate competitive returns while supporting Nigerian farmers and preserving our agricultural heritage.
            </p>
            <p className="text-lg text-muted-foreground">
              Through rigorous due diligence, ongoing monitoring, and complete transparency, we ensure that every 
              investment meets our high standards for both financial performance and environmental impact.
            </p>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center animate-fade-in">
                <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
                  {achievement.value}
                </div>
                <div className="text-sm text-primary-foreground/80">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These core principles guide every decision we make and every investment we offer.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{value.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Industry experts committed to your investment success and sustainable agriculture.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Users className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-sm text-primary">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications & Recognition</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our commitment to excellence and compliance is recognized by leading industry bodies.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              "SEC Regulated",
              "Sustainable Farming Award 2023",
              "Nigerian Green Investment Certified",
              "Member of Agricultural Investment Association of Nigeria",
            ].map((cert, index) => (
              <div
                key={index}
                className="bg-background border border-border rounded-lg px-6 py-4 font-medium animate-fade-in"
              >
                {cert}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Invest?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our community of investors supporting sustainable Nigerian agriculture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/opportunities">View Opportunities</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
