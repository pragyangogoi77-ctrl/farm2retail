import { ShoppingCart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';

export default function CartPage() {
  return (
    <div className="container py-12">
      <h1 className="font-display text-4xl font-bold mb-8">Your Cart</h1>
      
      <Card className="max-w-2xl mx-auto">
        <CardContent className="flex flex-col items-center justify-center py-16 px-6 text-center">
          <div className="rounded-full bg-muted p-6 mb-6">
            <ShoppingCart className="h-12 w-12 text-muted-foreground" />
          </div>
          <h2 className="font-display text-2xl font-semibold mb-2">Your cart is empty</h2>
          <p className="text-muted-foreground mb-6">
            Start shopping to add items to your cart
          </p>
          <Link to="/products">
            <Button size="lg">
              Browse Products
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
