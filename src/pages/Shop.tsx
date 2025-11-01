import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { ShoppingCart, Search, User, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import InvestmentOpportunityCard from "@/components/InvestmentOpportunityCard";
import kadunaRice from "@/assets/Kaduna Rice Yield Fund.jpeg";
import ogunCassava from "@/assets/Ogun Cassava Processing Investment.jpeg";
import kanoWheat from "@/assets/Kano Wheat Farming Project.jpeg";
import lagosBeans from "@/assets/Lagos Beans Cultivation Hub.jpeg";
import southSouthPalm from "@/assets/South-South Palm Oil Investment.jpeg";
import benueYam from "@/assets/Benue Yam Production Fund.jpeg";
import enuguEgusi from "@/assets/Enugu Egusi Seed Farm.jpeg";
import kebbiSorghum from "@/assets/Kebbi Sorghum Yield Project.jpeg";
import bornoMillet from "@/assets/Borno Millet Farming Initiative.jpeg";
import kogiSoybeans from "@/assets/Kogi Soybeans Investment Fund.jpeg";
import farmEquipment from "@/assets/farm-equipment.jpg";
import sustainableFarm from "@/assets/sustainable-farm.jpg";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  in_stock: boolean;
  category: string;
  created_at: string;
}

interface CartItem extends Product {
  quantity: number;
}

interface InvestmentOpportunity {
  id: string;
  title: string;
  image?: string;
  region: string;
  crop: string;
  minInvestment: string;
  roi: string;
  duration: string;
  slotsAvailable: number;
  type: string;
  description: string;
  price: number;
}

interface UserProfile {
  display_name: string;
  email: string;
}

