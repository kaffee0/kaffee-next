"use client";

import React, { useState } from "react";
import Image from "next/image";

const apps = [
  {
    name: "polmomo",
    description: "感情を記録して、後から振り返るアプリ。",
    tags: ["emotion", "calendar sync", "SwiftUI"],
    image: "/icons/polmomo.png",
    testflight: "https://testflight.apple.com/join/example",
    miniCode: `let mood = "🌸";\nreturn <Feeling color={mood} />;`,
  },
  {
    name: "kaffee",
    description: "詩的な日記を書ける美しいUIのメモアプリ。",
    tags: ["poetic", "markdown", "aesthetic"],
    image: "/icons/icon2.png",
    testflight: "https://testflight.apple.com/join/example",
    miniCode: `write("今日も綺麗だったね", with: .grace)`,
  },
  {
    name: "fragmenta",
    description: "展示を記録して管理できるギャラリーアプリ。",
    tags: ["art", "gallery", "map sync"],
    image: "/icons/icon3.png",
    testflight: "https://testflight.apple.com/join/example",
    miniCode: `<Exhibit title="KYOTOGRAPHIE" date="2025/04/18" />`,
  },
];

export default function AppsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#eac4ca] text-black pt-28 px-4 text-center">
      <h1 className="text-3xl font-bold mb-2">coded with caffeine</h1>
      <p className="text-sm text-gray-700">魔法みたいな小部屋にようこそ。</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12 max-w-6xl mx-auto">
        {apps.map((app, i) => (
          <div
            key={app.name}
            className="cursor-pointer flex flex-col items-center min-w-[200px]"
            onClick={() => setOpenIndex(i)}
          >
            <Image
              src={app.image}
              alt={app.name}
              width={200}
              height={200}
              className="rounded-xl mb-2 w-full h-[220px] object-contain animate-[float_4s_ease-in-out_infinite]"
            />
            <h2 className="text-lg font-semibold text-center mt-2">{app.name}</h2>
            <p className="text-sm text-gray-700 italic text-center mt-1">
              {app.description.slice(0, 15)}...
            </p>
          </div>
        ))}
      </div>

      {openIndex !== null && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setOpenIndex(null)}
        >
          <div
            className="bg-white rounded-xl p-6 w-[90vw] max-w-[1024px] h-[80vh] mx-4 relative flex flex-col md:flex-row gap-6 transition-all duration-500 ease-in-out scale-100 opacity-100"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-3 text-gray-500 hover:text-black text-xl"
              onClick={() => setOpenIndex(null)}
            >
              ×
            </button>

            {/* Left: Icon & Meta */}
            <div className="flex flex-col items-center md:items-start md:w-1/2">
              <Image
                src={apps[openIndex].image}
                alt={apps[openIndex].name}
                width={240}
                height={240}
                className="rounded-xl mb-4"
              />
              <h2 className="text-2xl font-bold mb-1">{apps[openIndex].name}</h2>
              <p className="text-sm text-gray-500 mb-2">公開日：2025年7月（仮）</p>
              <a
                href={apps[openIndex].testflight}
                target="_blank"
                className="inline-block text-sm px-4 py-1 bg-black text-white rounded-full hover:bg-gray-800 transition"
              >
                Test on TestFlight
              </a>
            </div>

            {/* Right: Description */}
            <div className="md:w-1/2">
              <p className="text-sm text-gray-800 mb-4">{apps[openIndex].description}</p>
              <pre className="text-xs bg-gray-100 text-gray-700 p-3 rounded font-mono whitespace-pre-wrap text-left">
                {apps[openIndex].miniCode}
              </pre>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}