'use client';

import {Button} from '@/components/ui/button';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {Input} from '@/components/ui/input';
import {useEffect, useState} from 'react';
import Image from 'next/image';

const imageUrl = 'https://upload.wikimedia.org/wikipedia/id/d/dd/Logo_Akademi_Kepolisian.png';

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero Section */}
      <section
        className="bg-primary text-primary-foreground py-12 w-full"
      >
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column: Text Content */}
          <div className="text-center md:text-left p-4">
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
              src={imageUrl}
              alt="Ilustrasi TNI dan POLRI"
              width={500}
              height={300}
              style={{width: '100%', height: 'auto', objectFit: 'cover'}}
              className="shadow-md"
            />
          </div>
        </div>
      </section>

      <main className="flex-grow grid gap-4 md:grid-cols-2 lg:grid-cols-3 p-4">
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
      <div className="text-xs p-4">
        <p>Persiapkan diri Anda menghadapi tes kepolisian dengan tryout online terlengkap dan terpercaya! Latihan soal tes kepolisian, ketahui tahapan tes kepolisian, dan dapatkan informasi terbaru seputar tes kepolisian 2024 dan tes kepolisian 2025. Tersedia ribuan soal dengan tingkat kesulitan Easy dan update soal tes kepolisian terbaru. Daftar sekarang dan wujudkan cita-citamu!</p>
        <br />
        <p>Selamat datang di platform tryout tes kepolisian online terbaik! Kami hadir untuk membantu Anda mempersiapkan diri secara maksimal dalam menghadapi seleksi penerimaan anggota Polri. Impian untuk menjadi bagian dari kepolisian Republik Indonesia kini semakin dekat dengan latihan tryout yang komprehensif dan terstruktur dari kami.</p>
        <br />
        <p>Mengapa Memilih Tryout Tes Kepolisian Kami?</p>
        <p>Kami memahami betapa pentingnya persiapan yang matang untuk menghadapi setiap tahapan seleksi. Oleh karena itu, kami menyediakan berbagai fitur unggulan yang akan menjadi bekal berharga Anda:</p>
        <p>Ribuan Soal Tes Kepolisian Terupdate: Latihan dengan ribuan soal tes kepolisian yang selalu diperbarui sesuai dengan materi ujian terkini. Anda akan menemukan berbagai jenis soal yang akan menguji kemampuan akademik, psikologi, dan pengetahuan umum Anda.</p>
        <p>Tingkat Kesulitan yang Bervariasi: Mulai dari soal dengan tingkat kesulitan Easy hingga soal yang lebih menantang, semuanya tersedia untuk mengukur kemampuan Anda secara bertahap.</p>
        <p>Simulasi Ujian Realistis: Rasakan atmosfer ujian sesungguhnya dengan simulasi tryout yang dirancang menyerupai tahapan tes kepolisian yang sebenarnya. Ini akan membantu Anda mengelola waktu dan mengurangi rasa gugup saat menghadapi ujian nanti.</p>
        <p>Akses Mudah Kapan Saja, Di Mana Saja: Dengan platform online kami, Anda dapat belajar dan berlatih kapan saja dan di mana saja selama 7 days seminggu. Fleksibilitas ini memungkinkan Anda untuk menyesuaikan jadwal belajar dengan kesibukan Anda.</p>
        <p>Informasi Terkini Seputar Tes Kepolisian: Dapatkan informasi terbaru mengenai tes kepolisian 2024 dan persiapan untuk tes kepolisian 2025. Kami akan terus mengupdate informasi penting seperti jadwal tes kepolisian 2024 (jika sudah ada pengumuman resmi).</p>
        <p>Materi Lengkap untuk Berbagai Jenis Tes: Kami menyediakan latihan soal untuk berbagai jenis tes yang mungkin Anda hadapi, termasuk informasi mengenai tes kepolisian apa saja yang akan diujikan.</p>
        <p>Fokus pada Persiapan Tes Kepolisian Wanita: Kami juga memberikan perhatian khusus pada kebutuhan calon anggota tes kepolisian wanita dengan menyediakan materi dan simulasi yang relevan.</p>
        <p>Pemahaman Mendalam tentang Urutan Tes Kepolisian: Dengan berlatih bersama kami, Anda akan memahami urutan tes kepolisian secara keseluruhan, mulai dari seleksi administrasi hingga tes akhir.</p>
        <p>Persiapan Optimal untuk Masa Depan Gemilang</p>
        <p>Jangan lewatkan kesempatan emas ini untuk mempersiapkan diri Anda secara optimal. Dengan tryout tes kepolisian online kami, Anda akan lebih percaya diri dan siap menghadapi setiap tantangan dalam seleksi penerimaan Polri.</p>
        <p>Mulai Latihan Sekarang dan Wujudkan Impian Anda!</p>
      </div>
      <footer className="py-4 text-center text-muted-foreground p-4 bg-secondary">
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

