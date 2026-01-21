import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Search, Calculator, CheckCircle, Shield, FileText, TrendingUp } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Initial Engagement",
      description: "Contact our team to discuss cooperative membership or product services suitable to your needs.",
      details: [
        "Initial consultation with our team",
        "Understand available programs",
        "Assess your participation goals",
        "Review membership or service options"
      ],
    },
    {
      number: "02",
      icon: FileText,
      title: "Information & Documentation",
      description: "Review participation guidelines, operational structures, and engagement terms applicable to the selected program.",
      details: [
        "Access detailed program information",
        "Review cooperative bylaws and guidelines",
        "Understand roles and responsibilities",
        "Clarify terms and expectations"
      ],
    },
    {
      number: "03",
      icon: CheckCircle,
      title: "Participation Agreement",
      description: "Execute cooperative membership or service agreements outlining roles, responsibilities, timelines, and surplus-sharing principles (where applicable).",
      details: [
        "Sign membership or service agreements",
        "Complete registration process",
        "Formalize participation terms",
        "Establish communication channels"
      ],
    },
    {
      number: "04",
      icon: TrendingUp,
      title: "Active Participation",
      description: "Receive regular updates on operations, storage status, distribution activities, and cooperative programs.",
      details: [
        "Access to member portal",
        "Regular operational updates",
        "Participation in cooperative activities",
        "Transparent reporting and tracking"
      ],
    },
    {
      number: "05",
      icon: Calculator,
      title: "Outcome & Distribution",
      description: "Surpluses, products, or service outcomes are shared or delivered based on agreed cooperative or service terms.",
      details: [
        "Transparent surplus distribution",
        "Product delivery as scheduled",
        "Clear accounting and records",
        "Member benefit realization"
      ],
    },
    {
      number: "06",
      icon: Shield,
      title: "Continuity or Exit",
      description: "Members and partners may continue participation, scale involvement, or disengage based on agreed terms.",
      details: [
        "Flexible continuation options",
        "Scale up participation",
        "Graceful exit procedures",
        "Reinvestment opportunities"
      ],
    }
  ];

  const benefits = [
    {
      icon: Shield,
      description: "Fully compliant with Cooperative Society regulations, ensuring member rights are protected.",
    },
    {
      icon: FileText,
      title: "Transparent Documentation",
      description: "Complete access to farm performance data, contracts, and regular progress reports.",
    },
    {
      icon: TrendingUp,
      title: "Verified Shared Surplus",
      description: "All projected shared surplus are based on verified historical data and conservative estimates.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-16 bg-mint-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-teal-900">
            How It Works
          </h1>
          <p className="text-lg text-teal-800 max-w-2xl mx-auto">
            Simple, transparent, and structured participation process
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
                className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } gap-8 items-center animate-fade-in`}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                      {step.number}
                    </div>
                    <step.icon className="h-12 w-12 text-teal-600" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4 text-teal-900">{step.title}</h2>
                  <p className="text-lg text-teal-800 mb-6">{step.description}</p>
                  <ul className="space-y-2">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span className="text-teal-800">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1">
                  <Card className="shadow-xl bg-mint-50 border border-mint-200">
                    <CardHeader className="text-center">
                      <div className="mx-auto w-24 h-24 bg-teal-600/10 rounded-full flex items-center justify-center mb-4">
                        <step.icon className="h-12 w-12 text-teal-600" />
                      </div>
                      <h3 className="text-2xl font-semibold text-teal-900">Step {step.number}</h3>
                    </CardHeader>
                    <CardContent className="text-center text-teal-800">
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
      <section className="py-20 bg-mint-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-teal-900">Why Trust Drecan Commodities?</h2>
            <p className="text-lg text-teal-800 max-w-2xl mx-auto">
              We prioritize transparency, security, and member success in every aspect of our platform.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 bg-mint-50 border border-mint-200">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-teal-600/10 rounded-full flex items-center justify-center mb-4">
                    <benefit.icon className="h-8 w-8 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-teal-900">{benefit.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-teal-800">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-teal-900">Ready to Get Started?</h2>
          <p className="text-lg text-teal-800 mb-8 max-w-2xl mx-auto">
            Join hundreds of members who are already earning sustainable shared surplus from Nigerian agriculture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white" asChild>
              <Link to="/opportunities">Browse Opportunities</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50" asChild>
              <Link to="/contact">Speak with an Advisor</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
