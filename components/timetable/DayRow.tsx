"use client";

import Link from "next/link";
import { Task } from "../../lib/roadmapData";

export default function DayRow({ day, tasks }: { day: number; tasks: Task[] }) {
  return (
    <div className="bg-[#111827] border border-gray-700 p-4 rounded-xl mb-4">

      <h2 className="text-lg font-bold mb-3 text-blue-400">
        Day {day}
      </h2>

      <div className="flex gap-3 flex-wrap">
        {tasks.map((task, index) => (
          <Link
            key={index}
            href={`/timetable/detail?subject=${task.subject}&topic=${task.topic}&time=${task.time}`}
          >
            <div className="bg-blue-600/20 hover:bg-blue-600/40 px-4 py-2 rounded-lg cursor-pointer border border-blue-500 text-sm">
              <p className="font-semibold">{task.subject}</p>
              <p>{task.topic}</p>
              <p className="text-xs text-gray-400">{task.time}</p>
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
}