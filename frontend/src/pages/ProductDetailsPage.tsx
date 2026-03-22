import { useParams, Link } from '@tanstack/react-router';
import { useGetProductById, useGetFarmById } from '@/hooks/useQueries';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, MapPin } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

export default function ProductDetailsPage() {
  const { id } = useParams({ from: '/products/$id' });
  const productId = BigInt(id);
  
  const { data: product, isLoading: productLoading } = useGetProductById(productId);
  const { data: farm, isLoading: farmLoading } = useGetFarmById(product?.farmId || BigInt(0));

  if (productLoading) {
    return (
      <div className="container py-8 md:py-12">
        <Skeleton className="h-8 w-32 mb-8" />
        <div className="grid gap-8 lg:grid-cols-2">
          <Skeleton className="h-96 w-full rounded-lg" />
          <div className="space-y-4">
            <Skeleton className="h-10 w-3/4" />
            <Skeleton className="h-6 w-1/2" />
            <Skeleton className="h-24 w-full" />
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container py-8 md:py-12">
        <p className="text-center text-lg text-muted-foreground">Product not found.</p>
      </div>
    );
  }

  const imageUrl = product.imageUrl || '/assets/generated/farm2retail-product-placeholder.dim_800x600.png';

  return (
    <div className="container py-8 md:py-12">
      <Button asChild variant="ghost" className="mb-6">
        <Link to="/products">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Products
        </Link>
      </Button>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Product Image */}
        <div className="relative overflow-hidden rounded-lg bg-muted">
          <img
            src={imageUrl}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Badge variant={product.inStock ? 'default' : 'secondary'}>
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </Badge>
              <Badge variant="outline">{product.category}</Badge>
            </div>
            <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl text-primary mb-2">
              {product.name}
            </h1>
            <p className="text-2xl font-semibold text-accent">
              ${product.price.toFixed(2)} <span className="text-base text-muted-foreground">/ {product.unit}</span>
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Description</h2>
            <p className="text-muted-foreground leading-relaxed">{product.description}</p>
          </div>

          {/* Farm Information */}
          {farm && (
            <Card className="border-2">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-3">From the Farm</h3>
                <div className="flex items-start gap-4">
                  <img
                    src={farm.imageUrl || '/assets/generated/farm2retail-farm-placeholder.dim_800x600.png'}
                    alt={farm.name}
                    className="h-20 w-20 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-primary">{farm.name}</h4>
                    <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                      <MapPin className="h-3 w-3" />
                      {farm.location}
                    </p>
                    <Button asChild variant="link" className="h-auto p-0 mt-2">
                      <Link to="/farms/$id" params={{ id: farm.id.toString() }}>
                        View Farm Details
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}

