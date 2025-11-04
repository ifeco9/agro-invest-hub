import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { InvestmentOpportunity } from "@/pages/Shop";

interface OpportunityComparisonProps {
  opportunities: InvestmentOpportunity[];
  onRemoveFromComparison: (id: string) => void;
  onClose: () => void;
}

const OpportunityComparison = ({ 
  opportunities, 
  onRemoveFromComparison, 
  onClose 
}: OpportunityComparisonProps) => {
  if (opportunities.length === 0) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-auto">
        <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
          <h2 className="text-2xl font-bold text-teal-900">Compare Investment Opportunities</h2>
          <Button variant="ghost" onClick={onClose}>
            <X className="h-6 w-6" />
          </Button>
        </div>
        
        <div className="p-4 overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left p-2">Feature</th>
                {opportunities.map(opp => (
                  <th key={opp.id} className="p-2 min-w-[200px]">
                    <div className="flex flex-col items-center">
                      <span className="font-bold">{opp.title}</span>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => onRemoveFromComparison(opp.id)}
                        className="mt-2"
                      >
                        Remove
                      </Button>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 font-medium">Region</td>
                {opportunities.map(opp => (
                  <td key={opp.id} className="p-2 text-center">{opp.region}</td>
                ))}
              </tr>
              <tr>
                <td className="p-2 font-medium">Crop</td>
                {opportunities.map(opp => (
                  <td key={opp.id} className="p-2 text-center">{opp.crop}</td>
                ))}
              </tr>
              <tr>
                <td className="p-2 font-medium">Minimum Investment</td>
                {opportunities.map(opp => (
                  <td key={opp.id} className="p-2 text-center font-bold">₦{opp.price.toLocaleString()}</td>
                ))}
              </tr>
              <tr>
                <td className="p-2 font-medium">Expected ROI</td>
                {opportunities.map(opp => (
                  <td key={opp.id} className="p-2 text-center">{opp.roi}</td>
                ))}
              </tr>
              <tr>
                <td className="p-2 font-medium">Duration</td>
                {opportunities.map(opp => (
                  <td key={opp.id} className="p-2 text-center">{opp.duration}</td>
                ))}
              </tr>
              <tr>
                <td className="p-2 font-medium">Slots Available</td>
                {opportunities.map(opp => (
                  <td key={opp.id} className="p-2 text-center">{opp.slotsAvailable}</td>
                ))}
              </tr>
              <tr>
                <td className="p-2 font-medium">Type</td>
                {opportunities.map(opp => (
                  <td key={opp.id} className="p-2 text-center">{opp.type}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OpportunityComparison;