import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Search, Calculator, CheckCircle, Shield, FileText, TrendingUp } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      icon: Search,
      title: "Discover Opportunities",
      description: "Browse our curated selection of verified agricultural investments across UK regions. Each opportunity includes detailed performance data, risk assessments, and projected returns.",
      details: [
        "Interactive map showing farm locations",
        "Comprehensive project documentation",
        "Historical performance data",
        "Risk analysis and mitigation strategies",
      ],
    },
    {
      number: "2",
      icon: Calculator,
      title: "Calculate Returns",
      description: "Use our free ROI calculator to estimate your potential returns based on your investment amount and selected opportunity. Get instant projections tailored to your goals.",
      details: [
        "Personalized return projections",
        "Investment timeline visualization",
        "Risk-adjusted calculations",
        "Comparison tools for multiple opportunities",
      ],
    },
    {
      number: "3",
      icon: CheckCircle,
      title: "Reserve Your Slot",
      description: "Submit your expression of interest through our secure platform. Our team will guide you through the verification process and finalize your investment.",
      details: [
        "Quick online interest form",
        "Secure document upload",
        "Expert guidance throughout",
        "Transparent fee structure",
      ],
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: "FCA Regulated",
      description: "Fully compliant with UK financial regulations, ensuring your investments are protected.",
    },
    {
      icon: FileText,
      title: "Transparent Documentation",
      description: "Complete access to farm performance data, contracts, and regular progress reports.",
    },
    {
      icon: TrendingUp,
      title: "Verified Returns",
      description: "All projected returns are based on verified historical data and conservative estimates.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-16 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary-foreground">
            How It Works
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Start your agricultural investment journey with our simple, transparent three-step process.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-8 items-center animate-fade-in`}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold">
                      {step.number}
                    </div>
                    <step.icon className="h-12 w-12 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{step.title}</h2>
                  <p className="text-lg text-muted-foreground mb-6">{step.description}</p>
                  <ul className="space-y-2">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1">
                  <Card className="shadow-xl">
                    <CardHeader className="text-center">
                      <div className="mx-auto w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <step.icon className="h-12 w-12 text-primary" />
                      </div>
                      <h3 className="text-2xl font-semibold">Step {step.number}</h3>
                    </CardHeader>
                    <CardContent className="text-center text-muted-foreground">
                      {step.description}
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Trust AgroInvest Hub?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We prioritize transparency, security, and investor success in every aspect of our platform.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{benefit.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of investors who are already earning sustainable returns from UK agriculture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/opportunities">Browse Opportunities</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact">Speak with an Advisor</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
