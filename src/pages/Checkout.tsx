import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Mail, Phone, User, MapPin, CheckCircle, Copy, Share2 } from "lucide-react";
import { CartItem } from "./Shop";

const Checkout = () => {
  const navigate = useNavigate();
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: ""
  });

  // Get cart from localStorage
  const cart: CartItem[] = JSON.parse(localStorage.getItem('cart') || '[]');
  
  // Calculate cart totals
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 0 ? 1500 : 0; // Free shipping for orders over ₦0 (adjust as needed)
  const total = subtotal + shipping;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCustomerInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmitOrder = () => {
    // Validate required fields
    if (!customerInfo.name || !customerInfo.email || !customerInfo.phone) {
      toast.error("Please fill in all required fields");
      return;
    }

    // In a real app, you would send the order to your backend here
    console.log("Order submitted:", { customerInfo, cart, total });
    
    // Set order as submitted to show confirmation
    setOrderSubmitted(true);
    
    // Show success message
    toast.success("Order submitted successfully!");
  };

  const generateEmailTemplate = () => {
    let emailBody = `Hello Drecan Commodities Team,

I would like to place the following order:

`;
    emailBody += `Customer Information:\n`;
    emailBody += `Name: ${customerInfo.name}\n`;
    emailBody += `Email: ${customerInfo.email}\n`;
    emailBody += `Phone: ${customerInfo.phone}\n`;
    emailBody += `Address: ${customerInfo.address}, ${customerInfo.city}, ${customerInfo.state}\n\n`;
    
    emailBody += `Order Details:\n`;
    cart.forEach(item => {
      emailBody += `- ${item.name} (Qty: ${item.quantity}) - ₦${(item.price * item.quantity).toLocaleString()}\n`;
    });
    
    emailBody += `\nSubtotal: ₦${subtotal.toLocaleString()}\n`;
    emailBody += `Shipping: ₦${shipping.toLocaleString()}\n`;
    emailBody += `Total: ₦${total.toLocaleString()}\n\n`;
    emailBody += `Please let me know the next steps for payment and delivery.\n\nBest regards,\n${customerInfo.name}`;
    
    return encodeURIComponent(emailBody);
  };

  const generateWhatsAppMessage = () => {
    let message = `Hello Drecan Commodities, I would like to place an order:\n\n`;
    message += `*Customer Information:*\n`;
    message += `Name: ${customerInfo.name}\n`;
    message += `Email: ${customerInfo.email}\n`;
    message += `Phone: ${customerInfo.phone}\n\n`;
    
    message += `*Order Details:*\n`;
    cart.forEach(item => {
      message += `• ${item.name} (Qty: ${item.quantity}) - ₦${(item.price * item.quantity).toLocaleString()}\n`;
    });
    
    message += `\n*Total: ₦${total.toLocaleString()}*\n\n`;
    message += `Please let me know the next steps for payment and delivery.`;
    
    return encodeURIComponent(message);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard!");
  };

  const sendEmail = () => {
    const subject = encodeURIComponent(`New Order from ${customerInfo.name}`);
    const body = generateEmailTemplate();
    window.location.href = `mailto:info@drecancommodities.com?subject=${subject}&body=${body}`;
  };

  const sendWhatsApp = () => {
    const message = generateWhatsAppMessage();
    window.open(`https://wa.me/2348034567890?text=${message}`, '_blank');
  };

  if (orderSubmitted) {
    return (
      <div className="min-h-screen pt-16 sm:pt-20 bg-teal-50">
        <div className="container mx-auto px-4 py-8">
          <Card className="max-w-2xl mx-auto bg-white border-teal-200 shadow-lg">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <CheckCircle className="h-16 w-16 text-green-500" />
              </div>
              <CardTitle className="text-2xl font-bold text-teal-900">Order Submitted Successfully!</CardTitle>
              <p className="text-teal-700 mt-2">
                Thank you for your order. Please use one of the options below to send your order details to us for processing.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-teal-50 p-4 rounded-lg">
                <h3 className="font-bold text-teal-900 mb-2">Order Summary</h3>
                <div className="space-y-2">
                  {cart.map(item => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span>{item.name} x {item.quantity}</span>
                      <span>₦{(item.price * item.quantity).toLocaleString()}</span>
                    </div>
                  ))}
                  <div className="border-t border-teal-200 pt-2 mt-2">
                    <div className="flex justify-between font-bold">
                      <span>Total:</span>
                      <span>₦{total.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-teal-900 text-center">Send Order Details</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Button 
                    onClick={sendEmail}
                    className="bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2 h-12"
                  >
                    <Mail className="h-5 w-5" />
                    Send via Email
                  </Button>
                  
                  <Button 
                    onClick={sendWhatsApp}
                    className="bg-green-600 hover:bg-green-700 text-white flex items-center justify-center gap-2 h-12"
                  >
                    <Share2 className="h-5 w-5" />
                    Send via WhatsApp
                  </Button>
                </div>
                
                <div className="border-t border-teal-200 pt-4">
                  <h4 className="font-medium text-teal-900 mb-2">Or copy the details manually:</h4>
                  <div className="flex gap-2">
                    <Input 
                      value={`Order from ${customerInfo.name} - Total: ₦${total.toLocaleString()}`}
                      readOnly
                      className="flex-1"
                    />
                    <Button 
                      onClick={() => copyToClipboard(`Order from ${customerInfo.name} - Total: ₦${total.toLocaleString()}`)}
                      variant="outline"
                      className="flex items-center gap-1"
                    >
                      <Copy className="h-4 w-4" />
                      Copy
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="text-center pt-4">
                <Button 
                  onClick={() => navigate("/shop")}
                  variant="outline"
                  className="mr-4"
                >
                  Continue Shopping
                </Button>
                <Button 
                  onClick={() => navigate("/")}
                  className="bg-teal-600 hover:bg-teal-700"
                >
                  Back to Home
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 sm:pt-20 bg-teal-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-teal-900 mb-6 text-center">Checkout</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Customer Information */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-white border-teal-200 shadow-md">
              <CardHeader>
                <CardTitle className="text-xl text-teal-900">Customer Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-teal-800">Full Name *</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-teal-500" />
                      <Input
                        id="name"
                        name="name"
                        value={customerInfo.name}
                        onChange={handleInputChange}
                        placeholder="John Smith"
                        className="pl-10 border-teal-200 focus:border-teal-500"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-teal-800">Email Address *</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-teal-500" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={customerInfo.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className="pl-10 border-teal-200 focus:border-teal-500"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-teal-800">Phone Number *</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-teal-500" />
                      <Input
                        id="phone"
                        name="phone"
                        value={customerInfo.phone}
                        onChange={handleInputChange}
                        placeholder="+234 803 456 7890"
                        className="pl-10 border-teal-200 focus:border-teal-500"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="city" className="text-teal-800">City</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-teal-500" />
                      <Input
                        id="city"
                        name="city"
                        value={customerInfo.city}
                        onChange={handleInputChange}
                        placeholder="Abuja"
                        className="pl-10 border-teal-200 focus:border-teal-500"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="address" className="text-teal-800">Delivery Address</Label>
                  <Input
                    id="address"
                    name="address"
                    value={customerInfo.address}
                    onChange={handleInputChange}
                    placeholder="123 Main Street"
                    className="border-teal-200 focus:border-teal-500"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="state" className="text-teal-800">State</Label>
                  <Input
                    id="state"
                    name="state"
                    value={customerInfo.state}
                    onChange={handleInputChange}
                    placeholder="Nigeria"
                    className="border-teal-200 focus:border-teal-500"
                  />
                </div>
              </CardContent>
            </Card>
            
            {/* Order Summary */}
            <Card className="bg-white border-teal-200 shadow-md">
              <CardHeader>
                <CardTitle className="text-xl text-teal-900">Order Summary</CardTitle>
              </CardHeader>
              <CardContent>
                {cart.length === 0 ? (
                  <p className="text-teal-700 text-center py-4">Your cart is empty</p>
                ) : (
                  <div className="space-y-4">
                    {cart.map(item => (
                      <div key={item.id} className="flex justify-between items-center border-b border-teal-100 pb-3">
                        <div>
                          <h3 className="font-medium text-teal-900">{item.name}</h3>
                          <p className="text-sm text-teal-700">Qty: {item.quantity}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-teal-900">₦{(item.price * item.quantity).toLocaleString()}</p>
                          <p className="text-sm text-teal-700">₦{item.price.toLocaleString()} each</p>
                        </div>
                      </div>
                    ))}
                    
                    <div className="space-y-2 pt-4">
                      <div className="flex justify-between">
                        <span className="text-teal-800">Subtotal</span>
                        <span className="font-medium">₦{subtotal.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-teal-800">Shipping</span>
                        <span className="font-medium">₦{shipping.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between border-t border-teal-200 pt-2">
                        <span className="text-teal-900 font-bold">Total</span>
                        <span className="text-teal-900 font-bold">₦{total.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
          
          {/* Order Confirmation */}
          <div>
            <Card className="bg-white border-teal-200 shadow-md sticky top-24">
              <CardHeader>
                <CardTitle className="text-xl text-teal-900">Complete Order</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-teal-50 p-4 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span className="text-teal-800">Subtotal</span>
                    <span className="font-medium">₦{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-teal-800">Shipping</span>
                    <span className="font-medium">₦{shipping.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between border-t border-teal-200 pt-2 mt-2">
                    <span className="text-teal-900 font-bold">Total</span>
                    <span className="text-teal-900 font-bold">₦{total.toLocaleString()}</span>
                  </div>
                </div>
                
                <Button
                  onClick={handleSubmitOrder}
                  disabled={cart.length === 0 || !customerInfo.name || !customerInfo.email || !customerInfo.phone}
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white h-12"
                >
                  Submit Order
                </Button>
                
                <Button
                  onClick={() => navigate("/shop")}
                  variant="outline"
                  className="w-full border-teal-300 text-teal-700 hover:bg-teal-50"
                >
                  Back to Shopping
                </Button>
                
                <div className="text-xs text-teal-700 text-center">
                  <p>After submitting, you'll be able to send your order details via email or WhatsApp for manual processing.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;