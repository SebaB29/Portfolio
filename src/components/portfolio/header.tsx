import { portfolioData } from '@/lib/portfolio-data';
import { Github, Linkedin, Mail, Phone, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  const navItems = [
    { name: 'Sobre mí', href: '#about' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Educación', href: '#education' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <a href="#" className="text-lg font-bold text-primary">
          {portfolioData.name}
        </a>
        <nav className="hidden md:flex">
          <ul className="flex items-center space-x-6 text-sm font-medium">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="container py-16 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          {portfolioData.name}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
          {portfolioData.title}
        </p>
        <div className="mt-6 flex items-center justify-center gap-x-2 text-sm text-muted-foreground">
          <Briefcase className="h-4 w-4 text-accent" />
          <span>Disponibilidad: {portfolioData.availability}</span>
        </div>
        <div className="mt-8 flex justify-center gap-4">
          <Button variant="outline" size="icon" asChild>
            <a href={portfolioData.linkedin} target="_blank" rel="noreferrer">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a href={portfolioData.github} target="_blank" rel="noreferrer">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a href={`mailto:${portfolioData.email}`}>
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a href={`tel:${portfolioData.phone}`}>
              <Phone className="h-5 w-5" />
              <span className="sr-only">Phone</span>
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
