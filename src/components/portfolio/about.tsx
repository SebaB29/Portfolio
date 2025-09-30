import { portfolioData } from '@/lib/portfolio-data';
import { Cake, MapPin } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="scroll-mt-20">
      <h2 className="mb-8 text-center text-3xl font-bold">Sobre Mí</h2>
      <div className="space-y-4 text-muted-foreground text-justify">
        <p>{portfolioData.description}</p>
        <p>{portfolioData.longDescription}</p>
      </div>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
        <div className="flex items-center justify-center sm:justify-start gap-2 text-foreground">
          <Cake className="h-5 w-5 text-accent" />
          <span>
            <strong>Fecha de nacimiento:</strong> {portfolioData.birthDate}
          </span>
        </div>
        <div className="flex items-center justify-center sm:justify-end gap-2 text-foreground">
          <MapPin className="h-5 w-5 text-accent" />
          <span>
            <strong>Localidad:</strong> {portfolioData.location}
          </span>
        </div>
      </div>
    </section>
  );
}
