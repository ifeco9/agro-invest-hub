import { memo } from "react";
import { Button } from "@/components/ui/button";
import InvestmentOpportunityCard from "@/components/InvestmentOpportunityCard";

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

interface OpportunityListProps {
  opportunities: InvestmentOpportunity[];
  onViewOpportunity: (opportunity: InvestmentOpportunity) => void;
  onAddToWishlist?: (opportunity: InvestmentOpportunity) => void;
  onAddToComparison?: (opportunity: InvestmentOpportunity) => void;
  currentPage?: number;
  itemsPerPage?: number;
  onPageChange?: (page: number) => void;
}

const OpportunityList = ({ 
  opportunities, 
  onViewOpportunity,
  onAddToWishlist,
  onAddToComparison,
  currentPage = 1,
  itemsPerPage = 6,
  onPageChange
}: OpportunityListProps) => {
  // Calculate pagination if needed
  const totalPages = Math.ceil(opportunities.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentOpportunities = opportunities.slice(startIndex, endIndex);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentOpportunities.map((opportunity) => (
          <InvestmentOpportunityCard 
            key={opportunity.id} 
            opportunity={opportunity} 
            onAddToCart={onViewOpportunity}
            onAddToWishlist={onAddToWishlist}
            onAddToComparison={onAddToComparison}
          />
        ))}
      </div>
      
      {/* Pagination Controls */}
      {onPageChange && totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-8 flex-wrap">
          <Button
            variant="outline"
            onClick={() => onPageChange(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="whitespace-nowrap"
          >
            Previous
          </Button>
          
          {[...Array(totalPages)].map((_, i) => {
            const pageNumber = i + 1;
            // Only show first, last, current, and nearby pages
            if (pageNumber === 1 || pageNumber === totalPages || 
                (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)) {
              return (
                <Button
                  key={pageNumber}
                  variant={currentPage === pageNumber ? "default" : "outline"}
                  onClick={() => onPageChange(pageNumber)}
                  className={currentPage === pageNumber ? "bg-teal-600 whitespace-nowrap" : "whitespace-nowrap"}
                >
                  {pageNumber}
                </Button>
              );
            }
            // Show ellipsis for skipped pages
            if (pageNumber === currentPage - 2 || pageNumber === currentPage + 2) {
              return (
                <span key={pageNumber} className="px-2 py-2 text-muted-foreground">
                  ...
                </span>
              );
            }
            return null;
          })}
          
          <Button
            variant="outline"
            onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="whitespace-nowrap"
          >
            Next
          </Button>
        </div>
      )}
    </>
  );
};

// Memoize the component to prevent unnecessary re-renders
export default memo(OpportunityList);