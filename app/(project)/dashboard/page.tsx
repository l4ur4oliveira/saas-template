import { redirect } from "next/navigation";
import { handleAuth } from "@/app/actions/handleSignIn";
import { auth } from "@/app/lib/auth";

export default async function Dashboard() {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8">
      <h1 className="text-4xl font-bold">Dashboard</h1>
      <div className="flex items-center gap-4">
        <img
          className="rounded-full w-10 h-10"
          src={session?.user?.image ? session?.user?.image : undefined}
          alt="User image"
        />
        <span>{session?.user?.email}</span>
      </div>
      {session?.user?.email && (
        <form action={handleAuth}>
          <button className="border rounded-md p-4 cursor-pointer transition-colors hover:bg-green-300">
            Sign out
          </button>
        </form>
      )}
    </div>
  );
}
