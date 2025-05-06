import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Informasi Seleksi TNI & POLRI Terbaru | Spirit Education',
  description: 'Dapatkan informasi lengkap mengenai tahapan seleksi, materi ujian, tips sukses, dan jadwal pendaftaran terbaru untuk seleksi TNI dan POLRI 2024/2025. Persiapkan dirimu bersama Spirit Education.',
  keywords: [
    'informasi seleksi TNI',
    'informasi seleksi POLRI',
    'tahapan tes TNI',
    'tahapan tes POLRI',
    'materi ujian TNI POLRI',
    'tips lolos TNI POLRI',
    'jadwal pendaftaran TNI 2024',
    'jadwal pendaftaran POLRI 2024',
    'tes kepolisian 2024',
    'tes TNI 2024',
    'persyaratan masuk TNI',
    'persyaratan masuk POLRI',
    'Spirit Education',
  ],
  openGraph: {
    title: 'Informasi Lengkap Persiapan Seleksi TNI & POLRI | Spirit Education',
    description: 'Semua yang perlu Anda ketahui tentang tahapan seleksi, materi ujian, tips, dan jadwal terbaru TNI & POLRI. Disajikan oleh Spirit Education.',
    url: 'https://spiriteducation.id/informasi',
    images: [
       {
         url: 'https://spiriteducation.id/og-informasi.png', // Use a specific OG image for this page
         width: 1200,
         height: 630,
         alt: 'Informasi Lengkap Seleksi TNI POLRI',
       },
    ],
  },
   twitter: {
    card: 'summary_large_image',
    title: 'Informasi Penting Seleksi TNI & POLRI - Spirit Education',
    description: 'Panduan lengkap tahapan seleksi, materi ujian, dan tips sukses masuk TNI & POLRI 2024/2025.',
    images: ['https://spiriteducation.id/og-informasi.png'], // Use a specific Twitter image for this page
  },
};


