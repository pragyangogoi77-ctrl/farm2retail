import { Card, CardContent } from '@/components/ui/card';
import { Leaf, Users, Target, Heart } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl text-primary mb-4">
            About Farm2Retail
          </h1>
          <p className="text-lg text-muted-foreground">
            Connecting communities with local farms for a fresher, more sustainable future
          </p>
        </div>

        {/* Mission Statement */}
        <div className="mb-12 bg-primary/5 rounded-lg p-8">
          <h2 className="font-display text-2xl font-bold text-primary mb-4">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            Farm2Retail bridges the gap between local farms and consumers, creating a transparent marketplace 
            where fresh, sustainable produce flows directly from farm to table. We believe in supporting local 
            agriculture, reducing food miles, and giving you complete visibility into where your food comes from.
          </p>
        </div>

        {/* Values */}
        <div className="mb-12">
          <h2 className="font-display text-2xl font-bold text-primary mb-6 text-center">Our Values</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-2">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                    <Leaf className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Sustainability</h3>
                    <p className="text-muted-foreground">
                      We prioritize environmentally responsible farming practices and minimize our carbon footprint 
                      by sourcing locally.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 flex-shrink-0">
                    <Users className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Community</h3>
                    <p className="text-muted-foreground">
                      We strengthen local economies by connecting consumers directly with nearby farms and producers.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-chart-3/20 flex-shrink-0">
                    <Target className="h-6 w-6 text-chart-3" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Transparency</h3>
                    <p className="text-muted-foreground">
                      Every product comes with complete information about its origin, so you know exactly what 
                      you're buying.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-chart-1/20 flex-shrink-0">
                    <Heart className="h-6 w-6 text-chart-1" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Quality</h3>
                    <p className="text-muted-foreground">
                      We partner only with farms that meet our high standards for freshness, taste, and 
                      sustainable practices.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-12">
          <h2 className="font-display text-2xl font-bold text-primary mb-6 text-center">How It Works</h2>
          <div className="space-y-6">
            <Card className="border-2">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Browse Fresh Products</h3>
                    <p className="text-muted-foreground">
                      Explore our selection of seasonal produce, dairy, and other farm-fresh items from local farms.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Learn About the Source</h3>
                    <p className="text-muted-foreground">
                      Each product page shows you exactly which farm it comes from, including location and farming practices.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Support Local Agriculture</h3>
                    <p className="text-muted-foreground">
                      Your purchase goes directly to supporting local farmers and sustainable food systems in your community.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Closing */}
        <div className="text-center bg-accent/5 rounded-lg p-8">
          <p className="text-lg leading-relaxed">
            Join us in building a more sustainable, transparent, and community-focused food system. 
            Together, we can support local farms and enjoy the freshest produce available.
          </p>
        </div>
      </div>
    </div>
  );
}

