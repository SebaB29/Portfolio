import { portfolioData } from '@/lib/portfolio-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Wrench, BrainCircuit } from 'lucide-react';

const SectionTitle = ({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) => (
  <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
    {icon}
    {children}
  </h3>
);

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20">
      <Card>
        <CardHeader>
          <CardTitle>Habilidades Técnicas</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <SectionTitle icon={<Code className="text-accent" />}>
              Lenguajes
            </SectionTitle>
            <div className="flex flex-wrap gap-2">
              {portfolioData.languages.map((lang) => (
                <Badge
                  key={lang}
                  variant="secondary"
                  className="bg-accent/10 text-accent-foreground hover:bg-accent/20 transition-colors"
                >
                  {lang}
                </Badge>
              ))}
            </div>
          </div>
          <div>
            <SectionTitle icon={<Wrench className="text-accent" />}>
              Herramientas
            </SectionTitle>
            <div className="flex flex-wrap gap-2">
              {portfolioData.tools.map((tool) => (
                <Badge
                  key={tool}
                  variant="secondary"
                  className="bg-accent/10 text-accent-foreground hover:bg-accent/20 transition-colors"
                >
                  {tool}
                </Badge>
              ))}
            </div>
          </div>
          <div>
            <SectionTitle icon={<BrainCircuit className="text-accent" />}>
              Conocimientos
            </SectionTitle>
            <div className="flex flex-wrap gap-2">
              {portfolioData.knowledge.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="bg-accent/10 text-accent-foreground hover:bg-accent/20 transition-colors"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
