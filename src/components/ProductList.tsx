import { memo } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";

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

interface ProductListProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  currentPage: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

const ProductList = ({ products, onAddToCart, currentPage, itemsPerPage, onPageChange }: ProductListProps) => {
  // Calculate pagination
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {currentProducts.map((product) => (
          <Card 
            key={product.id} 
            className="overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-white to-teal-50 border-teal-100"
          >
            <div className="aspect-video w-full overflow-hidden bg-muted relative group">
              {product.image ? (
                <>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </>
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-teal-100 to-emerald-100">
                  <ShoppingCart className="w-16 h-16 text-teal-600" />
                </div>
              )}
            </div>
            <CardHeader>
              <div className="flex items-start justify-between">
                <CardTitle className="text-xl text-teal-900">{product.name}</CardTitle>
                {product.category && (
                  <Badge className="bg-teal-600 hover:bg-teal-700 transition-colors duration-300">{product.category}</Badge>
                )}
              </div>
              <CardDescription className="text-teal-700">{product.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-teal-700">
                  ₦{product.price.toLocaleString()}
                </span>
                <div className="flex items-center gap-2">
                  {product.in_stock ? (
                    <Badge className="bg-teal-500 hover:bg-teal-600 transition-colors duration-300 animate-pulse-slow">In Stock</Badge>
                  ) : (
                    <Badge variant="destructive">Out of Stock</Badge>
                  )}
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                onClick={() => onAddToCart(product)}
                disabled={!product.in_stock}
              >
                <ShoppingCart className="mr-2 h-4 w-4" />
                {product.in_stock ? "Add to Cart" : "Out of Stock"}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-8 flex-wrap">
          <Button
            variant="outline"
            onClick={() => onPageChange(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="whitespace-nowrap border-teal-300 text-teal-700 hover:bg-teal-50 hover:border-teal-400 transition-colors duration-300"
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
                  className={currentPage === pageNumber ? "bg-teal-600 hover:bg-teal-700 whitespace-nowrap transition-colors duration-300" : "whitespace-nowrap border-teal-300 text-teal-700 hover:bg-teal-50 hover:border-teal-400 transition-colors duration-300"}
                >
                  {pageNumber}
                </Button>
              );
            }
            // Show ellipsis for skipped pages
            if (pageNumber === currentPage - 2 || pageNumber === currentPage + 2) {
              return (
                <span key={pageNumber} className="px-2 py-2 text-teal-500">
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
            className="whitespace-nowrap border-teal-300 text-teal-700 hover:bg-teal-50 hover:border-teal-400 transition-colors duration-300"
          >
            Next
          </Button>
        </div>
      )}
    </>
  );
};

// Memoize the component to prevent unnecessary re-renders
export default memo(ProductList);