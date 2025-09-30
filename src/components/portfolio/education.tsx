import { portfolioData } from '@/lib/portfolio-data';
import { School, GraduationCap } from 'lucide-react';

export function Education() {
  return (
    <section id="education" className="scroll-mt-20">
      <div className="flex items-center gap-4 mb-8">
        <GraduationCap className="h-8 w-8 text-primary" />
        <h2 className="text-3xl font-bold">Educación</h2>
      </div>

      <div className="space-y-6">
        {portfolioData.education.map((edu) => (
          <div
            key={edu.degree}
            className="group relative flex items-start gap-6 rounded-lg border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg dark:hover:shadow-primary/20"
          >
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary ring-8 ring-background transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <School className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-accent">{edu.status}</p>
              <h3 className="mt-1 text-xl font-semibold text-foreground">
                {edu.degree}
              </h3>
              <p className="mt-1 text-muted-foreground">{edu.institution}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
