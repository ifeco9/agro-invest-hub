import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Clock, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

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

interface InvestmentOpportunityCardProps {
  opportunity: InvestmentOpportunity;
  onAddToCart?: (opportunity: InvestmentOpportunity) => void;
}

const InvestmentOpportunityCard = ({
  opportunity,
  onAddToCart,
}: InvestmentOpportunityCardProps) => {
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCartClick = () => {
    if (onAddToCart) {
      setIsAdding(true);
      onAddToCart(opportunity);
      setTimeout(() => setIsAdding(false), 1000);
    }
  };

  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-scale-in group bg-mint-50 border border-mint-200">
      <div className="relative h-48 overflow-hidden group-hover:scale-105 transition-transform duration-300 ease-in-out">
        {opportunity.image ? (
          <img src={opportunity.image} alt={opportunity.title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-teal-600 flex items-center justify-center">
            <span className="text-white text-lg font-semibold">{opportunity.type}</span>
          </div>
        )}
        <Badge className="absolute top-4 right-4 bg-white/90 text-teal-900 hover:bg-white">
          {opportunity.type}
        </Badge>
        {opportunity.slotsAvailable < 5 && (
          <Badge className="absolute top-4 left-4 bg-emerald-500 text-white">
            Limited Slots
          </Badge>
        )}
      </div>

      <CardHeader>
        <h3 className="text-xl font-semibold mb-2 text-teal-900">{opportunity.title}</h3>
        <div className="flex items-center justify-between text-sm text-teal-800">
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-1" />
            {opportunity.region}
          </div>
          <Badge variant="outline" className="text-xs border-mint-200 text-teal-800">
            {opportunity.crop}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-teal-800">Min. Investment</p>
            <p className="font-semibold text-teal-900">₦{opportunity.price.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-sm text-teal-800">Expected ROI</p>
            <div className="flex items-center font-semibold text-teal-600">
              <TrendingUp className="h-4 w-4 mr-1" />
              {opportunity.roi}
            </div>
          </div>
        </div>

        <div className="flex items-center text-sm text-teal-800">
          <Clock className="h-4 w-4 mr-1" />
          <span>{opportunity.duration}</span>
        </div>

        <div className="pt-2">
          <div className="flex justify-between text-sm mb-1 text-teal-800">
            <span>Slots Available</span>
            <span className="font-medium text-teal-900">{opportunity.slotsAvailable}</span>
          </div>
          <div className="w-full bg-mint-100 rounded-full h-2">
            <div
              className="bg-teal-600 h-2 rounded-full transition-all"
              style={{ width: `${Math.min((opportunity.slotsAvailable / 20) * 100, 100)}%` }}
            />
          </div>
        </div>
      </CardContent>

      <CardFooter>
        <Button 
          className={`w-full bg-teal-600 hover:bg-teal-700 text-white ${opportunity.slotsAvailable < 3 ? 'animate-pulse' : ''}`}
          onClick={handleAddToCartClick}
          disabled={isAdding || opportunity.slotsAvailable === 0}
        >
          {isAdding ? "Adding..." : opportunity.slotsAvailable === 0 ? "Sold Out" : "Add to Cart"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default InvestmentOpportunityCard;