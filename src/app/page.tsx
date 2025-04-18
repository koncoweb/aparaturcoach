'use client';

import {Button} from '@/components/ui/button';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {Input} from '@/components/ui/input';
import {useEffect, useState} from 'react';
import Image from 'next/image';

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background p-4">
      {/* Hero Section */}
      <section
        className="bg-primary text-primary-foreground py-12 rounded-lg mb-8"
      >
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column: Text Content */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold mb-4">
              Raih Mimpimu Menjadi Aparatur Negara
            </h1>
            <p className="text-lg mb-6">
              Persiapkan dirimu dengan tryout online terpercaya dan analisis AI
              untuk sukses dalam seleksi TNI dan POLRI.
            </p>
            <div className="flex justify-center md:justify-start">
              <Button size="lg">Mulai Sekarang</Button>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="flex justify-center">
            <Image
              src="https://picsum.photos/500/300"
              alt="Ilustrasi TNI dan POLRI"
              width={500}
              height={300}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      <main className="flex-grow grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Feature Cards */}
        <Card>
          <CardHeader>
            <CardTitle>Paket Tryout Komprehensif</CardTitle>
            <CardDescription>
              Simulasi lengkap untuk ujian masuk TNI dan POLRI.
            </CardDescription>
          </CardHeader>
          <CardContent>
            Jelajahi katalog kami untuk menemukan paket yang sesuai dengan
            kebutuhanmu.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Analisis Performa dengan AI</CardTitle>
            <CardDescription>
              Feedback personal untuk membantumu fokus pada kelemahan.
            </CardDescription>
          </CardHeader>
          <CardContent>
            AI kami beradaptasi dengan performamu, memberikan panduan yang
            tepat sasaran.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Lacak Kemajuanmu</CardTitle>
            <CardDescription>
              Pantau skor dan peningkatanmu dari waktu ke waktu.
            </CardDescription>
          </CardHeader>
          <CardContent>
            Tetap termotivasi dengan tampilan yang jelas tentang kemajuanmu.
          </CardContent>
        </Card>
      </main>

      <footer className="py-4 text-center text-muted-foreground">
        {isClient ? (
          <>
            &copy; {new Date().getFullYear()} Aparatur Coach. Hak cipta
            dilindungi.
          </>
        ) : (
          <>Memuat...</>
        )}
      </footer>
    </div>
  );
}
