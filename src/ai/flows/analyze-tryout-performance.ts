'use server';
/**
 * @fileOverview Analyzes tryout performance and provides personalized feedback.
 *
 * - analyzeTryoutPerformance - A function to analyze tryout data and return feedback.
 * - AnalyzeTryoutPerformanceInput - The input type for the analyzeTryoutPerformance function.
 * - AnalyzeTryoutPerformanceOutput - The return type for the analyzeTryoutPerformance function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const AnalyzeTryoutPerformanceInputSchema = z.object({
  userId: z.string().describe('The ID of the user.'),
  tryoutData: z.array(z.object({
    tryoutId: z.string().describe('The ID of the tryout.'),
    score: z.number().describe('The score achieved in the tryout.'),
    answers: z.record(z.string()).describe('The answers provided by the user for each question.'),
    correctAnswers: z.record(z.string()).describe('The correct answers for each question.'),
    timestamp: z.string().datetime().describe('The timestamp when the tryout was taken.'),
  })).describe('The historical tryout data for the user.'),
});
export type AnalyzeTryoutPerformanceInput = z.infer<typeof AnalyzeTryoutPerformanceInputSchema>;

const AnalyzeTryoutPerformanceOutputSchema = z.object({
  overallFeedback: z.string().describe('Overall feedback on the user\'s performance.'),
  areasForImprovement: z.array(z.string()).describe('Specific areas where the user needs to improve.'),
  suggestedResources: z.array(z.string()).describe('Suggested resources for improvement in each area.'),
});
export type AnalyzeTryoutPerformanceOutput = z.infer<typeof AnalyzeTryoutPerformanceOutputSchema>;

export async function analyzeTryoutPerformance(input: AnalyzeTryoutPerformanceInput): Promise<AnalyzeTryoutPerformanceOutput> {
  return analyzeTryoutPerformanceFlow(input);
}

const analyzeTryoutPerformancePrompt = ai.definePrompt({
  name: 'analyzeTryoutPerformancePrompt',
  input: {
    schema: z.object({
      userId: z.string().describe('The ID of the user.'),
      tryoutData: z.array(z.object({
        tryoutId: z.string().describe('The ID of the tryout.'),
        score: z.number().describe('The score achieved in the tryout.'),
        answers: z.record(z.string()).describe('The answers provided by the user for each question.'),
        correctAnswers: z.record(z.string()).describe('The correct answers for each question.'),
        timestamp: z.string().datetime().describe('The timestamp when the tryout was taken.'),
      })).describe('The historical tryout data for the user.'),
    }),
  },
  output: {
    schema: z.object({
      overallFeedback: z.string().describe('Overall feedback on the user\'s performance.'),
      areasForImprovement: z.array(z.string()).describe('Specific areas where the user needs to improve.'),
      suggestedResources: z.array(z.string()).describe('Suggested resources for improvement in each area.'),
    }),
  },
  prompt: `You are an AI performance analysis tool designed to provide personalized feedback to users based on their tryout performance.

Analyze the following tryout data for user ID {{{userId}}}:

{{#each tryoutData}}
  Tryout ID: {{{tryoutId}}}
  Score: {{{score}}}
  Answers: {{{answers}}}
  Correct Answers: {{{correctAnswers}}}
  Timestamp: {{{timestamp}}}
{{/each}}

Based on this data, provide the user with:

1.  Overall feedback on their performance.
2.  Specific areas where they need to improve.
3.  Suggested resources for improvement in each area.

Ensure the feedback is constructive and actionable. Focus on patterns and trends in the user's performance to identify key areas for development.
`,
});

const analyzeTryoutPerformanceFlow = ai.defineFlow<
  typeof AnalyzeTryoutPerformanceInputSchema,
  typeof AnalyzeTryoutPerformanceOutputSchema
>({
  name: 'analyzeTryoutPerformanceFlow',
  inputSchema: AnalyzeTryoutPerformanceInputSchema,
  outputSchema: AnalyzeTryoutPerformanceOutputSchema,
}, async input => {
  const {output} = await analyzeTryoutPerformancePrompt(input);
  return output!;
});
