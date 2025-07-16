"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const [hovered, setHovered] = useState(false);

  return (
    <main className="relative min-h-screen bg-white text-black overflow-hidden font-sans">
      <header className="absolute top-6 left-1/2 transform -translate-x-1/2 flex gap-4 z-50">
        <Link href="/">
          <button className="px-4 py-2 bg-white text-black border border-black rounded-full shadow hover:bg-gray-100 text-sm font-semibold">home</button>
        </Link>
        <Link href="/apps">
          <button className="px-4 py-2 bg-white text-black border border-black rounded-full shadow hover:bg-gray-100 text-sm font-semibold">apps</button>
        </Link>
        <Link href="/designs">
          <button className="px-4 py-2 bg-white text-black border border-black rounded-full shadow hover:bg-gray-100 text-sm font-semibold">designs</button>
        </Link>
        <Link href="/photos">
          <button className="px-4 py-2 bg-white text-black border border-black rounded-full shadow hover:bg-gray-100 text-sm font-semibold">photos</button>
        </Link>
        <Link href="/profile">
          <button className="px-4 py-2 bg-white text-black border border-black rounded-full shadow hover:bg-gray-100 text-sm font-semibold">profile</button>
        </Link>
      </header>
      {/* 背景のモーションボール */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <motion.div
          className="absolute bg-pink-200 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 20, -20, 0],
            y: [0, -20, 20, 0]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          style={{ width: 300, height: 300, top: '20%', left: '10%' }}
        />
        <motion.div
          className="absolute bg-yellow-100 rounded-full"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -30, 30, 0],
            y: [0, 30, -30, 0]
          }}
          transition={{ duration: 15, repeat: Infinity }}
          style={{ width: 400, height: 400, bottom: '10%', right: '15%' }}
        />
      </motion.div>

      {/* タイトル */}
      <motion.h1
        className="text-5xl sm:text-7xl font-extrabold text-center pt-32 pb-12 tracking-tight leading-[1.1]"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        hypermemory.box
      </motion.h1>

      {/* サブテキスト */}
      <motion.p
        className="text-lg sm:text-xl text-center max-w-xl mx-auto px-4 font-mono text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        perfectly imperfect / not sorted yet
      </motion.p>

      {/* ボタン群 */}
      <div className="mt-20 flex justify-center gap-6 flex-wrap">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/works">
            <button className="px-6 py-3 bg-black text-white rounded-full shadow-lg hover:bg-gray-900 font-bold">
              Explore Works
            </button>
          </Link>
        </motion.div>

        <motion.div
          whileHover={{ rotate: 5 }}
          whileTap={{ rotate: -5 }}
        >
          <Link href="/about">
            <button className="px-6 py-3 bg-white border border-black rounded-full hover:bg-gray-100 font-semibold">
              About Me
            </button>
          </Link>
        </motion.div>
      </div>

      {/* ページ下部にランダムなエフェクト */}
      <motion.div
        className="absolute bottom-4 right-4 text-xs text-gray-500 font-mono"
        animate={{ opacity: [1, 0.4, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        click, wander, repeat
      </motion.div>
    </main>
  );
}
