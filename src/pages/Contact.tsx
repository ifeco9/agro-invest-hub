import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Interest Received!",
      description: "Thank you for your interest. Our team will contact you within 24 hours.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-16 bg-mint-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-teal-900">
            Reserve Your Investment
          </h1>
          <p className="text-lg text-teal-800 max-w-2xl mx-auto">
            Express your interest in our agricultural investment opportunities. Our expert team is ready to guide you.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="bg-mint-50 border border-mint-200">
                <CardHeader>
                  <h2 className="text-2xl font-bold text-teal-900">Express Your Interest</h2>
                  <p className="text-teal-800">
                    Fill out the form below and our team will contact you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-teal-900">First Name *</Label>
                        <Input id="firstName" required placeholder="John" className="border-mint-200 focus:border-teal-600" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-teal-900">Last Name *</Label>
                        <Input id="lastName" required placeholder="Smith" className="border-mint-200 focus:border-teal-600" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-teal-900">Email Address *</Label>
                      <Input id="email" type="email" required placeholder="john.smith@example.com" className="border-mint-200 focus:border-teal-600" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-teal-900">Phone Number *</Label>
                      <Input id="phone" type="tel" required placeholder="+44 7700 900000" className="border-mint-200 focus:border-teal-600" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="investmentAmount" className="text-teal-900">Intended Investment Amount *</Label>
                      <Select required>
                        <SelectTrigger id="investmentAmount" className="border-mint-200 focus:border-teal-600">
                          <SelectValue placeholder="Select amount range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="2m-5m">₦2,000,000 - ₦5,000,000</SelectItem>
                          <SelectItem value="5m-10m">₦5,000,000 - ₦10,000,000</SelectItem>
                          <SelectItem value="10m-25m">₦10,000,000 - ₦25,000,000</SelectItem>
                          <SelectItem value="25m-50m">₦25,000,000 - ₦50,000,000</SelectItem>
                          <SelectItem value="50m+">₦50,000,000+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="interest" className="text-teal-900">Area of Interest *</Label>
                      <Select required>
                        <SelectTrigger id="interest" className="border-mint-200 focus:border-teal-600">
                          <SelectValue placeholder="Select investment type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="farmland">Farmland Shares</SelectItem>
                          <SelectItem value="crops">Crop Yield Funding</SelectItem>
                          <SelectItem value="sustainable">Sustainable Projects</SelectItem>
                          <SelectItem value="equipment">Equipment Leasing</SelectItem>
                          <SelectItem value="multiple">Multiple Types</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-teal-900">Additional Information</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your investment goals or any questions you have..."
                        rows={4}
                        className="border-mint-200 focus:border-teal-600"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-teal-600 hover:bg-teal-700 text-white" disabled={isSubmitting}>
                      {isSubmitting ? "Submitting..." : "Submit Interest"}
                    </Button>

                    <p className="text-xs text-teal-800 text-center">
                      By submitting this form, you agree to our Privacy Policy and Terms of Service.
                      No payment information is required at this stage.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="bg-mint-50 border border-mint-200">
                <CardHeader>
                  <h3 className="text-xl font-semibold text-teal-900">Contact Information</h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-teal-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-teal-900">Email</p>
                      <p className="text-sm text-teal-800">info@drecancommodities.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-teal-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-teal-900">Phone</p>
                      <p className="text-sm text-teal-800">+234 803 456 7890</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-teal-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-teal-900">Office</p>
                      <p className="text-sm text-teal-800">
                        Drecan Commodities Plaza<br />
                        15 Ahmadu Bello Way, Victoria Island<br />
                        Lagos, Nigeria
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-teal-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-teal-900">Business Hours</p>
                      <p className="text-sm text-teal-800">
                        Monday - Friday<br />
                        8:00 AM - 5:00 PM WAT
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-teal-600 text-white">
                <CardHeader>
                  <h3 className="text-xl font-semibold">Quick Response</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-4">
                    Our investment advisors typically respond to inquiries within 2 hours during business hours.
                  </p>
                  <p className="text-sm">
                    For urgent matters, please call us directly at +234 803 456 7890.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-mint-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-teal-900">Frequently Asked Questions</h2>
            <p className="text-lg text-teal-800 max-w-2xl mx-auto">
              Quick answers to common questions about the investment process.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "What happens after I submit my interest?",
                a: "Our team will review your submission and contact you within 24 hours to discuss your investment goals and answer any questions.",
              },
              {
                q: "Is there a minimum investment amount?",
                a: "Most opportunities start at ₦2,000,000, though some specialized projects may have higher minimums.",
              },
              {
                q: "How long does the investment process take?",
                a: "From initial contact to investment completion typically takes 2-4 weeks, including due diligence and verification.",
              },
              {
                q: "Are there any fees for expressing interest?",
                a: "No, expressing your interest is completely free with no obligation to invest.",
              },
            ].map((faq, index) => (
              <Card key={index} className="bg-mint-50 border border-mint-200">
                <CardHeader>
                  <h3 className="font-semibold text-teal-900">{faq.q}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-teal-800">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
