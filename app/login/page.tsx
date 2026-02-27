"use client"

import { signIn } from "next-auth/react"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B1220] to-[#0E1A2B] flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-xl">

        {/* Logo / Title */}
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-white">
            StudySutra
          </h1>
          <p className="text-gray-400 mt-2 text-sm">
            Log in to manage your AI-powered study planner.
          </p>
        </div>

        {/* Email (UI only for now) */}
        <div className="mb-4">
          <input
            type="email"
            placeholder="name@university.edu"
            className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none"
            disabled
          />
        </div>

        {/* Password (UI only for now) */}
        <div className="mb-6">
          <input
            type="password"
            placeholder="••••••••"
            className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none"
            disabled
          />
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 h-px bg-white/10" />
          <span className="text-gray-400 text-sm">OR CONTINUE WITH</span>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        {/* Google Button */}
        <button
          onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
          className="w-full flex items-center justify-center gap-3 bg-white text-black py-2 rounded-lg mb-4 hover:bg-gray-200 transition"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Sign in with Google
        </button>

        {/* GitHub Button */}
        <button
          onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
          className="w-full flex items-center justify-center gap-3 bg-[#1F2937] text-white py-2 rounded-lg hover:bg-[#374151] transition"
        >
          <img
            src="https://www.svgrepo.com/show/512317/github-142.svg"
            alt="GitHub"
            className="w-5 h-5 invert"
          />
          Sign in with GitHub
        </button>

      </div>
    </div>
  )
}