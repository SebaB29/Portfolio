import { Header } from '@/components/portfolio/header';
import { About } from '@/components/portfolio/about';
import { Skills } from '@/components/portfolio/skills';
import { Projects } from '@/components/portfolio/projects';
import { Education } from '@/components/portfolio/education';
import { SkillsMatcher } from '@/components/portfolio/skills-matcher';
import { ContactFooter } from '@/components/portfolio/contact-footer';

export default function Home() {
  return (
    <div className="flex min-h-dvh w-full flex-col">
      <Header />
      <main className="container mx-auto flex-1 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-20">
          <About />
          <Skills />
          <Projects />
          <Education />
          <SkillsMatcher />
        </div>
      </main>
      <ContactFooter />
    </div>
  );
}
