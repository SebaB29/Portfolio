"use server";

import { jobDescriptionSkillsMatcher, type JobDescriptionSkillsMatcherOutput } from "@/ai/flows/job-description-skills-matcher";
import { portfolioData } from "@/lib/portfolio-data";

export async function matchSkillsAction(jobDescription: string): Promise<JobDescriptionSkillsMatcherOutput> {
  if (!jobDescription) {
    throw new Error("Job description cannot be empty.");
  }
  
  try {
    const result = await jobDescriptionSkillsMatcher({
      jobDescription,
      name: portfolioData.name,
      education: portfolioData.education.map(e => `${e.degree} en ${e.institution} (${e.status})`).join('; '),
      languages: portfolioData.languages.join(', '),
      tools: portfolioData.tools.join(', '),
      skills: portfolioData.knowledge.join(', '),
      repositories: portfolioData.repositories.map(r => r.name).join(', '),
    });
    return result;
  } catch (error) {
    console.error("Error in matchSkillsAction:", error);
    throw new Error("Failed to process the request with AI.");
  }
}
