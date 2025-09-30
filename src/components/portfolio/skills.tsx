import { portfolioData } from '@/lib/portfolio-data';
import { Badge } from '@/components/ui/badge';
import { Code, Wrench, BrainCircuit } from 'lucide-react';

const SectionTitle = ({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) => (
  <h3 className="mb-4 flex items-center gap-3 text-xl font-semibold text-foreground">
    {icon}
    {children}
  </h3>
);

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20">
      <h2 className="mb-8 text-center text-3xl font-bold">
        Habilidades Técnicas
      </h2>
      <div className="space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <SectionTitle icon={<Code className="text-accent h-6 w-6" />}>
              Lenguajes
            </SectionTitle>
            <div className="flex flex-wrap gap-2">
              {portfolioData.languages.map((lang) => (
                <Badge
                  key={lang}
                  variant="secondary"
                  className="bg-accent/10 text-accent-foreground hover:bg-accent/20 transition-colors text-sm px-3 py-1"
                >
                  {lang}
                </Badge>
              ))}
            </div>
          </div>
          <div>
            <SectionTitle icon={<Wrench className="text-accent h-6 w-6" />}>
              Herramientas
            </SectionTitle>
            <div className="flex flex-wrap gap-2">
              {portfolioData.tools.map((tool) => (
                <Badge
                  key={tool}
                  variant="secondary"
                  className="bg-accent/10 text-accent-foreground hover:bg-accent/20 transition-colors text-sm px-3 py-1"
                >
                  {tool}
                </Badge>
              ))}
            </div>
          </div>
        </div>
        <div>
          <SectionTitle icon={<BrainCircuit className="text-accent h-6 w-6" />}>
            Conocimientos
          </SectionTitle>
          <div className="flex flex-wrap gap-2">
            {portfolioData.knowledge.map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="bg-accent/10 text-accent-foreground hover:bg-accent/20 transition-colors text-sm px-3 py-1"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
