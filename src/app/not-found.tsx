import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center flex-col gap-6">
      <h1 className="text-8xl font-bold text-red-600">404</h1>
      <h2 className="text-2xl font-semibold">Page Not Found</h2>
      <p className="text-gray-400 text-center max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-4 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
      >
        ← Back to Home
      </Link>
    </div>
  );
}
