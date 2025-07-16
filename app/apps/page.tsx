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
  return (
    <div className="min-h-screen bg-[#eac4ca] text-black pt-28 px-4 text-center">
      <h1 className="text-3xl font-bold mb-2">coded with caffeine</h1>
      <p className="text-sm text-gray-700">魔法みたいな小部屋にようこそ。</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12 max-w-6xl mx-auto">
        {apps.map((app) => {
          const [expanded, setExpanded] = React.useState(false);
          return (
            <div
              key={app.name}
              className={`cursor-pointer backdrop-blur-xl bg-white/30 border border-white/50 rounded-2xl p-6 shadow-md text-left transition-all duration-500 ease-in-out hover:shadow-xl ${
                expanded ? "max-h-[600px]" : "max-h-[300px] overflow-hidden"
              } flex flex-col items-center`}
              onClick={() => setExpanded(!expanded)}
            >
              <Image
                src={app.image}
                alt={app.name}
                width={80}
                height={80}
                className="rounded-xl mb-4"
              />
              <h2 className="text-lg font-semibold text-center">{app.name}</h2>
              <p className="text-sm text-gray-700 italic text-center">
                {app.description.slice(0, 15)}...
              </p>

              {expanded && (
                <div className="mt-4">
                  <p className="text-sm text-gray-800 mb-2">{app.description}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {app.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-black text-white px-2 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <pre className="text-xs bg-gray-100 text-gray-700 p-2 rounded font-mono whitespace-pre-wrap mb-3">
                    {app.miniCode}
                  </pre>
                  <a
                    href={app.testflight}
                    target="_blank"
                    className="inline-block text-xs px-3 py-1 bg-black text-white rounded-full hover:bg-gray-800 transition"
                  >
                    Test on TestFlight
                  </a>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}