const Shop = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [productSearchTerm, setProductSearchTerm] = useState("");
  const [productCategory, setProductCategory] = useState("all");
  const [user, setUser] = useState<{ id: string; email: string } | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [productCategories, setProductCategories] = useState<string[]>(["all"]);
  const [activeTab, setActiveTab] = useState("products");
  const navigate = useNavigate();

  // Investment opportunities data
  const investmentOpportunities: InvestmentOpportunity[] = [
    {
      id: "1",
      title: "Kaduna Rice Yield Fund",
      image: kadunaRice,
      region: "Kaduna",
      crop: "Rice",
      minInvestment: "₦2,000,000",
      roi: "10-12%",
      duration: "12 months",
      slotsAvailable: 8,
      type: "Crop Yield",
      description: "Invest in rice farming in Kaduna state",
      price: 2000000,
    },
    {
      id: "2",
      title: "Ogun Cassava Processing Investment",
      image: ogunCassava,
      region: "Ogun",
      crop: "Cassava",
      minInvestment: "₦4,000,000",
      roi: "8-10%",
      duration: "24 months",
      slotsAvailable: 15,
      type: "Sustainable",
      description: "Process cassava into various products",
      price: 4000000,
    },
    {
      id: "3",
      title: "Kano Wheat Farming Project",
      image: kanoWheat,
      region: "Kano",
      crop: "Wheat",
      minInvestment: "₦3,000,000",
      roi: "9-11%",
      duration: "18 months",
      slotsAvailable: 3,
      type: "Crop Yield",
      description: "Wheat farming project in Kano state",
      price: 3000000,
    },
    {
      id: "4",
      title: "Plateau Dairy & Maize Farm",
      image: sustainableFarm,
      region: "Plateau",
      crop: "Maize",
      minInvestment: "₦6,000,000",
      roi: "11-13%",
      duration: "36 months",
      slotsAvailable: 12,
      type: "Livestock",
      description: "Integrated dairy and maize farming",
      price: 6000000,
    },
    {
      id: "5",
      title: "Lagos Beans Cultivation Hub",
      image: lagosBeans,
      region: "Lagos",
      crop: "Beans",
      minInvestment: "₦3,200,000",
      roi: "9-11%",
      duration: "18 months",
      slotsAvailable: 6,
      type: "Crop Yield",
      description: "Beans cultivation in Lagos",
      price: 3200000,
    },
    {
      id: "6",
      title: "South-South Palm Oil Investment",
      image: southSouthPalm,
      region: "Rivers",
      crop: "Palm Oil",
      minInvestment: "₦8,000,000",
      roi: "12-14%",
      duration: "60 months",
      slotsAvailable: 4,
      type: "Sustainable",
      description: "Palm oil investment in South-South region",
      price: 8000000,
    },
    {
      id: "7",
      title: "Benue Yam Production Fund",
      image: benueYam,
      region: "Benue",
      crop: "Yam",
      minInvestment: "₦2,500,000",
      roi: "10-12%",
      duration: "12 months",
      slotsAvailable: 10,
      type: "Crop Yield",
      description: "Yam production in Benue state",
      price: 2500000,
    },
    {
      id: "8",
      title: "Enugu Egusi (Melon) Seed Farm",
      image: enuguEgusi,
      region: "Enugu",
      crop: "Egusi",
      minInvestment: "₦1,800,000",
      roi: "11-13%",
      duration: "9 months",
      slotsAvailable: 7,
      type: "Crop Yield",
      description: "Egusi seed farming in Enugu",
      price: 1800000,
    },
    {
      id: "9",
      title: "Kebbi Sorghum Yield Project",
      image: kebbiSorghum,
      region: "Kebbi",
      crop: "Sorghum",
      minInvestment: "₦2,200,000",
      roi: "9-11%",
      duration: "15 months",
      slotsAvailable: 9,
      type: "Crop Yield",
      description: "Sorghum farming in Kebbi state",
      price: 2200000,
    },
    {
      id: "10",
      title: "Borno Millet Farming Initiative",
      image: bornoMillet,
      region: "Borno",
      crop: "Millet",
      minInvestment: "₦1,900,000",
      roi: "8-10%",
      duration: "12 months",
      slotsAvailable: 11,
      type: "Crop Yield",
      description: "Millet farming in Borno state",
      price: 1900000,
    },
    {
      id: "11",
      title: "Kogi Soybeans Investment Fund",
      image: kogiSoybeans,
      region: "Kogi",
      crop: "Soybeans",
      minInvestment: "₦3,500,000",
      roi: "10-12%",
      duration: "18 months",
      slotsAvailable: 5,
      type: "Crop Yield",
      description: "Soybeans investment in Kogi state",
      price: 3500000,
    },
    {
      id: "12",
      title: "Equipment Leasing Programme",
      image: farmEquipment,
      region: "Multi-State",
      crop: "Various",
      minInvestment: "₦5,000,000",
      roi: "9-11%",
      duration: "24 months",
      slotsAvailable: 8,
      type: "Equipment",
      description: "Farm equipment leasing program",
      price: 5000000,
    },
  ];

  const [filteredOpportunities, setFilteredOpportunities] = useState<InvestmentOpportunity[]>(investmentOpportunities);
  const [opportunitySearchTerm, setOpportunitySearchTerm] = useState("");
  const [opportunityRegion, setOpportunityRegion] = useState("all");
  const [opportunityType, setOpportunityType] = useState("all");
  const [opportunityCrop, setOpportunityCrop] = useState("all");

  useEffect(() => {
    fetchProducts();
    checkUserSession();
  }, []);

  useEffect(() => {
    filterProducts();
  }, [products, productSearchTerm, productCategory]);

  useEffect(() => {
    filterOpportunities();
  }, [opportunitySearchTerm, opportunityRegion, opportunityType, opportunityCrop]);

  const checkUserSession = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (session?.user) {
      setUser({
        id: session.user.id,
        email: session.user.email || ""
      });
      fetchUserProfile(session.user.id);
    }
  };

  const fetchUserProfile = async (userId: string) => {
    const { data, error } = await supabase
      .from("profiles")
      .select("display_name, email")
      .eq("user_id", userId)
      .single();

    if (error) {
      console.error("Error fetching profile:", error);
    } else {
      setProfile(data);
    }
  };

  const fetchProducts = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      toast.error("Failed to load products");
      console.error(error);
    } else {
      setProducts(data || []);
      
      // Extract unique categories
      const uniqueCategories = Array.from(new Set((data || []).map(p => p.category).filter(Boolean))) as string[];
      setProductCategories(["all", ...uniqueCategories]);
    }
    setLoading(false);
  };

  const filterProducts = () => {
    let result = products;
    
    // Filter by search term
    if (productSearchTerm) {
      result = result.filter(product => 
        product.name.toLowerCase().includes(productSearchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(productSearchTerm.toLowerCase())
      );
    }
    
    // Filter by category
    if (productCategory !== "all") {
      result = result.filter(product => product.category === productCategory);
    }
    
    setFilteredProducts(result);
  };

  const filterOpportunities = () => {
    let result = investmentOpportunities;
    
    // Filter by search term
    if (opportunitySearchTerm) {
      result = result.filter(opp => 
        opp.title.toLowerCase().includes(opportunitySearchTerm.toLowerCase()) ||
        opp.description.toLowerCase().includes(opportunitySearchTerm.toLowerCase())
      );
    }
    
    // Filter by region
    if (opportunityRegion !== "all") {
      result = result.filter(opp => opp.region === opportunityRegion);
    }
    
    // Filter by type
    if (opportunityType !== "all") {
      result = result.filter(opp => opp.type === opportunityType);
    }
    
    // Filter by crop
    if (opportunityCrop !== "all") {
      result = result.filter(opp => opp.crop === opportunityCrop);
    }
    
    setFilteredOpportunities(result);
  };

  const handleAddToCart = (product: Product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
    
    toast.success(`${product.name} added to cart!`);
  };

  const handleAddOpportunityToCart = (opportunity: InvestmentOpportunity) => {
    // Convert opportunity to product format for cart
    const cartItem: Product = {
      id: opportunity.id,
      name: opportunity.title,
      description: opportunity.description,
      price: opportunity.price,
      image: opportunity.image || "",
      in_stock: opportunity.slotsAvailable > 0,
      category: "Investment",
      created_at: new Date().toISOString(),
    };
    
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === cartItem.id);
      if (existingItem) {
        return prevCart.map(item => 
          item.id === cartItem.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      } else {
        return [...prevCart, { ...cartItem, quantity: 1 }];
      }
    });
    
    toast.success(`${opportunity.title} added to cart!`);
  };

  const handleRemoveFromCart = (productId: string) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
    toast.info("Item removed from cart");
  };

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Signed out successfully!");
      setUser(null);
      setProfile(null);
      navigate("/auth");
    }
  };

  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-32">
        <p className="text-lg text-muted-foreground">Loading products...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-32 px-4 bg-gradient-to-b from-white to-teal-50">
      <div className="container mx-auto max-w-7xl">
        {/* Header with user info and cart */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-teal-900 mb-2">
              Premium Nigerian Commodities & Investments
            </h1>
            <p className="text-lg text-teal-700">
              Discover our selection of high-quality agricultural products and investment opportunities
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            {user ? (
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm">
                  <User className="h-4 w-4 text-teal-600" />
                  <span className="text-sm font-medium text-teal-900">
                    {profile?.display_name || user.email}
                  </span>
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={handleSignOut}
                  className="flex items-center gap-2"
                >
                  <LogOut className="h-4 w-4" />
                  Sign Out
                </Button>
              </div>
            ) : (
              <Button onClick={() => navigate("/auth")}>
                Sign In
              </Button>
            )}
            
            <div className="relative">
              <Button 
                variant="outline" 
                size="sm" 
                className="flex items-center gap-2"
                onClick={() => toast.info("Cart functionality will be fully implemented in the next phase")}
              >
                <ShoppingCart className="h-4 w-4" />
                Cart ({cartCount})
              </Button>
              {cartCount > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-teal-600">
                  {cartCount}
                </Badge>
              )}
            </div>
          </div>
        </div>

        {/* Tabs for Products and Investment Opportunities */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="investments">Investment Opportunities</TabsTrigger>
          </TabsList>

          <TabsContent value="products">
            {/* Product Search and filter controls */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search products..."
                  className="pl-10"
                  value={productSearchTerm}
                  onChange={(e) => setProductSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="w-full md:w-48">
                <Label className="text-sm font-medium mb-2 block">Category</Label>
                <Select value={productCategory} onValueChange={setProductCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {productCategories.map(category => (
                      <SelectItem key={category} value={category}>
                        {category === "all" ? "All Categories" : category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Products grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-xl text-muted-foreground">No products found matching your criteria.</p>
                <Button 
                  variant="link" 
                  onClick={() => {
                    setProductSearchTerm("");
                    setProductCategory("all");
                  }}
                  className="mt-2"
                >
                  Clear filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="aspect-video w-full overflow-hidden bg-muted">
                      {product.image ? (
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-teal-100">
                          <ShoppingCart className="w-16 h-16 text-teal-400" />
                        </div>
                      )}
                    </div>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-xl">{product.name}</CardTitle>
                        {product.category && (
                          <Badge variant="secondary">{product.category}</Badge>
                        )}
                      </div>
                      <CardDescription>{product.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-teal-600">
                          ₦{product.price.toLocaleString()}
                        </span>
                        {product.in_stock ? (
                          <Badge className="bg-green-500">In Stock</Badge>
                        ) : (
                          <Badge variant="destructive">Out of Stock</Badge>
                        )}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button
                        className="w-full"
                        onClick={() => handleAddToCart(product)}
                        disabled={!product.in_stock}
                      >
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        {product.in_stock ? "Add to Cart" : "Out of Stock"}
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="investments">
            {/* Investment Opportunities Search and filter controls */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search investment opportunities..."
                  className="pl-10"
                  value={opportunitySearchTerm}
                  onChange={(e) => setOpportunitySearchTerm(e.target.value)}
                />
              </div>
              
              <Select value={opportunityRegion} onValueChange={setOpportunityRegion}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Select Region" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Regions</SelectItem>
                  <SelectItem value="Kaduna">Kaduna</SelectItem>
                  <SelectItem value="Ogun">Ogun</SelectItem>
                  <SelectItem value="Kano">Kano</SelectItem>
                  <SelectItem value="Plateau">Plateau</SelectItem>
                  <SelectItem value="Lagos">Lagos</SelectItem>
                  <SelectItem value="Rivers">Rivers</SelectItem>
                  <SelectItem value="Benue">Benue</SelectItem>
                  <SelectItem value="Enugu">Enugu</SelectItem>
                  <SelectItem value="Kebbi">Kebbi</SelectItem>
                  <SelectItem value="Borno">Borno</SelectItem>
                  <SelectItem value="Kogi">Kogi</SelectItem>
                  <SelectItem value="Multi-State">Multi-State</SelectItem>
                </SelectContent>
              </Select>

              <Select value={opportunityType} onValueChange={setOpportunityType}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Investment Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="Crop Yield">Crop Yield</SelectItem>
                  <SelectItem value="Sustainable">Sustainable</SelectItem>
                  <SelectItem value="Equipment">Equipment</SelectItem>
                  <SelectItem value="Livestock">Livestock</SelectItem>
                </SelectContent>
              </Select>

              <Select value={opportunityCrop} onValueChange={setOpportunityCrop}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Crop Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Crops</SelectItem>
                  <SelectItem value="Rice">Rice</SelectItem>
                  <SelectItem value="Cassava">Cassava</SelectItem>
                  <SelectItem value="Wheat">Wheat</SelectItem>
                  <SelectItem value="Maize">Maize</SelectItem>
                  <SelectItem value="Beans">Beans</SelectItem>
                  <SelectItem value="Palm Oil">Palm Oil</SelectItem>
                  <SelectItem value="Yam">Yam</SelectItem>
                  <SelectItem value="Egusi">Egusi (Melon)</SelectItem>
                  <SelectItem value="Sorghum">Sorghum</SelectItem>
                  <SelectItem value="Millet">Millet</SelectItem>
                  <SelectItem value="Soybeans">Soybeans</SelectItem>
                  <SelectItem value="Various">Various</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Investment Opportunities grid */}
            {filteredOpportunities.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-xl text-muted-foreground">No investment opportunities found matching your criteria.</p>
                <Button 
                  variant="link" 
                  onClick={() => {
                    setOpportunitySearchTerm("");
                    setOpportunityRegion("all");
                    setOpportunityType("all");
                    setOpportunityCrop("all");
                  }}
                  className="mt-2"
                >
                  Clear filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredOpportunities.map((opportunity) => (
                  <InvestmentOpportunityCard 
                    key={opportunity.id} 
                    opportunity={opportunity} 
                    onAddToCart={handleAddOpportunityToCart}
                  />
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>

        {/* Cart summary (if items in cart) */}
        {cart.length > 0 && (
          <div className="mt-12 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
            <div className="space-y-4">
              {cart.map(item => (
                <div key={item.id} className="flex justify-between items-center border-b pb-4">
                  <div>
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-medium">₦{(item.price * item.quantity).toLocaleString()}</span>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => handleRemoveFromCart(item.id)}
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              ))}
              <div className="flex justify-between items-center pt-4 border-t">
                <span className="text-xl font-bold">Total: ₦{cartTotal.toLocaleString()}</span>
                <Button 
                  onClick={() => toast.info("Checkout functionality will be implemented in the next phase")}
                  className="bg-teal-600 hover:bg-teal-700"
                >
                  Proceed to Checkout
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;