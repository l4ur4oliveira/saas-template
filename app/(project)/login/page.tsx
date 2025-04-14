import { handleAuth } from "@/app/actions/handleSignIn";

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8">
      <h1 className="text-4xl font-bold">Login</h1>
      <form action={handleAuth}>
        <button className="border rounded-md p-4 cursor-pointer transition-colors hover:bg-green-300">
          Sign in with Google
        </button>
      </form>
    </div>
  );
}
