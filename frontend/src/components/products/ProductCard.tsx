import { Link } from '@tanstack/react-router';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { Product } from '@/backend';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const imageUrl = product.imageUrl || '/assets/generated/farm2retail-product-placeholder.dim_800x600.png';

  return (
    <Card className="overflow-hidden border-2 hover:shadow-soft transition-shadow group">
      <div className="relative overflow-hidden bg-muted h-48">
        <img
          src={imageUrl}
          alt={product.name}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute top-2 right-2 flex gap-2">
          <Badge variant={product.inStock ? 'default' : 'secondary'} className="shadow-sm">
            {product.inStock ? 'In Stock' : 'Out of Stock'}
          </Badge>
        </div>
      </div>
      <CardContent className="pt-4">
        <div className="mb-2">
          <Badge variant="outline" className="text-xs">
            {product.category}
          </Badge>
        </div>
        <h3 className="font-semibold text-lg mb-2 line-clamp-1">{product.name}</h3>
        <p className="text-xl font-bold text-accent">
          ${product.price.toFixed(2)}
          <span className="text-sm text-muted-foreground font-normal"> / {product.unit}</span>
        </p>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" className="w-full">
          <Link to="/products/$id" params={{ id: product.id.toString() }}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

