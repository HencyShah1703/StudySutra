"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
export default function Home() 

{ 
  const { data: session } = useSession()
  const router = useRouter()
  return (
    <main className="bg-gradient-to-b from-[#0B1220] to-[#0E1A2B] text-white min-h-screen">
      
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-5 border-b border-white/10">
  
  {/* Left Logo */}
  <div className="text-xl font-bold">
    StudySutra
  </div>

  

  {/* Right Login / Profile */}
  <div className="flex items-center gap-4">
    {!session ? (
      <button
  onClick={() => router.push("/login")}
  className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-500 transition"
>
  Login
</button>
    ) : (
      <>
        <span className="text-gray-300 text-sm">
          {session.user?.name}
        </span>
        <button
          onClick={() => signOut()}
          className="bg-red-600 px-4 py-2 rounded-lg hover:bg-red-500 transition"
        >
          Logout
        </button>
      </>
    )}
  </div>

</nav>

      {/* Hero Section */}
      <section className="text-center px-6 py-20">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Smart Timetable & <br />
          <span className="text-blue-500">
            AI Study Planner
          </span>
        </h1>

        <p className="text-gray-400 mt-6 text-lg">
          Your AI-powered path to academic excellence.
        </p>

        <div className="flex justify-center gap-4 mt-8">
          <button className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-500 transition">
            Get Started →
          </button>
          <button className="border border-gray-500 px-6 py-3 rounded-lg hover:bg-white/10 transition">
            View Demo
          </button>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="px-6 pb-20 max-w-6xl mx-auto">
        <div className="text-center mb-12">
  <h2 className="text-3xl md:text-4xl font-bold">
    Engineered for Success
  </h2>

  <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
    Our holistic IDEA approach transforms how you consume information
    and master your curriculum.
  </p>
</div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
  {
    title: "Smart Timetable",
    desc: "Automated scheduling that adapts to your daily energy levels."
  },
  {
    title: "AI Study Planner",
    desc: "Personalized learning paths based on your syllabus."
  },
  {
    title: "PYQ Analyzer",
    desc: "Analyze previous year questions to predict exam trends."
  },
  {
    title: "AI Code Review",
    desc: "Instant feedback and optimization suggestions for students."
  },
  {
    title: "Community Platform",
    desc: "Connect, share resources, and collaborate with peers in a supportive learning environment."
  },
  {
    title: "Study Chatbot",
    desc: "Instant answers to your questions and detailed explanations on any topic."
  },
  {
    title: "Progress Tracking Dashboard",
    desc: "Real-time insights into completed and pending tasks, total study hours, productivity trends, and performance."
  },
  {
    title: "Priority Alerts",
    desc: "Receive smart, timely notifications for upcoming study sessions, exams, and critical tasks."
  }
].map((feature, i) => (
            <div
              key={i}
              className="bg-[#111C2E] p-6 rounded-xl border border-white/10 hover:border-blue-500 transition"
            >
              <h3 className="text-lg font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
            {/* Stats Section */}
      <section className="grid md:grid-cols-3 gap-6 px-6 pb-20 max-w-5xl mx-auto text-center">
        <div className="bg-[#111C2E] p-6 rounded-xl border border-white/10">
          <p className="text-gray-400">Active Students</p>
          <h3 className="text-3xl font-bold text-blue-500 mt-2">
            50,000+
          </h3>
        </div>

        <div className="bg-[#111C2E] p-6 rounded-xl border border-white/10">
          <p className="text-gray-400">Study Hours Optimized</p>
          <h3 className="text-3xl font-bold text-blue-500 mt-2">
            1.2M+
          </h3>
        </div>

        <div className="bg-[#111C2E] p-6 rounded-xl border border-white/10">
          <p className="text-gray-400">AI Insights Generated</p>
          <h3 className="text-3xl font-bold text-blue-500 mt-2">
            5M+
          </h3>
        </div>
      </section>
      {/* CTA Section */}
<section className="px-6 pb-24">
  <div className="max-w-6xl mx-auto bg-blue-700 rounded-3xl p-16 text-center">
    <h2 className="text-3xl md:text-4xl font-bold">
      Ready to transform your study habits?
    </h2>

    <p className="mt-4 text-blue-100">
      Join thousands of students achieving excellence with AI-powered
      schedule management and insights.
    </p>

    <div className="flex justify-center gap-4 mt-8">
      <button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
        Get Started Now
      </button>

      <button className="border border-white px-6 py-3 rounded-lg hover:bg-white/10">
        Talk to an Expert
      </button>
    </div>
  </div>
</section>
{/* Footer */}
<footer className="border-t border-white/10 py-6 text-center text-gray-400 text-sm">
  © 2026 StudySutra. All rights reserved.
</footer>
    </main>
  );
}