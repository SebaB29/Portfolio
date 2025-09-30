import { portfolioData } from '@/lib/portfolio-data';
import { Cake, MapPin, User } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="scroll-mt-20">
      <div className="flex items-center gap-4 mb-8">
        <User className="h-8 w-8 text-primary" />
        <h2 className="text-3xl font-bold">Sobre Mí</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-4 text-muted-foreground text-justify">
          <p>{portfolioData.description}</p>
          <p>{portfolioData.longDescription}</p>
        </div>
        <div className="space-y-4 text-sm">
          <div className="flex items-center gap-3 text-foreground">
            <Cake className="h-5 w-5 text-accent flex-shrink-0" />
            <div>
              <span className="font-semibold">Fecha de nacimiento:</span>
              <p className="text-muted-foreground">{portfolioData.birthDate}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-foreground">
            <MapPin className="h-5 w-5 text-accent flex-shrink-0" />
            <div>
              <span className="font-semibold">Localidad:</span>
              <p className="text-muted-foreground">{portfolioData.location}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
