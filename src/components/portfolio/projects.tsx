import { portfolioData } from '@/lib/portfolio-data';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { Github } from 'lucide-react';
import { Button } from '../ui/button';

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20">
      <h2 className="mb-8 text-center text-3xl font-bold">
        Proyectos Destacados
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {portfolioData.repositories.map((repo) => (
          <a
            key={repo.name}
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <Card className="h-full transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg dark:group-hover:shadow-primary/20">
              <CardHeader>
                <CardTitle className="text-primary">{repo.name}</CardTitle>
                <CardDescription>{repo.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="ghost" className="text-accent">
                  <Github className="mr-2 h-4 w-4" />
                  Ver en GitHub
                </Button>
              </CardFooter>
            </Card>
          </a>
        ))}
      </div>
    </section>
  );
}
