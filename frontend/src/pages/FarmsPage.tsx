import { useGetAllFarms } from '@/hooks/useQueries';
import FarmCard from '@/components/farms/FarmCard';
import { Skeleton } from '@/components/ui/skeleton';

export default function FarmsPage() {
  const { data: farms, isLoading } = useGetAllFarms();

  return (
    <div className="container py-8 md:py-12">
      <div className="mb-8">
        <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl text-primary mb-2">
          Our Partner Farms
        </h1>
        <p className="text-lg text-muted-foreground">
          Meet the local farms that make Farm2Retail possible
        </p>
      </div>

      {isLoading ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="space-y-3">
              <Skeleton className="h-56 w-full rounded-lg" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          ))}
        </div>
      ) : farms && farms.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground">No farms available at the moment.</p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {farms?.map((farm) => (
            <FarmCard key={farm.id.toString()} farm={farm} />
          ))}
        </div>
      )}
    </div>
  );
}

