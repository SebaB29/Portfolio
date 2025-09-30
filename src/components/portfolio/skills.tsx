import { portfolioData } from '@/lib/portfolio-data';
import { Badge } from '@/components/ui/badge';
import { Code, Wrench, BrainCircuit, Star } from 'lucide-react';

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

const SkillBadge = ({ skill }: { skill: string }) => (
  <Badge
    variant="secondary"
    className="bg-secondary/80 border border-border text-foreground hover:bg-accent/20 hover:text-primary transition-colors text-sm px-3 py-1"
  >
    {skill}
  </Badge>
);

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20">
      <div className="flex items-center gap-4 mb-8">
        <Star className="h-8 w-8 text-primary" />
        <h2 className="text-3xl font-bold">Habilidades Técnicas</h2>
      </div>

      <div className="space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
          <div>
            <SectionTitle icon={<Code className="text-accent h-6 w-6" />}>
              Lenguajes
            </SectionTitle>
            <div className="flex flex-wrap gap-2">
              {portfolioData.languages.map((lang) => (
                <SkillBadge key={lang} skill={lang} />
              ))}
            </div>
          </div>
          <div>
            <SectionTitle icon={<Wrench className="text-accent h-6 w-6" />}>
              Herramientas
            </SectionTitle>
            <div className="flex flex-wrap gap-2">
              {portfolioData.tools.map((tool) => (
                <SkillBadge key={tool} skill={tool} />
              ))}
            </div>
          </div>
        </div>
        <div className="border-t-2 border-dashed border-border/20 pt-8">
          <SectionTitle icon={<BrainCircuit className="text-accent h-6 w-6" />}>
            Conocimientos
          </SectionTitle>
          <div className="flex flex-wrap gap-2">
            {portfolioData.knowledge.map((skill) => (
              <SkillBadge key={skill} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
