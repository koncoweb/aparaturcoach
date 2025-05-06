'use client';

import {useState} from 'react';
import {Sheet, SheetContent, SheetTrigger} from '@/components/ui/sheet';
import {Button} from '@/components/ui/button';
import {Menu} from 'lucide-react';
import Link from 'next/link';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-background z-50 shadow-md">
      <div className="container mx-auto py-4 px-6 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">
          Spirit Education
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/tryout" className="hover:text-primary">
            Tryout
          </Link>
          <Link href="/informasi" className="hover:text-primary">
            Informasi
          </Link>
          <Link href="/tentang" className="hover:text-primary">
            Tentang Kami
          </Link>
          <Link href="/kontak" className="hover:text-primary">
            Kontak
          </Link>
          <Button variant="outline">Masuk / Daftar</Button>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" className="md:hidden">
              <Menu className="h-5 w-5"/>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:w-64">
            <div className="flex flex-col space-y-4 p-6">
              <Link href="/" className="text-lg font-bold text-primary">
                Spirit Education
              </Link>
              <Link href="/tryout" className="hover:text-primary">
                Tryout
              </Link>
              <Link href="/informasi" className="hover:text-primary">
                Informasi
              </Link>
              <Link href="/tentang" className="hover:text-primary">
                Tentang Kami
              </Link>
              <Link href="/kontak" className="hover:text-primary">
                Kontak
              </Link>
              <Button variant="outline">Masuk / Daftar</Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
