import { portfolioData } from '@/lib/portfolio-data';
import { Badge } from '@/components/ui/badge';
import { Code, Wrench, BrainCircuit, Star } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const SkillBadge = ({ skill }: { skill: string }) => (
  <Badge
    variant="secondary"
    className="bg-secondary/80 border text-sm px-3 py-1 transition-colors group-hover:bg-accent/20 group-hover:text-primary"
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card className="bg-card/50 border-border/30 group transition-all duration-300 hover:border-primary/50 hover:shadow-lg dark:hover:shadow-primary/20">
          <CardHeader className="flex-row items-center gap-4">
            <div className="p-3 rounded-full bg-accent/10 border border-accent/20 text-accent">
              <Code className="h-6 w-6" />
            </div>
            <CardTitle className="text-xl text-foreground">Lenguajes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {portfolioData.languages.map((lang) => (
                <SkillBadge key={lang} skill={lang} />
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/50 border-border/30 group transition-all duration-300 hover:border-primary/50 hover:shadow-lg dark:hover:shadow-primary/20">
          <CardHeader className="flex-row items-center gap-4">
            <div className="p-3 rounded-full bg-accent/10 border border-accent/20 text-accent">
              <Wrench className="h-6 w-6" />
            </div>
            <CardTitle className="text-xl text-foreground">Herramientas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {portfolioData.tools.map((tool) => (
                <SkillBadge key={tool} skill={tool} />
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/50 border-border/30 group transition-all duration-300 hover:border-primary/50 hover:shadow-lg dark:hover:shadow-primary/20 md:col-span-2 lg:col-span-1">
          <CardHeader className="flex-row items-center gap-4">
            <div className="p-3 rounded-full bg-accent/10 border border-accent/20 text-accent">
              <BrainCircuit className="h-6 w-6" />
            </div>
            <CardTitle className="text-xl text-foreground">Conocimientos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {portfolioData.knowledge.map((skill) => (
                <SkillBadge key={skill} skill={skill} />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}