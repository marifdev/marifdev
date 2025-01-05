import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Muhammet Arif Sarıkaya
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Full Stack Developer specializing in React, Next.js, and .NET technologies
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/about"
            className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            About Me
          </Link>
          <Link
            href="/contact"
            className="text-sm font-semibold leading-6"
          >
            Contact <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
