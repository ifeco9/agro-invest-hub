import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X, TrendingUp, Clock, MapPin } from "lucide-react";

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

interface WishlistProps {
  opportunities: InvestmentOpportunity[];
  onRemoveFromWishlist: (id: string) => void;
  onViewOpportunity: (opportunity: InvestmentOpportunity) => void;
  onClose: () => void;
}

const Wishlist = ({ 
  opportunities, 
  onRemoveFromWishlist, 
  onViewOpportunity,
  onClose
}: WishlistProps) => {
  if (opportunities.length === 0) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto">
        <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
          <h2 className="text-2xl font-bold text-teal-900">Your Wishlist</h2>
          <Button variant="ghost" onClick={onClose}>
            <X className="h-6 w-6" />
          </Button>
        </div>
        
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {opportunities.map((opportunity) => (
            <Card key={opportunity.id} className="overflow-hidden">
              <div className="relative h-32 overflow-hidden">
                {opportunity.image ? (
                  <img 
                    src={opportunity.image} 
                    alt={opportunity.title} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full bg-teal-600 flex items-center justify-center">
                    <span className="text-white text-lg font-semibold">{opportunity.type}</span>
                  </div>
                )}
                <Badge className="absolute top-2 right-2 bg-white/90 text-teal-900">
                  {opportunity.type}
                </Badge>
              </div>
              
              <CardHeader className="pb-2">
                <h3 className="text-lg font-semibold mb-1 text-teal-900">{opportunity.title}</h3>
                <div className="flex items-center justify-between text-sm text-teal-800">
                  <div className="flex items-center">
                    <MapPin className="h-3 w-3 mr-1" />
                    {opportunity.region}
                  </div>
                  <Badge variant="outline" className="text-xs border-mint-200 text-teal-800">
                    {opportunity.crop}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="pb-2">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <p className="text-xs text-teal-800">Min. Investment</p>
                    <p className="font-semibold text-teal-900">₦{opportunity.price.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-xs text-teal-800">Expected ROI</p>
                    <div className="flex items-center font-semibold text-teal-600">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      {opportunity.roi}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center text-xs text-teal-800 mt-1">
                  <Clock className="h-3 w-3 mr-1" />
                  <span>{opportunity.duration}</span>
                </div>
              </CardContent>
              
              <CardFooter className="flex gap-2">
                <Button 
                  size="sm" 
                  className="flex-1 bg-teal-600 hover:bg-teal-700"
                  onClick={() => onViewOpportunity(opportunity)}
                >
                  View Details
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => onRemoveFromWishlist(opportunity.id)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;