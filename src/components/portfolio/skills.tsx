import { portfolioData } from '@/lib/portfolio-data';
import { Badge } from '@/components/ui/badge';
import { Code, Wrench, BrainCircuit, Star } from 'lucide-react';

const SkillCategory = ({
  icon,
  title,
  skills,
}: {
  icon: React.ReactNode;
  title: string;
  skills: string[];
}) => (
  <div>
    <div className="flex items-center gap-3 mb-4">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-foreground">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <Badge
          key={skill}
          variant="secondary"
          className="border border-transparent bg-secondary/80 px-3 py-1 text-sm transition-colors hover:bg-accent/20 hover:text-primary"
        >
          {skill}
        </Badge>
      ))}
    </div>
  </div>
);

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20">
      <div className="flex items-center gap-4 mb-8">
        <Star className="h-8 w-8 text-primary" />
        <h2 className="text-3xl font-bold">Habilidades Técnicas</h2>
      </div>

      <div className="space-y-10">
        <SkillCategory
          icon={<Code className="h-5 w-5" />}
          title="Lenguajes"
          skills={portfolioData.languages}
        />
        <SkillCategory
          icon={<Wrench className="h-5 w-5" />}
          title="Herramientas"
          skills={portfolioData.tools}
        />
        <SkillCategory
          icon={<BrainCircuit className="h-5 w-5" />}
          title="Conocimientos"
          skills={portfolioData.knowledge}
        />
      </div>
    </section>
  );
}
