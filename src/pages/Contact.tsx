import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, Download, Send } from "lucide-react";
import { z } from "zod";
import { motion } from "framer-motion";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
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
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-teal-700 to-teal-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Let's Build a Sustainable Future Together
          </motion.h1>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-white border border-teal-100 h-full">
                <CardHeader>
                  <h2 className="text-2xl font-bold text-teal-900">Our Office</h2>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-teal-700 mt-0.5" />
                    <div>
                      <p className="font-medium text-teal-900">Address</p>
                      <p className="text-gray-700">
                        Suite [ ], Abuja<br />
                        Nigeria
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-teal-700 mt-0.5" />
                    <div>
                      <p className="font-medium text-teal-900">Email</p>
                      <p className="text-gray-700">info@drecancommodities.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-teal-700 mt-0.5" />
                    <div>
                      <p className="font-medium text-teal-900">Phone</p>
                      <p className="text-gray-700">+234 803 456 7890</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-teal-700 mt-0.5" />
                    <div>
                      <p className="font-medium text-teal-900">Business Hours</p>
                      <p className="text-gray-700">
                        Monday - Friday<br />
                        8:00 AM - 5:00 PM WAT
                      </p>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <h3 className="text-lg font-semibold text-teal-900 mb-3">Follow Us</h3>
                    <div className="flex space-x-4">
                      {["Facebook", "Twitter", "LinkedIn", "Instagram"].map((social, index) => (
                        <Button key={index} variant="outline" size="sm" className="border-teal-100 text-teal-900 hover:bg-teal-50">
                          {social}
                        </Button>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-white border border-teal-100">
                <CardHeader>
                  <h2 className="text-2xl font-bold text-teal-900">Send Us a Message</h2>
                  <p className="text-gray-700">
                    Have questions or want to learn more about our investment opportunities? 
                    Fill out the form below and our team will get back to you.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-teal-900">Full Name *</Label>
                      <Input 
                        id="name" 
                        name="name" 
                        required 
                        placeholder="John Smith" 
                        className="border-teal-100 focus:border-teal-700 focus:ring-teal-700" 
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-teal-900">Email Address *</Label>
                        <Input 
                          id="email" 
                          name="email" 
                          type="email" 
                          required 
                          placeholder="john.smith@example.com" 
                          className="border-teal-100 focus:border-teal-700 focus:ring-teal-700" 
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-teal-900">Phone Number *</Label>
                        <Input 
                          id="phone" 
                          name="phone" 
                          type="tel" 
                          required 
                          placeholder="+234 803 456 7890" 
                          className="border-teal-100 focus:border-teal-700 focus:ring-teal-700" 
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-teal-900">Subject *</Label>
                      <Input 
                        id="subject" 
                        name="subject" 
                        required 
                        placeholder="Investment Inquiry" 
                        className="border-teal-100 focus:border-teal-700 focus:ring-teal-700" 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-teal-900">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        placeholder="Tell us about your interest in Drecan Commodities..."
                        rows={4}
                        className="border-teal-100 focus:border-teal-700 focus:ring-teal-700"
                      />
                    </div>
                    
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full bg-teal-700 hover:bg-teal-800 text-white flex items-center justify-center gap-2"
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
        </div>
      </section>

      {/* Investor Relations */}
      <section className="py-16 bg-teal-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-teal-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              Investor Relations
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Ready to take the next step in your agricultural investment journey?
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md border border-teal-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <h3 className="text-xl font-bold text-teal-900 mb-3">Our Promise</h3>
              <p className="text-gray-700">
                We are committed to providing transparent, ethical, and profitable investment opportunities 
                in Nigeria's agricultural sector. Our team ensures that every investor receives personalized 
                attention and regular updates on their investments.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md border border-teal-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <h3 className="text-xl font-bold text-teal-900 mb-3">Investment Categories</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-teal-700 font-bold mr-2">•</span>
                  <span>AgroTrade: Short-term trading opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-700 font-bold mr-2">•</span>
                  <span>AgroFarm: Collaborative farming initiatives</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-700 font-bold mr-2">•</span>
                  <span>AgroLink: Community supply programs</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md border border-teal-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <h3 className="text-xl font-bold text-teal-900 mb-3">Next Steps</h3>
              <ol className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-teal-700 font-bold mr-2">1.</span>
                  <span>Submit your inquiry through our contact form</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-700 font-bold mr-2">2.</span>
                  <span>Schedule a consultation with our investment team</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-700 font-bold mr-2">3.</span>
                  <span>Review and sign investment agreements</span>
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
                className="bg-gradient-to-r from-teal-600 to-teal-800 hover:from-teal-700 hover:to-teal-900 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out px-8 py-3 rounded-full font-bold text-lg flex items-center justify-center gap-2 mx-auto"
              >
                <Download className="h-5 w-5" />
                Download Brochure
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;