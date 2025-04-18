'use client';

import {Button} from '@/components/ui/button';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {Input} from '@/components/ui/input';
import {useEffect, useState} from 'react';

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background p-4">
      <header className="py-6">
        <h1 className="text-4xl font-bold text-primary">Aparatur Coach</h1>
        <p className="text-muted-foreground">
          Your path to becoming a state apparatus starts here.
        </p>
      </header>

      <main className="flex-grow grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Hero Card */}
        <Card className="col-span-full">
          <CardHeader>
            <CardTitle className="text-2xl">Ready to start your journey?</CardTitle>
            <CardDescription>
              Access exclusive tryout packages and boost your preparation.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <Input type="email" placeholder="Enter your email"/>
              <Button>Get Started</Button>
            </div>
          </CardContent>
        </Card>

        {/* Feature Cards */}
        <Card>
          <CardHeader>
            <CardTitle>Comprehensive Tryout Packages</CardTitle>
            <CardDescription>
              Detailed simulations for TNI and Police entrance exams.
            </CardDescription>
          </CardHeader>
          <CardContent>
            Explore our catalog for a package that fits your needs.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>AI-Powered Performance Analysis</CardTitle>
            <CardDescription>
              Personalized feedback to help you focus on your weaknesses.
            </CardDescription>
          </CardHeader>
          <CardContent>
            Our AI adapts to your performance, providing targeted guidance.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Track Your Progress</CardTitle>
            <CardDescription>
              Monitor your scores and improvements over time.
            </CardDescription>
          </CardHeader>
          <CardContent>
            Stay motivated with a clear view of your advancement.
          </CardContent>
        </Card>
      </main>

      <footer className="py-4 text-center text-muted-foreground">
        {isClient ? (
          <>
            &copy; {new Date().getFullYear()} Aparatur Coach. All rights reserved.
          </>
        ) : (
          <>Loading...</>
        )}
      </footer>
    </div>
  );
}