export default function InformasiPage() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <article className="prose prose-lg max-w-none dark:prose-invert">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
          Informasi Lengkap Seputar Seleksi Masuk TNI & POLRI
        </h1>

        <p className="text-lg mb-4">
          Selamat datang di pusat informasi Spirit Education! Di sini, Anda akan
          menemukan berbagai informasi penting dan terkini mengenai proses
          seleksi masuk Tentara Nasional Indonesia (TNI) dan Kepolisian Negara
          Republik Indonesia (POLRI). Mempersiapkan diri dengan baik adalah kunci
          sukses meraih cita-cita menjadi abdi negara.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Tahapan Seleksi TNI & POLRI</h2>
        <p>
          Proses seleksi masuk TNI dan POLRI umumnya meliputi beberapa tahapan
          ketat untuk menyaring calon-calon terbaik. Meskipun detailnya dapat
          berubah setiap tahun, tahapan umum biasanya mencakup:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>
            <strong>Pendaftaran Online:</strong> Proses awal pendaftaran melalui
            website resmi rekrutmen TNI atau POLRI.
          </li>
          <li>
            <strong>Seleksi Administrasi:</strong> Verifikasi kelengkapan dan
            keabsahan dokumen persyaratan.
          </li>
          <li>
            <strong>Pemeriksaan Kesehatan (Rikkes):</strong> Meliputi pemeriksaan
            kesehatan fisik secara menyeluruh (tahap I dan II).
          </li>
          <li>
            <strong>Tes Kesamaptaan Jasmani:</strong> Mengukur kemampuan fisik
            calon melalui serangkaian tes seperti lari, push-up, sit-up, pull-up
            (atau chinning untuk wanita), dan shuttle run.
          </li>
          <li>
            <strong>Tes Psikologi:</strong> Menilai aspek kepribadian, kecerdasan,
            dan kestabilan emosi calon.
          </li>
          <li>
            <strong>Tes Akademik:</strong> Menguji pengetahuan umum, wawasan
            kebangsaan, Bahasa Indonesia, Matematika, dan Bahasa Inggris. Ini
            seringkali menggunakan sistem Computer Assisted Test (CAT).
          </li>
          <li>
            <strong>Pemeriksaan Mental Ideologi (PMI):</strong> Menilai pemahaman
            dan kesetiaan terhadap Pancasila dan UUD 1945.
          </li>
          <li>
            <strong>Sidang Pantukhir (Panitia Penentuan Akhir):</strong> Tahap
            akhir penentuan kelulusan berdasarkan akumulasi nilai dari seluruh
            tahapan seleksi.
          </li>
        </ul>
        <p>
          Penting untuk selalu memantau informasi resmi dari website rekrutmen
          TNI dan POLRI untuk detail tahapan dan persyaratan terbaru.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Materi Ujian yang Umum Diujikan</h2>
        <p>
          Materi yang diujikan dalam seleksi, khususnya tes akademik dan
          psikologi, dapat bervariasi. Namun, beberapa materi umum yang sering
          muncul adalah:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>
            <strong>Tes Potensi Akademik (TPA):</strong> Kemampuan verbal
            (sinonim, antonim, analogi), numerik (deret angka, aritmatika), dan
            logika (penalaran logis, analitis).
          </li>
          <li>
            <strong>Wawasan Kebangsaan (TWK):</strong> Pengetahuan mengenai
            Pancasila, UUD 1945, Bhinneka Tunggal Ika, dan Negara Kesatuan
            Republik Indonesia (NKRI).
          </li>
          <li>
            <strong>Bahasa Indonesia:</strong> Pemahaman tata bahasa, ejaan,
            kosakata, dan kemampuan membaca serta memahami teks.
          </li>
          <li>
            <strong>Bahasa Inggris:</strong> Kemampuan dasar tata bahasa,
            kosakata, dan pemahaman bacaan.
          </li>
          <li>
            <strong>Matematika Dasar:</strong> Konsep dasar aritmatika, aljabar,
            dan geometri.
          </li>
          <li>
            <strong>Pengetahuan Umum:</strong> Informasi terkini mengenai isu-isu
            nasional dan internasional.
          </li>
          <li>
            <strong>Tes Psikologi:</strong> Berbagai jenis tes untuk mengukur
            kepribadian, minat, bakat, dan kecerdasan emosional.
          </li>
        </ul>
        <p>
          Spirit Education menyediakan ribuan soal latihan yang mencakup
          materi-materi ini, dirancang untuk membiasakan Anda dengan format soal
          dan tingkat kesulitan yang akan dihadapi.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Tips Sukses Menghadapi Seleksi</h2>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>
            <strong>Persiapan Fisik:</strong> Latih kemampuan fisik Anda secara
            rutin dan terukur sesuai standar tes kesamaptaan.
          </li>
          <li>
            <strong>Persiapan Akademik:</strong> Pelajari materi ujian secara
            mendalam. Manfaatkan platform tryout seperti Spirit Education untuk
            berlatih soal dan mengukur kemampuan.
          </li>
          <li>
            <strong>Latihan Psikotes:</strong> Biasakan diri dengan berbagai jenis
            soal psikotes untuk meningkatkan kecepatan dan ketepatan menjawab.
          </li>
          <li>
            <strong>Jaga Kesehatan:</strong> Pastikan kondisi fisik dan mental Anda
            prima saat mengikuti seleksi. Istirahat yang cukup dan konsumsi
            makanan bergizi.
          </li>
          <li>
            <strong>Pahami Prosedur:</strong> Pelajari alur pendaftaran dan
            tahapan seleksi dengan baik agar tidak ada informasi yang terlewat.
          </li>
          <li>
            <strong>Mental yang Kuat:</strong> Persiapkan mental untuk menghadapi
            persaingan yang ketat dan proses seleksi yang panjang.
          </li>
          <li>
            <strong>Manfaatkan Analisis AI:</strong> Gunakan fitur analisis AI
            dari Spirit Education untuk mengidentifikasi kelemahan dan mendapatkan
            rekomendasi belajar yang personal.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Jadwal Pendaftaran dan Informasi Terbaru</h2>
        <p>
          Jadwal pendaftaran TNI dan POLRI biasanya diumumkan melalui website
          resmi masing-masing institusi. Pastikan Anda selalu memantau
          pengumuman resmi untuk mendapatkan informasi jadwal tes kepolisian 2024,
          jadwal tes TNI 2024, dan persyaratan pendaftaran terbaru.
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>
            <strong>Website Rekrutmen TNI:</strong>{' '}
            <a href="https://rekrutmen-tni.mil.id" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              rekrutmen-tni.mil.id
            </a>
          </li>
          <li>
            <strong>Website Penerimaan POLRI:</strong>{' '}
            <a href="https://penerimaan.polri.go.id" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              penerimaan.polri.go.id
            </a>
          </li>
        </ul>

        <div className="mt-10 text-center">
          <p className="text-xl font-semibold mb-4">
            Siap Menguji Kemampuanmu?
          </p>
          <p className="mb-6">
            Jangan tunda persiapanmu! Coba berbagai paket tryout kami dan
            dapatkan analisis mendalam untuk meningkatkan peluang lolos seleksi
            TNI & POLRI.
          </p>
          <Link href="/tryout">
            <Button size="lg">Lihat Paket Tryout</Button>
          </Link>
        </div>
      </article>
    </div>
  );
}
