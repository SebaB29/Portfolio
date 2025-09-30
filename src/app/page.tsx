'use client';
import { Header, Hero } from '@/components/portfolio/header';
import { About } from '@/components/portfolio/about';
import { Skills } from '@/components/portfolio/skills';
import { Projects } from '@/components/portfolio/projects';
import { Education } from '@/components/portfolio/education';
import { ContactFooter } from '@/components/portfolio/contact-footer';
import { Separator } from '@/components/ui/separator';

const SectionSeparator = () => (
  <div className="my-16 h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
);

export default function Home() {
  return (
    <div className="flex min-h-dvh w-full flex-col">
      <Header />
      <main className="container mx-auto flex-1 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-20">
          <Hero />
          <About />
          <SectionSeparator />
          <Education />
          <SectionSeparator />
          <Skills />
          <SectionSeparator />
          <Projects />
        </div>
      </main>
      <ContactFooter />
    </div>
  );
}
