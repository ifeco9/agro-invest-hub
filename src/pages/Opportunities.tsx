

import { useState } from "react";
import OpportunityCard from "@/components/OpportunityCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import riceFarm from "@/assets/new/rice-farm.jpg";
import sustainableFarm from "@/assets/new/sustainable-farm.jpg";
import farmEquipment from "@/assets/new/farm-equipment.jpg";
import dairyFarm from "@/assets/new/dairy-farm.jpg";
import vegetableFarm from "@/assets/new/vegetable-farm.jpg";
import solarFarm from "@/assets/new/solar-farm.jpg";
import wheatField from "@/assets/wheat-field.jpg";

const Opportunities = () => {
  const [regionFilter, setRegionFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [cropFilter, setCropFilter] = useState("all");

  const opportunities = [
    {
      title: "Kaduna Rice Yield Fund",
      image: riceFarm,
      region: "Kaduna",
      crop: "Rice",
      minInvestment: "₦2,000,000",
      roi: "10-12%",
      duration: "12 months",
      slotsAvailable: 8,
      type: "Crop Yield",
    },
    {
      title: "Ogun Cassava Processing Investment",
      image: sustainableFarm,
      region: "Ogun",
      crop: "Cassava",
      minInvestment: "₦4,000,000",
      roi: "8-10%",
      duration: "24 months",
      slotsAvailable: 15,
      type: "Sustainable",
    },
    {
      title: "Kano Wheat Farming Project",
      image: wheatField,
      region: "Kano",
      crop: "Wheat",
      minInvestment: "₦3,000,000",
      roi: "9-11%",
      duration: "18 months",
      slotsAvailable: 3,
      type: "Crop Yield",
    },
    {
      title: "Plateau Dairy & Maize Farm",
      image: dairyFarm,
      region: "Plateau",
      crop: "Maize",
      minInvestment: "₦6,000,000",
      roi: "11-13%",
      duration: "36 months",
      slotsAvailable: 12,
      type: "Livestock",
    },
    {
      title: "Lagos Beans Cultivation Hub",
      image: vegetableFarm,
      region: "Lagos",
      crop: "Beans",
      minInvestment: "₦3,200,000",
      roi: "9-11%",
      duration: "18 months",
      slotsAvailable: 6,
      type: "Crop Yield",
    },
    {
      title: "South-South Palm Oil Investment",
      image: sustainableFarm,
      region: "Rivers",
      crop: "Palm Oil",
      minInvestment: "₦8,000,000",
      roi: "12-14%",
      duration: "60 months",
      slotsAvailable: 4,
      type: "Sustainable",
    },
    {
      title: "Benue Yam Production Fund",
      image: wheatField,
      region: "Benue",
      crop: "Yam",
      minInvestment: "₦2,500,000",
      roi: "10-12%",
      duration: "12 months",
      slotsAvailable: 10,
      type: "Crop Yield",
    },
    {
      title: "Enugu Egusi (Melon) Seed Farm",
      image: vegetableFarm,
      region: "Enugu",
      crop: "Egusi",
      minInvestment: "₦1,800,000",
      roi: "11-13%",
      duration: "9 months",
      slotsAvailable: 7,
      type: "Crop Yield",
    },
    {
      title: "Kebbi Sorghum Yield Project",
      image: wheatField,
      region: "Kebbi",
      crop: "Sorghum",
      minInvestment: "₦2,200,000",
      roi: "9-11%",
      duration: "15 months",
      slotsAvailable: 9,
      type: "Crop Yield",
    },
    {
      title: "Borno Millet Farming Initiative",
      image: sustainableFarm,
      region: "Borno",
      crop: "Millet",
      minInvestment: "₦1,900,000",
      roi: "8-10%",
      duration: "12 months",
      slotsAvailable: 11,
      type: "Crop Yield",
    },
    {
      title: "Kogi Soybeans Investment Fund",
      image: wheatField,
      region: "Kogi",
      crop: "Soybeans",
      minInvestment: "₦3,500,000",
      roi: "10-12%",
      duration: "18 months",
      slotsAvailable: 5,
      type: "Crop Yield",
    },
    {
      title: "Equipment Leasing Programme",
      image: farmEquipment,
      region: "Multi-State",
      crop: "Various",
      minInvestment: "₦5,000,000",
      roi: "9-11%",
      duration: "24 months",
      slotsAvailable: 8,
      type: "Equipment",
    },
  ];

  const filteredOpportunities = opportunities.filter((opp) => {
    const matchesRegion = regionFilter === "all" || opp.region === regionFilter;
    const matchesType = typeFilter === "all" || opp.type === typeFilter;
    const matchesCrop = cropFilter === "all" || opp.crop === cropFilter;
    return matchesRegion && matchesType && matchesCrop;
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
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
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
                  <SelectItem value="Rivers">Rivers</SelectItem>
                  <SelectItem value="Benue">Benue</SelectItem>
                  <SelectItem value="Enugu">Enugu</SelectItem>
                  <SelectItem value="Kebbi">Kebbi</SelectItem>
                  <SelectItem value="Borno">Borno</SelectItem>
                  <SelectItem value="Kogi">Kogi</SelectItem>
                  <SelectItem value="Multi-State">Multi-State</SelectItem>
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

              <Select value={cropFilter} onValueChange={setCropFilter}>
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
                <div key={index}>
                  <OpportunityCard {...opportunity} />
                </div>
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
                  setCropFilter("all");
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