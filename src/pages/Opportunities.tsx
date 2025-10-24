import { useState } from "react";
import OpportunityCard from "@/components/OpportunityCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import wheatField from "@/assets/wheat-field.jpg";
import sustainableFarm from "@/assets/sustainable-farm.jpg";
import farmEquipment from "@/assets/farm-equipment.jpg";

const Opportunities = () => {
  const [regionFilter, setRegionFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");

  const opportunities = [
    {
      title: "Kaduna Rice Yield Fund",
      image: wheatField,
      region: "Kaduna",
      minInvestment: "₦2,000,000",
      roi: "10-12%",
      duration: "12 months",
      slotsAvailable: 8,
      type: "Crop Yield",
    },
    {
      title: "Sustainable Farming Project",
      image: sustainableFarm,
      region: "Ogun",
      minInvestment: "₦4,000,000",
      roi: "8-10%",
      duration: "24 months",
      slotsAvailable: 15,
      type: "Sustainable",
    },
    {
      title: "Equipment Leasing Programme",
      image: farmEquipment,
      region: "Kano",
      minInvestment: "₦3,000,000",
      roi: "9-11%",
      duration: "18 months",
      slotsAvailable: 3,
      type: "Equipment",
    },
    {
      title: "Plateau Dairy Farm Investment",
      image: sustainableFarm,
      region: "Plateau",
      minInvestment: "₦6,000,000",
      roi: "11-13%",
      duration: "36 months",
      slotsAvailable: 12,
      type: "Livestock",
    },
    {
      title: "Lagos Organic Vegetable Farm",
      image: wheatField,
      region: "Lagos",
      minInvestment: "₦3,200,000",
      roi: "9-11%",
      duration: "18 months",
      slotsAvailable: 6,
      type: "Crop Yield",
    },
    {
      title: "Niger Renewable Energy Farm",
      image: sustainableFarm,
      region: "Niger",
      minInvestment: "₦8,000,000",
      roi: "12-14%",
      duration: "60 months",
      slotsAvailable: 4,
      type: "Sustainable",
    },
  ];

  const filteredOpportunities = opportunities.filter((opp) => {
    const matchesRegion = regionFilter === "all" || opp.region === regionFilter;
    const matchesType = typeFilter === "all" || opp.type === typeFilter;
    return matchesRegion && matchesType;
  });

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-16 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary-foreground">
            Investment Opportunities
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Explore transparent agricultural investment opportunities across Nigeria with verified returns and sustainable impact.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-secondary border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <Select value={regionFilter} onValueChange={setRegionFilter}>
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
                  <SelectItem value="Niger">Niger</SelectItem>
                </SelectContent>
              </Select>

              <Select value={typeFilter} onValueChange={setTypeFilter}>
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
            </div>

            <div className="text-sm text-muted-foreground">
              Showing {filteredOpportunities.length} of {opportunities.length} opportunities
            </div>
          </div>
        </div>
      </section>

      {/* Opportunities Grid */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          {filteredOpportunities.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredOpportunities.map((opportunity, index) => (
                <OpportunityCard key={index} {...opportunity} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground mb-4">
                No opportunities match your filters. Try adjusting your selection.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setRegionFilter("all");
                  setTypeFilter("all");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            New opportunities are added regularly. Contact our team to discuss custom investment options or join our waitlist for upcoming projects.
          </p>
          <Button size="lg">Contact Our Team</Button>
        </div>
      </section>
    </div>
  );
};

export default Opportunities;
