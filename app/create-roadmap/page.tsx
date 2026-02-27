"use client";

import { useState } from "react";

export default function Page() {
  const [subjectsCount, setSubjectsCount] = useState<number | null>(null);
  const [subjects, setSubjects] = useState<string[]>([]);
  const [showModal, setShowModal] = useState("");

  return (
    <div className="min-h-screen bg-[#0B1120] text-white p-6">

      <h1 className="text-2xl mb-6">Create Roadmap</h1>

      <button
        onClick={() => setShowModal("subjects")}
        className="bg-blue-600/20 p-4 rounded mb-4 w-full"
      >
        Enter Subjects
      </button>

      <button
        onClick={() => setShowModal("days")}
        className="bg-green-600/20 p-4 rounded mb-4 w-full"
      >
        Days Available
      </button>

      <button
        onClick={() => setShowModal("hours")}
        className="bg-purple-600/20 p-4 rounded w-full"
      >
        Hours per Day
      </button>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
          <div className="bg-[#1a1f2e] p-6 rounded w-80">

            {showModal === "subjects" && (
              <>
                <h2>No. of Subjects</h2>
                <input
                  type="number"
                  className="w-full p-2 mt-2 text-black"
                  onChange={(e) => {
                    const count = parseInt(e.target.value);
                    setSubjectsCount(count);
                    setSubjects(new Array(count).fill(""));
                  }}
                />

                {subjects.map((_, i) => (
                  <input
                    key={i}
                    placeholder={`Subject ${i + 1}`}
                    className="w-full p-2 mt-2 text-black"
                    onChange={(e) => {
                      const newSubjects = [...subjects];
                      newSubjects[i] = e.target.value;
                      setSubjects(newSubjects);
                    }}
                  />
                ))}
              </>
            )}

            {showModal === "days" && (
              <>
                <h2>Enter Days</h2>
                <input className="w-full p-2 mt-2 text-black" />
              </>
            )}

            {showModal === "hours" && (
              <>
                <h2>Hours per Day</h2>
                <input className="w-full p-2 mt-2 text-black" />
              </>
            )}

            <button
              onClick={() => setShowModal("")}
              className="mt-4 bg-blue-600 w-full p-2 rounded"
            >
              Submit
            </button>

          </div>
        </div>
      )}

    </div>
  );
}