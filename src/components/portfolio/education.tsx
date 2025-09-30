import { portfolioData } from '@/lib/portfolio-data';
import { School } from 'lucide-react';

export function Education() {
  return (
    <section id="education" className="scroll-mt-20">
      <h2 className="mb-8 text-center text-3xl font-bold">Educación</h2>
      <ul className="space-y-6">
        {portfolioData.education.map((edu) => (
          <li key={edu.degree} className="flex items-start gap-4">
            <div className="mt-1 flex-shrink-0">
              <School className="h-8 w-8 text-accent" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                {edu.degree}
              </h3>
              <p className="text-muted-foreground">{edu.institution}</p>
              <p className="text-sm text-muted-foreground">{edu.status}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
