import { portfolioData } from '@/lib/portfolio-data';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export function ContactFooter() {
  return (
    <footer id="contact" className="bg-secondary text-secondary-foreground">
      <div className="container py-12 text-center">
        <h2 className="text-2xl font-bold">Contacto</h2>
        <p className="mt-2 text-muted-foreground">
          ¡No dudes en contactarme!
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-4">
          <div className="flex items-center gap-2">
            <Mail className="h-5 w-5" />
            <span>{portfolioData.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-5 w-5" />
            <span>{portfolioData.phone}</span>
          </div>
          <a
            href={portfolioData.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 transition-colors hover:text-primary"
          >
            <Linkedin className="h-5 w-5" />
            <span>LinkedIn</span>
          </a>
          <a
            href={portfolioData.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 transition-colors hover:text-primary"
          >
            <Github className="h-5 w-5" />
            <span>GitHub</span>
          </a>
        </div>
        <div className="mt-10 text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} {portfolioData.name}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
