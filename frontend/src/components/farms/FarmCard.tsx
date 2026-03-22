import { Link } from '@tanstack/react-router';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';
import type { Farm } from '@/backend';

interface FarmCardProps {
  farm: Farm;
}

export default function FarmCard({ farm }: FarmCardProps) {
  const imageUrl = farm.imageUrl || '/assets/generated/farm2retail-farm-placeholder.dim_800x600.png';

  return (
    <Card className="overflow-hidden border-2 hover:shadow-soft transition-shadow group">
      <div className="relative overflow-hidden bg-muted h-56">
        <img
          src={imageUrl}
          alt={farm.name}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <CardContent className="pt-4">
        <h3 className="font-semibold text-xl mb-2 text-primary">{farm.name}</h3>
        <p className="text-sm text-muted-foreground flex items-center gap-1 mb-3">
          <MapPin className="h-4 w-4" />
          {farm.location}
        </p>
        <p className="text-sm text-muted-foreground line-clamp-2">{farm.description}</p>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" className="w-full">
          <Link to="/farms/$id" params={{ id: farm.id.toString() }}>View Farm</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

