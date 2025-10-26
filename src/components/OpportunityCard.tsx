import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Clock, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

interface OpportunityCardProps {
  title: string;
  image?: string;
  region: string;
  crop: string;
  minInvestment: string;
  roi: string;
  duration: string;
  slotsAvailable: number;
  type: string;
}

const OpportunityCard = ({
  title,
  image,
  region,
  crop,
  minInvestment,
  roi,
  duration,
  slotsAvailable,
  type,
}: OpportunityCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-scale-in">
      <div className="relative h-48 overflow-hidden">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-gradient-primary flex items-center justify-center">
            <span className="text-primary-foreground text-lg font-semibold">{type}</span>
          </div>
        )}
        <Badge className="absolute top-4 right-4 bg-background/90 text-foreground hover:bg-background">
          {type}
        </Badge>
        {slotsAvailable < 5 && (
          <Badge className="absolute top-4 left-4 bg-destructive text-destructive-foreground">
            Limited Slots
          </Badge>
        )}
      </div>

      <CardHeader>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-1" />
            {region}
          </div>
          <Badge variant="outline" className="text-xs">
            {crop}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Min. Investment</p>
            <p className="font-semibold">{minInvestment}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Expected ROI</p>
            <div className="flex items-center font-semibold text-primary">
              <TrendingUp className="h-4 w-4 mr-1" />
              {roi}
            </div>
          </div>
        </div>

        <div className="flex items-center text-sm">
          <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
          <span className="text-muted-foreground">{duration}</span>
        </div>

        <div className="pt-2">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-muted-foreground">Slots Available</span>
            <span className="font-medium">{slotsAvailable}</span>
          </div>
          <div className="w-full bg-secondary rounded-full h-2">
            <div
              className="bg-primary h-2 rounded-full transition-all"
              style={{ width: `${Math.min((slotsAvailable / 20) * 100, 100)}%` }}
            />
          </div>
        </div>
      </CardContent>

      <CardFooter>
        <Button className="w-full" asChild>
          <Link to="/contact">Reserve Now</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default OpportunityCard;
