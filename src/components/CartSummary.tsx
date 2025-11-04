import { Button } from "@/components/ui/button";
import { CartItem } from "@/pages/Shop";

interface CartSummaryProps {
  cart: CartItem[];
  onRemoveFromCart: (productId: string) => void;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onProceedToCheckout: () => void;
  cartTotal: number;
}

const CartSummary = ({ 
  cart, 
  onRemoveFromCart, 
  onUpdateQuantity, 
  onProceedToCheckout, 
  cartTotal 
}: CartSummaryProps) => {
  return (
    <div className="space-y-4">
      {cart.map(item => (
        <div key={item.id} className="flex justify-between items-center border-b pb-4">
          <div>
            <h3 className="font-medium">{item.name}</h3>
            <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                disabled={item.quantity <= 1}
              >
                -
              </Button>
              <span className="w-8 text-center">{item.quantity}</span>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
              >
                +
              </Button>
            </div>
            <span className="font-medium">₦{(item.price * item.quantity).toLocaleString()}</span>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => onRemoveFromCart(item.id)}
            >
              Remove
            </Button>
          </div>
        </div>
      ))}
      <div className="flex justify-between items-center pt-4 border-t">
        <span className="text-xl font-bold">Total: ₦{cartTotal.toLocaleString()}</span>
        <Button 
          onClick={onProceedToCheckout}
          className="bg-teal-600 hover:bg-teal-700"
        >
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
};

export default CartSummary;