import { portfolioData } from '@/lib/portfolio-data';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { School } from 'lucide-react';

export function Education() {
  return (
    <section id="education" className="scroll-mt-20">
      <Card>
        <CardHeader>
          <CardTitle>Educación</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {portfolioData.education.map((edu) => (
              <li key={edu.degree} className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0">
                  <School className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{edu.degree}</h3>
                  <p className="text-muted-foreground">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground">{edu.status}</p>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </section>
  );
}
