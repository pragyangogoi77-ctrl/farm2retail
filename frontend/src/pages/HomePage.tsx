import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Leaf, Truck, Heart, ShoppingBasket } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container py-16 md:py-24 lg:py-32">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col gap-6">
              <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-primary">
                Fresh From Farm to Your Table
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                Discover locally sourced, sustainable produce directly from trusted farms. 
                Experience the freshness, support local agriculture, and know exactly where your food comes from.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="text-base">
                  <Link to="/products">
                    <ShoppingBasket className="mr-2 h-5 w-5" />
                    Browse Products
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-base">
                  <Link to="/farms">Explore Farms</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/assets/generated/farm2retail-hero.dim_1600x700.png"
                alt="Fresh farm produce"
                className="rounded-lg shadow-warm w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="container py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl text-primary mb-4">
            Why Choose Farm2Retail?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're committed to connecting you with the best local farms and freshest produce.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="border-2 hover:shadow-soft transition-shadow">
            <CardContent className="pt-6 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Leaf className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">100% Fresh</h3>
              <p className="text-sm text-muted-foreground">
                Harvested at peak ripeness and delivered quickly to ensure maximum freshness.
              </p>
            </CardContent>
          </Card>
          <Card className="border-2 hover:shadow-soft transition-shadow">
            <CardContent className="pt-6 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                <Truck className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">Direct Sourcing</h3>
              <p className="text-sm text-muted-foreground">
                No middlemen. Products come straight from local farms to you.
              </p>
            </CardContent>
          </Card>
          <Card className="border-2 hover:shadow-soft transition-shadow">
            <CardContent className="pt-6 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-chart-3/20">
                <Heart className="h-8 w-8 text-chart-3" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">Support Local</h3>
              <p className="text-sm text-muted-foreground">
                Every purchase supports local farmers and sustainable agriculture.
              </p>
            </CardContent>
          </Card>
          <Card className="border-2 hover:shadow-soft transition-shadow">
            <CardContent className="pt-6 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-chart-1/20">
                <ShoppingBasket className="h-8 w-8 text-chart-1" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">Full Transparency</h3>
              <p className="text-sm text-muted-foreground">
                Know exactly where your food comes from and how it's grown.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/5 py-16 md:py-24">
        <div className="container text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl text-primary mb-4">
            Ready to Experience Fresh?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Browse our selection of farm-fresh products or learn more about the farms we partner with.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row justify-center">
            <Button asChild size="lg" className="text-base">
              <Link to="/products">Shop Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

