import { portfolioData } from '@/lib/portfolio-data';
import { School, GraduationCap } from 'lucide-react';

export function Education() {
  return (
    <section id="education" className="scroll-mt-20">
      <div className="flex items-center gap-4 mb-8">
        <GraduationCap className="h-8 w-8 text-primary" />
        <h2 className="text-3xl font-bold">Educación</h2>
      </div>

      <div className="relative border-l-2 border-primary/20 pl-8 space-y-12">
        {portfolioData.education.map((edu, index) => (
          <div key={edu.degree} className="relative">
            <div className="absolute -left-[44px] top-0 flex h-full items-start">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary ring-8 ring-background">
                <School className="h-5 w-5 text-primary" />
              </div>
              {index < portfolioData.education.length - 1 && (
              <div className="h-full w-px bg-primary/20 translate-x-[15px] mt-8" />
            )}
            </div>
            <div className="pl-4">
              <p className="text-sm font-medium text-accent">
                {edu.status}
              </p>
              <h3 className="text-xl font-semibold text-foreground mt-1">
                {edu.degree}
              </h3>
              <p className="text-muted-foreground mt-1">{edu.institution}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
