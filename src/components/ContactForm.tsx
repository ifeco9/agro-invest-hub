import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";
import { z } from "zod";
import { motion } from "framer-motion";

interface ContactFormProps {
  title?: string;
  subtitle?: string;
}

const ContactForm = ({ title = "Send Us a Message", subtitle }: ContactFormProps) => {
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
    <div className="w-full">
      {title && (
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-teal-900">{title}</h2>
          {subtitle && <p className="text-gray-700 mt-2">{subtitle}</p>}
        </div>
      )}

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
              placeholder="+234 702 684 1214"
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
    </div>
  );
};

export default ContactForm;