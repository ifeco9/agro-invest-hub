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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentProducts.map((product) => (
          <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="aspect-video w-full overflow-hidden bg-muted">
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-teal-100">
                  <ShoppingCart className="w-16 h-16 text-teal-400" />
                </div>
              )}
            </div>
            <CardHeader>
              <div className="flex items-start justify-between">
                <CardTitle className="text-xl">{product.name}</CardTitle>
                {product.category && (
                  <Badge variant="secondary">{product.category}</Badge>
                )}
              </div>
              <CardDescription>{product.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-teal-600">
                  ₦{product.price.toLocaleString()}
                </span>
                <div className="flex items-center gap-2">
                  {product.in_stock ? (
                    <Badge className="bg-teal-500">In Stock</Badge>
                  ) : (
                    <Badge variant="destructive">Out of Stock</Badge>
                  )}
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full"
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
export default memo(ProductList);