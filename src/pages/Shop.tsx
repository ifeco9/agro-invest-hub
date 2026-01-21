import { useState, useEffect, useCallback, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { ShoppingCart, Search, User, LogOut, Heart, X, GitCompare, Zap, Shield, Award, Star } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import ProductList from "@/components/ProductList";
import OpportunityList from "@/components/OpportunityList";
import CartSummary from "@/components/CartSummary";
import OpportunityComparison from "@/components/OpportunityComparison";
import Wishlist from "@/components/Wishlist";
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
import cashewNuts from "@/assets/cashew nuts.jpg";
import cassavaFlour from "@/assets/cassava flour.jpg";
import driedHibiscus from "@/assets/dried hibiscus.jpg";
import egusi from "@/assets/egusi.jpg";
import garlicPowder from "@/assets/garlic powder.jpg";
import honey from "@/assets/honey.jpg";
import ofadaRice from "@/assets/ofada rice.jpg";
import palmOil from "@/assets/palm oil.jpg";
import sorghumGrains from "@/assets/sorghum  grains.jpg";
import tumericRoot from "@/assets/tumeric root.jpg";

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

export interface CartItem extends Product {
  quantity: number;
}

export interface InvestmentOpportunity {
  id: string;
  title: string;
  image?: string;
  region: string;
  crop: string;
  minContribution: string;
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

// Array of all available images for random assignment
const availableImages = [
  kadunaRice,
  ogunCassava,
  kanoWheat,
  lagosBeans,
  southSouthPalm,
  benueYam,
  enuguEgusi,
  kebbiSorghum,
  bornoMillet,
  kogiSoybeans,
  farmEquipment,
  sustainableFarm,
  cashewNuts,
  cassavaFlour,
  driedHibiscus,
  egusi,
  garlicPowder,
  honey,
  ofadaRice,
  palmOil,
  sorghumGrains,
  tumericRoot
];

const Shop = () => {
  // Inject custom styles
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .scrollbar-hide::-webkit-scrollbar {
        display: none;
      }
      .scrollbar-hide {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState<CartItem[]>(() => {
    // Load cart from localStorage
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [productSearchTerm, setProductSearchTerm] = useState("");
  const [productCategory, setProductCategory] = useState("all");
  const [user, setUser] = useState<{ name: string, email: string } | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [productCategories, setProductCategories] = useState<string[]>(["all"]);
  const [activeTab, setActiveTab] = useState("products");
  const [wishlist, setWishlist] = useState<InvestmentOpportunity[]>(() => {
    // Load wishlist from localStorage
    const savedWishlist = localStorage.getItem('wishlist');
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });
  const [comparisonList, setComparisonList] = useState<InvestmentOpportunity[]>([]);
  const [showWishlist, setShowWishlist] = useState(false);
  const [showComparison, setShowComparison] = useState(false);
  const [productPage, setProductPage] = useState(1);
  const [opportunityPage, setOpportunityPage] = useState(1);
  const [productHasMore, setProductHasMore] = useState(true);
  const [opportunityHasMore, setOpportunityHasMore] = useState(true);
  const itemsPerPage = 6;
  const observer = useRef<IntersectionObserver | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const investmentOpportunities: InvestmentOpportunity[] = [
    {
      id: "three-month",
      title: "3-Month Membership Plan",
      region: "Multi-State",
      crop: "Various Commodities",
      minContribution: "₦500,000",
      roi: "Market-driven",
      duration: "3 Months",
      slotsAvailable: 50,
      type: "Short Term",
      description: "Short-term engagement for quick shared surplus. Capital returned at end of period.",
      price: 500000,
    },
    {
      id: "six-month",
      title: "6-Month Membership Plan",
      region: "Multi-State",
      crop: "High-Value Crops",
      minContribution: "₦500,000",
      roi: "Variable",
      duration: "6 Months",
      slotsAvailable: 40,
      type: "Medium Term",
      description: "Balanced duration with strong shared surplus. Ideal for livestock and crop cycles.",
      price: 500000,
    },
    {
      id: "one-year",
      title: "1-Year Membership Plan",
      region: "Multi-State",
      crop: "Export Commodities",
      minContribution: "₦1,000,000",
      roi: "Market-driven",
      duration: "12 Months",
      slotsAvailable: 30,
      type: "Long Term",
      description: "High-yield annual membership for palm oil, cocoa, and export grains.",
      price: 1000000,
    },
    {
      id: "two-year",
      title: "2-Year Membership Plan",
      region: "Nationwide",
      crop: "Integrated Farming",
      minContribution: "₦1,000,000",
      roi: "Variable",
      duration: "24 Months",
      slotsAvailable: 20,
      type: "Premium",
      description: "Long-term growth with premium shared surplus for large-scale livestock and plantations.",
      price: 1000000,
    },
    {
      id: "three-year",
      title: "3-Year Membership Plan",
      region: "Nationwide",
      crop: "Agro-Industrial",
      minContribution: "₦5,000,000",
      roi: "Market-driven",
      duration: "36 Months",
      slotsAvailable: 10,
      type: "Premium",
      description: "Maximum shared surplus for large-scale members. Focus on processing and export.",
      price: 5000000,
    },
  ];

  const [filteredOpportunities, setFilteredOpportunities] = useState<InvestmentOpportunity[]>(investmentOpportunities);
  const [opportunitySearchTerm, setOpportunitySearchTerm] = useState("");
  const [opportunityRegion, setOpportunityRegion] = useState("all");
  const [opportunityType, setOpportunityType] = useState("all");
  const [opportunityCrop, setOpportunityCrop] = useState("all");

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    fetchProducts();
    checkUserSession();

    // Listen for storage changes (when user logs in/out in another tab)
    const handleStorageChange = () => {
      checkUserSession();
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  useEffect(() => {
    filterProducts();
  }, [products, productSearchTerm, productCategory]);

  useEffect(() => {
    filterOpportunities();
  }, [opportunitySearchTerm, opportunityRegion, opportunityType, opportunityCrop]);

  // Set active tab based on URL hash
  useEffect(() => {
    if (location.hash === "#investments") {
      setActiveTab("investments");
    } else {
      setActiveTab("products");
    }
  }, [location]);

  const checkUserSession = () => {
    const userData = localStorage.getItem('user');
    if (userData) {
      try {
        const user = JSON.parse(userData);
        setUser(user);
        // Set profile data from user data
        setProfile({
          display_name: user.name,
          email: user.email
        });
      } catch (e) {
        setUser(null);
        setProfile(null);
      }
    } else {
      setUser(null);
      setProfile(null);
    }
  };

  /**
   * Fetches products with explicit image assignments to ensure specific images are used
   * @returns {Promise<void>}
   */
  const fetchProducts = async () => {
    setLoading(true);

    // Predefined products with explicit image assignments
    const predefinedProducts: Product[] = [
      {
        id: "1",
        name: "Drecan Premium Palm Oil",
        description: "Pure palm oil sourced from sustainable farms in the South-South region of Nigeria",
        price: 0,
        image: palmOil,
        in_stock: true,
        category: "Oil & Fats",
        created_at: new Date().toISOString(),
      },
      {
        id: "2",
        name: "Drecan Premium Egusi Seeds",
        description: "High-quality melon seeds (egusi) from Enugu state, perfect for cooking",
        price: 0,
        image: egusi,
        in_stock: true,
        category: "Seeds & Nuts",
        created_at: new Date().toISOString(),
      },
      {
        id: "3",
        name: "Drecan Premium Sorghum Grains",
        description: "Premium sorghum grains from Kebbi state, ideal for brewing and cooking",
        price: 0,
        image: sorghumGrains,
        in_stock: true,
        category: "Grains",
        created_at: new Date().toISOString(),
      },
      {
        id: "4",
        name: "Drecan Ofada Rice",
        description: "Authentic Ofada rice from Ogun state, known for its unique aroma and taste",
        price: 0,
        image: ofadaRice,
        in_stock: true,
        category: "Rice",
        created_at: new Date().toISOString(),
      },
      {
        id: "5",
        name: "Kaduna Rice Yield Fund",
        description: "Premium Nigerian rice from Kaduna with excellent yield potential",
        price: 0,
        image: kadunaRice,
        in_stock: true,
        category: "Rice",
        created_at: new Date().toISOString(),
      },
      {
        id: "6",
        name: "Ogun Cassava Processing Investment",
        description: "Fresh cassava from Ogun state, processed into various products",
        price: 0,
        image: ogunCassava,
        in_stock: true,
        category: "Root Crops",
        created_at: new Date().toISOString(),
      },
    ];

    setProducts(predefinedProducts);

    // Extract unique categories
    const uniqueCategories = Array.from(new Set(predefinedProducts.map(p => p.category).filter(Boolean))) as string[];
    setProductCategories(["all", ...uniqueCategories]);

    setLoading(false);
  };

  /**
   * Filters products based on search term and category
   * @returns {void}
   */
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
    // Reset to first page when filters change
    setProductPage(1);
  };

  /**
   * Filters investment opportunities based on search term, region, type, and crop
   * @returns {void}
   */
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
    // Reset to first page when filters change
    setOpportunityPage(1);
  };

  /**
   * Adds a product to the cart or increments its quantity if already in cart
   * @param {Product} product - The product to add to cart
   * @returns {void}
   */
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

  /**
   * Updates the quantity of a cart item
   * @param {string} productId - The ID of the product to update
   * @param {number} quantity - The new quantity
   * @returns {void}
   */
  const handleUpdateQuantity = (productId: string, quantity: number) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId
          ? { ...item, quantity }
          : item
      )
    );
  };

  /**
   * Redirects to the opportunities page with the opportunity ID in the hash
   * @param {InvestmentOpportunity} opportunity - The opportunity to view
   * @returns {void}
   */
  const handleViewOpportunity = (opportunity: InvestmentOpportunity) => {
    // Redirect to opportunities page with the opportunity ID
    navigate(`/opportunities#${opportunity.id}`);
  };

  /**
   * Removes an item from the cart
   * @param {string} productId - The ID of the product to remove
   * @returns {void}
   */
  const handleRemoveFromCart = (productId: string) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
    toast.info("Item removed from cart");
  };

  /**
   * Handles the checkout process
   * @returns {void}
   */
  const handleProceedToCheckout = () => {
    // Check if cart is not empty
    if (cart.length === 0) {
      toast.info("Your cart is empty");
      return;
    }

    // Navigate to checkout page
    navigate("/checkout");
  };

  /**
   * Adds an opportunity to the wishlist
   * @param {InvestmentOpportunity} opportunity - The opportunity to add to wishlist
   * @returns {void}
   */
  const handleAddToWishlist = (opportunity: InvestmentOpportunity) => {
    setWishlist(prev => {
      // Check if already in wishlist
      if (prev.some(item => item.id === opportunity.id)) {
        toast.info("Already in wishlist");
        return prev;
      }
      toast.success(`${opportunity.title} added to wishlist!`);
      return [...prev, opportunity];
    });
  };

  /**
   * Removes an opportunity from the wishlist
   * @param {string} id - The ID of the opportunity to remove
   * @returns {void}
   */
  const handleRemoveFromWishlist = (id: string) => {
    setWishlist(prev => prev.filter(item => item.id !== id));
    toast.info("Removed from wishlist");
  };

  /**
   * Toggles the wishlist modal visibility
   * @returns {void}
   */
  const handleToggleWishlist = () => {
    setShowWishlist(!showWishlist);
  };

  /**
   * Adds an opportunity to the comparison list
   * @param {InvestmentOpportunity} opportunity - The opportunity to add to comparison
   * @returns {void}
   */
  const handleAddToComparison = (opportunity: InvestmentOpportunity) => {
    setComparisonList(prev => {
      // Check if already in comparison
      if (prev.some(item => item.id === opportunity.id)) {
        toast.info("Already in comparison");
        return prev;
      }
      // Limit to 4 items in comparison
      if (prev.length >= 4) {
        toast.error("Maximum 4 items allowed in comparison");
        return prev;
      }
      toast.success(`${opportunity.title} added to comparison!`);
      return [...prev, opportunity];
    });
  };

  /**
   * Removes an opportunity from the comparison list
   * @param {string} id - The ID of the opportunity to remove
   * @returns {void}
   */
  const handleRemoveFromComparison = (id: string) => {
    setComparisonList(prev => prev.filter(item => item.id !== id));
  };

  /**
   * Toggles the comparison modal visibility
   * @returns {void}
   */
  const handleToggleComparison = () => {
    setShowComparison(!showComparison);
  };

  /**
   * Signs out the current user
   * @returns {Promise<void>}
   */
  const handleSignOut = async () => {
    // Remove user data from localStorage
    localStorage.removeItem('user');
    // Clear user state
    setUser(null);
    setProfile(null);
    toast.success("Signed out successfully!");
    // Redirect to auth page
    navigate("/auth");
  };

  const lastProductElementRef = useCallback((node: HTMLDivElement) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && productHasMore) {
        setProductPage(prevPage => prevPage + 1);
      }
    });
    if (node) observer.current.observe(node);
  }, [loading, productHasMore]);

  const lastOpportunityElementRef = useCallback((node: HTMLDivElement) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && opportunityHasMore) {
        setOpportunityPage(prevPage => prevPage + 1);
      }
    });
    if (node) observer.current.observe(node);
  }, [loading, opportunityHasMore]);

  // Update filtered products when page changes
  useEffect(() => {
    const startIndex = (productPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const newProducts = filteredProducts.slice(startIndex, endIndex);

    if (newProducts.length < itemsPerPage) {
      setProductHasMore(false);
    }
  }, [productPage, filteredProducts]);

  // Update filtered opportunities when page changes
  useEffect(() => {
    const startIndex = (opportunityPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const newOpportunities = filteredOpportunities.slice(startIndex, endIndex);

    if (newOpportunities.length < itemsPerPage) {
      setOpportunityHasMore(false);
    }
  }, [opportunityPage, filteredOpportunities]);

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
    <div className="min-h-screen py-32 px-4 bg-gradient-to-br from-teal-50 via-white to-emerald-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-10 right-10 w-64 h-64 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-10 left-1/2 w-64 h-64 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header with user info and cart */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 animate-fade-in-up">
          <div className="bg-gradient-to-r from-teal-800 to-emerald-800 p-6 rounded-2xl shadow-xl transform transition-all duration-500 hover:scale-105">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 drop-shadow-lg">
              Drecan Premium Commodities
            </h1>
            <p className="text-lg text-teal-100 drop-shadow">
              100% Nigerian, Farm-Fresh, Sustainably Sourced
            </p>
          </div>

          <div className="flex items-center gap-4 flex-wrap">
            {user ? (
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm" role="region" aria-label="User profile">
                  <User className="h-4 w-4 text-teal-600" aria-hidden="true" />
                  <span className="text-sm font-medium text-teal-900">
                    {profile?.display_name || user.email}
                  </span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleSignOut}
                  className="flex items-center gap-2"
                  aria-label="Sign out"
                >
                  <LogOut className="h-4 w-4" aria-hidden="true" />
                  Sign Out
                </Button>
              </div>
            ) : (
              <Button onClick={() => navigate("/auth")} aria-label="Sign in">
                Sign In
              </Button>
            )}

            <div className="relative">
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
                onClick={() => cartCount > 0 ? document.getElementById('cart-section')?.scrollIntoView({ behavior: 'smooth' }) : toast.info("Your cart is empty")}
                aria-label={`View cart with ${cartCount} items`}
              >
                <ShoppingCart className="h-4 w-4" aria-hidden="true" />
                Cart ({cartCount})
              </Button>
              {cartCount > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-teal-600" aria-label={`${cartCount} items in cart`}>
                  {cartCount}
                </Badge>
              )}
            </div>

            <div className="relative">
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
                onClick={handleToggleWishlist}
                aria-label={`View wishlist with ${wishlist.length} items`}
              >
                <Heart className="h-4 w-4" aria-hidden="true" />
                Wishlist ({wishlist.length})
              </Button>
              {wishlist.length > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-teal-600" aria-label={`${wishlist.length} items in wishlist`}>
                  {wishlist.length}
                </Badge>
              )}
            </div>

            {comparisonList.length > 0 && (
              <div className="relative">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                  onClick={handleToggleComparison}
                  aria-label={`View comparison with ${comparisonList.length} items`}
                >
                  <GitCompare className="h-4 w-4" aria-hidden="true" />
                  Compare ({comparisonList.length})
                </Button>
                <Badge className="absolute -top-2 -right-2 bg-teal-600" aria-label={`${comparisonList.length} items in comparison`}>
                  {comparisonList.length}
                </Badge>
              </div>
            )}
          </div>
        </div>

        {/* Tabs for Products and Investment Opportunities */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8 bg-teal-100 p-1 rounded-xl">
            <TabsTrigger
              value="products"
              aria-label="Products tab"
              className="data-[state=active]:bg-teal-600 data-[state=active]:text-white transition-all duration-300"
            >
              Products
            </TabsTrigger>
            <TabsTrigger
              value="investments"
              aria-label="Investment tab"
              className="data-[state=active]:bg-teal-600 data-[state=active]:text-white transition-all duration-300"
            >
              Contribution
            </TabsTrigger>
          </TabsList>

          <TabsContent value="products">
            {/* Product Search and filter controls */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" aria-hidden="true" />
                <Input
                  placeholder="Search products..."
                  className="pl-10"
                  value={productSearchTerm}
                  onChange={(e) => setProductSearchTerm(e.target.value)}
                  aria-label="Search products"
                />
              </div>

              <div className="w-full md:w-48">
                <Label className="text-sm font-medium mb-2 block">Category</Label>
                <Select value={productCategory} onValueChange={setProductCategory}>
                  <SelectTrigger aria-label="Select product category">
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

            {/* Featured Products Section with Jumia-style mobile view */}
            <div className="featured-products">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-foreground">Featured Products</h2>
                <Button variant="link" className="text-primary" asChild>
                  <a href="/shop">See More</a>
                </Button>
              </div>

              {/* Mobile Horizontal Scroll */}
              <div className="md:hidden overflow-x-auto whitespace-nowrap scrollbar-hide -mx-4 px-4 snap-x snap-mandatory">
                <div className="flex gap-3 pb-4">
                  {products.slice(0, 7).map((product) => (
                    <div
                      key={product.id}
                      className="flex-shrink-0 w-[280px] snap-start bg-white rounded-lg shadow-sm border border-border overflow-hidden"
                    >
                      <div className="h-36 overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-3">
                        <h3 className="font-medium text-foreground mb-1 line-clamp-2">{product.name}</h3>
                        <div className="flex items-center mb-2">
                          <div className="flex text-yellow-400">
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4 fill-current" />
                          </div>
                          <span className="text-xs text-muted-foreground ml-1">(5)</span>
                        </div>
                        <p className="text-lg font-bold text-foreground mb-3">₦{product.price.toLocaleString()}</p>
                        <Button
                          className="w-full bg-teal-600 hover:bg-teal-700 text-white"
                          size="sm"
                          onClick={() => handleAddToCart(product)}
                        >
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Desktop Grid */}
              <div className="hidden md:grid grid-cols-3 gap-4">
                {products.slice(0, 6).map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-lg shadow-sm border border-border overflow-hidden"
                  >
                    <div className="h-48 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-foreground mb-1 line-clamp-2">{product.name}</h3>
                      <div className="flex items-center mb-2">
                        <div className="flex text-yellow-400">
                          <Star className="h-4 w-4 fill-current" />
                          <Star className="h-4 w-4 fill-current" />
                          <Star className="h-4 w-4 fill-current" />
                          <Star className="h-4 w-4 fill-current" />
                          <Star className="h-4 w-4 fill-current" />
                        </div>
                        <span className="text-xs text-muted-foreground ml-1">(5)</span>
                      </div>
                      <p className="text-lg font-bold text-foreground mb-3">₦{product.price.toLocaleString()}</p>
                      <Button
                        className="w-full bg-teal-600 hover:bg-teal-700 text-white"
                        size="sm"
                        onClick={() => handleAddToCart(product)}
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* All Products Grid - Jumia Style with Your Color Scheme */}
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
              <>
                {/* Mobile Horizontal Scroll - All Products */}
                <div className="md:hidden overflow-x-auto whitespace-nowrap scrollbar-hide -mx-4 px-4 snap-x snap-mandatory mt-8">
                  <div className="flex gap-3 pb-4">
                    {filteredProducts.map((product) => (
                      <div
                        key={product.id}
                        className="flex-shrink-0 w-[280px] snap-start bg-white rounded-lg shadow-sm border border-border overflow-hidden"
                      >
                        <div className="h-36 overflow-hidden">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                        <div className="p-3">
                          <h3 className="font-medium text-foreground mb-1 line-clamp-2">{product.name}</h3>
                          <div className="flex items-center mb-2">
                            <div className="flex text-yellow-400">
                              <Star className="h-4 w-4 fill-current" />
                              <Star className="h-4 w-4 fill-current" />
                              <Star className="h-4 w-4 fill-current" />
                              <Star className="h-4 w-4 fill-current" />
                              <Star className="h-4 w-4 fill-current" />
                            </div>
                            <span className="text-xs text-muted-foreground ml-1">(5)</span>
                          </div>
                          <p className="text-lg font-bold text-foreground mb-3">₦{product.price.toLocaleString()}</p>
                          <Button
                            className="w-full bg-teal-600 hover:bg-teal-700 text-white"
                            size="sm"
                            onClick={() => handleAddToCart(product)}
                          >
                            Add to Cart
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Desktop Grid - All Products */}
                <div className="hidden md:grid md:grid-cols-3 gap-4 mt-8">
                  {filteredProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-lg shadow-sm border border-border overflow-hidden"
                    >
                      <div className="h-48 overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium text-foreground mb-1 line-clamp-2">{product.name}</h3>
                        <div className="flex items-center mb-2">
                          <div className="flex text-yellow-400">
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4 fill-current" />
                          </div>
                          <span className="text-xs text-muted-foreground ml-1">(5)</span>
                        </div>
                        <p className="text-lg font-bold text-foreground mb-3">₦{product.price.toLocaleString()}</p>
                        <Button
                          className="w-full bg-teal-600 hover:bg-teal-700 text-white"
                          size="sm"
                          onClick={() => handleAddToCart(product)}
                        >
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </TabsContent>

          <TabsContent value="investments">
            {/* Investment Opportunities Search and filter controls */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" aria-hidden="true" />
                <Input
                  placeholder="Search investment opportunities..."
                  className="pl-10"
                  value={opportunitySearchTerm}
                  onChange={(e) => setOpportunitySearchTerm(e.target.value)}
                  aria-label="Search investment opportunities"
                />
              </div>

              <Select value={opportunityRegion} onValueChange={setOpportunityRegion}>
                <SelectTrigger className="w-full sm:w-48" aria-label="Select region">
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
                <SelectTrigger className="w-full sm:w-48" aria-label="Select investment type">
                  <SelectValue placeholder="Investment Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="AgroTrade">AgroTrade</SelectItem>
                  <SelectItem value="AgroReserve">AgroReserve</SelectItem>
                  <SelectItem value="AgroFarm">AgroFarm</SelectItem>
                </SelectContent>
              </Select>

              <Select value={opportunityCrop} onValueChange={setOpportunityCrop}>
                <SelectTrigger className="w-full sm:w-48" aria-label="Select crop type">
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
                  <SelectItem value="Commodity Storage">Commodity Storage</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Investment Opportunities grid - Improved mobile responsiveness with artistic cards */}
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredOpportunities.map((opportunity) => (
                  <div
                    key={opportunity.id}
                    className="bg-white rounded-lg shadow-md border border-border overflow-hidden"
                  >
                    {/* Artistic card design without images */}
                    <div className={`h-48 flex items-center justify-center ${opportunity.type === "AgroTrade" ? "bg-gradient-to-r from-teal-500 to-teal-600" :
                      opportunity.type === "AgroReserve" ? "bg-gradient-to-r from-emerald-500 to-emerald-600" :
                        "bg-gradient-to-r from-cyan-500 to-cyan-600"
                      }`}>
                      <div className="text-white text-center p-4">
                        <div className="mx-auto mb-3">
                          {opportunity.type === "AgroTrade" ? (
                            <div className="bg-white/20 p-3 rounded-full inline-block">
                              <Zap className="h-12 w-12" />
                            </div>
                          ) : opportunity.type === "AgroReserve" ? (
                            <div className="bg-white/20 p-3 rounded-full inline-block">
                              <Shield className="h-12 w-12" />
                            </div>
                          ) : (
                            <div className="bg-white/20 p-3 rounded-full inline-block">
                              <Award className="h-12 w-12" />
                            </div>
                          )}
                        </div>
                        <h3 className="font-bold text-xl">{opportunity.type}</h3>
                        <p className="text-sm opacity-90 mt-1">{opportunity.title}</p>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-bold text-foreground">{opportunity.title}</h3>
                        <Badge variant="secondary">{opportunity.type}</Badge>
                      </div>
                      <p className="text-muted-foreground text-sm mb-4">
                        {opportunity.description}
                      </p>
                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Min. Investment:</span>
                          <span className="font-medium">{opportunity.minInvestment}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Expected Surplus:</span>
                          <span className="font-medium text-primary">{opportunity.roi}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Duration:</span>
                          <span className="font-medium">{opportunity.duration}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Slots:</span>
                          <span className="font-medium">{opportunity.slotsAvailable} available</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1" onClick={() => handleViewOpportunity(opportunity)}>
                          View Details
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleAddToWishlist(opportunity)}
                        >
                          <Heart className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>

        {/* Cart summary (if items in cart) - Improved mobile responsiveness */}
        {cart.length > 0 && (
          <div id="cart-section" className="mt-12 p-4 sm:p-6 bg-white rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Your Cart</h2>
              <Button variant="ghost" size="sm" onClick={() => setCart([])} aria-label="Clear cart">
                <X className="h-4 w-4" />
              </Button>
            </div>
            <CartSummary
              cart={cart}
              onRemoveFromCart={handleRemoveFromCart}
              onUpdateQuantity={handleUpdateQuantity}
              onProceedToCheckout={handleProceedToCheckout}
              cartTotal={cartTotal}
            />
          </div>
        )}
      </div>

      {/* Wishlist Modal */}
      {showWishlist && (
        <Wishlist
          opportunities={wishlist}
          onRemoveFromWishlist={handleRemoveFromWishlist}
          onViewOpportunity={handleViewOpportunity}
          onClose={handleToggleWishlist}
        />
      )}

      {/* Comparison Modal */}
      {showComparison && (
        <OpportunityComparison
          opportunities={comparisonList}
          onRemoveFromComparison={handleRemoveFromComparison}
          onClose={handleToggleComparison}
        />
      )}
    </div>
  );

};

export default Shop;
