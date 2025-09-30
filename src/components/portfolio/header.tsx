'use client';
import { portfolioData } from '@/lib/portfolio-data';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Briefcase, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

export function Header() {
  const [isSheetOpen, setSheetOpen] = useState(false);

  const navItems = [
    { name: 'Sobre mí', href: '#about' },
    { name: 'Educación', href: '#education' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Contacto', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setSheetOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <a
          href="#"
          className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent transition-colors hover:from-primary/90 hover:to-accent/90"
        >
          {portfolioData.name}
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {item.name}
            </a>
          ))}
        </nav>
        <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-4 w-4" />
              <span className="sr-only">Abrir menú</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="grid gap-4 py-6">
              <a
                href="#"
                onClick={handleLinkClick}
                className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent"
              >
                {portfolioData.name}
              </a>
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={handleLinkClick}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

export function Hero() {
  return (
    <section id="hero" className="py-16 text-center">
      <div className="mb-4 flex justify-center">
        <Image
          src="/foto-perfil.jpg"
          alt="Foto de Sebastián Brizuela"
          width={200}
          height={200}
          className="h-52 w-52 rounded-full border-4 border-primary object-cover"
          priority
        />
      </div>
      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-foreground to-muted-foreground">
        {portfolioData.name}
      </h1>
      <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
        {portfolioData.title}
      </p>
      <div className="mt-6 flex items-center justify-center gap-x-2 text-sm text-muted-foreground">
        <Briefcase className="h-4 w-4 text-accent" />
        <span>Disponibilidad: {portfolioData.availability}</span>
      </div>
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
    </section>
  );
}