import { useParams, Link } from '@tanstack/react-router';
import { useGetFarmById, useGetProductsByFarmId } from '@/hooks/useQueries';
import { Button } from '@/components/ui/button';
import { ArrowLeft, MapPin } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import ProductCard from '@/components/products/ProductCard';

export default function FarmDetailsPage() {
  const { id } = useParams({ from: '/farms/$id' });
  const farmId = BigInt(id);
  
  const { data: farm, isLoading: farmLoading } = useGetFarmById(farmId);
  const { data: products, isLoading: productsLoading } = useGetProductsByFarmId(farmId);

  if (farmLoading) {
    return (
      <div className="container py-8 md:py-12">
        <Skeleton className="h-8 w-32 mb-8" />
        <Skeleton className="h-96 w-full rounded-lg mb-8" />
        <Skeleton className="h-10 w-3/4 mb-4" />
        <Skeleton className="h-24 w-full" />
      </div>
    );
  }

  if (!farm) {
    return (
      <div className="container py-8 md:py-12">
        <p className="text-center text-lg text-muted-foreground">Farm not found.</p>
      </div>
    );
  }

  const imageUrl = farm.imageUrl || '/assets/generated/farm2retail-farm-placeholder.dim_800x600.png';

  return (
    <div className="container py-8 md:py-12">
      <Button asChild variant="ghost" className="mb-6">
        <Link to="/farms">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Farms
        </Link>
      </Button>

      {/* Farm Header */}
      <div className="mb-12">
        <div className="relative overflow-hidden rounded-lg bg-muted mb-6 h-64 md:h-96">
          <img
            src={imageUrl}
            alt={farm.name}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl text-primary mb-3">
            {farm.name}
          </h1>
          <p className="text-lg text-muted-foreground flex items-center gap-2 mb-4">
            <MapPin className="h-5 w-5" />
            {farm.location}
          </p>
          <p className="text-lg leading-relaxed">{farm.description}</p>
        </div>
      </div>

      {/* Farm Products */}
      <div>
        <h2 className="font-display text-2xl font-bold tracking-tight text-primary mb-6">
          Products from {farm.name}
        </h2>
        {productsLoading ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="space-y-3">
                <Skeleton className="h-48 w-full rounded-lg" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            ))}
          </div>
        ) : products && products.length === 0 ? (
          <div className="text-center py-12 bg-muted/30 rounded-lg">
            <p className="text-lg text-muted-foreground">No products available from this farm yet.</p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products?.map((product) => (
              <ProductCard key={product.id.toString()} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

