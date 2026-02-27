import { roadmap } from "../../lib/roadmapData";
import DayRow from "../../components/timetable/DayRow";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#0B1120] text-white p-6">

      <h1 className="text-3xl font-bold mb-6">
        Smart Roadmap
      </h1>

      {roadmap.map((day) => (
        <DayRow key={day.day} day={day.day} tasks={day.tasks} />
      ))}

      <Link href="/create-roadmap">
        <div className="mt-6 w-full border-2 border-dashed border-blue-500 p-6 text-center rounded-xl hover:bg-blue-500/10 cursor-pointer text-lg">
          + Create New Roadmap
        </div>
      </Link>

    </div>
  );
}