"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Loader2, Sparkles } from 'lucide-react';
import { matchSkillsAction } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import type { JobDescriptionSkillsMatcherOutput } from '@/ai/flows/job-description-skills-matcher';

const FormSchema = z.object({
  jobDescription: z
    .string()
    .min(50, 'La descripción del trabajo debe tener al menos 50 caracteres.'),
});

export function SkillsMatcher() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<JobDescriptionSkillsMatcherOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      jobDescription: '',
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setLoading(true);
    setResult(null);

    try {
      const res = await matchSkillsAction(data.jobDescription);
      setResult(res);
    } catch (e) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'No se pudo analizar la descripción del trabajo.',
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="skills-matcher" className="scroll-mt-20">
      <Card className="bg-gradient-to-br from-primary/5 to-accent/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <Sparkles className="h-6 w-6 text-primary" />
            Analizador de Habilidades con IA
          </CardTitle>
          <CardDescription>
            Pega una descripción de trabajo a continuación y la IA analizará qué
            tan bien encajan mis habilidades con el puesto.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="jobDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Descripción del Trabajo</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Pega aquí la descripción del trabajo..."
                        className="min-h-[150px] resize-y"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Analizando...
                  </>
                ) : (
                  'Analizar'
                )}
              </Button>
            </form>
          </Form>

          {result && (
            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Resultados del Análisis</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none text-muted-foreground">
                <p>{result.summary}</p>
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>
    </section>
  );
}
