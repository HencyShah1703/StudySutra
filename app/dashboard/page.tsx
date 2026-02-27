import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { authOptions } from "../api/auth/[...nextauth]/route"

export default async function Dashboard() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B1220] to-[#0E1A2B] text-white p-10">
      <h1 className="text-3xl font-bold mb-4">
        Welcome, {session.user?.name}
      </h1>

      <p className="text-gray-400">
        This is your StudySutra dashboard.
      </p>
    </div>
  )
}