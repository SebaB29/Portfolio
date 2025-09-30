import { portfolioData } from '@/lib/portfolio-data';
import { School, GraduationCap } from 'lucide-react';

export function Education() {
  return (
    <section id="education" className="scroll-mt-20">
      <div className="flex items-center gap-4 mb-8">
        <GraduationCap className="h-8 w-8 text-primary" />
        <h2 className="text-3xl font-bold">Educación</h2>
      </div>

      <div className="relative border-l-2 border-accent/20 pl-6 space-y-10">
        <span className="absolute -left-[1.6px] top-1 h-3 w-3 rounded-full bg-accent ring-4 ring-background" />
        {portfolioData.education.map((edu, index) => (
          <div key={edu.degree} className="relative">
            <div className="flex items-start gap-4">
              <div className="bg-secondary p-2 rounded-full absolute -left-[42px] top-0">
                <School className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  {edu.degree}
                </h3>
                <p className="text-muted-foreground">{edu.institution}</p>
                <p className="mt-1 text-sm font-medium text-accent">
                  {edu.status}
                </p>
              </div>
            </div>
            {index < portfolioData.education.length - 1 && (
              <span className="absolute -left-[1.6px] top-12 h-3 w-3 rounded-full bg-accent ring-4 ring-background" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
