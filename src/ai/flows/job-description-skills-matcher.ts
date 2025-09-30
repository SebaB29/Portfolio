'use server';

/**
 * @fileOverview A job description skills matcher AI agent.
 *
 * - jobDescriptionSkillsMatcher - A function that handles the job description skills matching process.
 * - JobDescriptionSkillsMatcherInput - The input type for the jobDescriptionSkillsMatcher function.
 * - JobDescriptionSkillsMatcherOutput - The return type for the jobDescriptionSkillsMatcher function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const JobDescriptionSkillsMatcherInputSchema = z.object({
  jobDescription: z.string().describe('The job description to analyze.'),
  name: z.string().describe('The name of the candidate.'),
  education: z.string().describe('The education of the candidate.'),
  languages: z.string().describe('The languages the candidate has used.'),
  tools: z.string().describe('The tools the candidate has used.'),
  skills: z.string().describe('The skills the candidate has.'),
  repositories: z.string().describe('The featured repositories of the candidate')
});
export type JobDescriptionSkillsMatcherInput = z.infer<typeof JobDescriptionSkillsMatcherInputSchema>;

const JobDescriptionSkillsMatcherOutputSchema = z.object({
  summary: z.string().describe('A summary of how the candidate skills and experience match the job description.'),
});
export type JobDescriptionSkillsMatcherOutput = z.infer<typeof JobDescriptionSkillsMatcherOutputSchema>;

export async function jobDescriptionSkillsMatcher(input: JobDescriptionSkillsMatcherInput): Promise<JobDescriptionSkillsMatcherOutput> {
  return jobDescriptionSkillsMatcherFlow(input);
}

const prompt = ai.definePrompt({
  name: 'jobDescriptionSkillsMatcherPrompt',
  input: {schema: JobDescriptionSkillsMatcherInputSchema},
  output: {schema: JobDescriptionSkillsMatcherOutputSchema},
  prompt: `You are an expert in matching job descriptions to candidate skills and experience.

  Given the following job description:
  {{jobDescription}}

  And the following candidate information:
  Name: {{name}}
  Education: {{education}}
  Languages: {{languages}}
  Tools: {{tools}}
  Skills: {{skills}}
  Repositories: {{repositories}}

  Generate a summary of how the candidate's skills and experience match the job description, highlighting their fit for the role.
`,
});

const jobDescriptionSkillsMatcherFlow = ai.defineFlow(
  {
    name: 'jobDescriptionSkillsMatcherFlow',
    inputSchema: JobDescriptionSkillsMatcherInputSchema,
    outputSchema: JobDescriptionSkillsMatcherOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
