import { portfolioData } from '@/lib/portfolio-data';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { FolderKanban, Github } from 'lucide-react';
import { Button } from '../ui/button';

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20">
      <div className="flex items-center justify-center gap-4 mb-8">
        <FolderKanban className="h-8 w-8 text-primary" />
        <h2 className="text-3xl font-bold">Proyectos Destacados</h2>
      </div>
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
                <CardDescription className="text-justify">
                  {repo.description}
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="link" className="text-accent p-0 h-auto">
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
