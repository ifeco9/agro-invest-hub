import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { Link, useNavigate } from "react-router-dom";

const Auth = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  
  // Zod schema for form validation
  const authFormSchema = z.object({
    email: z.string().email("Please enter a valid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    ...(isLogin ? {} : {
      name: z.string().min(2, "Name must be at least 2 characters"),
      confirmPassword: z.string()
    })
  }).refine(
    (data) => isLogin || data.password === data.confirmPassword,
    {
      message: "Passwords don't match",
      path: ["confirmPassword"]
    }
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Get form data
    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      ...(isLogin ? {} : {
        name: formData.get("name") as string,
        confirmPassword: formData.get("confirmPassword") as string
      })
    };
    
    // Validate form data
    try {
      authFormSchema.parse(data);
      
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      toast({
        title: isLogin ? "Login Successful!" : "Account Created!",
        description: isLogin 
          ? "Welcome back! You have been successfully logged in." 
          : "Your account has been created successfully. Welcome to Drecan Commodities!",
      });
      
      // Redirect based on action
      if (isLogin) {
        // Store user data in localStorage
        const userData = {
          name: data.email.split('@')[0], // Simple name extraction from email
          email: data.email
        };
        localStorage.setItem('user', JSON.stringify(userData));
        
        // Dispatch storage event to notify Navbar of login
        window.dispatchEvent(new StorageEvent('storage', {
          key: 'user',
          newValue: JSON.stringify(userData)
        }));
        
        // After successful login, redirect to shop page
        navigate("/shop");
      } else {
        // For signup, store the user's full name
        const userData = {
          name: data.name || data.email.split('@')[0],
          email: data.email
        };
        localStorage.setItem('user', JSON.stringify(userData));
        
        // Dispatch storage event to notify Navbar of login
        window.dispatchEvent(new StorageEvent('storage', {
          key: 'user',
          newValue: JSON.stringify(userData)
        }));
        
        // After successful signup, redirect to login page
        setIsLogin(true);
      }
      
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
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-teal-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card className="bg-white border border-teal-200 shadow-lg">
          <CardHeader className="text-center">
            <div className="mx-auto bg-teal-100 rounded-full p-3 w-16 h-16 flex items-center justify-center mb-4">
              <div className="bg-teal-600 rounded-full w-10 h-10"></div>
            </div>
            <CardTitle className="text-2xl font-bold text-teal-900">
              {isLogin ? "Welcome Back" : "Create Account"}
            </CardTitle>
            <CardDescription className="text-teal-700">
              {isLogin 
                ? "Sign in to access your investment dashboard" 
                : "Join us to start investing in Nigerian agriculture"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-teal-800">Full Name</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    type="text" 
                    required 
                    placeholder="John Smith" 
                    className="border-teal-300 focus:border-teal-500 focus:ring-teal-500" 
                  />
                </div>
              )}
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-teal-800">Email Address</Label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  required 
                  placeholder="john.smith@example.com" 
                  className="border-teal-300 focus:border-teal-500 focus:ring-teal-500" 
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password" className="text-teal-800">Password</Label>
                <Input 
                  id="password" 
                  name="password" 
                  type="password" 
                  required 
                  placeholder="••••••••" 
                  className="border-teal-300 focus:border-teal-500 focus:ring-teal-500" 
                />
              </div>
              
              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-teal-800">Confirm Password</Label>
                  <Input 
                    id="confirmPassword" 
                    name="confirmPassword" 
                    type="password" 
                    required 
                    placeholder="••••••••" 
                    className="border-teal-300 focus:border-teal-500 focus:ring-teal-500" 
                  />
                </div>
              )}
              
              {isLogin && (
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-teal-600 border-teal-300 rounded focus:ring-teal-500"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-teal-800">
                      Remember me
                    </label>
                  </div>
                  <div className="text-sm">
                    <a href="#" className="font-medium text-teal-600 hover:text-teal-500">
                      Forgot password?
                    </a>
                  </div>
                </div>
              )}
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  type="submit" 
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 font-semibold"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    "Processing..."
                  ) : isLogin ? (
                    "Sign In"
                  ) : (
                    "Create Account"
                  )}
                </Button>
              </motion.div>
            </form>
            
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-teal-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-teal-700">
                    Or continue with
                  </span>
                </div>
              </div>
              
              <div className="mt-6 grid grid-cols-2 gap-3">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    variant="outline" 
                    className="w-full border-teal-300 text-teal-700 hover:bg-teal-50"
                  >
                    Google
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    variant="outline" 
                    className="w-full border-teal-300 text-teal-700 hover:bg-teal-50"
                  >
                    Facebook
                  </Button>
                </motion.div>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-teal-800">
                {isLogin ? "Don't have an account? " : "Already have an account? "}
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="font-medium text-teal-600 hover:text-teal-500 focus:outline-none"
                >
                  {isLogin ? "Sign up" : "Sign in"}
                </button>
              </p>
            </div>
          </CardContent>
        </Card>
        
        <div className="mt-6 text-center">
          <p className="text-xs text-teal-700">
            By signing up, you agree to our{" "}
            <Link to="/terms" className="underline text-teal-600 hover:text-teal-500">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link to="/privacy" className="underline text-teal-600 hover:text-teal-500">
              Privacy Policy
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Auth;