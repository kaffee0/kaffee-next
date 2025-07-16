'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header
      className="absolute top-6 left-1/2 transform -translate-x-1/2 flex gap-4 z-50"
    >
      <Link href="/">
        <button className="px-4 py-2 rounded-full bg-[#f5e4a7]/20 backdrop-blur-2xl border border-white/50 shadow-[0_4px_30px_rgba(0,0,0,0.1)] text-black font-semibold transition-all duration-200 ease-out hover:brightness-110 hover:shadow-xl active:translate-y-0.5 hover:scale-110 hover:bg-white/60 group-hover:-translate-x-1">
          home
        </button>
      </Link>
      <Link href="/apps" className="group">
        <button className="px-4 py-2 rounded-full bg-[#deb6c3]/20 backdrop-blur-2xl border border-white/50 shadow-[0_4px_30px_rgba(0,0,0,0.1)] text-black font-semibold transition-all duration-200 ease-out hover:brightness-110 hover:shadow-xl active:translate-y-0.5 hover:scale-110 hover:bg-white/60 group-hover:-translate-x-1">
          apps
        </button>
      </Link>
      <Link href="/designs" className="group">
        <button className="px-4 py-2 rounded-full bg-[#adc3d1]/20 backdrop-blur-2xl border border-white/50 shadow-[0_4px_30px_rgba(0,0,0,0.1)] text-black font-semibold transition-all duration-200 ease-out hover:brightness-110 hover:shadow-xl active:translate-y-0.5 hover:scale-110 hover:bg-white/60 group-hover:-translate-x-1">
          designs
        </button>
      </Link>
      <Link href="/photos" className="group">
        <button className="px-4 py-2 rounded-full bg-[#b6cdb2]/20 backdrop-blur-2xl border border-white/50 shadow-[0_4px_30px_rgba(0,0,0,0.1)] text-black font-semibold transition-all duration-200 ease-out hover:brightness-110 hover:shadow-xl active:translate-y-0.5 hover:scale-110 hover:bg-white/60 group-hover:-translate-x-1">
          photos
        </button>
      </Link>
      <Link href="/profile" className="group">
        <button className="px-4 py-2 rounded-full bg-[#baa6b5]/20 backdrop-blur-2xl border border-white/50 shadow-[0_4px_30px_rgba(0,0,0,0.1)] text-black font-semibold transition-all duration-200 ease-out hover:brightness-110 hover:shadow-xl active:translate-y-0.5 hover:scale-110 hover:bg-white/60 group-hover:-translate-x-1">
          profile
        </button>
      </Link>
    </header>
  );
}