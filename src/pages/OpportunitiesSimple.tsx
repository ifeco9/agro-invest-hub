import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const OpportunitiesSimple = () => {
  const [investmentAmount, setInvestmentAmount] = useState(2000000);
  
  const handleReserveSlot = () => {
    alert("Thank you for your interest! Our team will contact you shortly to finalize your reservation.");
  };

  return (
    <div className="min-h-screen pt-16 sm:pt-20">
      {/* Header */}
      <section className="py-12 sm:py-16 bg-teal-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Invest in Agriculture. Earn Returns. Empower Lives.
          </h1>
          <p className="text-base sm:text-xl max-w-md sm:max-w-3xl mx-auto">
            Join thousands of investors who are making a difference while earning sustainable returns
          </p>
        </div>
      </section>

      {/* Investment Tables */}
      <section className="py-12 sm:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-12 sm:space-y-16">
            {/* AgroTrade */}
            <div className="bg-card rounded-lg shadow-lg border border-border overflow-hidden">
              <div className="bg-teal-800 text-white p-4 sm:p-6">
                <div className="flex items-center gap-2 sm:gap-3 mb-2">
                  <h2 className="text-2xl sm:text-3xl font-bold">AgroTrade Investment</h2>
                </div>
                <p className="text-teal-100 text-sm sm:text-base">Short-term trading opportunities with consistent returns</p>
              </div>
              <div className="p-4 sm:p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4">
                      Investment Details
                    </h3>
                    <ul className="space-y-2 sm:space-y-3 text-muted-foreground">
                      <li className="flex justify-between border-b pb-2">
                        <span className="text-sm sm:text-base">Minimum Investment:</span>
                        <span className="font-semibold text-sm sm:text-base">₦2,000,000</span>
                      </li>
                      <li className="flex justify-between border-b pb-2">
                        <span className="text-sm sm:text-base">Expected ROI:</span>
                        <span className="font-semibold text-sm sm:text-base">8-12% annually</span>
                      </li>
                      <li className="flex justify-between border-b pb-2">
                        <span className="text-sm sm:text-base">Duration:</span>
                        <span className="font-semibold text-sm sm:text-base">6-12 months</span>
                      </li>
                      <li className="flex justify-between border-b pb-2">
                        <span className="text-sm sm:text-base">Payout Frequency:</span>
                        <span className="font-semibold text-sm sm:text-base">Monthly</span>
                      </li>
                      <li className="flex justify-between border-b pb-2">
                        <span className="text-sm sm:text-base">Risk Level:</span>
                        <span className="font-semibold text-sm sm:text-base">Low-Medium</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4">
                      Projected Returns
                    </h3>
                    <div className="bg-secondary rounded-lg p-3 sm:p-4 mb-4">
                      <div className="text-center">
                        <div className="text-xl sm:text-3xl font-bold text-primary">
                          ₦{investmentAmount.toLocaleString()} → ₦{(investmentAmount * 1.1).toLocaleString(undefined, { maximumFractionDigits: 0 })}
                        </div>
                        <p className="text-muted-foreground mt-2 text-sm sm:text-base">
                          Return on a ₦{investmentAmount.toLocaleString()} investment
                        </p>
                      </div>
                      <div className="mt-4">
                        <label className="block text-muted-foreground mb-2 text-sm">Investment Amount:</label>
                        <input
                          type="range"
                          min="2000000"
                          max="10000000"
                          step="100000"
                          value={investmentAmount}
                          onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                          className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer"
                        />
                        <div className="flex justify-between text-sm text-muted-foreground mt-1">
                          <span>₦2M</span>
                          <span>₦10M</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 sm:mt-8 text-center">
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary-hover text-primary-foreground shadow-lg hover:shadow-xl px-6 sm:px-8 py-3 rounded-full font-bold text-base sm:text-lg"
                    onClick={handleReserveSlot}
                  >
                    Reserve Slot
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OpportunitiesSimple;