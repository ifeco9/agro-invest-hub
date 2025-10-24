import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const Insights = () => {
  const articles = [
    {
      title: "Why Agricultural Investments Beat Stocks in 2025",
      excerpt: "Discover how sustainable farming investments are outperforming traditional stock market returns with lower volatility and positive environmental impact.",
      category: "Market Analysis",
      date: "January 15, 2025",
      readTime: "5 min read",
    },
    {
      title: "Navigating Agricultural Investment Risks: A Complete Guide",
      excerpt: "Learn about risk mitigation strategies in agricultural investments, from weather hedging to diversification across multiple farm types.",
      category: "Investment Guide",
      date: "January 10, 2025",
      readTime: "8 min read",
    },
    {
      title: "Case Study: 20% Yield Boost Through Precision Agriculture",
      excerpt: "How drone technology and data analytics helped one partner farm increase wheat yields by 20% while reducing water usage by 30%.",
      category: "Success Stories",
      date: "January 5, 2025",
      readTime: "6 min read",
    },
    {
      title: "The Future of Sustainable Farming in Nigeria",
      excerpt: "Exploring government initiatives, carbon credits, and the growing demand for sustainable food production in Nigeria's agricultural sector.",
      category: "Industry Trends",
      date: "December 28, 2024",
      readTime: "7 min read",
    },
    {
      title: "Understanding ROI Calculations in Crop Yield Investments",
      excerpt: "A detailed breakdown of how we calculate projected returns, including factors like weather patterns, market prices, and operational costs.",
      category: "Education",
      date: "December 20, 2024",
      readTime: "10 min read",
    },
    {
      title: "Equipment Leasing: The Hidden Gem of Agro Investments",
      excerpt: "Why equipment leasing offers steady returns with lower risk compared to direct farmland investment.",
      category: "Investment Types",
      date: "December 15, 2024",
      readTime: "5 min read",
    },
  ];

  const categories = ["All", "Market Analysis", "Investment Guide", "Success Stories", "Industry Trends", "Education"];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-16 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary-foreground">
            Insights & Resources
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Stay informed with expert analysis, market trends, and educational content about agricultural investments.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-secondary border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Card key={index} className="flex flex-col hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in">
                <CardHeader>
                  <Badge className="w-fit mb-2">{article.category}</Badge>
                  <h3 className="text-xl font-semibold mb-2 line-clamp-2">{article.title}</h3>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground line-clamp-3">{article.excerpt}</p>
                </CardContent>
                <CardFooter className="flex flex-col gap-4">
                  <div className="flex items-center justify-between w-full text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {article.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {article.readTime}
                    </div>
                  </div>
                  <Button variant="outline" className="w-full group">
                    Read More 
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto text-center">
            <CardHeader>
              <h2 className="text-3xl font-bold mb-2">Stay Informed</h2>
              <p className="text-muted-foreground">
                Get the latest agricultural investment insights delivered to your inbox monthly.
              </p>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-2 rounded-md border border-input bg-background"
                />
                <Button size="lg">Subscribe</Button>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                No spam, unsubscribe anytime. We respect your privacy.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Insights;
