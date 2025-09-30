import { portfolioData } from '@/lib/portfolio-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function About() {
  return (
    <section id="about" className="scroll-mt-20">
      <Card>
        <CardHeader>
          <CardTitle>Sobre Mí</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground text-justify">
          <p>{portfolioData.description}</p>
          <p>{portfolioData.longDescription}</p>
        </CardContent>
      </Card>
    </section>
  );
}
