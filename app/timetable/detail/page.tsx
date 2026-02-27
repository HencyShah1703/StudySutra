"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const params = useSearchParams();

  const subject = params.get("subject");
  const topic = params.get("topic");
  const time = params.get("time");

  const [done, setDone] = useState(false);

  return (
    <div className="min-h-screen bg-[#0B1120] text-white p-6">

      <h1 className="text-2xl font-bold mb-2">{subject}</h1>
      <p className="text-gray-400 mb-2">{topic}</p>
      <p className="text-sm text-gray-500 mb-6">{time}</p>

      <button
        onClick={() => setDone(true)}
        className="bg-green-600 px-4 py-2 rounded mb-6"
      >
        {done ? "Completed ✅" : "Mark as Completed"}
      </button>

      <h2 className="text-lg mb-4">AI Assistance</h2>

      <div className="grid grid-cols-2 gap-4">
        <button className="bg-blue-600/20 p-4 rounded border border-blue-500">Flashcards</button>
        <button className="bg-purple-600/20 p-4 rounded border border-purple-500">AI Avatar</button>
        <button className="bg-green-600/20 p-4 rounded border border-green-500">Chatbot</button>
        <button className="bg-yellow-600/20 p-4 rounded border border-yellow-500">Quiz</button>
      </div>

    </div>
  );
}