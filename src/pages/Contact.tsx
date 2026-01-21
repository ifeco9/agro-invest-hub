import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send, MessageSquare, User, Clock, Users, Warehouse, ShoppingCart } from "lucide-react";
import { z } from "zod";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState("general");
  const location = useLocation();

  useEffect(() => {
    // Parse query parameters
    const queryParams = new URLSearchParams(location.search);
    const topic = queryParams.get('topic');
    if (topic) {
      setSelectedTopic(topic);
    }
  }, [location]);

  // Zod schema for form validation
  const contactFormSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    phone: z.string().min(10, "Please enter a valid phone number"),
    subject: z.string().min(5, "Subject must be at least 5 characters"),
    message: z.string().min(10, "Message must be at least 10 characters")
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Get form data
    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string
    };

    // Validate form data
    try {
      contactFormSchema.parse(data);

      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. Our team will get back to you shortly.",
      });

      // Reset form
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive"
        });
      }
    }

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen pt-16 sm:pt-20">
      {/* Header */}
      <section className="py-12 sm:py-16 bg-teal-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Let's Build a Sustainable Future Together
          </motion.h1>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 sm:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="flex flex-col items-start text-left p-6 bg-card rounded-lg shadow-sm border border-border">
                  <div className="p-3 bg-teal-100 rounded-full mb-4">
                    <Users className="h-6 w-6 text-teal-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Cooperative Membership & Participation</h3>
                  <div className="text-muted-foreground space-y-2 mt-2">
                    <p className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      <a href="mailto:drecanagriculture@gmail.com" className="hover:text-primary transition-colors">drecanagriculture@gmail.com</a>
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      <a href="tel:+2347026841214" className="hover:text-primary transition-colors">+234 702 684 1214</a>
                    </p>
                    <p className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>Mon–Fri, 9:00 AM – 6:00 PM (WAT)</span>
                    </p>
                  </div>
                  <Button className="mt-4 w-full" asChild>
                    <Link to="/opportunities">Apply for Membership</Link>
                  </Button>
                </div>

                <div className="flex flex-col items-start text-left p-6 bg-card rounded-lg shadow-sm border border-border">
                  <div className="p-3 bg-teal-100 rounded-full mb-4">
                    <Warehouse className="h-6 w-6 text-teal-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Storage & Product Services</h3>
                  <div className="text-muted-foreground space-y-2 mt-2">
                    <p className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      <a href="mailto:drecanagriculture@gmail.com" className="hover:text-primary transition-colors">drecanagriculture@gmail.com</a>
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      <a href="tel:+2347026841214" className="hover:text-primary transition-colors">+234 702 684 1214</a>
                    </p>
                    <p className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>Mon–Fri, 9:00 AM – 6:00 PM (WAT)</span>
                    </p>
                  </div>
                  <Button className="mt-4 w-full" variant="outline" asChild>
                    <Link to="/services">Request a Quote</Link>
                  </Button>
                </div>

                <div className="flex flex-col items-start text-left p-6 bg-card rounded-lg shadow-sm border border-border">
                  <div className="p-3 bg-teal-100 rounded-full mb-4">
                    <ShoppingCart className="h-6 w-6 text-teal-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Procurement & Distribution</h3>
                  <div className="text-muted-foreground space-y-2 mt-2">
                    <p className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      <a href="mailto:drecanagriculture@gmail.com" className="hover:text-primary transition-colors">drecanagriculture@gmail.com</a>
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      <a href="tel:+2347026841214" className="hover:text-primary transition-colors">+234 702 684 1214</a>
                    </p>
                    <p className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>Mon–Fri, 9:00 AM – 6:00 PM (WAT)</span>
                    </p>
                  </div>
                  <Button className="mt-4 w-full" variant="outline" asChild>
                    <Link to="/contact">Submit Inquiry</Link>
                  </Button>
                </div>
              </div>

              <div className="pt-4">
                <h3 className="text-lg font-semibold text-foreground mb-3">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="https://www.linkedin.com/company/drecan-agriculture/" className="text-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="https://facebook.com" className="text-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="https://www.instagram.com/drecan_commodities?igsh=cXVsZmVydGdmbTI5" className="text-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>

            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-card border border-border">
                <CardHeader>
                  <h2 className="text-2xl font-bold text-foreground">Send Us a Message</h2>
                  <p className="text-muted-foreground">
                    Reach out to our specialized teams for any of our business segments.
                    Select your topic of interest and our relevant team will get back to you promptly.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        placeholder="John Smith"
                        className="border-border focus:border-primary focus:ring-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="topic" className="text-foreground">Topic of Interest *</Label>
                      <Select name="topic" value={selectedTopic} onValueChange={setSelectedTopic}>
                        <SelectTrigger className="border-border focus:border-primary focus:ring-primary">
                          <SelectValue placeholder="Select a topic" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="investment">
                            <div className="flex items-center gap-2">
                              <TrendingUp className="h-4 w-4" />
                              <span>Membership & Cooperative Participation</span>
                            </div>
                          </SelectItem>
                          <SelectItem value="storage">
                            <div className="flex items-center gap-2">
                              <Warehouse className="h-4 w-4" />
                              <span>Storage & Scarcity-Based Sales</span>
                            </div>
                          </SelectItem>
                          <SelectItem value="procurement">
                            <div className="flex items-center gap-2">
                              <ShoppingCart className="h-4 w-4" />
                              <span>Purchase & Resale of Agricultural Products</span>
                            </div>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-foreground">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="john.smith@example.com"
                          className="border-border focus:border-primary focus:ring-primary"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-foreground">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          placeholder="+234 702 684 1214"
                          className="border-border focus:border-primary focus:ring-primary"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-foreground">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        required
                        placeholder="Membership Inquiry"
                        className="border-border focus:border-primary focus:ring-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-foreground">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        placeholder="Tell us about your interest in Drecan Commodities..."
                        rows={4}
                        className="border-border focus:border-primary focus:ring-primary"
                      />
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-primary hover:bg-primary-hover text-primary-foreground flex items-center justify-center gap-2"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          "Sending..."
                        ) : (
                          <>
                            <Send className="h-5 w-5" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div >
      </section >

      {/* Member Relations */}
      < section className="py-12 sm:py-16 bg-teal-50" >
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8 sm:mb-12">
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              Member Relations
            </motion.h2>
            <motion.p
              className="text-base sm:text-lg text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Ready to take the next step in your agricultural cooperative journey?
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <motion.div
              className="bg-card p-4 sm:p-6 rounded-lg shadow-md border border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">Our Promise</h3>
              <p className="text-muted-foreground">
                We are committed to providing transparent, ethical, and sustainable cooperative opportunities
                in Nigeria's agricultural sector. Our team ensures that every member receives personalized
                attention and regular updates on their cooperative participation.
              </p>
            </motion.div>

            <motion.div
              className="bg-card p-4 sm:p-6 rounded-lg shadow-md border border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">Membership Categories</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span>AgroTrade: Short-term trading opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span>AgroFarm: Collaborative farming initiatives</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span>AgroLink: Community supply programs</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-card p-4 sm:p-6 rounded-lg shadow-md border border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">Next Steps</h3>
              <ol className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">1.</span>
                  <span>Submit your inquiry through our contact form</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">2.</span>
                  <span>Schedule a consultation with our membership team</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">3.</span>
                  <span>Review and sign membership agreements</span>
                </li>
              </ol>
            </motion.div>
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-teal-600 hover:bg-teal-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out px-6 sm:px-8 py-3 rounded-full font-bold text-base sm:text-lg flex items-center justify-center gap-2 mx-auto"
              >
                <Download className="h-5 w-5" />
                Download Brochure
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section >
    </div >
  );
};

export default Contact;